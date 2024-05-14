import PageTitle from "@/components/Molecules/PageTitle";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ConfigProvider, Radio } from "antd";
import useAppContext from "@/hooks/useAppContext";
import { Rate } from "antd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const OrderDetailsComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();

  return (
    <>
      <PageTitle
        mainTitle="Đơn Hàng"
        subTitle="Trang Chủ - Đơn Hàng - Chi Tiết"
      />
      <div className="flex flex-col items-center content-center justify-center mt-5 mb-5 max-h-max">
        <div className="w-3/4">
          <button
            className="flex flex-row gap-0.5"
            onClick={() => {
              window.history.back();
            }}
          >
            <div>
              <ArrowBackIosIcon style={{ fontSize: "10px" }} />
            </div>
            <div className="font-baloo-2 text-lg text-zinc-400">Quay Lại</div>
          </button>
        </div>

        <div className="w-[83rem] max-h-max flex flex-row justify-center gap-9 ">
          <div className="w-[420px] h-[508px] border-[2px] border-solid border-zinc-300 rounded flex flex-col gap-1 box-border py-4 pt-6 ">
            <div className="flex flex-col box-border pl-7 gap-5">
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Trạng Thái Đơn Hàng
                </div>
                <div className="font-baloo-2 text-lg text-green-500">
                  Hoàn thành
                </div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Lưu Ý Cho Đơn Hàng
                </div>
                <div className="font-baloo-2 text-lg text-zinc-400">
                  Shop chú ý gói đồ kĩ giúp em nhé ạ.
                </div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Phương Thức Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg text-zinc-400">
                  Ví VNPAY
                </div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Trạng Thái Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg text-green-500">
                  Đã hoàn thành
                </div>
              </div>
            </div>
            <div className="my-5">
              <hr className="border-[1px] border-zinc-500" />
            </div>

            <div className="flex flex-col pl-7 gap-2 font-baloo-2 text-lg text-zinc-500">
              <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày đặt hàng:</div>
                <div>28/04/2024</div>
              </div>
              <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày thanh toán:</div>
                <div>28/04/2024</div>
              </div>
              <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày nhận hàng:</div>
                <div>28/04/2024</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[400px] max-h-max mt-5">
            <div className="font-baloo-2 text-xl font-semibold">
              Chi Tiết Đơn Hàng
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

export default OrderDetailsComponent;
