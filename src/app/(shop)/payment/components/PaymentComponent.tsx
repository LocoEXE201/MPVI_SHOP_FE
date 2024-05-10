import PageTitle from "@/components/Molecules/PageTitle";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ConfigProvider, Radio } from "antd";
import useAppContext from "@/hooks/useAppContext";
import { Rate } from "antd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PaymentComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [delivery, setDelivery] = useState("Normal");
  const [method, setMethod] = useState("COD");

  const onChange = (e: RadioChangeEvent) => {
    e.preventDefault();
    console.log("radio checked", e.target.value);
    setDelivery(e.target.value);
  };

  const onChangePaymentMethod = (e: RadioChangeEvent) => {
    e.preventDefault();
    console.log("Payment Method:", e.target.value);
    setMethod(e.target.value);
  };

  return (
    <>
      <PageTitle
        mainTitle="Thanh Toán"
        subTitle="Trang Chủ - Giỏ Hàng - Thanh Toán"
      />
      <div className="flex flex-col items-center content-center justify-center mt-5 mb-5 max-h-max">
        <div className="w-full pl-3 ">
          <button
            className="flex flex-row gap-0.5"
            onClick={() => {
              window.history.back();
            }}
          >
            <div>
              <ArrowBackIosIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Quay Lại</div>
          </button>
        </div>

        <div className="w-[83rem] max-h-max flex flex-row justify-center gap-9 ">
          <div className="w-[420px] h-[508px] border-[2px] border-solid border-zinc-300 rounded flex flex-col justify-center content-center gap-3 pl-7 pr-3 py-5 ">
            <div className="">
              <div className="font-baloo-2 font-semibold text-xl">
                Phương Thức Vận Chuyển
              </div>
              <div className="font-baloo-2 text-zinc-400 text-base">
                Xin vui lòng lựa chọn phương thức giao hàng bạn muốn.
              </div>
              <div className="flex flex-col justify-between ">
                <ConfigProvider
                  theme={{
                    token: {
                      /* here is your global tokens */
                      colorBorder: "gray",
                      colorPrimary: "#CB6F04",
                    },
                  }}
                >
                  <Radio.Group
                    onChange={onChange}
                    value={delivery}
                    className="flex flex-row w-[370px]"
                  >
                    <Radio value={"Normal"} className="" checked>
                      <div className="flex flex-col justify-center">
                        <div className="font-baloo-2 text-lg font-semibold">
                          Giao Hàng Thường
                        </div>
                        <div className="font-baloo-2 text-lg text-zinc-500">
                          ₫10.000
                        </div>
                      </div>
                    </Radio>
                    <Radio value={"Fast"}>
                      {" "}
                      <div className="flex flex-col justify-center">
                        <div className="font-baloo-2 text-lg font-semibold">
                          Giao Hàng Nhanh
                        </div>
                        <div className="font-baloo-2 text-lg text-zinc-500">
                          ₫35.000
                        </div>
                      </div>
                    </Radio>
                  </Radio.Group>
                </ConfigProvider>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-baloo-2 font-semibold text-xl">
                Thêm lưu ý cho ₫ơn hàng (Nếu có)
              </div>
              <div>
                <textarea
                  placeholder="Nhập lưu ý của bạn ở ₫ây..."
                  className="border-[1px] border-solid border-zinc-400 rounded w-[311px] h-[136px] p-2 text-zinc-500 hover:border-orange-500"
                />
              </div>
            </div>
            <div>
              <div className="font-baloo-2 font-semibold text-xl">
                Phương Thức Thanh Toán
              </div>
              <div className="font-baloo-2 text-zinc-400 text-base">
                Xin vui lòng lựa chọn phương thức thanh toán bạn muốn.
              </div>
              <div>
                <ConfigProvider
                  theme={{
                    token: {
                      /* here is your global tokens */
                      colorBorder: "gray",
                      colorPrimary: "#CB6F04",
                    },
                  }}
                >
                  <Radio.Group
                    onChange={onChangePaymentMethod}
                    value={method}
                    className="flex flex-col gap-2"
                  >
                    <Radio value={"COD"} checked>
                      <div className="font-baloo-2 text-lg text-zinc-500 font-medium">
                        Thanh toán khi nhận hàng
                      </div>
                    </Radio>
                    <Radio value={"VNPAY"}>
                      <div className="font-baloo-2 text-lg text-zinc-500 font-medium">
                        Ví VNPAY
                      </div>
                    </Radio>
                  </Radio.Group>
                </ConfigProvider>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[400px] max-h-max mt-5">
            <div className="font-baloo-2 text-xl font-semibold">
              Chi Tiết ₫ơn Hàng
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 w-full">
                <img
                  src="/mock/image 8.png"
                  className="object-contain rounded"
                />

                <div className="w-full">
                  <div className="font-baloo-2 text-lg">
                    Gấu bông len thủ công
                  </div>
                  <Rate
                    className="text-sm text-red-400"
                    allowHalf
                    disabled
                    defaultValue={5}
                  />
                  <div className="flex flex-row items-center content-center justify-between ">
                    <div className="flex flex-row items-center content-center gap-1.5">
                      <div className="font-poppins text-lg text-chocolate font-semibold">
                        ₫45.000
                      </div>
                      <div className="font-poppins text-sm line-through text-zinc-400">
                        ₫60.000
                      </div>
                    </div>
                    <div className="font-baloo-2 text-xl">x 1</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full">
                <img
                  src="/mock/image 8.png"
                  className="object-contain rounded"
                />

                <div className="w-full">
                  <div className="font-baloo-2 text-lg">
                    Gấu bông len thủ công
                  </div>
                  <Rate
                    className="text-sm text-red-400"
                    allowHalf
                    disabled
                    defaultValue={5}
                  />
                  <div className="flex flex-row items-center content-center justify-between ">
                    <div className="flex flex-row items-center content-center gap-1.5">
                      <div className="font-poppins text-lg text-chocolate font-semibold">
                        ₫45.000
                      </div>
                      <div className="font-poppins text-sm line-through text-zinc-400">
                        ₫60.000
                      </div>
                    </div>
                    <div className="font-baloo-2 text-xl">x 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Tổng Tiền Sản Phẩm
                </div>
                <div className="text-lg font-baloo-2"> ₫90.000</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Phí Vận Chuyển
                </div>
                <div className="text-lg font-baloo-2">₫10.000</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="font-baloo-2 text-lg font-semibold">
                  Tổng Tiền Cần Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg font-semibold">
                  ₫100.000
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <button className="w-[130px] h-[40px] flex justify-center items-center content-center bg-chocolate text-lg text-white font-bold rounded">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentComponent;
