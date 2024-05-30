"use client";

const News3Component = (props: {}) => {
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
          <b
            style={{ textTransform: "uppercase" }}
            className="self-stretch relative text-[2.5rem] tracking-[0.48px] leading-[2.4rem] font-baloo-2 text-gray-300 mq900:text-[2rem] mq900:leading-[1.938rem] mq450:text-[1.5rem] mq450:leading-[1.438rem]"
          >
            NGƯỜI KHIẾM THỊ CÓ THỂ CẢM NHẬN MÀU ĐƯỢC KHÔNG?
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
          <img
            className="h-[38.875rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/LandingPage/OutstandingNews/news3.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.243rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-[1.875rem] text-gray-100 font-baloo-2">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.05rem] max-w-full mq900:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.468rem]">
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              Những gì một người khiếm thị có thể nhìn thấy phụ thuộc rất nhiều
              vào mức độ thị lực của họ. Một người bị khiếm thị hoàn toàn sẽ
              không thể nhìn thấy gì. Thế nhưng một người khiếm thị không hoàn
              toàn vẫn có thể nhìn thấy ánh sáng và thậm chí màu sắc và hình
              dạng, tất nhiên không quá rõ ràng.
            </h5>
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              Người bình thường thường nghĩ rằng người khiếm thị sẽ nhìn thấy
              giới toàn bộ là màu đen, giống như khi chúng ta nhắm mắt lại.
              Nhưng sự thật là khác xa như vậy. Mắt người bị khiếm thị hoàn toàn
              không có khả năng nhận thức sáng tối, không thấy được những gì
              xung quanh, tức bao gồm màu đen cũng không.
            </h5>
            <h5 className="text-justify m-0 self-stretch relative text-inherit tracking-[0.48px] leading-[2.188rem] font-normal font-inherit">
              Đặc biệt, với những người khiếm thị bẩm sinh, tức chưa bao giờ
              biết đến màu sắc thì họ càng không có gì để so sánh. Nói một cách
              đơn giản, họ không &quot;nhìn&quot; thấy gì, dù là khi mở mắt hay
              nhắm mắt. Hãy thử hình dung, mắt người khiếm thị nhìn thấy giống
              như những gì khuỷu tay của bạn nhìn thấy, tức là hoàn toàn không
              có gì cả.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default News3Component;
