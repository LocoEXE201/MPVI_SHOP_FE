import React from "react";
import { Rate } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
const ProductCardComponent = () => {
  const productId: number = 1;

  function handleChange(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    console.log("Go to cart");
  }
  return (
    <>
      <Link href={`${PATH_SHOP.productDetails(productId)}`}>
        <div className=" flex flex-col gap-3 w-[300px] rounded-2xl shadow-lg p-3 box-border">
          <div className=" flex justify-center items-center content-center">
            <img
              className="object-contain box-content"
              src="/mock/fruit.png"
              alt="Fruit"
            ></img>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-baloo-2 text-base text-zinc-300 font-semibold">
              Sản Phẩm Len
            </div>
            <div className="w-[186px] h-[39px] font-baloo-2 text-lg text-black font-medium mb-2">
              Móc khóa len thủ công - Nhiều hình dáng
            </div>
            <div className="flex gap-3 items-center">
              <Rate
                className="text-sm text-red-400"
                allowHalf
                disabled
                defaultValue={5}
              />
              <div className="text-sm text-zinc-400 mt-1">(5.0)</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center ">
              <div className="font-quicksand text-chocolate text-lg font-bold">
                30.000đ
              </div>
              <div className="font-quicksand text-zinc-400 text-xs font-bold line-through mt-0.5">
                50.000đ
              </div>
            </div>
            <div>
              <button
                className="w-[81.91px] h-[36px] flex flex-row bg-chocolate justify-center items-center gap-2 text-white font-bold rounded"
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
