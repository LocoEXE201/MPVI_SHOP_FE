"use client";
import { useRouter } from "next/navigation";
import "./index.scss";
import { PATH_AUTH, PATH_SHOP } from "@/routes/paths";
import { CORE_INFORMATION } from "@/constants/CoreInformation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import { useAppSelector } from "@/store/store";
import { totalCartItemSelector } from "@/store/features/cartSlice";
import Loading from "@/components/Templates/Loading/Loading";
import useAppContext from "@/hooks/useAppContext";
import { useEffect } from "react";
import Image from "next/image";

const HeaderShopComponent = (props: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const router = useRouter();
  const { logout, isAuthenticated } = useAuth();
  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      if (
        (localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) &&
          !isActivePage(route)) ||
        (!localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) &&
          route != PATH_SHOP.root)
      ) {
        enableLoading();
      }
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    // window.location.href = route;
    router.push(route);
  };

  const totalItems: any = useAppSelector(totalCartItemSelector);

  const isActivePage = (route: string) => {
    if (typeof window === "undefined") {
      return false;
    }
    return (
      localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) &&
      localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) == route
    );
  };

  useEffect(() => {
    disableLoading();
  }, []);

  return (
    <>
      <Loading loading={isLoading} />
      <header className="bg-white pt-[0.5rem] mq450:w-full flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.3rem] text-black font-baloo-2">
        <div className="mq1350:hidden w-[78rem] flex flex-col items-start justify-start gap-[0rem] max-w-full">
          <div className="w-[83rem] py-[0.6rem] pb-[0.5rem] box-border flex flex-row items-center justify-between max-w-full text-[1.125rem] text-black border-b-[1px] border-solid border-whitesmoke-300 gap-[5rem]">
            <div className="w-[50rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full">
                <p
                  onClick={() => {
                    navigateToPage(PATH_SHOP.root);
                  }}
                  className="cursor-pointer links_hover font-baloo text-primary text-[1.25rem]"
                >
                  Love Connection
                </p>
                <div className="w-[28rem] flex flex-col items-start justify-start px-[0rem] pb-[0rem] text-black">
                  <div className="flex flex-row items-center justify-start gap-[3rem] max-w-full">
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.root);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${
                        typeof window !== "undefined" &&
                        (isActivePage(PATH_SHOP.root) ||
                        localStorage.getItem(
                          LOCALSTORAGE_CONSTANTS.CURRENT_PAGE
                        ) == null ||
                        localStorage.getItem(
                          LOCALSTORAGE_CONSTANTS.CURRENT_PAGE
                        ) == undefined
                          ? "active_current_link"
                          : "")
                      }`}
                    >
                      Trang Chủ
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.about);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_SHOP.about)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Giới Thiệu
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.products);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_SHOP.products)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Sản Phẩm
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.news);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_SHOP.news)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Tin Tức
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="min-w-[28rem] flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.137rem] text-black"
              style={{ transform: "translateY(3px)" }}
            >
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.137rem]">
                <div className="flex flex-row items-center justify-center gap-[0.375rem]">
                  <Image
                    height={50}
                    width={50}
                    className="h-[1.5rem] w-[1.5rem] relative"
                    alt=""
                    src="/Icons/mail_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[1px] font-medium whitespace-nowrap">
                    <a
                      className="links_hover self-stretch relative tracking-[1px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.MAIL_CONSTANT}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.137rem]">
                <div className="flex flex-row items-center justify-center">
                  <Image
                    height={50}
                    width={50}
                    className="h-[1.6rem] w-[1.6rem] relative"
                    alt=""
                    src="/Icons/phone_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[1px] font-medium whitespace-nowrap">
                    <a
                      className="links_hover self-stretch relative tracking-[1px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.PHONE_CONSTANT_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[83rem] py-[0.6rem] mt-[0.3rem] box-border flex flex-row items-center justify-between max-w-full text-[1.125rem] text-black gap-[5rem]">
            <div className="w-[50rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
                <Image
                  height={50}
                  width={50}
                  className="cursor-pointer h-[3.625rem] w-[7.625rem] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/Logo/Logo_light.png"
                  onClick={() => {
                    navigateToPage(PATH_SHOP.root);
                  }}
                />
                <div className="overflow-hidden w-[28rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full">
                  <div
                    style={{ borderRight: "0px" }}
                    className="overflow-hidden self-stretch rounded-8xs bg-white flex flex-row items-end justify-between py-[0rem] pr-[0.125rem] pl-[0.625rem] gap-[1.25rem] border-[1px] border-solid border-primary"
                  >
                    <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.75rem] box-border mq900:w-[0rem]">
                      <div className="w-full self-stretch h-[1.125rem] relative flex items-center shrink-0 whitespace-nowrap mq900:hidden">
                        <input
                          type="text"
                          placeholder="Nhập từ khóa tìm kiếm..."
                          style={{ outline: "none" }}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end">
                      <Image
                        height={50}
                        width={50}
                        className="cursor-pointer h-[2.813rem] w-[2.813rem] relative  min-h-[2.813rem] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/Icons/search_icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`min-w-[28rem] flex flex-row items-center ${!isAuthenticated ? "justify-end" : ""} ${isAuthenticated ? "justify-between" : ""} pt-[0rem] px-[0rem] pb-[0.137rem] text-black`}
            >
              {!isAuthenticated ? (
                <>
                  <div className="flex flex-row items-center justify-end">
                    <Image
                      height={50}
                      width={50}
                      className=" w-[1.656rem] h-[1.2rem] z-[1]"
                      alt=""
                      src="/Icons/account_icon.svg"
                      style={{ transform: "scale(1.1) translateY(-2px)" }}
                    />
                    <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                      <span
                        onClick={() => {
                          navigateToPage(PATH_AUTH.login);
                        }}
                        className={`links_hover ${
                          typeof window !== "undefined" &&
                          isActivePage(PATH_AUTH.login)
                            ? "active_current_link"
                            : ""
                        }`}
                      >
                        Đăng Nhập
                      </span>
                      <span
                        className={`px-1 ${
                          typeof window !== "undefined" &&
                          (isActivePage(PATH_AUTH.login) ||
                          isActivePage(PATH_AUTH.register)
                            ? "active_current_link"
                            : "")
                        }`}
                      >
                        {" "}
                        /{" "}
                      </span>
                      <span
                        onClick={() => {
                          navigateToPage(PATH_AUTH.register);
                        }}
                        className={`links_hover ${
                          typeof window !== "undefined" &&
                          isActivePage(PATH_AUTH.register)
                            ? "active_current_link"
                            : ""
                        }`}
                      >
                        Đăng Ký
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {isAuthenticated ? (
                <>
                  <div className="cursor-pointer flex flex-row items-center justify-end">
                    <Image
                      height={50}
                      width={50}
                      className=" w-[1.656rem] h-[1.2rem] z-[1]"
                      alt=""
                      src="/Icons/cart_icon.svg"
                      style={{ transform: "scale(1.3) translateY(1px)" }}
                    />
                    <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                      <span
                        onClick={() => {
                          navigateToPage(PATH_SHOP.cart);
                        }}
                        className={`links_hover ${
                          typeof window !== "undefined" &&
                          isActivePage(PATH_AUTH.login)
                            ? "active_current_link"
                            : ""
                        }`}
                      >
                        {`Giỏ Hàng (${totalItems})`}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-end">
                    <Image
                      height={50}
                      width={50}
                      className=" w-[1.656rem] h-[1.2rem] z-[1]"
                      alt=""
                      src="/Icons/heart_icon.svg"
                      style={{ transform: "scale(1.1) translateY(-1px)" }}
                    />
                    <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                      <span
                        onClick={() => {
                          navigateToPage(PATH_SHOP.order);
                        }}
                        className={`links_hover ${
                          typeof window !== "undefined" &&
                          isActivePage(PATH_AUTH.login)
                            ? "active_current_link"
                            : ""
                        }`}
                      >
                        Đơn Hàng
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-end">
                    <Image
                      height={50}
                      width={50}
                      className=" w-[1.656rem] h-[1.2rem] z-[1]"
                      alt=""
                      src="/Icons/account_icon.svg"
                      style={{ transform: "scale(1.1) translateY(-2px)" }}
                    />
                    <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                      <span
                        onClick={() => {
                          navigateToPage(PATH_SHOP.profile);
                        }}
                        className={`links_hover ${
                          typeof window !== "undefined" &&
                          isActivePage(PATH_AUTH.login)
                            ? "active_current_link"
                            : ""
                        }`}
                      >
                        Tài Khoản
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      Swal.fire({
                        title: "Bạn có chắc muốn đăng xuất?",
                        icon: "info",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Đăng xuất",
                        cancelButtonText: "Hủy bỏ",
                        focusCancel: true,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          logout();
                          navigateToPage(PATH_SHOP.root);
                          setTimeout(() => {
                            Swal.fire({
                              title: "Đăng xuất thành công",
                              icon: "success",
                              showConfirmButton: false,
                              timer: 1000,
                            });
                          }, 300);
                        }
                      });
                    }}
                    className="cursor-pointer flex flex-row items-center justify-end"
                  >
                    <Image
                      height={50}
                      width={50}
                      className=" w-[1.656rem] h-[1.2rem] z-[1]"
                      alt=""
                      src="/Icons/logout_icon.svg"
                      style={{ transform: "scale(1.3) translateY(-2px)" }}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="mq1350:flex mq1725:hidden flex flex-row mq900:flex-col mb-3 px-[2rem] mq450:mb-1 mq900:px-[0.5rem]">
          <Image
            height={50}
            width={50}
            className="mq900:hidden mq2000:hidden cursor-pointer h-[3.625rem] w-[7.625rem] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/Logo/Logo_light.png"
            onClick={() => {
              navigateToPage(PATH_SHOP.root);
            }}
          />

          <div className="hidden mq900:flex mx-[1rem] mq450:mx-0 self-stretch flex-row items-center justify-center max-w-full gap-[1.25rem]">
            <Image
              height={50}
              width={50}
              className="cursor-pointer h-[3.625rem] w-[7.625rem] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/Logo/Logo_light.png"
              onClick={() => {
                navigateToPage(PATH_SHOP.root);
              }}
            />
            <div
              className="mq450:hidden flex flex-col items-center justify-between pt-[0rem] px-[0rem] pb-[0.137rem] text-black"
              style={{ transform: "translateY(3px)" }}
            >
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.137rem]">
                <div className="flex flex-row items-center justify-center gap-[0.375rem]">
                  <Image
                    height={50}
                    width={50}
                    className="h-[1.5rem] w-[1.5rem] relative"
                    alt=""
                    src="/Icons/mail_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[1px] font-medium whitespace-nowrap">
                    <a
                      className="links_hover self-stretch relative tracking-[1px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.MAIL_CONSTANT}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.137rem]">
                <div className="flex flex-row items-center justify-center">
                  <Image
                    height={50}
                    width={50}
                    className="h-[1.6rem] w-[1.6rem] relative"
                    alt=""
                    src="/Icons/phone_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[1px] font-medium whitespace-nowrap">
                    <a
                      className="links_hover self-stretch relative tracking-[1px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.PHONE_CONSTANT_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-3 w-full flex flex-row items-center justify-center pb-[0rem] text-black">
            <div className="mq450:flex-wrap mq450:gap-0 px-[1rem] w-full flex flex-row items-center justify-center gap-[2rem] max-w-full">
              <div
                onClick={() => {
                  navigateToPage(PATH_SHOP.root);
                }}
                className={`links_hover mq450:w-[50%] mq450:text-center relative font-medium inline-block whitespace-nowrap ${
                  typeof window !== "undefined" &&
                  (isActivePage(PATH_SHOP.root) ||
                  localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) ==
                    null ||
                  localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) ==
                    undefined
                    ? "active_current_link"
                    : "")
                }`}
              >
                Trang Chủ
              </div>
              <div
                onClick={() => {
                  navigateToPage(PATH_SHOP.about);
                }}
                className={`links_hover mq450:w-[50%] mq450:text-center relative font-medium inline-block whitespace-nowrap ${
                  typeof window !== "undefined" && isActivePage(PATH_SHOP.about)
                    ? "active_current_link"
                    : ""
                }`}
              >
                Giới Thiệu
              </div>
              <div
                onClick={() => {
                  navigateToPage(PATH_SHOP.products);
                }}
                className={`links_hover mq450:w-[50%] mq450:text-center relative font-medium inline-block whitespace-nowrap ${
                  typeof window !== "undefined" &&
                  isActivePage(PATH_SHOP.products)
                    ? "active_current_link"
                    : ""
                }`}
              >
                Sản Phẩm
              </div>
              <div
                onClick={() => {
                  navigateToPage(PATH_SHOP.news);
                }}
                className={`links_hover mq450:w-[50%] mq450:text-center relative font-medium inline-block whitespace-nowrap ${
                  typeof window !== "undefined" && isActivePage(PATH_SHOP.news)
                    ? "active_current_link"
                    : ""
                }`}
              >
                Tin Tức
              </div>
            </div>
          </div>

          <div
            className={`px-[0.5rem] mq450:w-full mq450:px-10 mq450:flex-wrap mq450:mt-1 mt-3 ${isAuthenticated ? "min-w-[28rem]" : ""} flex flex-row items-center justify-end mq900:justify-between pt-[0rem] pb-[0.137rem] text-black`}
          >
            {!isAuthenticated ? (
              <>
                <div className="w-full flex flex-row items-center justify-center">
                  <Image
                    height={50}
                    width={50}
                    className=" w-[1.656rem] h-[1.2rem] z-[1]"
                    alt=""
                    src="/Icons/account_icon.svg"
                    style={{ transform: "scale(1.1) translateY(-2px)" }}
                  />
                  <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                    <span
                      onClick={() => {
                        navigateToPage(PATH_AUTH.login);
                      }}
                      className={`links_hover ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_AUTH.login)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Đăng Nhập
                    </span>
                    <span
                      className={`px-1 ${
                        typeof window !== "undefined" &&
                        (isActivePage(PATH_AUTH.login) ||
                        isActivePage(PATH_AUTH.register)
                          ? "active_current_link"
                          : "")
                      }`}
                    >
                      {" "}
                      /{" "}
                    </span>
                    <span
                      onClick={() => {
                        navigateToPage(PATH_AUTH.register);
                      }}
                      className={`links_hover ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_AUTH.register)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Đăng Ký
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {isAuthenticated ? (
              <>
                <div className="mq450:mr-0 mr-3 mq450:w-[50%] mq450:mb-3 flex flex-row items-center justify-end mq450:justify-center">
                  <Image
                    height={50}
                    width={50}
                    className=" w-[1.656rem] h-[1.2rem] z-[1]"
                    alt=""
                    src="/Icons/cart_icon.svg"
                    style={{ transform: "scale(1.3) translateY(1px)" }}
                  />
                  <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                    <span
                      onClick={() => {
                        navigateToPage(PATH_SHOP.cart);
                      }}
                      className={`links_hover ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_AUTH.login)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      {`Giỏ Hàng (${totalItems})`}
                    </span>
                  </div>
                </div>

                <div className="mq450:mx-0 mx-3 mq450:w-[50%] mq450:mb-3 flex flex-row items-center justify-end mq450:justify-center">
                  <Image
                    height={50}
                    width={50}
                    className=" w-[1.656rem] h-[1.2rem] z-[1]"
                    alt=""
                    src="/Icons/heart_icon.svg"
                    style={{ transform: "scale(1.1) translateY(-1px)" }}
                  />
                  <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                    <span
                      onClick={() => {
                        navigateToPage(PATH_SHOP.order);
                      }}
                      className={`links_hover ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_AUTH.login)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Đơn Hàng
                    </span>
                  </div>
                </div>

                <div className="mq450:mx-0 mx-3 mq450:w-[50%] mq450:mb-3 flex flex-row items-center justify-end mq450:justify-center">
                  <Image
                    height={50}
                    width={50}
                    className=" w-[1.656rem] h-[1.2rem] z-[1]"
                    alt=""
                    src="/Icons/account_icon.svg"
                    style={{ transform: "scale(1.1) translateY(-2px)" }}
                  />
                  <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                    <span
                      onClick={() => {
                        navigateToPage(PATH_SHOP.profile);
                      }}
                      className={`links_hover ${
                        typeof window !== "undefined" &&
                        isActivePage(PATH_AUTH.login)
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Tài Khoản
                    </span>
                  </div>
                </div>

                <div
                  className="mq450:ms-0 ms-2 cursor-pointer mq450:w-[50%] mq450:mb-3 flex flex-row items-center justify-end mq450:justify-center"
                  onClick={() => {
                    Swal.fire({
                      title: "Bạn có chắc muốn đăng xuất?",
                      icon: "info",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Đăng xuất",
                      cancelButtonText: "Hủy bỏ",
                      focusCancel: true,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        logout();
                        navigateToPage(PATH_SHOP.root);
                        setTimeout(() => {
                          Swal.fire({
                            title: "Đăng xuất thành công",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1000,
                          });
                        }, 300);
                      }
                    });
                  }}
                >
                  <Image
                    height={50}
                    width={50}
                    className=" w-[1.656rem] h-[1.2rem] z-[1]"
                    alt=""
                    src="/Icons/logout_icon.svg"
                    style={{ transform: "scale(1.3) translateY(-2px)" }}
                  />
                  <span
                    onClick={() => {
                      navigateToPage(PATH_SHOP.order);
                    }}
                    className={`mq450:block hidden links_hover tracking-[0.48px] leading-[1rem] font-medium ${
                      typeof window !== "undefined" &&
                      isActivePage(PATH_AUTH.login)
                        ? "active_current_link"
                        : ""
                    }`}
                  >
                    Đăng Xuất
                  </span>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderShopComponent;
