"use client";

import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import GuestGuard from "@/guards/GuestGuard";
import ShopLayout from "@/components/Shop/ShopLayout";
import LoginPageComponent from "./LoginPageComponent";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_AUTH } from "@/routes/paths";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";

const LoginPageProvider = (props: {}) => {
  localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, PATH_AUTH.login);

  return (
    <>
      <AppProvider>
        <AuthProvider>
          <AuthContextProvider>
            <GuestGuard>
              <ShopLayout>
                <LoginPageComponent />
              </ShopLayout>
            </GuestGuard>
          </AuthContextProvider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default LoginPageProvider;
