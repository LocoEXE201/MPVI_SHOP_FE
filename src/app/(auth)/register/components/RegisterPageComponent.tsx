"use client";

import { Form, Input } from "antd";
import { useFormik } from "formik";

import PageTitle from "@/components/Molecules/PageTitle";
import { useAuthGoogle } from "@/contexts/AuthGoogleContext";
import { useEffect, useState } from "react";
import useAppContext from "@/hooks/useAppContext";
import useAuth from "@/hooks/useAuth";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/routes/paths";
import { AccountRoleString } from "@/enums/accountRole";
import Loading from "@/components/Templates/Loading/Loading";

const RegisterPageComponent = (props: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [form] = Form.useForm();
  const { register } = useAuth();
  const [emailRegisterGoogle, setEmailRegisterGoogle] = useState<string | null>(
    null
  );
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { email, name, phoneNumber, password } = values;
      await register(
        email,
        password,
        name,
        phoneNumber,
        AccountRoleString.CUSTOMER
      );
    },
  });

  const handleForgetPassword = () => {};

  const { googleSignIn, user, logOut } = useAuthGoogle();
  const handleGoogleSignUp = async () => {
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
      setEmailRegisterGoogle(user.email);
    } else if (user?.email && !localStorage.getItem("GOOGLE_AUTH_USING")) {
      logOut();
    }
    localStorage.removeItem("GOOGLE_AUTH_USING");
  }, [user]);

  useEffect(() => {
    if (emailRegisterGoogle && emailRegisterGoogle != "") {
    }
  }, [emailRegisterGoogle]);

  const router = useRouter();
  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Đăng Ký" subTitle="Trang Chủ - Đăng Ký" />
      <div className="mq900:w-screen mq900:px-[0.5rem]  mt-2 flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem]">
        <div className="mq900:w-full mq900:block text-white py-[0.5rem] box-border max-w-full">
          <div
            className="border-[1px] border-solid border-whitesmoke-300 rounded-md min-h-[5rem] min-w-[5rem] flex flex-row items-center justify-between max-w-full
          py-[1rem] px-[2.5rem]"
          >
            <div className="w-[35vw] flex max-w-full flex-1 flex-col items-end justify-start gap-[5px_0px]">
              <h1 className="text-[1.5rem] w-full text-center font-baloo text-black">
                Đăng Ký
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
                      <span>
                        Tên của bạn
                        <span className="text-red-500">*</span>
                      </span>
                    </p>
                    <Form.Item
                      className="col-sm-12 col-md-7 mx-0 px-0"
                      name="name"
                      label=""
                      rules={[
                        {
                          required: true,
                          message: "Tên của bạn không được để trống",
                        },
                        {
                          message: "Tên của bạn không đúng định dạng tên",
                          pattern:
                            /^(([\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}[\S^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,})|([\S^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,1}))$/,
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder="Nhập tên của bạn"
                      />
                    </Form.Item>
                  </div>

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
                      <span>
                        Số điện thoại
                        <span className="text-red-500">*</span>
                      </span>
                    </p>
                    <Form.Item
                      className="col-sm-12 col-md-7 mx-0 px-0"
                      name="phoneNumber"
                      label=""
                      rules={[
                        {
                          required: true,
                          message: "Số điện thoại không được để trống",
                        },
                        {
                          message: "Số điện thoại phải có từ 10-11 số",
                          pattern: /^([0-9]{10,11})$/,
                        },
                        {
                          message: "Số điện thoại không đúng định dạng",
                          pattern:
                            /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        style={{ width: "100%" }}
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        placeholder="Nhập số điện thoại"
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
                        {
                          min: 8,
                          message: "Mật khẩu phải có độ dài từ 8 đến 20 kí tự",
                        },
                        {
                          max: 20,
                          message: "Mật khẩu phải có độ dài từ 8 đến 20 kí tự",
                        },
                        {
                          pattern: /[A-Z]/,
                          message:
                            "Mật khẩu phải có ít nhất 1 kí tự chữ in hoa",
                        },
                        {
                          pattern: /\d/,
                          message: "Mật khẩu phải có ít nhất 1 kí tự số",
                        },
                        {
                          pattern: /[^a-zA-Z\d]/,
                          message:
                            "Mật khẩu phải có ít nhất 1 kí tự đặc biệt (!, @, #, $, %, ^, &, *,...)",
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

                  <div className="row align-items-start justify-content-between">
                    <p className="text-lightslategray relative self-stretch pb-1 text-lg font-medium leading-[28px]">
                      <span>
                        Xác nhận mật khẩu
                        <span className="text-red-500">*</span>
                      </span>
                    </p>
                    <Form.Item
                      className="col-sm-12 col-md-7 mx-0 px-0"
                      name="confirm_password"
                      label=""
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Mật khẩu xác nhận không được bỏ trống",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "Mật khẩu xác nhận không khớp với mật khẩu đã nhập"
                            );
                          },
                        }),
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        name="confirm_password"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item className="text-center">
                    <p
                      className="text-black cursor-pointer text-end"
                      style={{ fontWeight: "bolder" }}
                      onClick={() => {
                        handleForgetPassword();
                      }}
                    >
                      Bạn đã có tài khoản?{" "}
                      <span
                        className="links_hover text-yellow-600"
                        onClick={() => {
                          navigateToPage(PATH_AUTH.login);
                        }}
                      >
                        Đăng nhập ngay
                      </span>
                    </p>
                    <button
                      type="submit"
                      style={{ fontWeight: "bolder" }}
                      className="hover:bg-yellow-600 bg-black text-white mt-2 box-border flex w-full max-w-full flex-1 cursor-pointer flex-row items-start justify-center overflow-hidden whitespace-nowrap rounded-md bg-primary-colour px-5 py-[10px] [border:none]"
                    >
                      <div className="font-baloo relative mt-0 flex w-full items-center justify-center text-center text-lg font-medium text-neutral-white">
                        Đăng Ký
                      </div>
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPageComponent;
