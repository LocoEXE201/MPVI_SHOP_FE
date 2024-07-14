import Image from "next/image";
import React, { FC } from "react";

interface CommimentsComponentProps {}

export const CommimentsComponent: FC<CommimentsComponentProps> = ({}) => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.55rem] pr-[1.25rem] pl-[1.437rem] box-border max-w-full text-center text-[1.25rem] text-gray-300 font-poppins">
      <div className="w-[81rem] overflow-hidden shrink-0 flex flex-row items-start justify-center gap-[1.5rem] max-w-full mq1350:flex-wrap">
        <div className="hover:bg-black hover:text-white flex-[0.7549] rounded-8xs bg-whitesmoke-100 box-border flex flex-col items-end justify-start py-[1.5rem] pr-[2.312rem] pl-[2.25rem] gap-[0.875rem] min-w-[15.688rem] max-w-[19.125rem] border-[1px] border-solid border-whitesmoke-300 mq450:flex-1">
          <div className="self-stretch h-[2.563rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border">
            <div className="h-[2.563rem] w-[2.719rem] relative flex items-center justify-center">
              <Image
                height={50}
                width={50}
                className="h-full w-full object-contain absolute left-[0.5rem] top-[0rem] [transform:scale(1.402)]"
                loading="lazy"
                alt=""
                src="/LandingPage/Commitments/commit1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.237rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.275rem] pl-[2.375rem]">
              <div className=" flex-1 font-baloo text-[1.3rem] relative tracking-[0.48px] leading-[1.876rem] font-semibold mq450:text-[1rem] mq450:leading-[1.5rem]">
                Đóng Gói
              </div>
            </div>
            <div className=" self-stretch relative font-baloo-2 text-[1rem] tracking-[0.48px] leading-[1.375rem] font-baloo-2">
              Đơn hàng của bạn luôn được <br /> kiểm tra và đóng gói cẩn thận
            </div>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white flex-[0.7549] rounded-8xs bg-whitesmoke-100 box-border flex flex-col items-end justify-start py-[1.5rem] pr-[2.312rem] pl-[2.25rem] gap-[0.875rem] min-w-[15.688rem] max-w-[19.125rem] border-[1px] border-solid border-whitesmoke-300 mq450:flex-1">
          <div className="self-stretch h-[2.563rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border">
            <div className="h-[2.563rem] w-[2.719rem] relative flex items-center justify-center">
              <Image
                height={50}
                width={50}
                className="h-full w-full object-contain absolute left-[0.5rem] top-[0rem] [transform:scale(1.402)]"
                loading="lazy"
                alt=""
                src="/LandingPage/Commitments/commit2.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.237rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.275rem] pl-[2.375rem]">
              <div className="flex-1 font-baloo text-[1.3rem] relative tracking-[0.48px] leading-[1.876rem] font-semibold mq450:text-[1rem] mq450:leading-[1.5rem]">
                Hỗ Trợ
              </div>
            </div>
            <div className="self-stretch relative font-baloo-2 text-[1rem] tracking-[0.48px] leading-[1.375rem] font-baloo-2">
              Chúng tôi luôn sẵn sàng <br /> giải đáp các thắc mắc
            </div>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white flex-[0.7549] rounded-8xs bg-whitesmoke-100 box-border flex flex-col items-end justify-start py-[1.5rem] pr-[2.312rem] pl-[2.25rem] gap-[0.875rem] min-w-[15.688rem] max-w-[19.125rem] border-[1px] border-solid border-whitesmoke-300 mq450:flex-1">
          <div className="self-stretch h-[2.563rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border">
            <div className="h-[2.563rem] w-[2.719rem] relative flex items-center justify-center">
              <Image
                height={50}
                width={50}
                className="h-full w-full object-contain absolute left-[0.5rem] top-[0rem] [transform:scale(1.402)]"
                loading="lazy"
                alt=""
                src="/LandingPage/Commitments/commit3.svg"
                style={{ transform: "translateX(-5px) scale(1.402)" }}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.237rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.275rem] pl-[2.375rem]">
              <div className="flex-1 font-baloo text-[1.3rem] relative tracking-[0.48px] leading-[1.876rem] font-semibold mq450:text-[1rem] mq450:leading-[1.5rem]">
                Vận Chuyển{" "}
              </div>
            </div>
            <div className="self-stretch relative font-baloo-2 text-[1rem] tracking-[0.48px] leading-[1.375rem] font-baloo-2">
              Đơn vị vận chuyển
              <br />
              uy tín và an toàn
            </div>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white flex-[0.7549] rounded-8xs bg-whitesmoke-100 box-border flex flex-col items-end justify-start py-[1.5rem] pr-[2.312rem] pl-[2.25rem] gap-[0.875rem] min-w-[15.688rem] max-w-[19.125rem] border-[1px] border-solid border-whitesmoke-300 mq450:flex-1">
          <div className="self-stretch h-[2.563rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border">
            <div className="h-[2.563rem] w-[2.719rem] relative flex items-center justify-center">
              <Image
                height={50}
                width={50}
                className="h-full w-full object-contain absolute left-[0.5rem] top-[0rem] [transform:scale(1.402)]"
                loading="lazy"
                alt=""
                src="/LandingPage/Commitments/commit4.svg"
                style={{ transform: "translateX(-5px) scale(1.402)" }}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.237rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.275rem] pl-[2.375rem]">
              <div className="flex-1 font-baloo text-[1.3rem] relative tracking-[0.48px] leading-[1.876rem] font-semibold mq450:text-[1rem] mq450:leading-[1.5rem]">
                Thanh Toán{" "}
              </div>
            </div>
            <div className="self-stretch relative font-baloo-2 text-[1rem] tracking-[0.48px] leading-[1.375rem] font-baloo-2">
              Thông tin thanh toán của bạn
              <br />
              luôn luôn được bảo mật
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
