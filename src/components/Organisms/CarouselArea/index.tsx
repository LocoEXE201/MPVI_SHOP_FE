"use client";
import React, { FC } from "react";
import "./index.scss";

interface CarouselAreaProps {}

export const CarouselArea: FC<CarouselAreaProps> = ({}) => {
  return (
    <section className="carousel_area mr-[-0.313rem] mb-[1.312rem] self-stretch h-[40.938rem] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-left text-[1.25rem] text-white font-baloo-2">
      <div className="carousel_image mt-[-2.275rem] ml-[-0.125rem] bg-[url('/LandingPage/Carousel/carousel.png')] h-full flex-1 relative overflow-hidden max-w-full">
        <div className="absolute top-[-9rem] left-[0.125rem] w-[78.813rem] max-w-full">
          <div className="absolute top-[15.931rem] left-[9.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.187rem] px-[0rem] z-[2] font-poppins border-b-[2px] border-solid border-white">
            <b className="relative tracking-[0.48px] leading-[1.5rem] inline-block min-w-[3.331rem] shrink-0 [debug_commit:1de1738] mq450:text-[1rem] mq450:leading-[1.188rem]">
              100%
            </b>
          </div>
          <h3 className="m-0 absolute top-[16rem] left-[13.125rem] text-[1.563rem] tracking-[0.48px] leading-[1.5rem] font-bold font-inherit flex items-center w-[22.125rem] h-[1.75rem] z-[2] mq450:text-[1.25rem] mq450:leading-[1.188rem]">
            Len Tự Nhiên Chất Lượng Cao
          </h3>
          <h1 className="m-0 absolute top-[18.231rem] left-[9.25rem] text-[3.75rem] tracking-[0.48px] leading-[4.25rem] font-normal font-baloo-bhaijaan text-chocolate flex items-center w-[47.25rem] h-[8.5rem] z-[2] mq450:text-[2.25rem] mq450:leading-[2.563rem] mq900:text-[3rem] mq900:leading-[3.375rem]">
            <span className="w-full">
              <p className="m-0">“Len Yêu” - Sưởi ấm trái tim</p>
              <p className="m-0">Hỗ trợ cho Mọi Cuộc Sống</p>
            </span>
          </h1>
          <div className="absolute top-[27.606rem] left-[9rem] w-[36.563rem] flex flex-row items-start justify-start max-w-full">
            <b className="h-[5.5rem] flex-1 relative tracking-[0.48px] leading-[1.641rem] inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
              <ul className="m-0 font-inherit text-inherit pl-[1.35rem]">
                <li className="ml-1">
                  <span className="text-chocolate">Đặc biệt:</span>
                  <span className="text-white">{` `}</span>
                  <span className="text-chocolate">Giảm giá 15%</span>
                  <span> cho tất cả các sản phẩm len.</span>
                </li>
                <li className="ml-1">
                  <span>Đa dạng phong cách và các thể loại sản phẩm len.</span>
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
            <img
              className="h-[1rem] w-[1rem] absolute !m-[0] bottom-[0.938rem] left-[0.469rem] z-[3]"
              alt=""
              src="/LandingPage/Carousel/star.svg"
              style={{ transform: "translateY(-2px)" }}
            />
          </div>
          <b className="absolute top-[33.106rem] left-[9.625rem] tracking-[0.48px] leading-[1.641rem] inline-block w-[35rem] h-[6.563rem] z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
            <p className="m-0">
              <span className="text-white">{`Mỗi sản phẩm len được mua đều góp `}</span>
              <span className="text-chocolate">{`03% số tiền lợi nhuận `}</span>
              <span>vào Quỹ hỗ trợ cho người khiếm thị.</span>
            </p>
            <p className="m-0">
              <span>{`Mỗi sợi len đều có thể làm thay đổi cuộc sống và mang lại niềm vui và `}</span>
              <span className="text-chocolate">“ánh sáng”</span>
              <span className="text-white"> cho những</span>
              <span className="text-chocolate"> “đôi mắt”</span>
              <span className="text-white"> cần sự giúp đỡ.</span>
            </p>
          </b>
          <div className="absolute cursor-pointer hover:bg-black hover:text-white top-[40.669rem] left-[9.656rem] rounded-8xs bg-chocolate flex flex-row items-start justify-start py-[0.312rem] px-[0.6rem] whitespace-nowrap z-[2] text-[1rem]">
            <b className="relative tracking-[0.48px] leading-[1.313rem] inline-block">
              Khám Phá Ngay
            </b>
          </div>
          <button className="cursor-pointer py-[0.312rem] px-[0.5rem] bg-white absolute cursor-pointer text-gray-300 hover:bg-black hover:text-white top-[40.7rem] left-[19.031rem] rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2]">
            <b className="relative text-[1rem] tracking-[0.48px] leading-[1.313rem] font-baloo-2  text-left">
              Xem Thêm Sản Phẩm Khác
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};
