import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect, useState } from "react";
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
import { CartItem, Product } from "../../../../../interfaces";
import { useAppSelector } from "@/store/store";
import CartItemCard from "@/components/Shop/CartItemCard";
import { loadCartItems, totalPriceSelector } from "@/store/features/cartSlice";

interface DataType {
  key: React.Key;
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
}

const CartComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = React.useState<DataType[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const router = useRouter();

  const totalPrice = useAppSelector(totalPriceSelector);

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

  useEffect(() => {
    localStorage.setItem("selectedCategories", JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    const savedSelectedItems = localStorage.getItem("selectedCategories");
    if (savedSelectedItems) {
      setSelectedItems(JSON.parse(savedSelectedItems));
    }
  }, []);

  const handleCheckboxChange = (
    productId: number,
    checked: boolean,
    quantity: number
  ) => {
    setSelectedItems((prevSelectedItems: any) => {
      if (quantity > 0) {
        if (checked) {
          return [...prevSelectedItems, productId];
        } else {
          return prevSelectedItems.filter((id: any) => id !== productId);
        }
      }
    });
  };

  // console.log(selectedItems);

  const checkedCategories = () => {
    if (selectedItems.length === 0) {
      return [];
    }

    const checked = selectedItems
      .flatMap((selected: any) => {
        return loadCartItems().find(
          (items) => items.product.categoryId === selected
        );
      })
      .filter((item) => item !== undefined);

    return checked;
  };

  // console.log(checkedCategories());

  const totalSelectedItems = () => {
    let total = 0;
    if (checkedCategories().length > 0) {
      return (total = checkedCategories().reduce(
        (total: number, items: any) =>
          (total += items?.product.priceIn * items?.quantity),
        0
      ));
    } else {
      return total;
    }
  };

  // console.log(totalSelectedItems());

  const paymentBtn = (cartItems: any) => {
    if (cartItems.length > 0 && selectedItems.length > 0) {
      return (
        <button
          className="w-[128px] h-[46px] flex items-center justify-center content-center bg-chocolate text-white font-baloo text-base rounded"
          onClick={() => navigateToPage(PATH_SHOP.payment)}
        >
          Thanh Toán
        </button>
      );
    } else {
      return (
        <button
          className="w-[128px] h-[46px] flex items-center justify-center content-center bg-zinc-400 text-white font-baloo text-base rounded "
          disabled
        >
          Thanh Toán
        </button>
      );
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
              <div className="qty">Số Lượng</div>
              <div className="total">Tổng Tiền</div>
              <div className="remove">Xóa</div>
            </div>
            {loadCartItems().length > 0 ? (
              <div className="cart-items p-3 box-border">
                {loadCartItems().map((item) => (
                  <CartItemCard
                    key={item.product.categoryId}
                    cartItem={item}
                    onCheckboxChange={handleCheckboxChange}
                    // onqtyChange={handleqtyChange}
                    checked={selectedItems.includes(item.product.categoryId)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex justify-center items-center content-center font-baloo-2 text-2xl ">
                Không có sản phẩm trong giỏ hàng của bạn
     
              </div>
            )}
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
                {formatPrice(totalSelectedItems() * 1000)}₫
              </div>
              {/* <button
                className="w-[128px] h-[46px] flex items-center justify-center content-center bg-chocolate text-white font-baloo text-base rounded"
                onClick={() => navigateToPage(PATH_SHOP.payment)}
              >
                Thanh Toán
              </button> */}
              {paymentBtn(loadCartItems())}
            </div>
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

export default CartComponent;
