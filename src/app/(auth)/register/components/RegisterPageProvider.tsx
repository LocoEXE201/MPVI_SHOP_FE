"use client";

import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_AUTH } from "@/routes/paths";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import GuestGuard from "@/guards/GuestGuard";
import ShopLayout from "@/components/Shop/ShopLayout";
import RegisterPageComponent from "./RegisterPageComponent";

const RegisterPageProvider = (props: {}) => {
  localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, PATH_AUTH.register);

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
