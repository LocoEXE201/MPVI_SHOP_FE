import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import axiosInstances from "@/config/axios";
import { isValidToken, setSession } from "@/utils/jwt";
import { getUserInfo, setUserInfo } from "@/utils/utils";
import sweetAlert from "@/utils/sweetAlert";
// @types
import {
  ActionMap,
  AuthState,
  AuthUser,
  JWTContextType,
} from "@/types/authentication";
import { AccountRoleCode, checkRoleCode } from "@/enums/accountRole";
import { useRouter } from "next/navigation";
import useAppContext from "@/hooks/useAppContext";
import { PATH_AUTH } from "@/routes/paths";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import Swal from "sweetalert2";
import { ResponseDTO } from "@/types/responseDTO";
import authApi from "@/api/auth/authApi";

// ----------------------------------------------------------------------

enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
  ChangeUser = "CHANGE_USER",
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
  [Types.ChangeUser]: {
    user: AuthUser;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      setUserInfo(action.payload.user);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case "CHANGE_USER":
      setUserInfo(action.payload.user);
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const { enableLoading, disableLoading } = useAppContext();

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        const userRaw = getUserInfo();
        if (accessToken && isValidToken(accessToken) && userRaw) {
          setSession(accessToken);

          const user = JSON.parse(userRaw);

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          if (accessToken && !isValidToken(accessToken)) {
            logout();
            sweetAlert.alertInfo(
              "Phiên đăng nhập hết hạn",
              "Xin vui lòng đăng nhập lại",
              3000,
              25
            );
          }

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  const login = async (username: string, password: string) => {
    try {
      enableLoading();
      await axiosInstances.auth
        .post("/auth/login", {
          username,
          password,
        })
        .then((response) => {
          if (
            response.data.isSuccess &&
            response.data.result != null &&
            response.data.result.user != null
          ) {
            const { id, name, email, phoneNumber, role, address } =
              response.data.result.user;

            var userRole: string[] = [];
            userRole.push(checkRoleCode(role));

            const user = {
              id: id,
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              role: userRole,
              // address: address,
            };

            const accessToken = response.data.result.token;

            setSession(accessToken);
            setUserInfo(user);

            dispatch({
              type: Types.Login,
              payload: {
                user,
              },
            });
            navigateToPage("/");
            disableLoading();
          } else {
            disableLoading();
            sweetAlert.alertFailed(
              `Đăng nhập thất bại`,
              `Xin bạn vui lòng kiểm tra email hoặc mật khẩu và đăng nhập lại`,
              5000,
              30
            );
          }
        })
        .catch((error) => {
          console.log(error);
          disableLoading();
          sweetAlert.alertFailed(
            `Đăng nhập thất bại`,
            `Xin bạn vui lòng kiểm tra email hoặc mật khẩu và đăng nhập lại`,
            5000,
            30
          );
          navigateToPage(PATH_AUTH.login);
        })
        .finally(() => {
          if (getUserInfo()) {
            setTimeout(() => {
              sweetAlert.alertSuccess("Đăng nhập thành công", "", 1200, 22);
            }, 200);
          }
        });
    } catch (error) {
      console.log(error);
      disableLoading();
      sweetAlert.alertFailed(
        `Đăng nhập thất bại`,
        `Xin bạn vui lòng kiểm tra email hoặc mật khẩu và đăng nhập lại`,
        5000,
        30
      );
      navigateToPage(PATH_AUTH.login);
    }
  };

  const loginWithEmail = async (email: string) => {
    try {
      enableLoading();
      await axiosInstances.auth
        .post("/auth/LoginGoogle", email)
        .then((response) => {
          if (
            response.data.isSuccess &&
            response.data.result != null &&
            response.data.result.user != null
          ) {
            const { id, name, email, phoneNumber, role } =
              response.data.result.user;

            var userRole: string[] = [];
            userRole.push(checkRoleCode(role));

            const user = {
              id: id,
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              role: userRole,
            };

            const accessToken = response.data.result.token;

            setSession(accessToken);
            setUserInfo(user);

            dispatch({
              type: Types.Login,
              payload: {
                user,
              },
            });
            navigateToPage("/");
            disableLoading();
          } else {
            disableLoading();
            sweetAlert.alertFailed(
              `Đăng nhập thất bại`,
              `Email này hiện chưa được đăng ký`,
              2000,
              28
            );
          }
        })
        .catch((error) => {
          console.log(error);
          disableLoading();
          sweetAlert.alertFailed(
            `Đăng nhập thất bại`,
            `Email này hiện chưa được đăng ký`,
            2000,
            28
          );
        })
        .finally(() => {
          if (getUserInfo()) {
            setTimeout(() => {
              sweetAlert.alertSuccess("Đăng nhập thành công", "", 1200, 22);
            }, 200);
          }
        });
    } catch (error) {
      console.log(error);
      disableLoading();
      sweetAlert.alertFailed(
        `Đăng nhập thất bại`,
        `Xin bạn vui lòng kiểm tra email hoặc mật khẩu và đăng nhập lại`,
        5000,
        30
      );
      navigateToPage(PATH_AUTH.login);
    }
  };

  const handleEnterVerifyCode = (email: string, password: string) => {
    Swal.fire({
      title: `Xác thực email của bạn`,
      html: `Chúng tôi vừa gửi một mã xác nhận tới email: </br><strong>${email}.</strong>  </br>
    Bạn vui lòng kiểm tra email và nhập mã xác nhận vào bên dưới đây để kích hoạt tài khoản của bạn.`,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Hủy bỏ",
      focusConfirm: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (login) => {},
    }).then((result) => {
      if (result.isConfirmed) {
        enableLoading();
        authApi
          .confirmEmail(email, result.value)
          .then(async (response) => {
            var res: ResponseDTO = response.data;
            if (
              res.isSuccess &&
              res.message &&
              res.message != "" &&
              res.message.toLowerCase().includes("confirm successfully")
            ) {
              enableLoading();
              var fullname: string = "";
              await axiosInstances.auth
                .post("/auth/login", {
                  username: email,
                  password: password,
                })
                .then((response) => {
                  if (
                    response.data.isSuccess &&
                    response.data.result != null &&
                    response.data.result.user != null
                  ) {
                    const { id, name, email, phoneNumber, role, address } =
                      response.data.result.user;

                    var userRole: string[] = [];
                    userRole.push(checkRoleCode(role));

                    const user = {
                      id: id,
                      name: name,
                      email: email,
                      phoneNumber: phoneNumber,
                      role: userRole,
                      // address: address,
                    };

                    fullname = name;

                    const accessToken = response.data.result.token;

                    setSession(accessToken);
                    setUserInfo(user);

                    dispatch({
                      type: Types.Login,
                      payload: {
                        user,
                      },
                    });
                    navigateToPage("/");
                    disableLoading();
                  }
                })
                .catch((error) => {
                  console.log(error);
                  disableLoading();
                })
                .finally(() => {
                  if (getUserInfo()) {
                    setTimeout(() => {
                      Swal.fire({
                        title: `Welcome, ${fullname}`,
                        html: `Tài khoản của bạn đã được kích hoạt. </br> Xin chân thành cám ơn bạn đã đăng ký tài khoản. </br>
                    Chúc bạn có những trải nghiệm thật tốt với các sản phẩm của chúng tôi.`,
                        icon: "success",
                        showCancelButton: false,
                        showConfirmButton: true,
                        confirmButtonText: "Bấm vào đây để tiếp tục",
                        allowOutsideClick: false,
                        focusConfirm: false,
                        confirmButtonColor: "green",
                        showCloseButton: false,
                      });
                    }, 200);
                  }
                });
            }
            if (res.isSuccess && (!res.message || res.message == "")) {
              disableLoading();
              handleVerifyAgain(email, password);
            }
          })
          .catch((err) => {
            disableLoading();
            handleVerifyAgain(email, password);
          });
      } else if (result.isDenied === true || result.isDismissed === true) {
        handleCancelVerif(email, password);
      }
    });
  };

  const handleCancelVerif = (email: string, password: string) => {
    Swal.fire({
      title: `Bạn có chắc muốn dừng lại việc xác thực tài khoản?`,
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Không, tiếp tục",
      cancelButtonText: "Có, dừng lại",
      allowOutsideClick: false,
      focusConfirm: true,
      cancelButtonColor: "red",
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleEnterVerifyCode(email, password);
      }
    });
  };

  const handleVerifyAgain = (email: string, password: string) => {
    Swal.fire({
      title: `Mã xác nhận không đúng`,
      html: "Xin bạn vui lòng kiểm tra lại mã xác nhận trong email và nhập lại lần nữa.",
      icon: "info",
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "Nhập mã xác nhận lại",
      allowOutsideClick: false,
      focusConfirm: true,
      confirmButtonColor: "#3085d6",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed == true) {
        handleEnterVerifyCode(email, password);
      } else if (result.isDenied === true || result.isDismissed === true) {
        handleCancelVerif(email, password);
      }
    });
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    role: string
    // address: string
  ) => {
    enableLoading();

    await axiosInstances.auth
      .post("/auth/register", {
        email: email,
        password: password,
        name: name,
        phoneNumber: phoneNumber,
        role: role,
        // address,
      })
      .then((response) => {
        disableLoading();
        var res: ResponseDTO = response.data;
        if (res.isSuccess && res.result.succeeded) {
          handleEnterVerifyCode(email, password);
        }
        if (!res.isSuccess) {
          Swal.fire({
            title: `Đã xảy ra lỗi gì đó`,
            html: "Xin bạn vui lòng thử lại.",
            icon: "info",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "Xác nhận",
            allowOutsideClick: false,
            focusConfirm: true,
            confirmButtonColor: "#3085d6",
            showCloseButton: true,
          });
        }
        if (res.isSuccess && !res.result.succeeded) {
          Swal.fire({
            title: `Email này đã được sử dụng để đăng ký tài khoản`,
            icon: "info",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "Tôi đã rõ",
            allowOutsideClick: false,
            focusConfirm: true,
            confirmButtonColor: "#3085d6",
            showCloseButton: true,
          });
        }
      })
      .catch((err) => {
        disableLoading();
        Swal.fire({
          title: `Đã xảy ra lỗi gì đó`,
          html: "Xin bạn vui lòng thử lại.",
          icon: "info",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonText: "Xác nhận",
          allowOutsideClick: false,
          focusConfirm: true,
          confirmButtonColor: "#3085d6",
          showCloseButton: true,
        });
      });
  };

  const logout = async () => {
    setSession(null);
    setUserInfo({});
    localStorage.removeItem("USER_INFO");
    dispatch({ type: Types.Logout });
    navigateToPage("/");
  };

  const resetPassword = (email: string) => {};

  const updateProfile = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        loginWithEmail,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
