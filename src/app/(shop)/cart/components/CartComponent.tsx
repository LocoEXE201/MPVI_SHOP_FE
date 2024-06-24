import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Templates/Loading/Loading";
import categoryApi from "@/api/warehouse/categoryApi";
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
  priceSold: number;
  rate: number;
  superCategoryName: string;
}

const CartComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = useState<DataType[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const router = useRouter();

  const totalPrice = useAppSelector(totalPriceSelector);

  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

  const getAllCategory = async () => {
    try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
        disableLoading();
        setCategory(response.data.result);
      } else {
        console.log("Failed to fetch data. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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

  const checkedCategories = () => {
    if (selectedItems.length === 0) {
      return [];
    }

    const checked = selectedItems
      .flatMap((selected) => {
        return loadCartItems().find(
          (items) => items.product.categoryId === selected
        );
      })
      .filter((item) => item !== undefined);

    return checked;
  };

  const totalSelectedItems = () => {
    return checkedCategories().reduce((total, item) => {
      const priceSold = item?.product?.priceSold ?? 0;
      const quantity = item?.quantity ?? 0;
      return total + priceSold * quantity;
    }, 0);
  };

  const paymentBtn = (cartItems: any) => {
    if (cartItems.length > 0 && selectedItems.length > 0) {
      return (
        <button
          className="w-[128px] h-[46px] flex items-center justify-center bg-chocolate text-white font-baloo text-base rounded"
          onClick={() => navigateToPage(PATH_SHOP.payment)}
        >
          Thanh Toán
        </button>
      );
    } else {
      return (
        <button
          className="w-[128px] h-[46px] flex items-center justify-center bg-zinc-400 text-white font-baloo text-base rounded "
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
      <div className="flex flex-col items-center justify-center mt-2.5 w-full max-h-max px-4">
        <div className="w-full flex flex-col items-center justify-center p-2 box-border gap-2">
          <div className="font-baloo text-3xl md:text-5xl">Giỏ Hàng</div>
          <div className="border-[2px] border-solid border-zinc-300 w-full lg:w-[1296px] rounded">
            <div className="titles font-baloo text-lg bg-zinc-300 flex items-center h-[50px] p-3 box-border">
              <div className="check flex-1"></div>
              <div className="product-title flex-3">Sản Phẩm</div>
              <div className="price flex-1">Giá Tiền</div>
              <div className="qty flex-1">Số Lượng</div>
              <div className="total flex-1">Tổng Tiền</div>
              <div className="remove flex-1">Xóa</div>
            </div>
            {loadCartItems().length > 0 ? (
              <div className="cart-items p-3 box-border">
                {loadCartItems().map((item) => (
                  <CartItemCard
                    key={item.product.categoryId}
                    cartItem={item}
                    onCheckboxChange={handleCheckboxChange}
                    checked={selectedItems.includes(item.product.categoryId)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center font-baloo-2 text-2xl">
                Không có sản phẩm trong giỏ hàng của bạn
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full lg:w-[1296px] box-border mt-1.5">
            <div
              className="flex items-center font-baloo-2 text-chocolate text-lg underline cursor-pointer"
              onClick={() => navigateToPage(PATH_SHOP.products)}
            >
              Tiếp tục mua sắm
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full md:w-2/4 justify-between items-center mt-4 md:mt-0">
              <div className="font-baloo-2 text-black font-bold text-xl md:ml-20">
                Tổng tiền sản phẩm
              </div>
              <div className="font-baloo-2 text-chocolate font-bold text-2xl">
                {formatPrice(totalSelectedItems())}₫
              </div>
              {paymentBtn(loadCartItems())}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full mb-8 mt-5 gap-5">
          <div className="flex justify-center items-center font-baloo text-3xl md:text-5xl">
            Sản Phẩm Khác
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-14">
            {category?.map((cate: any, index) => {
              if (index < 4) {
                return (
                  <ProductCardComponent
                    key={index}
                    categoryId={cate.categoryId}
                    categoryName={cate.categoryName}
                    image={cate.image}
                    priceIn={cate.priceIn}
                    priceSold={cate.priceSold}
                    rate={cate.rate}
                    superCategoryName={cate.superCategoryName}
                    category={cate}
                  />
                );
              }
            })}
          </div>
          <div className="flex justify-end">
            <button
              className="flex justify-center items-center w-[132px] h-[49px] bg-chocolate text-white rounded font-baloo-2 text-base font-bold"
              onClick={() => navigateToPage(PATH_SHOP.products)}
            >
              <div className="ml-3">Xem Thêm</div>
              <img
                src="/Icons/arrow.svg"
                className="w-[40px] h-[40px]"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
