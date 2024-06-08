"use client";

const News1Component = (props: {}) => {
  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.056rem] max-w-full font-poppins mq900:gap-[1rem]">
        <div className="w-[75.063rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
          <div className="w-[22.719rem] relative tracking-[0.48px] leading-[1.875rem] font-semibold flex items-center max-w-full">
            <span className="w-full font-baloo-2">
              <span>Đăng bởi Loco.</span>
              <span className="text-gray-100"> / 31-05-2024</span>
            </span>
          </div>
          <b className="self-stretch relative text-[2.5rem] tracking-[0.48px] leading-[2.5rem] mq450:leading-[2rem] font-baloo-2 text-gray-300 mq900:text-[2rem] mq450:text-[1.5rem]">
            KHIẾM THỊ LÀ GÌ? NHỮNG NGUYÊN NHÂN GÂY RA KHIẾM THỊ
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
          <img
            className="rounded-md mq1350:h-[25rem] mq900:h-[20rem] h-[30rem] flex-1 relative max-w-full overflow-hidden object-cover"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            loading="lazy"
            alt=""
            src="/LandingPage/OutstandingNews/news1.jpg"
          />
        </div>
      </div>
      <div className="text-[1.5rem] mq450:text-[1.3rem] self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.243rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-gray-100 font-baloo-2">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.05rem] max-w-full mq900:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.468rem]">
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              <strong>Khiếm thị là gì?</strong> Khiếm thị là một tình trạng y tế
              mà người mắc phải có khả năng nhìn kém hoặc mất khả năng nhìn hoàn
              toàn. Điều này có thể xảy ra do nhiều nguyên nhân khác nhau, bao
              gồm bẩm sinh, bệnh lý, tai nạn hoặc tuổi tác. Khiếm thị không chỉ
              ảnh hưởng đến khả năng nhìn mà còn tác động mạnh mẽ đến cuộc sống
              hàng ngày, công việc và các hoạt động xã hội của người bệnh.
            </h5>
            <h5 className="m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              <p className="m-0 text-justify">
                <strong>Nguyên nhân phổ biến gây ra khiếm thị:</strong> <br />
                - Bẩm Sinh: Một số người sinh ra đã bị khiếm thị do các dị tật
                bẩm sinh ở mắt hoặc hệ thần kinh. <br />
                - Bệnh Lý: Các bệnh như đục thủy tinh thể, tăng nhãn áp, thoái
                hóa điểm vàng, hoặc các bệnh lý khác về mắt có thể dẫn đến khiếm
                thị. <br />
                - Tai Nạn: Chấn thương mắt hoặc vùng đầu có thể gây tổn thương
                mắt nghiêm trọng, dẫn đến khiếm thị. <br />- Tuổi Tác: Tuổi già
                cũng là một nguyên nhân phổ biến, với các bệnh liên quan đến
                tuổi tác như thoái hóa điểm vàng hay đục thủy tinh thể.
              </p>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default News1Component;
