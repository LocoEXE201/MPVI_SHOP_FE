"use client";

import { Form, Input, theme } from "antd";
import { useFormik } from "formik";

import PageTitle from "@/components/Molecules/PageTitle";
import { useAuthGoogle } from "@/contexts/AuthGoogleContext";
import { useEffect } from "react";
import useAppContext from "@/hooks/useAppContext";
import useAuth from "@/hooks/useAuth";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/routes/paths";
import Loading from "@/components/Templates/Loading/Loading";
import Swal from "sweetalert2";

const LoginPageComponent = (props: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [form] = Form.useForm();
  const { login, loginWithEmail } = useAuth();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  const handleForgetPassword = () => {
    Swal.fire({
      title: `Đặt lại mật khẩu`,
      html: `Xin bạn vui lòng điền địa chỉ email của tài khoản bạn vào phần dưới đây.`,
      input: "email",
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
        if (result.value && result.value != "") {
          router.push(PATH_AUTH.loginForgotPassword(result.value));
        }
      }
    });
  };

  const { googleSignIn, user, logOut } = useAuthGoogle();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logOut();
  }, []);

  useEffect(() => {
    if (user?.email && localStorage.getItem("GOOGLE_AUTH_USING")) {
      enableLoading();
      loginWithEmail(user?.email);
    } else if (user?.email && !localStorage.getItem("GOOGLE_AUTH_USING")) {
      logOut();
    }
    localStorage.removeItem("GOOGLE_AUTH_USING");
  }, [user]);

  const router = useRouter();
  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Đăng Nhập" subTitle="Trang Chủ - Đăng Nhập" />
      <div className=" w-[117.563rem] mt-2 flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem]">
        <div className=" text-white flex flex-row items-end justify-between py-[0.5rem] box-border max-w-full">
          <div
            className="border-[1px] border-solid border-whitesmoke-300 rounded-md min-h-[5rem] min-w-[5rem] flex flex-row items-center justify-between max-w-full
          py-[1rem] px-[2.5rem]"
          >
            <div className="w-[35vw] flex max-w-full flex-1 flex-col items-end justify-start gap-[5px_0px]">
              <h1 className="text-[1.5rem] w-full text-center font-baloo text-primary">
                Đăng Nhập
              </h1>
              <div className="w-full" style={{ margin: "0 auto" }}>
                <Form
                  onFinish={formik.handleSubmit}
                  form={form}
                  size="large"
                  autoComplete="off"
                  className="w-full"
                >
                  <div className="row align-items-start justify-content-between">
                    <p className="text-lightslategray relative self-stretch pb-1 text-lg font-medium leading-[28px]">
                      <span className="text-black">
                        Email
                        <span className="text-red-500">*</span>
                      </span>
                    </p>
                    <Form.Item
                      className="col-sm-12 col-md-7 mx-0 px-0"
                      name="email"
                      label=""
                      rules={[
                        {
                          required: true,
                          message: "Email không được để trống",
                        },
                        {
                          type: "email",
                          message: "Email không đúng định dạng",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        id="input_email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Nhập email"
                      />
                    </Form.Item>
                  </div>

                  <div className="row align-items-start justify-content-between">
                    <p className="text-lightslategray relative self-stretch pb-1 text-lg font-medium leading-[28px]">
                      <span className="text-black">
                        Mật khẩu
                        <span className="text-red-500">*</span>
                      </span>
                    </p>
                    <Form.Item
                      className="col-sm-12 col-md-7 mx-0 px-0"
                      name="password"
                      label=""
                      rules={[
                        {
                          required: true,
                          message: "Mật khẩu không được để trống",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Nhập mật khẩu"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item className="text-center">
                    <div className="flex flex-row justify-between">
                      <p
                        className="text-yellow-600 cursor-pointer text-end links_hover"
                        style={{ fontWeight: "bolder" }}
                        onClick={() => {
                          handleForgetPassword();
                        }}
                      >
                        Quên mật khẩu?
                      </p>
                      <p
                        className="text-black text-end"
                        style={{ fontWeight: "bolder" }}
                      >
                        Bạn chưa có tài khoản?{" "}
                        <span
                          className="links_hover text-yellow-600 cursor-pointer"
                          onClick={() => {
                            navigateToPage(PATH_AUTH.register);
                          }}
                        >
                          Đăng ký ngay
                        </span>
                      </p>
                    </div>
                    <button
                      type="submit"
                      style={{ fontWeight: "bolder" }}
                      className="hover:bg-yellow-600 bg-primary text-white mt-2 box-border flex w-full max-w-full flex-1 cursor-pointer flex-row items-start justify-center overflow-hidden whitespace-nowrap rounded-md bg-primary-colour px-5 py-[10px] [border:none]"
                    >
                      <div className="font-baloo relative mt-0 flex w-full items-center justify-center text-center text-lg font-medium text-neutral-white">
                        Đăng Nhập
                      </div>
                    </button>
                  </Form.Item>
                </Form>
                <div className="text-silver-200 mq450:flex-wrap mq450:gap-[0px_17px] flex flex-row items-center justify-center gap-[0px_35px] self-stretch text-center text-xs">
                  <div className="box-border flex h-1.5 min-w-[112px] flex-1 flex-col items-start justify-start px-0 pb-1.5 pt-0">
                    <div className="border-black relative box-border h-px self-stretch border-t-[2px] border-solid" />
                  </div>
                  <div className="font-baloo text-black text-[1.3rem] mq450:w-full mq450:h-3 relative flex w-3 items-center justify-center">
                    Hoặc
                  </div>
                  <div className="box-border flex h-1.5 min-w-[112px] flex-1 flex-col items-start justify-start px-0 pb-1.5 pt-0">
                    <div className="border-black relative box-border h-px self-stretch border-t-[2px] border-solid" />
                  </div>
                </div>
                <div
                  onClick={() => {
                    localStorage.setItem("GOOGLE_AUTH_USING", "true");
                    handleGoogleSignIn();
                  }}
                  className="hover:bg-black hover:text-white text-black text-neutral-black mq450:gap-[0rem_2.313rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border box-border flex w-full max-w-full cursor-pointer flex-row items-center justify-center gap-[0rem_1rem] self-stretch rounded-md bg-neutral-white px-[2.688rem] py-[10px] mt-3 text-center shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
                >
                  <div className="cursor-pointer box-border flex flex-row items-center justify-center px-[0rem] pb-[0rem]">
                    <img
                      className="relative z-[1] h-[1.5rem] min-h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/Icons/google_icon.svg"
                    />
                    <div className="relative z-[1] w-full self-stretch pl-5 font-medium font-baloo">
                      Đăng Nhập Với Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPageComponent;
