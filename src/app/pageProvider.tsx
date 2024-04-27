"use client";

import ShopLayout from "@/components/Shop/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";

const HomePageProvider = (props: {}) => {
  localStorage.removeItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE);

  return (
    <>
      <ShopLayout>
        <div>Main Content Here</div>
      </ShopLayout>
    </>
  );
};

export default HomePageProvider;
