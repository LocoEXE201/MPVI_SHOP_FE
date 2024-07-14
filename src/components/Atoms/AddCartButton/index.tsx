"use client";

import React from "react";
import { Product } from "../../../../interfaces";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { decrement, increment } from "@/store/features/cartSlice";
import QuantityButton from "../QuantityButton";
import { productQtySelector } from "../../../store/features/cartSlice";
import Image from "next/image";

interface Props {
  product: Product;
}

const AddCartButton = (props: Props) => {
  const quantity = useAppSelector((state) =>
    productQtySelector(state, props.product.categoryId)
  );
  const dispatch = useAppDispatch();

  if (!quantity)
    return (
      <button
        className="w-[81.91px] h-[36px] flex flex-row bg-chocolate justify-center items-center gap-2 text-white font-bold rounded cursor-pointer hover:bg-orange-500"
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment(props.product));
        }}
      >
        <Image
          width={16}
          height={16}
          alt=""
          src="/Icons/cart.svg"
          className="w-[16px] h-[16px]"
        />
        <div className="font-lato text-sm ">Thêm</div>
      </button>
    );

  return (
    <QuantityButton
      onIncrease={(e: any) => {
        e.preventDefault();
        dispatch(increment(props.product));
      }}
      onDecrease={(e: any) => {
        e.preventDefault();
        dispatch(decrement(props.product));
      }}
      quantity={quantity}
    />
  );
};

export default AddCartButton;
