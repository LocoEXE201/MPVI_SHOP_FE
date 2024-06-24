import React from "react";
import "./orderItem.scss";
import { useRouter } from "next/navigation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "@/utils/formatPrice";
import FeedbackModal from "../FeedbackModal";

interface Order {
  categoryId: number;
  // other properties of Order
}

interface OrdersList {
  total: number;
  orders: Order[];
  orderStatus: string;
  customerId: string;
  orderId: number;
}

interface Category {
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
}

interface OrderItemCard {
  ordersList: OrdersList;
  categories: Category[];
}

const OrderItemCard = ({ ordersList, categories }: OrderItemCard) => {
  const router = useRouter();
  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

  const item = categories.find(
    (cate: any) => cate?.categoryId === ordersList?.orders[0]?.categoryId
  );

  const numberOfOtherProduct = () => {
    if (ordersList?.orders.length - 1 > 0) {
      return <div>+{ordersList?.orders.length - 1} sản phẩm khác</div>;
    } else {
      return <div></div>;
    }
  };

  const orderStatus = (orderStatus: any) => {
    switch (orderStatus) {
      case "VNPay_Pending":
        return (
          <div className="font-baloo-2 text-lg text-yellow-400">
            Đang vận chuyển
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
            Đang vận chuyển
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
            Đang vận chuyển
          </div>
        );
    }
  };

  const paymentMethod = (method: string) => {
    return method === "VNPay" ? (
      <div className="font-baloo-2 text-xl text-green-500">Đã thanh toán</div>
    ) : (
      <div className="font-baloo-2 text-xl text-zinc-400">
        Thanh toán khi nhận hàng
      </div>
    );
  };

  const method = ordersList.orderStatus.split("_")[0];
  // console.log(method);

  return (
    <div>
      <div className="order-item">
        <div className="order-product">
          <img
            src={item?.image}
            alt="product image"
            className="object-contain rounded"
          />
          <div>
            <div className=" w-[200px] font-baloo-2 text-xl">
              {item?.categoryName}
            </div>
            <div className="font-baloo-2 text-lg text-zinc-400">
              {numberOfOtherProduct()}
            </div>
          </div>
        </div>
        <div className="order-product-total font-baloo-2 font-semibold text-chocolate text-xl">
          {formatPrice(ordersList.total)}₫
        </div>
        <div className="order-product-payment">
          <div className="font-baloo-2 text-xl text-zinc-400">
            {paymentMethod(method)}
          </div>
        </div>
        <div className="order-product-status ">
          <div className="font-baloo-2 text-xl text-yellow-500">
            {orderStatus(ordersList.orderStatus)}
          </div>
        </div>
        <div className="order-product-detail">
          <button
            onClick={() =>
              navigateToPage(PATH_SHOP.orderDetails(ordersList.orderId))
            }
          >
            <div>Xem chi tiết</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
