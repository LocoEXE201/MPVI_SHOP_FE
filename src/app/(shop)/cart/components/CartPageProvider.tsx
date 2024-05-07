"use client";

import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { PATH_SHOP } from "@/routes/paths";
import React, { useEffect } from "react";
import CartComponent from "./CartComponent";
import GuestGuard from "@/guards/GuestGuard";

const CartPageProvider = (prop: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, PATH_SHOP.cart);
    }
  }, []);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          <AuthContextProvider>
            {/* <GuestGuard> */}
            <ShopLayout>
              <CartComponent />
            </ShopLayout>
            {/* </GuestGuard> */}
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default CartPageProvider;
