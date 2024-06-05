"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./index.scss";
import { CORE_INFORMATION } from "@/constants/CoreInformation";
import { PATH_SHOP } from "@/routes/paths";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";

const FooterShopComponent = (props: {}) => {
  const router = useRouter();
  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  return (
    <>
      <footer className="mr-[-0.313rem] self-stretch bg-black box-border flex flex-col items-start justify-start pt-[5rem] px-[5rem] pb-[1.975rem] gap-[4rem] max-w-full z-[1] text-left text-[1.375rem] text-primary font-baloo border-t-[1px] border-solid border-black mq450:pt-[3.25rem] mq450:pb-[1.313rem] mq450:box-border mq900:gap-[1.25rem] mq900:pl-[4.813rem] mq900:pr-[4.813rem] mq1350:gap-[2.5rem] mq1350:pl-[9.688rem] mq1350:pr-[9.688rem] mq1350:box-border">
        <div className="w-[80.213rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1725:flex-wrap">
          <div className="w-[19.438rem] flex flex-col items-start justify-start py-[0rem] pr-[1.062rem] pl-[0rem] box-border gap-[0.681rem] text-white font-baloo-2">
            <img
              onClick={() => {
                navigateToPage(PATH_SHOP.root);
              }}
              className="cursor-pointer w-[13.625rem] h-[6.625rem] relative object-cover"
              loading="lazy"
              alt="Logo"
              src="/Logo/Logo_dark.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.687rem]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.843rem] mq450:flex-wrap">
                <Image
                  className="h-[1.5rem] w-[1.281rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/Icons/mail_icon.svg"
                  width={19}
                  height={16}
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.131rem] px-[0rem] pb-[0rem] box-border min-w-[10.125rem]">
                  <div className="self-stretch relative tracking-[0.48px] leading-[1.625rem] whitespace-nowrap mq450:text-[1.125rem] mq450:leading-[1.313rem]">
                    <a
                      className="links_hover self-stretch relative tracking-[0.48px] leading-[1.25rem] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.MAIL_CONSTANT}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[15.813rem] flex flex-row items-center justify-start py-[0rem] px-[0.687rem] box-border">
              <div className="flex-1 flex flex-row items-end justify-start gap-[0.843rem] mq450:flex-wrap">
                <Image
                  className="h-[1.5rem] w-[1.281rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/Icons/phone_icon.svg"
                  width={19}
                  height={16}
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.118rem] box-border min-w-[8rem]">
                  <div className="self-stretch relative tracking-[0.48px] leading-[1.25rem] mq450:text-[1.125rem] mq450:leading-[1rem]">
                    <a
                      className="links_hover self-stretch relative tracking-[0.48px] leading-[1.25rem] font-medium text-[inherit] [text-decoration:none] whitespace-nowrap z-[1]"
                      target="_blank"
                    >
                      {CORE_INFORMATION.PHONE_CONSTANT_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[27.75rem] flex flex-row items-start justify-start gap-[2.062rem] max-w-full mq450:gap-[1rem] mq900:flex-wrap">
            <div className="w-[10.938rem] flex flex-col items-start justify-start gap-[1.062rem] min-w-[10.938rem] mq900:flex-1">
              <div className="w-[6.375rem] relative tracking-[0.48px] leading-[1.5rem] flex items-center mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                Liên Kết
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.25rem] text-white font-baloo-2">
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.root);
                  }}
                  className="links_hover relative tracking-[0.48px] leading-[1.625rem] inline-block min-w-[5.75rem] mq450:text-[1rem] mq450:leading-[1.313rem]"
                >
                  Trang Chủ
                </div>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.about);
                  }}
                  className="links_hover self-stretch relative tracking-[0.48px] leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.313rem]"
                >
                  Giới Thiệu
                </div>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.products);
                  }}
                  className="links_hover w-[7.375rem] relative tracking-[0.48px] leading-[1.625rem] flex items-center mq450:text-[1rem] mq450:leading-[1.313rem]"
                >
                  Sản Phẩm
                </div>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.news);
                  }}
                  className="links_hover w-[10.625rem] relative tracking-[0.48px] leading-[1.625rem] flex items-center mq450:text-[1rem] mq450:leading-[1.313rem]"
                >
                  Tin Tức
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.062rem] min-w-[9.563rem]">
              <div className="relative tracking-[0.48px] leading-[1.5rem] inline-block min-w-[7.75rem] mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                Chính Sách
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.25rem] text-white font-baloo-2">
                <div className="links_hover relative tracking-[0.48px] leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.313rem]">
                  Chính Sách Bảo Mật
                </div>
                <div className="links_hover self-stretch relative tracking-[0.48px] leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.313rem]">
                  Chính Sách Vận Chuyển
                </div>
                <div className="links_hover w-[11.375rem] relative tracking-[0.48px] leading-[1.625rem] flex items-center mq450:text-[1rem] mq450:leading-[1.313rem]">
                  Chính Sách Đổi Trả
                </div>
                <div className="links_hover w-[11.25rem] relative tracking-[0.48px] leading-[1.625rem] flex items-center mq450:text-[1rem] mq450:leading-[1.313rem]">
                  Quy Định Sử Dụng
                </div>
              </div>
            </div>
          </div>
          <div className="w-[21.15rem] flex flex-col items-start justify-start gap-[0.937rem] max-w-full">
            <div className="w-[16.063rem] relative tracking-[0.48px] leading-[1.5rem] flex items-center mq450:text-[1.125rem] mq450:leading-[1.188rem]">
              Thư Viện
            </div>
            <div className="gap-[0.25rem] mq450:flex-wrap flex flex-col justify-between">
              <div className="self-stretch flex flex-row items-start justify-start ">
                <img
                  className="mq450:hidden cursor-pointer relative rounded-8xs w-[6rem] h-[4rem] overflow-hidden"
                  alt=""
                  src="/LandingPage/Carousel/carousel.png"
                  style={{ objectFit: "fill" }}
                />
                <img
                  className="cursor-pointer ms-1 flex-1 relative rounded-8xs w-[5rem] h-[4rem] overflow-hidden object-cover"
                  alt=""
                  src="/LandingPage/OutstandingNews/news1.jpg"
                />
                <img
                  className="cursor-pointer ms-1 flex-1 relative rounded-8xs w-[5rem] h-[4rem] overflow-hidden object-cover"
                  alt=""
                  src="/LandingPage/OutstandingNews/news2.png"
                />
                <img
                  className="cursor-pointer ms-1 flex-1 relative rounded-8xs w-[5rem] h-[4rem] overflow-hidden object-cover"
                  alt=""
                  src="/LandingPage/OutstandingNews/news3.png"
                />
              </div>
              <div className="mt-2 flex flex-col items-start justify-start gap-[0.625rem] w-[5.125rem]">
                <div className="flex flex-row items-start justify-start gap-[0.25rem] mt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61559942963991"
                    target="_blank"
                  >
                    <Image
                      className="cursor-pointer h-[2.188rem] w-[2.188rem] relative rounded-8xs min-h-[2.188rem]"
                      alt="facebook_icon"
                      src="/Icons/facebook_icon.svg"
                      width={52}
                      height={52}
                    />
                  </a>
                  <Image
                    className="cursor-pointer h-[2.188rem] w-[2.188rem] relative rounded-8xs min-h-[2.188rem]"
                    alt="insta_icon"
                    src="/Icons/insta_icon.svg"
                    width={52}
                    height={52}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.187rem] box-border max-w-full text-center text-gray-800 font-poppins">
          <div className="flex-1 box-border flex flex-row items-center justify-center pt-[2.125rem] pb-[0.337rem] gap-[0.187rem] max-w-full border-t-[1px] border-solid border-white mq900:flex-wrap mq900:box-border">
            <div className="relative tracking-[0.48px] leading-[1.063rem] text-primary text-[1.2rem] mq450:leading-[0.813rem]">
              <span className="text-gray-800">
                <span> &copy; 2024 </span>
              </span>
              <span className="font-semibold">
                <span>Loco.</span>
              </span>
              <span className="text-gray-800 mq450:inline-block mq450:mt-3">
                <span style={{ transform: "translateY(15px)" }}> &#64; </span>
                <span> All rights reserved.</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterShopComponent;
