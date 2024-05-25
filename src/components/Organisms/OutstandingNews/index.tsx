"use client";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface OutstandingNewsProps {
  activeNews?: string;
}

export const OutstandingNews: FC<OutstandingNewsProps> = ({ activeNews }) => {
  const router = useRouter();

  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, PATH_SHOP.news);
    router.push(route);
  };

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.187rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-left text-[2.188rem] text-chocolate font-baloo">
      <div className="flex-1 rounded-8xs bg-white box-border flex flex-col items-end justify-start pt-[2.437rem] px-[1rem] pb-[1.75rem] max-w-full border-[1px] border-solid border-white mq900:pt-[1.563rem] mq900:px-[4.813rem] mq900:pb-[1.25rem] mq900:box-border mq1350:pl-[9.625rem] mq1350:pr-[9.625rem] mq1350:box-border">
        <h2 className="m-0 relative text-inherit w-full text-center">
          {!activeNews ? "Tin Nổi Bật" : "Tin Tức Khác"}
        </h2>
        <div className="self-stretch flex flex-row items-center justify-center relative max-w-full">
          <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.5rem] max-w-full text-[0.875rem] text-black font-poppins">
            {!activeNews || (activeNews && activeNews != "1") ? (
              <>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.newsDetail("1"));
                  }}
                  className={`rounded-8xs cursor-pointer ${activeNews ? "max-w-[50%]" : "max-w-[30%]"} bg-white hover:bg-black hover:text-white box-border overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0.006rem] gap-[1.1rem] border-[1px] border-solid border-whitesmoke-300`}
                >
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.437rem] pl-[0.875rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                        <div className="relative tracking-[0.48px] leading-[1.75rem] font-baloo-2 text-[1rem] inline-block min-w-[7.438rem]">
                          Đăng bởi Admin
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] box-border max-w-full text-[1.125rem] font-baloo">
                        <div
                          className="flex-1 relative tracking-[0.48px] leading-[1.5rem] inline-block max-w-full"
                          style={{ textTransform: "uppercase" }}
                        >
                          KHIẾM THỊ LÀ GÌ? NHỮNG NGUYÊN NHÂN GÂY RA KHIẾM THỊ
                        </div>
                      </div>
                      <div className="w-[7.169rem] h-[1.75rem] relative text-chocolate font-baloo-2">
                        <div className="absolute top-[0rem] left-[0rem] tracking-[0.48px] text-[1rem] leading-[1.75rem] font-semibold flex items-center w-[5.194rem] h-[1.75rem]">
                          Đọc Thêm
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[22rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/LandingPage/OutstandingNews/news1.jpg"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {!activeNews || (activeNews && activeNews != "2") ? (
              <>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.newsDetail("2"));
                  }}
                  className={`rounded-8xs cursor-pointer ${activeNews ? "max-w-[50%]" : "max-w-[30%]"} bg-white hover:bg-black hover:text-white box-border overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0.006rem] gap-[1.1rem] border-[1px] border-solid border-whitesmoke-300`}
                >
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.437rem] pl-[0.875rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                        <div className="relative tracking-[0.48px] leading-[1.75rem] font-baloo-2 text-[1rem] inline-block min-w-[7.438rem]">
                          Đăng bởi Admin
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] box-border max-w-full text-[1.125rem] font-baloo">
                        <div
                          className="flex-1 relative tracking-[0.48px] leading-[1.5rem] inline-block max-w-full"
                          style={{ textTransform: "uppercase" }}
                        >
                          NGÀY QUỐC TẾ NGƯỜI KHUYẾT TẬT 03/12/1992 - 03/12/2024
                        </div>
                      </div>
                      <div className="w-[7.169rem] h-[1.75rem] relative text-chocolate font-baloo-2">
                        <div className="absolute top-[0rem] left-[0rem] tracking-[0.48px] text-[1rem] leading-[1.75rem] font-semibold flex items-center w-[5.194rem] h-[1.75rem]">
                          Đọc Thêm
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[22rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/LandingPage/OutstandingNews/news2.png"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {!activeNews || (activeNews && activeNews != "3") ? (
              <>
                <div
                  onClick={() => {
                    navigateToPage(PATH_SHOP.newsDetail("3"));
                  }}
                  className={`rounded-8xs cursor-pointer ${activeNews ? "max-w-[50%]" : "max-w-[30%]"} bg-white hover:bg-black hover:text-white box-border overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0.006rem] gap-[1.1rem] border-[1px] border-solid border-whitesmoke-300`}
                >
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.437rem] pl-[0.875rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                        <div className="relative tracking-[0.48px] leading-[1.75rem] font-baloo-2 text-[1rem] inline-block min-w-[7.438rem]">
                          Đăng bởi Admin
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] box-border max-w-full text-[1.125rem] font-baloo">
                        <div
                          className="flex-1 relative tracking-[0.48px] leading-[1.5rem] inline-block max-w-full"
                          style={{ textTransform: "uppercase" }}
                        >
                          NGƯỜI KHIẾM THỊ CÓ THỂ CẢM NHẬN MÀU ĐƯỢC KHÔNG?
                        </div>
                      </div>
                      <div className="w-[7.169rem] h-[1.75rem] relative text-chocolate font-baloo-2">
                        <div className="absolute top-[0rem] left-[0rem] tracking-[0.48px] text-[1rem] leading-[1.75rem] font-semibold flex items-center w-[5.194rem] h-[1.75rem]">
                          Đọc Thêm
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[22rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/LandingPage/OutstandingNews/news3.png"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
