import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useState } from "react";
import Loading from "@/components/Templates/Loading/Loading";
import categoryApi from "@/api/warehouse/categoryApi";
import { ClassNames } from "@emotion/react";
import { formatPrice } from "@/utils/formatPrice";
import "./cart.scss";
import ProductCardComponent from "@/components/Shop/ProductCard/ProductCardComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";

interface DataType {
  key: React.Key;
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
}

const CartComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = React.useState<DataType[]>([]);
  const [quantity, setQuantity] = React.useState<number>(0);
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

  const addQuantity = (quantity: any) => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = (quantity: any) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Giỏ Hàng" subTitle="Trang Chủ - Giỏ Hàng" />
      <div className="flex flex-col items-center content-center justify-center mt-2.5 max-h-max ">
        <div className="w-full min-h-max flex flex-col items-center content-center justify-center p-2 box-border gap-2">
          <div className="font-baloo text-9xl">Giỏ Hàng</div>
          <div className="border-[2px] border-solid border-zinc-300 w-[1296px] min-h-max rounded">
            <div className="titles font-baloo text-lg bg-zinc-300 items-center h-[50px] p-3 box-border">
              <div className="check"></div>
              <div className="product-title">Sản Phẩm</div>
              <div className="price">Giá Tiền</div>
              <div className="quantity">Số Lượng</div>
              <div className="total">Tổng Tiền</div>
              <div className="remove">Xóa</div>
            </div>
            <div className="cart-items p-3 box-border">
              {category?.map((cate) => (
                <div className="cart-item" key={cate.categoryId}>
                  <div className="cart-check">
                    <Checkbox />
                  </div>
                  <Link href={`${PATH_SHOP.productDetails(cate.categoryId)}`}>
                    <div className="cart-product">
                      <img src={cate.image} alt={cate.categoryName} />
                      <div>
                        <div className="font-baloo-2 text-lg text-zinc-400 font-semibold">
                          {cate.categoryName}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="cart-product-price font-baloo-2 font-semibold text-chocolate text-xl">
                    {formatPrice(cate.priceIn * 1000)}₫
                  </div>
                  <div className="cart-product-quantity">
                    <button
                      className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
                      onClick={() => addQuantity(quantity)}
                    >
                      +
                    </button>
                    <div className="flex items-center content-center text-chocolate text-xl">
                      {quantity}
                    </div>
                    <button
                      className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
                      onClick={() => reduceQuantity(quantity)}
                    >
                      -
                    </button>
                  </div>
                  <div className="cart-product-total font-baloo-2 font-semibold text-chocolate text-xl">
                    {formatPrice(cate.priceIn * quantity * 1000)}₫
                  </div>
                  <div className="cart-product-remove">
                    <button className="text-red-500">
                      {" "}
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between w-[1296px] box-border mt-1.5">
            <div
              className="flex items-center font-baloo-2 text-chocolate text-lg underline cursor-pointer"
              onClick={() => navigateToPage(PATH_SHOP.products)}
            >
              Tiếp tục mua sắm
            </div>
            <div className="flex flex-row gap-8 w-2/4 justify-between items-center ">
              <div className="font-baloo-2 text-black font-bold text-xl ml-20">
                Tổng tiền sản phẩm
              </div>
              <div className=" font-baloo-2 text-chocolate font-bold text-2xl">
                {formatPrice(225 * 1000)}₫
              </div>
              <button className="w-[128px] h-[46px] flex items-center justify-center bg-chocolate text-white font-baloo text-lg rounded">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[500px] mt-5 gap-2">
          <div className="flex justify-center items-center content-center font-baloo text-9xl ">
            Sản Phẩm Khác
          </div>
          <div className="grid grid-cols-4 col-auto gap-x-20 ">
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
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
