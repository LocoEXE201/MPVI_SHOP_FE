"use client";

import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_AUTH } from "@/routes/paths";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import GuestGuard from "@/guards/GuestGuard";
import ShopLayout from "@/components/Templates/ShopLayout";
import RegisterPageComponent from "./RegisterPageComponent";
import { useEffect } from "react";

const RegisterPageProvider = (props: {}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        LOCALSTORAGE_CONSTANTS.CURRENT_PAGE,
        PATH_AUTH.register
      );
    }
  }, []);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          <AuthContextProvider>
            <GuestGuard>
              <ShopLayout>
                <RegisterPageComponent />
              </ShopLayout>
            </GuestGuard>
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default RegisterPageProvider;
