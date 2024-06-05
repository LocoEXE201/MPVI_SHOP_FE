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
      <section className="carousel_area mr-[-0.313rem] mb-[1.312rem] self-stretch h-[40.938rem] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-left text-[1.25rem] text-white font-baloo-2">
        <div className="carousel_image mt-[-2.275rem] ml-[-0.125rem] bg-[url('/LandingPage/Carousel/carousel.png')] h-full flex-1 relative overflow-hidden max-w-full">
          <div className="absolute top-[-9rem] left-[0.125rem] w-[78.813rem] max-w-full">
            <div className="absolute top-[15.931rem] left-[9.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.187rem] px-[0rem] z-[2] font-poppins border-b-[2px] border-solid border-white">
              <b className="relative tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.331rem] shrink-0 [debug_commit:1de1738] mq450:text-[1rem] mq450:leading-[1.188rem]">
                100%
              </b>
            </div>
            <h3 className="m-0 ml-1 absolute top-[16rem] left-[13.125rem] text-[1.563rem] tracking-[0.48px] leading-[1.5rem] font-bold font-inherit flex items-center w-[22.125rem] h-[1.75rem] z-[2] mq450:text-[1.25rem] mq450:leading-[1.188rem]">
              Sản Phẩm Thủ Công
            </h3>
            <h1 className="m-0 absolute top-[18.231rem] left-[9.25rem] text-[3.75rem] tracking-[0.48px] leading-[4.25rem] font-normal font-baloo-bhaijaan text-chocolate flex items-center h-[8.5rem] z-[2] mq450:text-[2.25rem] mq450:leading-[2.563rem] mq900:text-[3rem] mq900:leading-[3.375rem]">
              <span className="w-full">
                <p className="m-0">&quot;Len Yêu&quot; - Sưởi ấm trái tim</p>
                <p className="m-0 mt-1">Ánh sáng cho nhiều cuộc sống</p>
              </span>
            </h1>
            <div className="absolute top-[27.606rem] left-[9rem] w-[36.563rem] flex flex-row items-start justify-start max-w-full">
              <b className="h-[5.5rem] flex-1 relative tracking-[0.48px] leading-[1.641rem] inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
                <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                  <li className="ml-1">
                    <span>
                      Đa dạng phong cách và các thể loại sản phẩm len.
                    </span>
                  </li>
                  <li className="ml-1">
                    <span>
                      Chất liệu mềm mại, ấm áp mọi nơi và chống thấm nước.
                    </span>
                  </li>
                </ul>
              </b>
              <img
                className="h-[1rem] w-[1rem] absolute !m-[0] top-[0.375rem] left-[0.469rem] z-[3]"
                alt=""
                src="/LandingPage/Carousel/star.svg"
                style={{ transform: "translateY(-2px)" }}
              />
              <img
                className="h-[1rem] w-[1rem] absolute !m-[0] top-[2rem] left-[0.406rem] z-[3]"
                alt=""
                src="/LandingPage/Carousel/star.svg"
                style={{ transform: "translateY(-2px)" }}
              />
            </div>
            <b className="absolute top-[32rem] left-[9.625rem] tracking-[0.48px] leading-[1.641rem] inline-block w-[36.5rem] h-[6.563rem] z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
              <p className="m-0">
                <span className="text-white">{`Mỗi sản phẩm len được mua đều góp `}</span>
                <span className="text-chocolate">{`03% số tiền lợi nhuận `}</span>
                <span className="text-chocolate">
                  vào Quỹ hỗ trợ cho người khiếm thị.
                </span>
              </p>
              <p className="m-0">
                <span>{`Mỗi sợi len đều có thể làm thay đổi cuộc sống và mang lại niềm vui cùng `}</span>
                <span className="text-chocolate">“ánh sáng”</span>
                <span className="text-white"> cho những</span>
                <span className="text-chocolate"> “đôi mắt”</span>
                <span className="text-white"> cần sự giúp đỡ.</span>
              </p>
            </b>
            <div
              onClick={() => {
                router.push(PATH_SHOP.products);
              }}
              className="absolute cursor-pointer hover:bg-black hover:text-white top-[40rem] left-[9.656rem] rounded-8xs bg-chocolate flex flex-row items-start justify-start py-[0.312rem] px-[0.6rem] whitespace-nowrap z-[2] text-[1rem]"
            >
              <b className="relative tracking-[0.48px] leading-[1.313rem] inline-block">
                Khám Phá Ngay
              </b>
            </div>
            <button
              onClick={() => {
                router.push(PATH_SHOP.about);
              }}
              className="py-[0.312rem] px-[0.5rem] bg-white absolute cursor-pointer text-gray-300 hover:bg-black hover:text-white top-[40rem] left-[19.031rem] rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2]"
            >
              <b className="relative text-[1rem] tracking-[0.48px] leading-[1.313rem] font-baloo-2  text-left">
                Giới Thiệu Về Chúng Tôi
              </b>
            </button>
          </div>
        </div>
      </section>

      <section className="carousel_area mb-[2rem] overflow-hidden font-baloo-2">
        <div className="overflow-hidden pt-[5rem] pl-[10rem] carousel_image bg-[url('/LandingPage/Carousel/carousel.png')] min-h-[40rem] w-full">
          <div className="subTitle flex flex-row items-center text-[1.6rem]">
            <div className="inline-block font-poppins border-b-[2px] border-solid border-white">
              <b className="text-white">100%</b>
            </div>
            <h3 className="m-0 ml-2 font-bold font-inherit text-white">
              Sản Phẩm Thủ Công
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
