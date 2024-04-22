"use client";
import { useRouter } from "next/navigation";
import "./index.scss";

const FooterShopComponent = (props: {}) => {
  const router = useRouter();

  return (
    <>
      <footer style={{ minHeight: "10vh" }} className="bg-yellow-200">
        Footer Content Here
        <div className="relative pt-5 font-semibold leading-[21px]">
          © Loco. @ All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default FooterShopComponent;
