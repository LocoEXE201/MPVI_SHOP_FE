"use client";
import { useRouter } from "next/navigation";
import "./index.scss";
import { PATH_AUTH, PATH_SHOP } from "@/routes/paths";

const HeaderShopComponent = (props: {}) => {
  const router = useRouter();

  return (
    <>
      <header style={{ minHeight: "10vh" }} className="bg-yellow-200">
        Header Content Here
        <div className="flex gap-10">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_SHOP.root);
            }}
          >
            Trang Chủ
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_SHOP.about);
            }}
          >
            Giới Thiệu
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_SHOP.products);
            }}
          >
            Sản Phẩm
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_SHOP.news);
            }}
          >
            Tin Tức
          </div>
        </div>
        <div className="flex gap-10">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_AUTH.login);
            }}
          >
            Đăng Nhập
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(PATH_AUTH.register);
            }}
          >
            Đăng Ký
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderShopComponent;
