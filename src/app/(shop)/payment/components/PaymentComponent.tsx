import PageTitle from "@/components/Molecules/PageTitle";
import React, { SetStateAction, useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { ConfigProvider, Radio } from "antd";
import useAppContext from "@/hooks/useAppContext";
import { Rate } from "antd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CartItem } from "../../../../../interfaces";
import { loadCartItems } from "@/store/features/cartSlice";
import { formatPrice } from "@/utils/formatPrice";
import shopApi from "@/api/shop/shopApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import Loading from "@/components/Templates/Loading/Loading";
import CusInfoOfOrderModal from "@/components/Shop/CusInfoOfOrderModal";
import customerApi from "@/api/shop/customerApi";

interface Address {
  id: number;
  phone: string;
  name: string;
  address: string;
}

const PaymentComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [delivery, setDelivery] = useState("Normal");
  const [method, setMethod] = useState("ShipCod");
  const [note, setNote] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");

  const router = useRouter();
  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

  const loadSelectedItems = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("selectedCategories");
      return data ? JSON.parse(data) : [];
    }
    return [];
  };

  const loadUserInformation = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("USER_INFO");
      return user ? JSON.parse(user) : {};
    }
    return {};
  };

  const checkedCategories = () => {
    const checked = loadSelectedItems()
      ?.map((selected: any) => {
        return loadCartItems().find(
          (items) => items.product.categoryId === selected
        );
      })
      .filter((item: any) => item !== undefined);

    return checked;
  };

  const totalPrice = checkedCategories().reduce(
    (total: number, curr: any) =>
      (total += curr?.quantity * curr?.product.priceSold),
    0
  );

  const onChange = (e: RadioChangeEvent) => {
    e.preventDefault();
    console.log("radio checked", e.target.value);
    setDelivery(e.target.value);
  };

  const shippingPrice = (delivery: string) => {
    if (delivery === "Normal") {
      return 10000;
    } else {
      return 35000;
    }
  };

  const onNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const onChangePaymentMethod = (e: RadioChangeEvent) => {
    e.preventDefault();
    console.log("Payment Method:", e.target.value);
    setMethod(e.target.value);
  };
  const paymentItems = () => {
    let items = [];
    if (checkedCategories().length > 0) {
      const payment = checkedCategories().map((pm: any) => ({
        categoryId: pm.product.categoryId,
        quantity: pm.quantity,
        price: pm.product.priceSold,
      }));
      return (items = [...payment]);
    }
  };

  // console.log(paymentItems());

  const fetchCreateAddress = async () => {
    try {
      enableLoading();
      const response = await customerApi.createAddress({
        customer_id: loadUserInformation().id,
        infors: [
          {
            phone: receiverPhoneNumber,
            name: receiverName,
            address: receiverAddress,
          },
        ],
      });
      console.log(response.data);
      Swal.fire({
        icon: response.data.isSuccess ? "success" : "error",
        title: response.data.isSuccess
          ? "Thông tin của bạn đã được lưu."
          : "Thông tin của bạn chưa được lưu. Thử lại!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
      return response.data.result.infor;
    } catch (error) {
      enableLoading();
      Swal.fire({
        icon: "error",
        title: "Đã có sự cố xảy ra. Vui lòng thử lại!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
    }
  };

  const handleCreateNewAddress = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await fetchCreateAddress();
    console.log(response.infor);
    return response;
  };

  const createOrder = () => {
    return {
      cartHeader: {
        customerId: loadUserInformation().id,
        receiverName: receiverName,
        receiverAddress: receiverAddress,
        receiverPhoneNumber: receiverPhoneNumber,
        total: totalPrice + shippingPrice(delivery),
        notes: note,
      },
      cartDetails: paymentItems(),
    };
  };

  console.log(createOrder());

  // console.log(paymentItems(checkedCategories()));

  const fetchOrder = async (data: any, method: string) => {
    try {
      enableLoading();
      const response = await shopApi.createOrder(method, data);
      console.log(response.data);
      Swal.fire({
        icon: response.data.isSuccess ? "success" : "error",
        title: response.data.isSuccess
          ? "Bạn đã đặt hàng thành công"
          : "Đặt hàng không thành công. Thử lại nào!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
      return {
        $id: `${response.data.result.$id}`,
        createdOn: `${response.data.result.createdOn}`,
        customerId: `${response.data.result.customerId}`,
        notes: `${response.data.result.note}`,
        orderDetailsDTOs: paymentItems(),
        orderId: `${response.data.result.orderId}`,
        orderStatus: `${response.data.result.orderStatus}`,
        paymentResponseId: `${response.data.result.paymentResponseId}`,
        paymentStatus: `${response.data.result.paymentStatus}`,
        soldBy: `${response.data.result.soldBy}`,
        strategyId: `${response.data.result.strategyId}`,
        total: `${response.data.result.total}`,
      };
    } catch (error) {
      enableLoading();
      Swal.fire({
        icon: "error",
        title: "Đã xảy ra sự cố khi đặt hàng. Vui lòng thử lại!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
    }
  };

  const fetchPayment = async (data: any) => {
    try {
      const response = await shopApi.createPaymentUrl(data);
      console.log(response.data);
      if (response.data.isSuccess === true) {
        Swal.fire({
          title: "Chuyển qua VNPAY",
          icon: "success",
          showConfirmButton: false,
        });
        window.location.href = response.data.result;
      } else {
        Swal.fire({
          title: "Không thanh toán được bằng VNPAY. Vui lòng thử lại!",
          icon: "error",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đã xảy ra sự cố. Vui lòng thử lại!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
    }
  };

  const handleCreateOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const order = createOrder();
    // console.log(order);
    if (order.cartDetails?.length ? order.cartDetails?.length : 0 > 0) {
      const result = await fetchOrder(order, method);
      // console.log("abcd");
      if (method === "VnPay" && result) {
        await fetchPayment(result);
      }
      localStorage.removeItem("cartItems");
      // navigateToPage(PATH_SHOP.order);
      window.location.href = PATH_SHOP.order;
      // window.location.reload(); // Remove this line
    }
  };

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle
        mainTitle="Thanh Toán"
        subTitle="Trang Chủ - Giỏ Hàng - Thanh Toán"
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
                Thêm lưu ý cho đơn hàng (Nếu có)
              </div>
              <div>
                <textarea
                  placeholder="Nhập lưu ý của bạn ở đây..."
                  className="border-[1px] border-solid border-zinc-400 rounded w-[311px] h-[136px] p-2 hover:border-orange-500 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                  onChange={(e) => onNoteChange(e)}
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
                    <Radio value={"ShipCod"} checked>
                      <div className="font-baloo-2 text-lg text-zinc-500 font-medium">
                        Thanh toán khi nhận hàng
                      </div>
                    </Radio>
                    <Radio value={"VnPay"}>
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
              Chi Tiết Đơn Hàng
            </div>
            {checkedCategories().length > 0 ? (
              <div className="flex flex-col gap-4">
                {checkedCategories().map((cate: any, index: number) => (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Không còn sản phẩm trong giỏ hàng</div>
            )}

            <div className="w-full flex flex-col gap-1">
              <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Tổng Tiền Sản Phẩm
                </div>
                <div className="text-lg font-baloo-2">
                  {" "}
                  ₫{formatPrice(totalPrice)}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-lg text-zinc-400 font-baloo-2">
                  Phí Vận Chuyển
                </div>
                <div className="text-lg font-baloo-2">
                  ₫{formatPrice(shippingPrice(delivery))}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="font-baloo-2 text-lg font-semibold">
                  Tổng Tiền Cần Thanh Toán
                </div>
                <div className="font-baloo-2 text-lg font-semibold">
                  đ{formatPrice(totalPrice + shippingPrice(delivery))}
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              {/* <button
                className="w-[130px] h-[40px] flex justify-center items-center content-center bg-chocolate text-lg text-white font-bold rounded"
                onClick={handleCreateOrder}
              >
                Thanh Toán
              </button> */}
              <CusInfoOfOrderModal
                setReceiverName={setReceiverName}
                setReceiverAddress={setReceiverAddress}
                setReceiverPhoneNumber={setReceiverPhoneNumber}
                handleCreateOrder={handleCreateOrder}
                handleCreateNewAddress={handleCreateNewAddress}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentComponent;
