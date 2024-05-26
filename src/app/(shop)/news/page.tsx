"use client";

import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { PATH_SHOP } from "@/routes/paths";
import { useEffect } from "react";
import NewsPageComponent from "./components/NewsPageComponent";

const AboutPage = (props: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, PATH_SHOP.news);
    }
  }, []);

  return (
    <>
      <AppProvider>
        <ShopLayout>
          <NewsPageComponent />
        </ShopLayout>
      </AppProvider>
    </>
  );
};

export default AboutPage;
