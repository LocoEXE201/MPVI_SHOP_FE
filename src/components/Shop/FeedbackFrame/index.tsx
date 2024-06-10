import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import FeedbackItem from "../FeedbackItem";
import shopApi from "@/api/shop/shopApi";
import useAppContext from "@/hooks/useAppContext";

interface Feedback {
  $id: string;
  feedbackId: string;
  customerId: string;
  customerName: string;
  categoryId: number;
  createdOn: string;
  detail: string;
  rating: number;
  image: string;
  orderDetailId: number;
}

interface Props {
  categoryId: string | string[];
}

const FeedbackFrame = ({ categoryId }: Props) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [filtered, setFiltered] = React.useState<string | number>("all");

  const [feedback, setFeedback] = React.useState<Feedback[]>([]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setFiltered(e.target.value);
  };

  const getFeedbackAllById = async (categoryId: number) => {
    try {
      enableLoading();
      const response = await shopApi.getFeedbackById(categoryId);
      if (response.data.isSuccess) {
        setFeedback(response.data.result.$values);
        console.log(response.data.result.$values);
      } else {
        console.log("Failed to fetch data");
        return [];
      }
      disableLoading();
    } catch (error) {
      enableLoading();
      console.error("Error fetching data:", error);
      disableLoading();
      return [];
    }
  };

  const getFeedbackByIdAndRate = async (
    categoryId: number,
    filtered: number
  ) => {
    try {
      enableLoading();
      const response = await shopApi.getFeedbackByIdAndRate(
        categoryId,
        filtered
      );
      if (response.data.isSuccess) {
        setFeedback(response.data.result.$values);
      } else {
        console.log("Failed to fetch data");
        return [];
      }
      disableLoading();
    } catch (error) {
      enableLoading();
      console.error("Error fetching data:", error);
      disableLoading();
      return [];
    }
  };

  const getFeedbackByIdAndRateAndImage = async (
    categoryId: number,
    filtered: number,
    haveImage: boolean
  ) => {
    try {
      enableLoading();
      const response = await shopApi.getFeedbackByIdAndRateAndImage(
        categoryId,
        filtered,
        haveImage
      );
      if (response.data.isSuccess) {
        setFeedback(response.data.result.$values);
      } else {
        console.log("Failed to fetch data");
        return [];
      }
      disableLoading();
    } catch (error) {
      enableLoading();
      console.error("Error fetching data:", error);
      disableLoading();
      return [];
    }
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      const categoryIdNumber = Array.isArray(categoryId)
        ? Number(categoryId[0])
        : Number(categoryId);

      if (filtered === "all") {
        await getFeedbackAllById(categoryIdNumber);
      } else if (filtered === "comment") {
        await getFeedbackByIdAndRateAndImage(categoryIdNumber, 0, false);
      } else if (filtered === "imageVideo") {
        await getFeedbackByIdAndRateAndImage(categoryIdNumber, 0, true);
      } else {
        await getFeedbackByIdAndRate(categoryIdNumber, Number(filtered));
      }
    };

    if (categoryId) {
      fetchFeedback();
    }
  }, [categoryId, filtered]);

  const averageRating = () => {
    let average = 0;
    if (feedback.length > 0) {
      return (average =
        feedback.reduce((total, item) => total + item.rating, 0) /
        feedback.length);
    } else {
      return (average = 0);
    }
  };

  console.log(averageRating());

  const buttonClass = (value: string | number) =>
    filtered === value
      ? "flex justify-center items-center content-center border-[1px] border-solid border-chocolate text-chocolate px-4 py-1 box-border rounded-sm"
      : "flex justify-center items-center content-center border-[1px] border-solid border-zinc-300 text-black px-4 py-1 box-border rounded-sm";

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex flex-row justify-around bg-orange-50 border-[2px] border-solid border-orange-100 px-3 py-6">
        <div className="w-3/12 flex flex-col justify-center items-center content-center">
          <div className="text-6xl text-red-400 font-baloo ">
            {averageRating()} / 5
          </div>
          <div>
            <Rate
              className="text-red-400"
              allowHalf
              disabled
              value={averageRating()}
            />
          </div>
        </div>
        <div>
          <ul className="flex flex-row flex-wrap gap-2.5 font-baloo-2">
            <button
              className={buttonClass("all")}
              value={"all"}
              onClick={handleClick}
            >
              Tất Cả
            </button>
            <button
              className={buttonClass("1")}
              value={1}
              onClick={handleClick}
            >
              1 Sao (100)
            </button>
            <button
              className={buttonClass("2")}
              value={2}
              onClick={handleClick}
            >
              2 Sao (100){" "}
            </button>
            <button
              className={buttonClass("3")}
              value={3}
              onClick={handleClick}
            >
              3 Sao (100)
            </button>
            <button
              className={buttonClass("4")}
              value={4}
              onClick={handleClick}
            >
              4 Sao (100)
            </button>
            <button
              className={buttonClass("5")}
              value={5}
              onClick={handleClick}
            >
              5 Sao (100)
            </button>
            <button
              className={buttonClass("comment")}
              value={"comment"}
              onClick={handleClick}
            >
              Có Bình Luận (100)
            </button>
            <button
              className={buttonClass("imageVideo")}
              value={"imageVideo"}
              onClick={handleClick}
            >
              Có Hình Ảnh/Video (200)
            </button>
          </ul>
        </div>
      </div>
      <div>
        {feedback.length > 0 ? (
          <div>
            {feedback.map((item, index) => (
              <div key={index}>
                <FeedbackItem
                  key={index}
                  customerName={item.customerName}
                  createOn={item.createdOn}
                  detail={item.detail}
                  image={item.image}
                  rating={item.rating}
                />
                {index !== feedback.length - 1 && (
                  <hr className="h-[2px] mt-5" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center content-center text-xl font-baloo-2">
            Không có đánh giá nào phù hợp
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackFrame;
