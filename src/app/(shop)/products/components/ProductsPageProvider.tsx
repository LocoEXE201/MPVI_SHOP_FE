"use client";

import ShopLayout from "@/components/Shop/ShopLayout";
import ProductsComponent from "./ProductsComponent";
import { AuthProvider } from "@/contexts/JWTContext";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import GuestGuard from "@/guards/GuestGuard";
import { useEffect } from "react";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";

const ProductsPageProvider = (props: {}) => {
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
          <AuthContextProvider>
            {/* <GuestGuard>S */}
            <ShopLayout>
              <ProductsComponent />
            </ShopLayout>
            {/* </GuestGuard> */}
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default ProductsPageProvider;
