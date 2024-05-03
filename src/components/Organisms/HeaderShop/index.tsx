"use client";
import "./index.scss";
import HeaderShopComponent from "./HeaderShopComponent";
import { AuthProvider } from "@/contexts/JWTContext";
import { AppProvider } from "@/contexts/AppContext";

const HeaderShop = (props: {}) => {
  return (
    <AppProvider>
      <AuthProvider>
        <HeaderShopComponent />
      </AuthProvider>
    </AppProvider>
  );
};

export default HeaderShop;
