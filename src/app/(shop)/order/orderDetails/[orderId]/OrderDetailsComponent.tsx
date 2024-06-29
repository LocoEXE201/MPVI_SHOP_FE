import PageTitle from "@/components/Molecules/PageTitle";
import React, { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ConfigProvider, Radio } from "antd";
import useAppContext from "@/hooks/useAppContext";
import { Rate } from "antd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "next/navigation";
import shopApi from "@/api/shop/shopApi";
import categoryApi from "@/api/warehouse/categoryApi";
import { formatPrice } from "@/utils/formatPrice";
import Loading from "@/components/Templates/Loading/Loading";
import { formatDate_DD_MM_YYYY } from "@/utils/formatDate";
import FeedbackModal from "@/components/Shop/FeedbackModal";

interface OrderItems {
  $id: string;
  categoryId: number;
  order: {};
  orderDetailId: number;
  orderId: number;
  price: number;
  quantity: number;
}

interface shpFOrderDetails {
  $id: number;
  $values: OrderItems[];
}

interface Orders {
  $id: string;
  createdOn: string;
  customerId: string;
  notes: string;
  orderId: number;
  orderStatus: string;
  paymentResponse: null;
  paymentResponseId: number;
  paymentStatus: null;
  shpFOrderDetails: shpFOrderDetails;
  soldBy: null;
  strategyId: number;
  total: number;
}

interface Category {
  key: React.Key;
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
}

const OrderDetailsComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const params = useParams();
  const orderId = params.orderId;
  const [category, setCategory] = React.useState<Category[]>([]);
  const [orders, setOrders] = React.useState<Orders[]>([]);

  const loadUserInformation = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("USER_INFO");
      return user ? JSON.parse(user) : {};
    }
    return {};
  };

  const getOrderByCondition: any = async (id: any) => {
    try {
      enableLoading();
      const response = await shopApi.getOrderByCondition(id);
      if (response.data.isSuccess === true) {
        setOrders(response.data.result.$values);
        disableLoading();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    const user = loadUserInformation();
    if (user.id) {
      getOrderByCondition(user.id);
    }
  }, []);

  const getAllCategory: any = async () => {
    try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
        // console.log(response.data);

        setCategory(response.data.result);
        disableLoading();
      } else {
        console.log("Failed to fetch data. Status code:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);

  // console.log(orders);

  const orderDetailsItems = orders.find(
    (order) => Number(order.orderId) === Number(orderId)
  );

  // console.log(orderDetailsItems);

  const categoryItem = orderDetailsItems?.shpFOrderDetails.$values.map(
    (item) => ({
      product: category.find(
        (cate) => Number(item.categoryId) === Number(cate.categoryId)
      ),
      quantity: item.quantity,
      orderDetailId: item.orderDetailId,
    })
  );

  // console.log(categoryItem);

  const paymentMethod = (method: string | undefined) => {
    return method === "VNPay" ? (
      <div className="font-baloo-2 text-xl text-zinc-400">Ví VNPAY</div>
    ) : (
      <div className="font-baloo-2 text-xl text-zinc-400">
        Thanh toán khi nhận hàng
      </div>
    );
  };

  const orderStatus = (orderStatus: any) => {
    switch (orderStatus) {
      case "VNPay_Pending":
        return (
          <div className="font-baloo-2 text-lg text-yellow-400">
            Đang xử lí
          </div>
        );
      case "VNPay_Cancelled":
        return <div className="font-baloo-2 text-lg text-red-500">Đã hủy</div>;
      case "VNPay_Payment_Successfully":
        return (
          <div className="font-baloo-2 text-lg text-green-500">
            Đã thanh toán
          </div>
        );
      case "VNPay_Arrived":
        return (
          <div className="font-baloo-2 text-lg text-green-300">
            Đã tới nơi vận chuyển
          </div>
        );
      case "VNPay_Completed":
        return (
          <div className="font-baloo-2 text-lg text-green-500">Hoàn thành</div>
        );
      case "VNPay_Refund":
        return (
          <div className="font-baloo-2 text-lg text-zinc-500">Hoàn Tiền</div>
        );

      case "Shipcod_Pending":
        return (
          <div className="font-baloo-2 text-lg text-yellow-400">
            Đang xử lí
          </div>
        );
      case "Shipcod_Cancelled":
        return <div className="font-baloo-2 text-lg text-red-500">Đã hủy</div>;
      case "Shipcod_Payment_Successfully":
        return (
          <div className="font-baloo-2 text-lg text-green-500">
            Đã thanh toán
          </div>
        );
      case "Shipcod_Arrived":
        return (
          <div className="font-baloo-2 text-lg text-green-300">
            Đã tới nơi vận chuyển
          </div>
        );
      case "Shipcod_Completed":
        return (
          <div className="font-baloo-2 text-lg text-green-500">Hoàn thành</div>
        );
      case "Shipcod_Refund":
        return (
          <div className="font-baloo-2 text-lg text-zinc-500">Hoàn Tiền</div>
        );
      default:
        return (
          <div className="font-baloo-2 text-lg text-yellow-400">
            Đang xử lí
          </div>
        );
    }
  };
  return (
    <>
      <Loading loading={isLoading} />
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

        <div className="w-full max-h-max flex flex-row justify-center gap-9 mb-6">
          <div className="w-4/12 h-full border-[2px] border-solid border-zinc-300 rounded flex flex-col gap-1 box-border py-4 pt-6 ">
            <div className="flex flex-col box-border pl-7 gap-5">
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Trạng Thái Đơn Hàng
                </div>
                <div>{orderStatus(orderDetailsItems?.orderStatus)}</div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Lưu Ý Cho Đơn Hàng
                </div>
                <div className="font-baloo-2 text-lg text-zinc-400">
                  {orderDetailsItems?.notes
                    ? orderDetailsItems?.notes
                    : "Không"}
                </div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Phương Thức Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg text-zinc-400">
                  {paymentMethod(orderDetailsItems?.orderStatus.split("_")[0])}
                </div>
              </div>
              <div>
                <div className="font-baloo-2 font-semibold text-xl">
                  Trạng Thái Thanh Toán
                </div>
                <div>{orderStatus(orderDetailsItems?.paymentStatus)}</div>
              </div>
            </div>
            <div className="my-5">
              <hr className="border-[1px] border-zinc-500" />
            </div>

            <div className="flex flex-col pl-7 gap-2 font-baloo-2 text-lg text-zinc-500">
              <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày đặt hàng:</div>
                <div>
                  {formatDate_DD_MM_YYYY(
                    orderDetailsItems?.createdOn
                      ? orderDetailsItems?.createdOn
                      : ""
                  )}
                </div>
              </div>
              {/* <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày thanh toán:</div>
                <div> {formatDate_DD_MM_YYYY("")}</div>
              </div>
              <div className="flex flex-row gap-1">
                <div className="font-bold">Ngày nhận hàng:</div>
                <div>{formatDate_DD_MM_YYYY("")}</div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[400px] max-h-max mt-5">
            <div className="font-baloo-2 text-xl font-semibold">
              Chi Tiết Đơn Hàng
            </div>
            <div className="flex flex-col gap-4">
              {categoryItem?.map((cate: any, index) => {
                return (
                  <div className="flex flex-row gap-3 w-full" key={index}>
                    <img
                      src={cate?.product?.image}
                      className="object-contain rounded w-[100px]"
                    />

                    <div className="w-full">
                      <div className="font-baloo-2 text-lg">
                        {cate?.product?.categoryName}
                      </div>
                      <Rate
                        className="text-sm text-red-400"
                        allowHalf
                        disabled
                        defaultValue={cate?.product?.rate}
                      />
                      <div className="flex flex-row items-center content-center justify-between ">
                        <div className="flex flex-row items-center content-center gap-1.5">
                          <div className="font-poppins text-lg text-chocolate font-semibold">
                            ₫{formatPrice(cate?.product?.priceSold)}
                          </div>
                          {/* <div className="font-poppins text-sm line-through text-zinc-400">
                            ₫{formatPrice(cate?.product?.priceIn)}
                          </div> */}
                        </div>
                        <div className="font-baloo-2 text-xl">
                          x {cate?.quantity}
                        </div>
                        {/* <button className="font-baloo-2 text-base text-orange-400 font-semibold border-[2px] border-solid border-orange-400 px-2 py-0.5 rounded">
                          Đánh giá
                        </button> */}

                        {orderDetailsItems?.orderStatus === "VNPay_Completed" ||
                        orderDetailsItems?.orderStatus ===
                          "Shipcod_Completed" ? (
                          <FeedbackModal
                            categoryId={cate?.product?.categoryId}
                            orderDetailId={cate.orderDetailId}
                          />
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Tổng Tiền Sản Phẩm
                </div>
                <div className="text-lg font-baloo-2">
                  ₫
                  {formatPrice(
                    orderDetailsItems?.total ? orderDetailsItems?.total : 0
                  )}
                </div>
              </div>
              {/* <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Phí Vận Chuyển
                </div>
                <div className="text-lg font-baloo-2">₫10.000</div>
              </div> */}
              <div className="flex flex-row justify-between">
                <div className="font-baloo-2 text-lg font-semibold">
                  Tổng Tiền Cần Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg font-semibold">
                  ₫
                  {formatPrice(
                    orderDetailsItems?.total ? orderDetailsItems?.total : 0
                  )}
                </div>
              </div>
            </div>
            {/* <div className="flex justify-end ">
              <button className="w-[130px] h-[40px] flex justify-center items-center content-center bg-chocolate text-lg text-white font-bold rounded">
                Thanh Toán
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsComponent;
