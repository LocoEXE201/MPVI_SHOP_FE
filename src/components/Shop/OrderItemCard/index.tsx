import React from "react";
import "./orderItem.scss";
import { useRouter } from "next/navigation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "@/utils/formatPrice";

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

  //   console.log(ordersList?.orders[0]?.categoryId);

  const item = categories.find(
    (cate) => cate.categoryId === ordersList?.orders[0]?.categoryId
  );

  const numberOfOtherProduct = () => {
    if (ordersList?.orders.length - 1 > 0) {
      return <div>+{ordersList?.orders.length - 1} sản phẩm khác</div>;
    } else {
      return <div></div>;
    }
  };

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
          {formatPrice(ordersList.total * 1000)}₫
        </div>
        <div className="order-product-payment">
          <div className="font-baloo-2 text-xl text-zinc-400">
            Thanh toán khi nhận hàng
          </div>
        </div>
        <div className="order-product-status ">
          <div className="font-baloo-2 text-xl text-yellow-500">
            Đang vận chuyển
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
