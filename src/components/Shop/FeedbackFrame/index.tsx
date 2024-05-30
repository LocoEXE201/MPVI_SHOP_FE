import React, { useState } from "react";
import { Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import FeedbackItem from "../FeedbackItem";

const FeedbackFrame = () => {
  const data = [1, 1, 1, 1];
  const [filtered, setFiltered] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setFiltered(e.target.value);
  };

  const buttonClass = (value: string) =>
    filtered === value
      ? "flex justify-center items-center content-center border-[1px] border-solid border-chocolate text-chocolate px-4 py-1 box-border rounded-sm"
      : "flex justify-center items-center content-center border-[1px] border-solid border-zinc-300 text-black px-4 py-1 box-border rounded-sm";

  console.log(filtered);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex flex-row justify-around bg-orange-50 border-[2px] border-solid border-orange-100 px-3 py-6">
        <div className="w-3/12 flex flex-col justify-center items-center content-center">
          <div className="text-6xl text-red-400 font-baloo ">4.9 / 5</div>
          <div>
            <Rate
              className="text-red-400"
              allowHalf
              disabled
              defaultValue={5}
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
              value={"1"}
              onClick={handleClick}
            >
              1 Sao (100)
            </button>
            <button
              className={buttonClass("2")}
              value={"2"}
              onClick={handleClick}
            >
              2 Sao (100){" "}
            </button>
            <button
              className={buttonClass("3")}
              value={"3"}
              onClick={handleClick}
            >
              3 Sao (100)
            </button>
            <button
              className={buttonClass("4")}
              value={"4"}
              onClick={handleClick}
            >
              4 Sao (100)
            </button>
            <button
              className={buttonClass("5")}
              value={"5"}
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
        {data.map((item, index) => (
          <div>
            <FeedbackItem />
            {index !== data.length - 1 && <hr className="h-[2px] mt-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackFrame;
