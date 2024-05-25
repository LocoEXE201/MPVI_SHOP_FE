"use client";

const News2Component = (props: {}) => {
  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.056rem] max-w-full font-poppins mq900:gap-[1rem]">
        <div className="w-[75.063rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
          <div className="w-[22.719rem] relative tracking-[0.48px] leading-[1.875rem] font-semibold flex items-center max-w-full">
            <span className="w-full font-baloo-2">
              <span>Đăng bởi Admin</span>
              <span className="text-gray-100"> / 03-12-2024</span>
            </span>
          </div>
          <b className="self-stretch relative text-[2.5rem] tracking-[0.48px] leading-[2.4rem] font-baloo-2 text-gray-300 mq900:text-[2rem] mq900:leading-[1.938rem] mq450:text-[1.5rem] mq450:leading-[1.438rem]">
            NGÀY QUỐC TẾ NGƯỜI KHUYẾT TẬT 03/12/1992 - 03/12/2024
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
          <img
            className="h-[38.875rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/LandingPage/OutstandingNews/news2.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.243rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-[1.875rem] text-gray-100 font-baloo-2">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.05rem] max-w-full mq900:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.468rem]">
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              Ngày 3 tháng 12 được chọn làm Ngày Quốc tế Người khuyết tật, nhằm
              nâng cao nhận thức và thấu hiểu về thách thức mà những người này
              đang phải đối mặt trong xã hội. Ngày này cũng là dịp để kêu gọi sự
              hỗ trợ và đề xuất các biện pháp nhằm tạo điều kiện thuận lợi hơn
              cho họ, tạo cơ hội và quyền lợi bình đẳng.
            </h5>
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              <p className="text-justify m-0">
                Ngày Quốc tế Người khuyết tật nhấn mạnh sự cần thiết của sự đoàn
                kết toàn cầu và sự hỗ trợ để xây dựng một thế giới với những cơ
                hội bình đẳng cho tất cả mọi người, bao gồm cả những người
                khuyết tật.
              </p>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default News2Component;
