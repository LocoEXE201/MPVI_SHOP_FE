import React from "react";
import "./cartItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "@/utils/formatPrice";
import { CartItem, Product } from "../../../../interfaces";
import QuantityButton from "@/components/Atoms/QuantityButton";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/store/features/cartSlice";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface Props {
  cartItem: CartItem;
  onCheckboxChange: (categoryId: number, checked: boolean, quantity: number) => void;
  checked: boolean;
}

const CartItemCard = ({
  cartItem,
  onCheckboxChange,
  checked,
}: Props) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    onCheckboxChange(
      cartItem.product.categoryId,
      e.target.checked,
      cartItem.quantity
    );
  };


  return (
    <div className="cart-item" key={cartItem.product.categoryId}>
      <div className="cart-check">
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
      </div>
      <Link href={`${PATH_SHOP.productDetails(cartItem.product.categoryId)}`}>
        <div className="cart-product">
          <img
            src={cartItem.product.image}
            alt={cartItem.product.categoryName}
          />
          <div>
            <div className="font-baloo-2 text-lg text-zinc-400 font-semibold">
              {cartItem.product.categoryName}
            </div>
          </div>
        </div>
      </Link>
      <div className="cart-product-price font-baloo-2 font-semibold text-chocolate text-xl">
        {formatPrice(cartItem.product.priceIn * 1000)}₫
      </div>
      <div className="cart-product-quantity">
        {/* <button
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
        </button> */}

        <QuantityButton
          onIncrease={(e) => {
            e.preventDefault();
            dispatch(increment(cartItem.product));
          }}
          onDecrease={(e) => {
            e.preventDefault();
            dispatch(decrement(cartItem.product));
          }}
          quantity={cartItem.quantity}
        />
      </div>
      <div className="cart-product-total font-baloo-2 font-semibold text-chocolate text-xl">
        {formatPrice(cartItem.product.priceIn * cartItem.quantity * 1000)}₫
      </div>
      <div className="cart-product-remove">
        <button className="text-red-500">
          {" "}
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
