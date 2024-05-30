"use client";
import Loading from "@/components/Templates/Loading/Loading";
import { CORE_INFORMATION } from "@/constants/CoreInformation";
import { getAboutPageImage } from "@/hooks/useFirebaseStorage";
import { useLayoutEffect, useState } from "react";

const AboutContentArea = (props: {}) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState<boolean>(false);

  const fetchImages = async () => {
    setImageList((imageList) => [...imageList, ""]);
    for (var i = 1; i <= 1; i++) {
      const url = await getAboutPageImage(i.toString());
      if (url != "") {
        setImageList((imageList) => [...imageList, url]);
      }
      if (i == 1) {
        setLoadingImages(true);
      }
    }
  };

  useLayoutEffect(() => {
    fetchImages();
  }, []);

  if (!loadingImages) {
    return (
      <>
        <Loading loading={true} />
      </>
    );
  }

  return (
    <>
      <section className="mb-10">
        <div className="relative w-full flex flex-row">
          <img
            className="absolute w-full h-full object-cover object-center"
            src={imageList.find((x) => x.includes(`aboutPageImage_1`)) ?? ""}
          />
          <div className="relative w-[calc(100%/3)] h-[60rem] flex flex-col z-50">
            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[40%]`}
            >
              <div
                className="absolute w-full h-full bg-black z-10"
                style={{ opacity: "80%" }}
              ></div>
              <div className="px-[35px] py-[35px] absolute w-full h-full z-20 text-white">
                <h1
                  style={{ fontWeight: "bolder" }}
                  className="pt-[10px] inline-block border-t-[5px] border-t-yellow-600 text-[2.3rem] font-baloo text-yellow-600"
                >
                  Sứ Mệnh Của Chúng Tôi
                </h1>
                <p className="text-justify font-baloo-2 text-[1.3rem]">
                  Tại{" "}
                  <strong className="text-yellow-600">
                    Loco - Love Connection,
                  </strong>{" "}
                  chúng tôi tin rằng nghệ thuật và tình người có thể hợp nhất để
                  tạo ra sức mạnh tối đa. Sứ mệnh của chúng tôi là mang đến
                  những món đồ thủ công chất lượng từ sản phẩm len và nhiều thể
                  loại khác đến cho mọi người đồng thời tạo ra{" "}
                  <strong className="text-yellow-600">
                    một nguồn hỗ trợ quý báu cho những người khiếm khuyết khó
                    khăn.
                  </strong>{" "}
                </p>
              </div>
            </div>
            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[30%]`}
            ></div>

            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[30%]`}
            ></div>
          </div>

          <div className="relative w-[calc(100%/3)] h-[60rem] flex flex-col z-50">
            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[60%]`}
            >
              <div
                className="absolute w-full h-full bg-black z-10"
                style={{ opacity: "80%" }}
              ></div>
              <div className="px-[35px] py-[35px] absolute w-full h-full z-20 text-white">
                <h1
                  style={{ fontWeight: "bolder" }}
                  className="pt-[10px] inline-block border-t-[5px] border-t-yellow-600 text-[2.3rem] font-baloo text-yellow-600"
                >
                  &quot;Trao Yêu Thương <br /> Tạo Giá Trị&quot;
                </h1>
                <p className="text-justify font-baloo-2 text-[1.3rem]">
                  Mỗi một sản phẩm được mua từ những vị khách quý đều sẽ đóng
                  góp{" "}
                  <strong className="text-yellow-600">
                    một phần lợi nhuận vào những hoạt động hỗ trợ cộng đồng
                    người khiếm khuyết.
                  </strong>{" "}
                  Quỹ này có thể được sử dụng để giúp đỡ bằng nhiều cách như
                  cung cấp các nguồn lực, đào tạo nghề hay tạo điều kiện cho họ
                  tham gia vào xã hội một cách tích cực và tự chủ hơn.{" "}
                </p>
                <p className="mt-2 text-justify font-baloo-2 text-[1.3rem]">
                  Mỗi một sản phẩm bạn ủng hộ đều là những{" "}
                  <strong className="text-yellow-600">
                    tia nắng ấm áp soi đường
                  </strong>{" "}
                  cho những người khó khăn hơn chúng ta.
                </p>
              </div>
            </div>

            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[40%]`}
            ></div>
          </div>

          <div className="relative w-[calc(100%/3)] h-[60rem] flex flex-col z-50">
            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[40%]`}
            >
              <div
                className="absolute w-full h-full bg-black z-10"
                style={{ opacity: "80%" }}
              ></div>
              <div className="px-[35px] py-[35px] absolute w-full h-full z-20 text-white">
                <h1
                  style={{ fontWeight: "bolder" }}
                  className="pt-[10px] inline-block border-t-[5px] border-t-yellow-600 text-[2.3rem] font-baloo text-yellow-600"
                >
                  Khám Phá & Ủng Hộ
                </h1>
                <p className="text-justify font-baloo-2 text-[1.3rem]">
                  Hãy cùng chúng tôi trải nghiệm và khám phá những sản phẩm thủ
                  công tinh xảo, từ những món đồ bằng len đến những sản phẩm hữu
                  ích khác. <br /> Nếu bạn có bất kì thắc mắc nào cần giải đáp,
                  xin bạn vui lòng liên hệ với chúng tôi qua{" "}
                  <strong className="text-yellow-600">
                    Email: {CORE_INFORMATION.MAIL_CONSTANT}
                  </strong>{" "}
                  hoặc gọi đến{" "}
                  <strong className="text-yellow-600">
                    Số điện thoại:{" "}
                    <span className="ml-1">
                      {CORE_INFORMATION.PHONE_CONSTANT_DISPLAY}
                    </span>
                  </strong>{" "}
                </p>
              </div>
            </div>

            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[30%]`}
            ></div>

            <div
              className={`w-full overflow-hidden border-[3px] border-opacity-65 border-double border-white relative h-[30%]`}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContentArea;
