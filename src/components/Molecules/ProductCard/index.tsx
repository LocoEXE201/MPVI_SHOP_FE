"use client";

import { ButtonAddCart } from "@/components/Atoms/btnAddCart";
import React, { FC } from "react";
import "./index.scss";

interface ProductCardProps {
  productId?: string;
  productName?: string;
  productImage?: string;
  productPrice?: number;
  productDiscount?: number;
  productCategoryId?: string;
  productCategoryName?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  productId,
  productName,
  productImage,
  productPrice,
  productDiscount,
  productCategoryId,
  productCategoryName,
}) => {
  return (
    <div className="cursor-pointer product_card_container hover:bg-whitesmoke-200 rounded-8xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[0.687rem] px-[0.75rem] pb-[0.375rem] gap-[1.225rem] text-[1.125rem] border-[1px] border-solid border-whitesmoke-300">
      <div className="rounded-8xs flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="product_card_image h-[17.5rem] w-[17.5rem] relative rounded-8xs overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mock/productimg.png"
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
          <div className="self-stretch relative text-[0.938rem] tracking-[0.48px] leading-[1.5rem] font-semibold">
            Sản Phẩm Len
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.412rem] pr-[3.812rem] pl-[3.918rem] text-[0.688rem] text-darkgray-200 font-poppins">
            <div className="flex-1 flex flex-row items-end justify-start gap-[0.337rem]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                <img
                  className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                  alt=""
                  src="/Icons/star_rating_icon.svg"
                />
                <img
                  className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                  alt=""
                  src="/Icons/star_rating_icon.svg"
                />
                <img
                  className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                  alt=""
                  src="/Icons/star_rating_icon.svg"
                />
                <img
                  className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                  alt=""
                  src="/Icons/star_rating_icon.svg"
                />
                <img
                  className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                  alt=""
                  src="/Icons/star_rating_icon.svg"
                />
              </div>
              <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.112rem] box-border">
                <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                  (5.0)
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.48px] leading-[1.5rem] font-medium text-gray-300">
            <p className="m-0">Móc khóa len thủ công</p>
            <p className="m-0">Nhiều hình dáng</p>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.131rem] pr-[3.5rem] pl-[3.075rem] text-chocolate font-poppins">
            <div className="flex-1 flex flex-row items-center justify-center">
              <b className="flex-1 relative tracking-[0.48px] leading-[1.438rem] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                ₫7.500
              </b>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border ml-[-0.5rem] text-[1rem] text-gray-100">
                <div className="self-stretch relative [text-decoration:line-through] tracking-[0.48px] leading-[1.438rem] inline-block min-w-[3.875rem] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                  ₫10.000
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
            <ButtonAddCart>Thêm</ButtonAddCart>
          </div>
        </div>
      </div>
    </div>
  );
};
