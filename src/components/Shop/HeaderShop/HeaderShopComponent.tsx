"use client";
import { useRouter } from "next/navigation";
import "./index.scss";
import { PATH_AUTH, PATH_SHOP } from "@/routes/paths";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { CORE_INFORMATION } from "@/constants/CoreInformation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";

const HeaderShopComponent = (props: {}) => {
  const router = useRouter();

  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  const isActivePage = (route: string) =>
    localStorage.getItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE) == route;

  return (
    <>
      <header className="bg-white pt-[0.5rem] w-[117.563rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-black font-baloo-2">
        <div className="w-[83rem] flex flex-col items-start justify-start gap-[0.05rem] max-w-full">
          <div className="w-[83rem] box-border flex flex-row items-center justify-between pt-[0.875rem] px-[0.375rem] pb-[0.625rem] max-w-full text-[1.125rem] text-gray-100 border-b-[1px] border-solid border-whitesmoke-300 mq450:gap-[2.063rem] mq900:gap-[4.063rem] mq1350:gap-[8.188rem]">
            <div className="w-[50rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full">
                <img
                  className="cursor-pointer h-[1.75rem] w-[1.813rem] relative rounded-8xs min-h-[1.75rem]"
                  loading="lazy"
                  alt=""
                  src="/Icons/divcrcategorytoggle.svg"
                />
                <div className="w-[33.063rem] flex flex-col items-start justify-start px-[0rem] pb-[0rem] text-black">
                  <div className="flex flex-row items-center justify-start gap-[3rem] max-w-full mq1350:hidden">
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.root);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${
                        isActivePage(PATH_SHOP.root) ||
                        localStorage.getItem(
                          LOCALSTORAGE_CONSTANTS.CURRENT_PAGE
                        ) == null ||
                        localStorage.getItem(
                          LOCALSTORAGE_CONSTANTS.CURRENT_PAGE
                        ) == undefined
                          ? "active_current_link"
                          : ""
                      }`}
                    >
                      Trang Chủ
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.about);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${isActivePage(PATH_SHOP.about) ? "active_current_link" : ""}`}
                    >
                      Giới Thiệu
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.products);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${isActivePage(PATH_SHOP.products) ? "active_current_link" : ""}`}
                    >
                      Sản Phẩm
                    </div>
                    <div
                      onClick={() => {
                        navigateToPage(PATH_SHOP.news);
                      }}
                      className={`links_hover relative font-medium inline-block whitespace-nowrap ${isActivePage(PATH_SHOP.news) ? "active_current_link" : ""}`}
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
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative"
                    alt=""
                    src="/Icons/mail_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[0.48px] font-medium whitespace-nowrap mq1350:hidden">
                    <a
                      className="links_hover self-stretch relative tracking-[0.48px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      href={`mailto:${CORE_INFORMATION.MAIL_CONSTANT}`}
                      target="_blank"
                    >
                      {CORE_INFORMATION.MAIL_CONSTANT}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.137rem]">
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="h-[1.6rem] w-[1.6rem] relative"
                    alt=""
                    src="/Icons/phone_icon.svg"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  <div className="relative tracking-[0.48px] font-medium whitespace-nowrap mq1350:hidden">
                    <a
                      className="links_hover self-stretch relative tracking-[0.48px] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      href={`tel:${CORE_INFORMATION.PHONE_CONSTANT}`}
                      target="_blank"
                    >
                      {CORE_INFORMATION.PHONE_CONSTANT_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[83rem] box-border flex flex-row items-center justify-between pt-[0.875rem] px-[0.375rem] pb-[0.625rem] max-w-full text-[1.125rem] text-gray-100 border-b-[1px] border-solid border-whitesmoke-300 mq450:gap-[2.063rem] mq900:gap-[4.063rem] mq1350:gap-[8.188rem]">
            <div className="w-[50rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
                <img
                  className="cursor-pointer h-[3.625rem] w-[7.625rem] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/Logo/Logo_light.png"
                  onClick={() => {
                    navigateToPage(PATH_SHOP.root);
                  }}
                />
                <div className="overflow-hidden w-[33.063rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full">
                  <div
                    style={{ borderRight: "0px" }}
                    className="overflow-hidden self-stretch rounded-8xs bg-white flex flex-row items-end justify-between py-[0rem] pr-[0.125rem] pl-[0.625rem] gap-[1.25rem] border-[1px] border-solid border-chocolate"
                  >
                    <div className="w-[12.375rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.75rem] box-border mq900:w-[0rem] mq1350:hidden">
                      <div className="self-stretch h-[1.125rem] relative flex items-center shrink-0 whitespace-nowrap mq900:hidden">
                        <input
                          type="text"
                          placeholder="Nhập từ khóa tìm kiếm..."
                          style={{ outline: "none" }}
                        />
                      </div>
                    </div>
                    <div className="w-[13.75rem] flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        {/* <FormControl
                          className="self-stretch h-[2.688rem] relative font-inter font-medium text-[1rem] text-black z-[1]"
                          variant="outlined"
                          sx={{
                            borderRadius: "0px 0px 0px 0px",
                            width: "175px",
                            height: "43px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "43px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "43px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "43px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "43px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              textAlign: "left",
                              p: "0 !important",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                          />
                          <FormHelperText />
                        </FormControl> */}
                      </div>
                      <img
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
            <div className="min-w-[28rem] flex flex-row items-center justify-end pt-[0rem] px-[0rem] pb-[0.137rem] text-black">
              <div className="flex flex-row items-center justify-end">
                <img
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
                    className={`links_hover ${isActivePage(PATH_AUTH.login) ? "active_current_link" : ""}`}
                  >
                    Đăng Nhập
                  </span>
                  <span
                    className={`px-1 ${
                      isActivePage(PATH_AUTH.login) ||
                      isActivePage(PATH_AUTH.register)
                        ? "active_current_link"
                        : ""
                    }`}
                  >
                    {" "}
                    /{" "}
                  </span>
                  <span
                    onClick={() => {
                      navigateToPage(PATH_AUTH.register);
                    }}
                    className={`links_hover ${isActivePage(PATH_AUTH.register) ? "active_current_link" : ""}`}
                  >
                    Đăng Ký
                  </span>
                </div>
              </div>
              {/* <div className="flex flex-row items-center justify-end">
                <img
                  className=" w-[1.656rem] h-[1.2rem] z-[1]"
                  alt=""
                  src="/Icons/account_icon.svg"
                  style={{ transform: "scale(1.1) translateY(-2px)" }}
                />
                <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                  <span
                    onClick={() => {
                      // navigateToPage(PATH_AUTH.login);
                    }}
                    className={`links_hover ${isActivePage(PATH_AUTH.login) ? "active_current_link" : ""}`}
                  >
                    Tài Khoản
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-end">
                <img
                  className=" w-[1.656rem] h-[1.2rem] z-[1]"
                  alt=""
                  src="/Icons/heart_icon.svg"
                  style={{ transform: "scale(1.1) translateY(-1px)" }}
                />
                <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                  <span
                    onClick={() => {
                      // navigateToPage(PATH_AUTH.login);
                    }}
                    className={`links_hover ${isActivePage(PATH_AUTH.login) ? "active_current_link" : ""}`}
                  >
                    Đơn Hàng
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-end">
                <img
                  className=" w-[1.656rem] h-[1.2rem] z-[1]"
                  alt=""
                  src="/Icons/cart_icon.svg"
                  style={{ transform: "scale(1.3) translateY(1px)" }}
                />
                <div className="tracking-[0.48px] leading-[1rem] font-medium flex items-center whitespace-nowrap z-[2]">
                  <span
                    onClick={() => {
                      // navigateToPage(PATH_AUTH.login);
                    }}
                    className={`links_hover ${isActivePage(PATH_AUTH.login) ? "active_current_link" : ""}`}
                  >
                    {`Giỏ Hàng (0)`}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderShopComponent;
