import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useState } from "react";
import "./profile.scss";
import { Avatar } from "antd";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const ProfileComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const acc: string | null = localStorage.getItem("USER_INFO");
  const user: User | null = acc ? JSON.parse(acc) : null;

  console.log(user);

  return (
    <>
      <PageTitle mainTitle="Tài Khoản" subTitle="Trang chủ - Tài khoản" />
      <div className="h-[25rem] mt-4 flex flex-col justify-center items-center content-center">
        <div className="w-3/5 flex flex-col justify-center items-center content-center gap-5 p-4 mt-5 ">
          <div className="flex flex-row justify-between w-full px-4 box-border">
            <div className="font-baloo text-6xl text-chocolate mt-5">
              Tài khoản của bạn
            </div>
            <div className="relative">
              <Avatar
                size={90}
                icon={<UserOutlined className="text-8xl" />}
                className="bg-orange-500"
              />
              <div className="absolute top-[70px] left-[30px] flex justify-center items-center content-center">
                <Avatar
                  size={30}
                  icon={<CameraOutlined />}
                  className="bg-black text-orange-500 flex justify-center items-center content-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full flex flex-row justify-evenly">
            <div className="w-5/12">
              <div className="font-baloo-2 text-lg text-neutral-700">
                Tên của bạn
              </div>
              <input
                type="text"
                className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                defaultValue={user?.name}
              />
            </div>
            <div className="w-5/12">
              <div className="font-baloo-2 text-lg text-neutral-700">
                Giới tính
              </div>
              {/* <input
                type="text"
                className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
              /> */}
              <select className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate">
                <option value="0">Nam</option>
                <option value="1">Nữ</option>
                <option value="2">Khác</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row w-full flex flex-row justify-evenly">
            <div className="w-5/12">
              <div className="font-baloo-2 text-lg text-neutral-700">Email</div>
              <input
                type="email"
                className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                defaultValue={user?.email}
              />
            </div>
            <div className="w-5/12">
              <div className="font-baloo-2 text-lg text-neutral-700">
                Số điện thoại
              </div>
              <input
                type="text"
                className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                defaultValue={user?.phoneNumber}
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full flex flex-col justify-center items-center content-center box-border px-3">
              <div className="w-11/12 text-left font-baloo-2 text-lg text-neutral-700 ">
                Địa chỉ
              </div>
              <input
                type="text"
                className="border-[2px] border-solid border-zinc-400 w-11/12 rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
              />
            </div>
          </div>
          <div className="flex flex-row w-11/12 px-2.5">
            <div className="flex flex-row w-2/4 gap-2">
              <button className="w-[110px] h-[44px] flex justify-center items-center content-center bg-chocolate  border-[1px] border-solid border-chocolate rounded text-white font-bold font-baloo-2 text-lg ">
                Cập Nhật
              </button>
              <button className="w-[110px] h-[44px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-bold font-baloo-2 text-lg ">
                Quay Lại
              </button>
            </div>
            <div className="w-2/4 flex justify-end ">
              <button className="font-medium font-baloo-2 text-xl font-chocolate text-chocolate justify-center items-center content-center">
                Thay đổi mật khẩu mới?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
