"use client";

import { AuthProvider } from "@/contexts/JWTContext";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import GuestGuard from "@/guards/GuestGuard";
import { use, useEffect } from "react";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import ShopLayout from "@/components/Templates/ShopLayout";
import OrderComponent from "./OrderComponent";

const OrderPageProvider = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem(
        LOCALSTORAGE_CONSTANTS.CURRENT_PAGE,
        PATH_SHOP.order
      );
    }
  }, []);
  return (
    <>
      <AppProvider>
        <AuthProvider>
          <AuthContextProvider>
            {/* <GuestGuard> */}
            <ShopLayout>
              <OrderComponent />
            </ShopLayout>
            {/* </GuestGuard> */}
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default OrderPageProvider;
