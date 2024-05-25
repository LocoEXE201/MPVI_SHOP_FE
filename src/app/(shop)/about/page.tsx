"use client";

import { AppProvider } from "@/contexts/AppContext";
import ShopLayout from "@/components/Templates/ShopLayout";
import AboutPageComponent from "./components/AboutPageComponent";
import { useEffect } from "react";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";

const AboutPage = (props: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        LOCALSTORAGE_CONSTANTS.CURRENT_PAGE,
        PATH_SHOP.about
      );
    }
  }, []);

  return (
    <>
      <AppProvider>
        <ShopLayout>
          <AboutPageComponent />
        </ShopLayout>
      </AppProvider>
    </>
  );
};

export default AboutPage;
