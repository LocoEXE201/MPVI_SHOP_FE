import React, { useEffect, useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import "./fb.scss";
import { Rate } from "antd";
import shopApi from "@/api/shop/shopApi";
import Swal from "sweetalert2";
import { toZonedTime, format } from "date-fns-tz";

interface Props {
  categoryId: number;
  orderDetailId: number;
}

const FeedbackModal = ({ categoryId, orderDetailId }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState("");
  const [rate, setRate] = useState(0);

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

  const onDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const onRateChange = (value: number) => {
    setRate(value);
  };

  const vietnamTimeZone = "Asia/Ho_Chi_Minh";

  const getCurrentDateTimeInVietnam = () => {
    const now = new Date();
    const zonedDate = toZonedTime(now, vietnamTimeZone);
    return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", {
      timeZone: "UTC",
    });
  };

  const currentDateTime = getCurrentDateTimeInVietnam();

  const [feedback, setFeedBack] = useState({
    customerId: loadUserInformation().id,
    categoryId: categoryId,
    createdOn: currentDateTime,
    detail: "",
    rating: 0,
    image: "string",
    orderDetailId: orderDetailId,
  });

  useEffect(() => {
    // const currentDateTime = new Date().toISOString();
    setFeedBack((prevFeedback) => ({
      ...prevFeedback,
      detail: detail,
      rating: rate,
    }));
  }, [detail, rate]);

  const fetchCreateFeedback = async (data: any) => {
    try {
      const response = await shopApi.createFeedback(data);
      console.log(response.data);
      Swal.fire({
        icon: response.data.isSuccess ? "success" : "error",
        title: response.data.isSuccess
          ? "Send feedback successfully"
          : "Your feedback is not created. Try again!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "There is something wrong. Try again!",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "top-end",
      });
    }
  };

  const handleSendButton = async () => {
    if (feedback) {
      await fetchCreateFeedback(feedback);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="font-baloo-2 text-base text-chocolate font-semibold border-[2px] border-solid border-chocolate px-2 py-0.5 rounded"
      >
        <div className="">Đánh giá</div>
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
          title="Đánh Giá Sản Phẩm"
          open={isModalOpen}
          onOk={handleSendButton}
          okText="Gửi"
          onCancel={handleCancel}
          cancelText="Hủy"
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-3">
            <Rate
              className="text-xl text-red-400"
              defaultValue={0}
              onChange={onRateChange}
            />
            <textarea
              placeholder="Nhập đánh giá của bạn ở đây..."
              className="border-[1px] border-solid border-zinc-400 rounded w-full h-[123px] p-2 hover:border-orange-500 focus:outline-none focus:border-chocolate focus:ring-1 focus:ring-chocolate"
              onChange={(e) => onDetailChange(e)}
            />
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default FeedbackModal;
