"use client";

import ShopLayout from "@/components/Templates/ShopLayout";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { AppProvider } from "@/contexts/AppContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import { AuthProvider } from "@/contexts/JWTContext";
import GuestGuard from "@/guards/GuestGuard";
import { PATH_SHOP } from "@/routes/paths";
import { useEffect } from "react";
import ProfileComponent from "./ProfileComponent";

const ProfilePageProvider = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem(
        LOCALSTORAGE_CONSTANTS.CURRENT_PAGE,
        PATH_SHOP.profile
      );
    }
  }, []);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          <AuthContextProvider>
            {/* <GuestGuard> */}
            <ShopLayout>
              <ProfileComponent />
            </ShopLayout>
            {/* </GuestGuard> */}
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default ProfilePageProvider;
