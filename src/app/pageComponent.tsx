"use client";

import OutstandingProducts from "@/components/Organisms/OutstandingProducts";
import OtherProducts from "@/components/Organisms/OtherProducts";
import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { useEffect } from "react";
import { CommimentsComponent } from "@/components/Organisms/CommimentsComponent";
import { OutstandingNews } from "@/components/Organisms/OutstandingNews";
import { CarouselArea } from "@/components/Organisms/CarouselArea";

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
            <CarouselArea />
            <OutstandingProducts />
            <OtherProducts />
            <CommimentsComponent />
            <OutstandingNews />
          </ShopLayout>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default HomePageComponent;
