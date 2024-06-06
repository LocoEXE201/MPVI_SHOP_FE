"use client";
import React, { FC } from "react";
import "./index.scss";
import { useRouter } from "next/navigation";
import { PATH_SHOP } from "@/routes/paths";

interface CarouselAreaProps {}

export const CarouselArea: FC<CarouselAreaProps> = ({}) => {
  const router = useRouter();

  return (
    <>
      <section className="carousel_area mb-[2rem] overflow-hidden font-baloo-2">
        <div className="overflow-hidden pt-[5rem] mq900:pb-[5rem] mq900:pl-[40px] mq900:pr-[40px] mq1350:pl-[100px] mq1350:pr-[100px] pl-[10rem] pr-[25rem] carousel_image mq900:bg-contain mq900:bg-[calc(55%)] mq1350:bg-[calc(50%)] bg-center bg-[url('/LandingPage/Carousel/carousel.png')] min-h-[40rem] w-full">
          <div className="subTitle flex flex-row items-center mq900:text-[1.3rem] mq450:text-[1rem] text-[1.6rem]">
            <div className="inline-block font-poppins border-b-[2px] border-solid border-white">
              <b className="text-white">100%</b>
            </div>
            <h3 className="m-0 ml-2 font-bold font-inherit text-white">
              Sản Phẩm Thủ Công
            </h3>
          </div>
          <h1 className="mainTitle mt-2 mq450:text-[2rem] mq900:text-[2.5rem] mq1350:text-[3.2rem] text-[3.75rem] tracking-[0.48px] mq900:leading-[3rem] leading-[4.25rem] font-normal font-baloo-bhaijaan text-chocolate">
            <div className="w-full">
              <p className="m-0">
                &quot;Len Yêu&quot; <span className="mq900:hidden">-</span>
                <br className="hidden mq900:block" /> Sưởi ấm trái tim
              </p>
              <p className="m-0 mt-1">Ánh sáng cho nhiều cuộc sống</p>
            </div>
          </h1>
          <div className="text-white mt-2 flex flex-row items-start justify-start max-w-full">
            <b className="tracking-[0.48px] leading-[1.641rem] inline-block mq450:text-[1rem] mq450:leading-[1.313rem]">
              <ul className="m-0 font-inherit text-inherit mt-1 text-[1.35rem] mq450:text-[1rem] mq450:leading-[1.313rem]">
                <li className="flex items-start gap-1 mt-[5px]">
                  <img
                    className="h-[1rem] w-[1rem]"
                    alt=""
                    src="/LandingPage/Carousel/star.svg"
                    style={{ transform: "translateY(3px)" }}
                  />
                  <span>Đa dạng phong cách và các thể loại sản phẩm len.</span>
                </li>
                <li className="flex items-start gap-1 mt-[5px]">
                  <img
                    className="h-[1rem] w-[1rem]"
                    alt=""
                    src="/LandingPage/Carousel/star.svg"
                    style={{ transform: "translateY(3px)" }}
                  />
                  <span>
                    Chất liệu mềm mại, ấm áp mọi nơi và chống thấm nước.
                  </span>
                </li>
              </ul>
            </b>
          </div>
          <div className="font-extrabold mt-5 text-[1.35rem] tracking-[0.48px] leading-[1.641rem] mq450:text-[1rem] mq450:leading-[1.313rem]">
            <p className="m-0 mq1725:w-[39rem] mq900:w-auto mq900:text-justify">
              <span className="text-white">{`Mỗi sản phẩm len được mua đều góp `}</span>
              <span className="text-chocolate">{`03% số tiền lợi nhuận `}</span>
              <span className="text-chocolate">
                vào Quỹ hỗ trợ cho người khiếm thị.
              </span>
            </p>
            <p className="mt-1 mq450:mt-3 mq1725:w-[39rem] mq900:w-auto mq900:text-justify">
              <span className="text-white">{`Mỗi sợi len đều có thể làm thay đổi cuộc sống và mang lại niềm vui cùng `}</span>
              <span className="text-chocolate">“ánh sáng”</span>
              <span className="text-white"> cho những</span>
              <span className="text-chocolate"> “đôi mắt”</span>
              <span className="text-white"> cần sự giúp đỡ.</span>
            </p>
          </div>
          <div className="mt-5 flex gap-[10px]">
            <button
              onClick={() => {
                router.push(PATH_SHOP.products);
              }}
              className="cursor-pointer hover:bg-black text-white rounded-8xs bg-chocolate flex flex-row items-start justify-start py-[0.312rem] px-[0.6rem] whitespace-nowrap z-[2] text-[1rem]"
            >
              <b className="relative tracking-[0.48px] leading-[1.313rem] inline-block">
                Khám Phá Ngay
              </b>
            </button>
            <button
              onClick={() => {
                router.push(PATH_SHOP.about);
              }}
              className="py-[0.312rem] px-[0.5rem] bg-white cursor-pointer text-gray-300 hover:bg-black hover:text-white rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2]"
            >
              <b className="relative text-[1rem] tracking-[0.48px] leading-[1.313rem] font-baloo-2  text-left">
                Giới Thiệu Về Chúng Tôi
              </b>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
