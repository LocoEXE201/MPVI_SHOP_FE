"use client";

import { ButtonAddCart } from "@/components/Atoms/btnAddCart";
import React, { FC } from "react";
import "./index.scss";
import { CategoryDTO } from "@/models/warehouse/CategoryDTO";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import { PATH_SHOP } from "@/routes/paths";

interface ProductCardProps {
  productId?: number;
  productName?: string;
  productImage?: string;
  productPrice?: number;
  productDiscount?: number;
  productDTO?: CategoryDTO;
  productCategoryId?: number;
  productCategoryName?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  productId,
  productName,
  productImage,
  productPrice,
  productDiscount,
  productDTO,
  productCategoryId,
  productCategoryName,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (productId) {
          router.push(PATH_SHOP.productDetails(productId));
        }
      }}
      className="cursor-pointer product_card_container hover:bg-whitesmoke-200 rounded-8xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[0.687rem] px-[0.75rem] pb-[0.375rem] gap-[1.225rem] text-[1.125rem] border-[1px] border-solid border-whitesmoke-300"
    >
      <div className="rounded-8xs flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="product_card_image h-[17.5rem] w-[17.5rem] relative rounded-8xs overflow-hidden shrink-0 object-cover"
            alt=""
            src={productImage}
          />
          <img
            className="product_card_lock_image h-[2.188rem] w-[2.188rem] absolute !m-[0] bottom-[-1rem] left-[calc(50%_-_17.5px)] rounded-16xl z-[1]"
            alt=""
            src="/Icons/lock_icon.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.987rem] pl-[1.125rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.181rem]">
          <div className="max-w-[full] self-stretch relative text-[0.938rem] tracking-[0.48px] leading-[1.5rem] font-semibold">
            {productCategoryName}
          </div>
          <div className="w-full flex flex-row items-start justify-start pt-[0rem] text-[0.7rem] text-darkgray-200 font-poppins">
            <div className="w-full flex flex-row items-center justify-center gap-[3px]">
              {productDTO && productDTO.rate > 0 ? (
                <>
                  <div className="flex flex-row items-center justify-center gap-[0.131rem] shrink-0">
                    <img
                      className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                      alt=""
                      src={`/Icons/${Math.ceil(productDTO.rate) >= 1 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                    />
                    <img
                      className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                      alt=""
                      src={`/Icons/${Math.ceil(productDTO.rate) >= 2 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                    />
                    <img
                      className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                      alt=""
                      src={`/Icons/${Math.ceil(productDTO.rate) >= 3 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                    />
                    <img
                      className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                      alt=""
                      src={`/Icons/${Math.ceil(productDTO.rate) >= 4 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                    />
                    <img
                      className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                      alt=""
                      src={`/Icons/${Math.ceil(productDTO.rate) >= 5 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                    />
                  </div>
                  <div className=" translate-y-[1.5px] flex flex-col items-start justify-end pt-[0rem] px-[0rem] box-border">
                    <div className="self-stretch relative inline-block shrink-0">
                      ({productDTO.rate})
                    </div>
                  </div>
                </>
              ) : (
                <p className="font-baloo-2 text-[0.8rem]">
                  Mong quý khách ủng hộ
                </p>
              )}
            </div>
          </div>
          <div className="mt-1 self-stretch relative tracking-[0.48px] leading-[1.5rem] font-medium text-gray-300">
            <p className="m-0">
              {productName && productName?.length >= 25
                ? productName.substring(0, 25) + "..."
                : ""}
              {productName && productName?.length < 25 ? productName : ""}
            </p>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.131rem] text-chocolate font-poppins">
            <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
              {productPrice && (!productDiscount || productDiscount <= 0) ? (
                <>
                  <b className="flex-1 relative tracking-[0.48px] leading-[1.438rem] shrink-0 whitespace-nowrap">
                    ₫{formatPrice(productPrice)}
                  </b>
                </>
              ) : (
                <></>
              )}
              {productPrice && productDiscount && productDiscount > 0 ? (
                <>
                  <b className="flex-1 relative tracking-[0.48px] leading-[1.438rem] shrink-0 whitespace-nowrap">
                    ₫
                    {formatPrice(
                      (productPrice * (100 - productDiscount)) / 100
                    )}
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border ml-[-0.5rem] text-[1rem] text-gray-100">
                    <div className="self-stretch relative [text-decoration:line-through] tracking-[0.48px] leading-[1.438rem] inline-block min-w-[3.875rem] shrink-0 whitespace-nowrap">
                      ₫{formatPrice(productPrice)}{" "}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-[3px] self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
            <ButtonAddCart>Thêm</ButtonAddCart>
          </div>
        </div>
      </div>
    </div>
  );
};
