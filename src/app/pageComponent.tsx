"use client";

import OtherProducts from "@/components/Organisms/OtherProducts";
import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { useEffect } from "react";

const HomePageComponent = (props: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE);
    }
  }, []);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          <ShopLayout>
            <OtherProducts />
          </ShopLayout>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default HomePageComponent;
