"use client";
import ShopLayout from "@/components/Shop/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import { AuthProvider } from "@/contexts/JWTContext";
import GuestGuard from "@/guards/GuestGuard";
import { PATH_SHOP } from "@/routes/paths";
import React, { useEffect } from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";

const ProductDetailsProvider = () => {
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
