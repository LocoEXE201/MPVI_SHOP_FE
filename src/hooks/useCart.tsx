import { useAppSelector } from "@/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return {};
};

export default useCart;
