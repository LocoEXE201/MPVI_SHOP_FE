"use client";

import HeaderShop from "../HeaderShop";
import FooterShop from "../FooterShop";

export default function ShopLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderShop />
      <main style={{ minHeight: "80vh" }} className="font-baloo-2">
        {children}
      </main>
      <FooterShop />
    </>
  );
}
