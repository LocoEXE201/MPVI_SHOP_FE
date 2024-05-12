import React from "react";
import { Rate } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "../../../utils/formatPrice";
import "./index.scss";

interface ProductCardProps {
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({
  categoryId,
  categoryName,
  image,
  priceIn,
  rate,
  superCategoryName,
}) => {
  function handleChange(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    console.log("Go to cart");
  }
  return (
    <>
      <Link href={`${PATH_SHOP.productDetails(categoryId)}`}>
        <div className="flex flex-col gap-3 w-[280px] rounded-2xl shadow-lg p-3 box-border transition ease-in-out duration-500 hover:scale-110 hover:bg-white hover:shadow-orange-200  ">
          <div className="w-full flex justify-center items-center content-center">
            <img
              className="object-contain box-content transition ease-in-out duration-500 hover:scale-110 "
              src={image}
              alt="Fruit"
            ></img>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="font-baloo-2 text-base text-zinc-300 font-semibold">
              {superCategoryName}
            </div>
            <div className="w-[186px] h-[39px] font-baloo-2 text-lg text-black font-medium mb-2">
              {categoryName}
            </div>
            <div className="flex gap-3 items-center content-center">
              <Rate
                className="text-sm text-red-400"
                allowHalf
                disabled
                defaultValue={rate}
              />
              <div className="text-sm text-zinc-400">({rate})</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-2 items-center ">
              <div className="font-quicksand text-chocolate text-lg font-bold">
                {formatPrice(priceIn * 1000)}₫
              </div>
              <div className="font-quicksand text-zinc-400 text-xs font-bold line-through mt-0.5">
                50.000₫
              </div>
            </div>
            <div>
              <button
                className="w-[81.91px] h-[36px] flex flex-row bg-chocolate justify-center items-center gap-2 text-white font-bold rounded cursor-pointer hover:bg-orange-500"
                onClick={handleChange}
              >
                <img src="/Icons/cart.svg" className="w-[16px] h-[16px]" />
                <div className="font-lato text-sm ">Thêm</div>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCardComponent;
