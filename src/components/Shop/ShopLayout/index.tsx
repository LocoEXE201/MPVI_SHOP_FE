"use client";
import React from "react";
import ShopLayoutComponent from "./ShopLayoutProvider";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShopLayoutComponent>{children}</ShopLayoutComponent>
    </>
  );
}
