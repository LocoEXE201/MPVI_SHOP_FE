"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useProtectData = () => {
  useEffect(() => {
    // const handleContextMenu = (e: MouseEvent) => {
    //   e.preventDefault();
    // };
    // const handleKeyDown = (e: KeyboardEvent) => {
    //   if (
    //     e.key == "F12" || // F12 key
    //     (e.ctrlKey && e.shiftKey && e.key == "I") || // DevTools
    //     (e.ctrlKey && e.shiftKey && e.key == "C") || // DevTools
    //     (e.ctrlKey && e.shiftKey && e.key == "J") || // DevTools
    //     (e.ctrlKey && e.key == "U") // View Source
    //   ) {
    //     e.preventDefault();
    //     document.body.hidden = true;
    //     document.body.classList.add("screenshot-overlay");
    //   }
    // };
    // const handleKeyUp = (e: KeyboardEvent) => {
    //   if (
    //     e.key == "F12" || // F12 key
    //     (e.ctrlKey && e.shiftKey && e.key == "I") || // DevTools
    //     (e.ctrlKey && e.shiftKey && e.key == "C") || // DevTools
    //     (e.ctrlKey && e.shiftKey && e.key == "J") || // DevTools
    //     (e.ctrlKey && e.key == "U")
    //   ) {
    //     document.body.hidden = false;
    //     document.body.classList.remove("screenshot-overlay");
    //   }
    // };
    // document.addEventListener("contextmenu", handleContextMenu);
    // document.addEventListener("keypress", handleKeyDown);
    // document.addEventListener("keydown", handleKeyDown);
    // document.addEventListener("keyup", handleKeyUp);
    // return () => {
    //   document.removeEventListener("contextmenu", handleContextMenu);
    //   document.removeEventListener("keypress", handleKeyDown);
    //   document.removeEventListener("keydown", handleKeyDown);
    //   document.removeEventListener("keyup", handleKeyUp);
    // };
  }, []);
};

export default useProtectData;
