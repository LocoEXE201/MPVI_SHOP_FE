import React, { useEffect, useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import "./customer.scss";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import useAppContext from "@/hooks/useAppContext";
import customerApi from "@/api/shop/customerApi";
import Swal from "sweetalert2";
import AddAddressModal from "../AddAddressModal";

interface Province {
  province_id: number;
  province_name: string;
  province_type: string;
}

interface District {
  district_id: number;
  district_name: string;
}

interface Ward {
  ward_id: number;
  ward_name: string;
}

interface AddressList {
  customer_id: string;
  infors: [
    {
      phone: string;
      name: string;
      address: string;
    },
  ];
}

interface Address {
  $id: string;
  address: string;
  id: number;
  name: string;
  phone: string;
}

interface Props {
  setReceiverName: React.Dispatch<React.SetStateAction<string>>;
  setReceiverAddress: React.Dispatch<React.SetStateAction<string>>;
  setReceiverPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  handleCreateOrder: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCreateNewAddress: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const CusInfoOfOrderModal = ({
  setReceiverName,
  setReceiverAddress,
  setReceiverPhoneNumber,
  handleCreateOrder,
  handleCreateNewAddress,
}: Props) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressList, setAddressList] = React.useState<Address[]>([]);
  const [isActive, setIsActive] = useState(0);

  const loadUserInformation = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("USER_INFO");
      return user ? JSON.parse(user) : {};
    }
    return {};
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleName = (e: any) => {
    setReceiverName(e.target.value);
  };

  const handleAddress = (e: any) => {
    setReceiverAddress(e.target.value);
  };

  const handlePhoneNumber = (e: any) => {
    setReceiverPhoneNumber(e.target.value);
  };

  const getAllAddress: any = async (customerID: any) => {
    try {
      const response =
        await customerApi.getCustomerInfoByCustomerID(customerID);
      if (response.status === 200) {
        console.log(response.data);
        setAddressList(response.data.result.infors.$values);
        setIsActive(response.data.result.infors.$values[0].id);
        setReceiverName(response.data.result.infors.$values[0].name);
        setReceiverAddress(response.data.result.infors.$values[0].address);
        setReceiverPhoneNumber(response.data.result.infors.$values[0].phone);

        return response.data.result.infors.$values;
      } else {
        console.log("Failed to fetch data. Status code:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleChoice = (data: any) => {
    setReceiverName(data.name);
    setReceiverAddress(data.address);
    setReceiverPhoneNumber(data.phone);
    setIsActive(data.id);
  };

  React.useEffect(() => {
    getAllAddress(loadUserInformation().id);
  }, []);

  const fetchDeleteAddress = async (addressId: any) => {
    try {
      enableLoading();
      const response = await customerApi.deleteAddress(
        loadUserInformation().id,
        addressId
      );
      console.log(response.data);
      Swal.fire({
        icon: response.data.isSuccess ? "success" : "error",
        title: response.data.isSuccess
          ? "Thông tin của bạn đã được xóa thành công"
          : "Xóa không thành công. Vui lòng thử lại!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });

      if (response.data.isSuccess) {
        const updatedAddresses = await getAllAddress(loadUserInformation().id);
        setAddressList(updatedAddresses);
      }
      disableLoading();
      //   return response.data.result.infor;
    } catch (error) {
      enableLoading();
      Swal.fire({
        icon: "error",
        title: "Đã xảy ra sự cố. Vui lòng thử lại sau!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
    }
  };

  const handleDeleteAddress = async (
    e: React.MouseEvent<HTMLButtonElement>,
    addressId: any
  ) => {
    e.preventDefault();

    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Bạn có chắc không?",
      text: "Bạn không thể quay lại được",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Quay lại",
    });

    if (result.isConfirmed) {
      await fetchDeleteAddress(addressId);
    }
  };

  React.useEffect(() => {
    getAllAddress(loadUserInformation().id);
  }, []);

  console.log(addressList.length);

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="w-[130px] h-[40px] flex justify-center items-center content-center bg-chocolate text-lg text-white font-bold rounded"
      >
        <div className="">Thanh Toán</div>
      </Button>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              titleFontSize: 22,
            },
          },
        }}
      >
        <Modal
          title="Thông tin khách hàng"
          open={isModalOpen}
          onOk={async (e: any) => {
            if (addressList.length > 0) {
              handleCreateOrder(e);
            } else {
              const res = await handleCreateNewAddress(e);
              console.log("hihihihi");
              console.log(res);
              setAddressList(Array.isArray(res) ? res : [res]);
              setIsModalOpen(false);
            }
          }}
          okText={addressList.length > 0 ? "Thanh Toán" : "Gửi"}
          onCancel={handleCancel}
          cancelText="Hủy"
          className="flex flex-col gap-5"
        >
          {addressList.length > 0 ? (
            <div className="flex flex-col gap-2">
              {addressList.map((address: any, index: any) => (
                <div
                  className={`flex flex-col gap-1 border-[1px] border-solid border-zinc-500 p-2 rounded hover:border-[2px] hover:border-chocolate hover:bg-orange-100 ${isActive === address.id ? "bg-orange-100" : "bg-white"}`}
                  onClick={() => handleChoice(address)}
                  key={index}
                >
                  <div className="font-baloo-2 text-lg font-bold">
                    Người nhận: {"\t"}{" "}
                    <span className="font-normal">{address?.name}</span>
                  </div>
                  <div className="font-baloo-2 text-lg font-bold">
                    Số điện thoại: {"\t"}{" "}
                    <span className="font-normal">{address?.phone}</span>
                  </div>
                  <div className="font-baloo-2 text-lg font-bold">
                    Địa chỉ:{"\t"}
                    <span className="font-normal">{address?.address}</span>
                  </div>
                  <div className=" w-full flex justify-end items-center content-center">
                    <button
                      className="w-[80px] h-[30px] border-[2px] border-solid border-chocolate rounded bg-white text-chocolate text-lg font-baloo-2"
                      onClick={async (e: any) => {
                        handleDeleteAddress(e, address.id);
                      }}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
              <AddAddressModal
                setAddressList={setAddressList}
                setIsActive={setIsActive}
              />
            </div>
          ) : (
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-row w-full flex flex-row justify-evenly">
                <div className="w-5/12">
                  <div className="font-baloo-2 text-lg text-neutral-700">
                    Tên người nhận
                  </div>
                  <input
                    type="text"
                    className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                    name="name"
                    onChange={handleName}
                  />
                </div>
                <div className="w-5/12">
                  <div className="font-baloo-2 text-lg text-neutral-700">
                    Số điện thoại
                  </div>
                  <input
                    type="text"
                    className="border-[2px] border-solid border-zinc-400 w-full rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                    name="phone"
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center content-center box-border px-3">
                <div className="w-11/12 text-left font-baloo-2 text-lg text-neutral-700 ">
                  Địa chỉ
                </div>
                <input
                  type="text"
                  className="border-[2px] border-solid border-zinc-400 w-11/12 rounded p-1.5 pl-2 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
                  name="address"
                  onChange={handleAddress}
                />
              </div>
            </div>
          )}
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default CusInfoOfOrderModal;
