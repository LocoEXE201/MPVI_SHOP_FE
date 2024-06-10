"use client";

import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import { AuthContextProvider } from "@/contexts/AuthGoogleContext";
import HeaderShop from "@/components/Organisms/HeaderShop";
import FooterShop from "@/components/Organisms/FooterShop";
import useProtectData from "@/hooks/useProtectData";

export default function ShopLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  useProtectData();

  return (
    <AppProvider>
      <AuthProvider>
        <AuthContextProvider>
          <HeaderShop />
          <main style={{ minHeight: "80vh" }} className="font-baloo-2">
            {children}
          </main>
          <FooterShop />
        </AuthContextProvider>
      </AuthProvider>
    </AppProvider>
  );
}
