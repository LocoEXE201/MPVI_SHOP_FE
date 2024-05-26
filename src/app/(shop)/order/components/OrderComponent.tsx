import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Templates/Loading/Loading";
import categoryApi from "@/api/warehouse/categoryApi";
import { formatPrice } from "@/utils/formatPrice";
import "./order.scss";
import ProductCardComponent from "@/components/Shop/ProductCard/ProductCardComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Pagination from "@mui/material/Pagination";
import shopApi from "@/api/shop/shopApi";
import OrderItemCard from "@/components/Shop/OrderItemCard";

interface DataType {
  key: React.Key;
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
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
  shpFOrderDetails: object;
  soldBy: null;
  strategyId: number;
  total: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});
const OrderComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = React.useState<DataType[]>([]);
  const [orders, setOrders] = React.useState<Orders[]>([]);

  const loadUserInformation = () => {
    const user = localStorage.getItem("USER_INFO");
    return user ? JSON.parse(user) : {};
  };
  const router = useRouter();
  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

  const getAllCategory: any = async () => {
    try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
        // console.log(response.data);
        disableLoading();
        setCategory(response.data.result);
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

  const getOrderByCondition: any = async (id: any) => {
    try {
      enableLoading();
      const response = await shopApi.getOrderByCondition(id);
      if (response.data.isSuccess === true) {
        disableLoading();
        setOrders(response.data.result.$values);
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


  const checkedOrders = orders.map((order: any) => {
    return {
      total: order.total,
      orders: order.shpFOrderDetails.$values,
      orderStatus: order.orderStatus,
      customerId: order.customerId,
      orderId: order.orderId
    };
  });

  // console.log(checkedOrders);

  const filterCategories = checkedOrders.flatMap((orders) => {
    return orders.orders.flatMap((ord: any) => {
      return category.find((cate) => cate.categoryId === ord.categoryId);
    });
  });

  const uniqueCategories = Array.from(new Set(filterCategories));
  // console.log(uniqueCategories);

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Đơn Hàng" subTitle="Trang Chủ - Đơn Hàng" />
      <div className="flex flex-col items-center content-center justify-center mt-2.5 max-h-max ">
        <div className="w-full min-h-max flex flex-col items-center content-center justify-center p-2 box-border gap-2">
          <div className="font-baloo text-9xl">Đơn Hàng</div>
          <div className="border-[2px] border-solid border-zinc-300 w-[1296px] min-h-max rounded">
            <div className="titles font-baloo text-lg bg-zinc-300 items-center h-[50px] p-4 box-border">
              <div className="product-title">Đơn Hàng</div>
              <div className="total">Tổng Tiền</div>
              <div className="payment">Tình Trạng Thanh Toán</div>
              <div className="status">Trạng Thái</div>
              <div className="detail">Chi Tiết</div>
            </div>
            <div className="order-items p-4 box-border">
              {checkedOrders.map((orders: any, index) => {
                return (
                  <OrderItemCard
                    key={index}
                    ordersList={orders}
                    categories={uniqueCategories}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-end w-[1296px] box-border mt-1.5 ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={3}
                variant="outlined"
                shape="rounded"
                size="large"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col h-full mb-8 mt-5 gap-5">
          <div className="flex justify-center items-center content-center font-baloo text-9xl ">
            Sản Phẩm Khác
          </div>
          <div className="grid grid-cols-4 col-auto gap-x-14 ">
            {category?.map((cate: any, index) => {
              if (index < 4) {
                return (
                  <ProductCardComponent
                    key={index}
                    categoryId={cate.categoryId}
                    categoryName={cate.categoryName}
                    image={cate.image}
                    priceIn={cate.priceIn}
                    rate={cate.rate}
                    superCategoryName={cate.superCategory.superCategoryName}
                    category={cate}
                  />
                );
              }
            })}
          </div>
          <div className="flex justify-end">
            <button
              className="flex flex-row justify-center items-center content-center w-[132px] h-[49px] bg-chocolate text-white rounded font-baloo-2 text-base font-bold"
              onClick={() => navigateToPage(PATH_SHOP.products)}
            >
              <div className="flex flex-row justify-center items-center content-center ml-3 ">
                Xem Thêm
              </div>
              <img
                src="/Icons/arrow.svg"
                className="text-white w-[40px] h-[40px]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComponent;
