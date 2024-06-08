import React, { useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
import "./addAddress.scss";
import useAppContext from "@/hooks/useAppContext";
import Swal from "sweetalert2";
import customerApi from "@/api/shop/customerApi";

interface Address {
  $id: number;
  id: number;
  phone: string;
  name: string;
  address: string;
}

interface Props {
  setAddressList: React.Dispatch<React.SetStateAction<Address[]>>;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
}

const AddAddressModal = ({ setAddressList, setIsActive }: Props) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");

  const loadUserInformation = () => {
    const user = localStorage.getItem("USER_INFO");
    return user ? JSON.parse(user) : {};
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

  // console.log(receiverName);
  // console.log(receiverAddress);
  // console.log(receiverPhoneNumber);

  const getAllAddress: any = async (customerID: any) => {
    try {
      const response =
        await customerApi.getCustomerInfoByCustomerID(customerID);
      if (response.status === 200) {
        // console.log(response.data);
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

  React.useEffect(() => {
    getAllAddress(loadUserInformation().id);
  }, []);

  const fetchAddAddress = async () => {
    try {
      enableLoading();
      const response = await customerApi.addNewAddress(
        {
          phone: receiverPhoneNumber,
          name: receiverName,
          address: receiverAddress,
        },
        loadUserInformation().id
      );
      console.log(response.data);
      Swal.fire({
        icon: response.data.isSuccess ? "success" : "error",
        title: response.data.isSuccess
          ? "Your information is added successfully"
          : "Your information is not added successfully. Try again!",
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
        title: "There is something wrong. Try again!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
      disableLoading();
    }
  };

  const handleAddNewAddress = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await fetchAddAddress();
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center content-center">
      <Button
        type="default"
        onClick={showModal}
        className="w-[40px] h-[40px] flex justify-center items-center content-center bg-chocolate text-lg text-white font-bold rounded"
      >
        <div className="flex justify-center items-center content-center text-xl mb-1.5">
          +
        </div>
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
          title="Thêm thông tin khách hàng"
          open={isModalOpen}
          onOk={(e: any) => handleAddNewAddress(e)}
          okText="Thêm"
          cancelText="Hủy"
          onCancel={handleCancel}
        >
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
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default AddAddressModal;
