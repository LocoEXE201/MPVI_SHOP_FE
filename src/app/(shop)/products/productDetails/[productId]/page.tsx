"use client";
import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import { AuthProvider } from "@/contexts/JWTContext";
import GuestGuard from "@/guards/GuestGuard";
import { PATH_SHOP } from "@/routes/paths";
import React, { useEffect } from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";

const ProductDetailsProvider = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        LOCALSTORAGE_CONSTANTS.CURRENT_PAGE,
        PATH_SHOP.products
      );
    }
  }, []);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          {/* <AuthContextProvider> */}
          {/* <GuestGuard> */}
          <ShopLayout>
            <ProductDetailsComponent />
          </ShopLayout>
          {/* </GuestGuard> */}
          {/* </AuthContextProvider> */}
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default ProductDetailsProvider;
