"use client";

import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useEffect } from "react";

const HomePageProvider = (props: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE);
    }
  }, []);

  return (
    <>
      <ShopLayout>
        <div>Main Content Here</div>
      </ShopLayout>
    </>
  );
};

export default HomePageProvider;
