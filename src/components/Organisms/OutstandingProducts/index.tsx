"use client";
import type { NextPage } from "next";
import { ProductCard } from "@/components/Molecules/ProductCard";

const OutstandingProducts: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.662rem] pr-[1.25rem] pl-[1.562rem] box-border max-w-full text-left text-[2.188rem] text-chocolate font-baloo">
      <div className="w-[81rem] flex flex-col items-end justify-start gap-[2.212rem] max-w-full mq900:gap-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.875rem] box-border max-w-full">
          <div className="w-[43.5rem] flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.875rem] pl-[1.25rem]">
              <h2 className="m-0 w-[18.25rem] relative text-inherit tracking-[0.48px] leading-[1.313rem] font-normal font-inherit flex items-center shrink-0 mq450:text-[1.313rem] mq450:leading-[0.813rem] mq900:text-[1.75rem] mq900:leading-[1.063rem]">
                Sản Phẩm Nổi Bật
              </h2>
            </div>
            <div className="self-stretch relative text-[1rem] tracking-[0.48px] leading-[1.375rem] font-semibold font-baloo-2 text-gray-100 text-center">
              <p className="m-0">
                Các sản phẩm đều được làm thủ công, có chất liệu tốt và chất
                lượng cao.
              </p>
              <p className="m-0">
                Bấm thêm ngay vào giỏ hàng để sở hữu và cùng chung tay hỗ trợ
                những người khó khăn nhé.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[1.5rem] max-w-full text-[1.125rem] mq1350:flex-wrap">
          <div className="w-[25rem] flex flex-col items-start justify-center pt-[0.937rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
                <div className="self-stretch rounded-8xs bg-whitesmoke-100 hover:bg-yellow-200 cursor-pointer flex flex-row items-end justify-between pt-[0.562rem] px-[0.937rem] pb-[0.437rem] gap-[1.25rem] border-[1px] border-solid border-gray-600">
                  <div className="relative tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.938rem]">
                    Tất Cả
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[1.313rem] h-[1.688rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/Icons/arrow_left_active.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-whitesmoke-100 hover:bg-yellow-200 cursor-pointer flex flex-row items-end justify-between pt-[0.562rem] px-[0.937rem] pb-[0.437rem] gap-[1.25rem] border-[1px] border-solid border-gray-600">
                  <div className="relative text-black tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.938rem]">
                    Category 1
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[1.313rem] h-[1.688rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/Icons/arrow_left.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-whitesmoke-100 hover:bg-yellow-200 cursor-pointer flex flex-row items-end justify-between pt-[0.562rem] px-[0.937rem] pb-[0.437rem] gap-[1.25rem] border-[1px] border-solid border-gray-600">
                  <div className="relative text-black tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.938rem]">
                    Category 2
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[1.313rem] h-[1.688rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/Icons/arrow_left.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-whitesmoke-100 hover:bg-yellow-200 cursor-pointer flex flex-row items-end justify-between pt-[0.562rem] px-[0.937rem] pb-[0.437rem] gap-[1.25rem] border-[1px] border-solid border-gray-600">
                  <div className="relative text-black tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.938rem]">
                    Category 3
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[1.313rem] h-[1.688rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/Icons/arrow_left.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-whitesmoke-100 hover:bg-yellow-200 cursor-pointer flex flex-row items-end justify-between pt-[0.562rem] px-[0.937rem] pb-[0.437rem] gap-[1.25rem] border-[1px] border-solid border-gray-600">
                  <div className="relative text-black tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.938rem]">
                    Category 4
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[1.313rem] h-[1.688rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/Icons/arrow_left.svg"
                    />
                  </div>
                </div>{" "}
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start pt-[6.437rem] pb-[23.4rem] pr-[0.875rem] pl-[1.562rem] gap-[1.312rem] bg-[url('/mock/carousel.png')] bg-cover bg-no-repeat bg-[top] text-[3.125rem] text-white font-barlow-condensed mq900:pt-[4.188rem] mq900:pb-[15.188rem] mq900:box-border">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                  <h1 className="m-0 flex-1 relative text-inherit tracking-[0.48px] leading-[1.5rem] font-normal font-inherit z-[1] mq450:text-[1.875rem] mq450:leading-[0.875rem] mq900:text-[2.5rem] mq900:leading-[1.188rem]">
                    Sản Phẩm
                  </h1>
                </div>
                <div className="w-[15.188rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border font-paytone-one">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                      <h1 className="m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[1.5rem] font-normal font-inherit z-[1] mq450:text-[1.875rem] mq450:leading-[0.875rem] mq900:text-[2.5rem] mq900:leading-[1.188rem]">
                        Len
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-[9.938rem] flex flex-col items-start justify-start gap-[0.85rem] text-[1.25rem] font-baloo">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                    <div className="flex-1 relative tracking-[0.48px] leading-[1.5rem] z-[1] mq450:text-[1rem] mq450:leading-[1.188rem]">
                      15% Giảm Giá
                    </div>
                  </div>
                  <div className="w-[6.519rem] rounded-8xs box-border flex flex-row items-start justify-start pt-[0.025rem] pb-[0rem] pr-[0rem] pl-[0.031rem] z-[1] text-[1rem] text-black font-baloo-2 border-none">
                    <div className="rounded-8xs cursor-pointer hover:bg-black hover:text-white bg-white flex flex-row items-start justify-start py-[0.312rem] px-[0.312rem] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                      <b className="relative tracking-[0.48px] leading-[1.313rem] inline-block whitespace-nowrap">
                        Khám Phá Ngay
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto flex flex-row flex-wrap items-start justify-center gap-[0.687rem_1.375rem] text-center text-[0.938rem] text-gray-700 font-baloo-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingProducts;
