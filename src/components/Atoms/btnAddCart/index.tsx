"use client";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface btnAddCartProps {
  href?: string;
  route?: string;
  children: React.ReactNode;
  style?: "linear" | "none" | "black";
}

export const ButtonAddCart: FC<btnAddCartProps> = ({
  href,
  route,
  children,
  style,
}) => {
  const router = useRouter();
  const navigateToPage = () => {
    if (route && href) {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
      router.push(href);
    }
  };

  return (
    <button
      onClick={() => {
        navigateToPage();
      }}
      className="cursor-pointer [border:none] py-[0.5rem] px-[0.75rem] hover:bg-yellow-700 bg-chocolate rounded flex flex-row items-center justify-center box-border gap-[0.243rem]"
    >
      <img
        className="h-[0.875rem] w-[0.875rem] relative overflow-hidden shrink-0 mr-1"
        alt=""
        src="/Icons/add_cart_icon.svg"
        style={{ transform: "translateY(-1px)" }}
      />
      <b className="relative text-[0.875rem] font-lato text-white text-left">
        {children}
      </b>
    </button>
  );
};
