import React, { useState } from "react";
import { Rate } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { formatDate_DD_MM_YYYY } from "@/utils/formatDate";

interface FeedbackItem {
  customerName: string;
  createOn: string;
  detail: string;
  image: string;
  rating: number;
}

const FeedbackItem = ({
  customerName,
  createOn,
  detail,
  image,
  rating,
}: FeedbackItem) => {
  const [isLiked, setIsLiked] = useState(false);
  const onLikedChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex flex-col gap-5 mt-3">
      <div className="flex flex-row gap-2 ">
        <div className="">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-520-cute-groom-avatar-image_1153286.jpg"
            alt="ava"
            className="w-[40px] h-[40px] rounded-xl "
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div>{customerName}</div>
            <div>
              <Rate
                className="text-sm text-red-400"
                allowHalf
                disabled
                defaultValue={rating}
              />
            </div>
            <div className="flex flex-row gap-2 ">
              <div>{formatDate_DD_MM_YYYY(createOn)}</div>
              {/* <div>|</div>
              <div>Phân loại: Book</div> */}
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <div className="w-8/12">{detail}</div>
            <div className="flex flex-row gap-2 items-center content-center ">
              <div className="w-[150px] h-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  className="object-contain"
                />
              </div>
              <div className="w-[150px] h-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  className="object-contain"
                />
              </div>

              <div className="w-[150px] h-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  className="object-contain"
                />
              </div>
              <div className="w-[150px] h-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  className="object-contain"
                />
              </div>
              <div className="w-[150px] h-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <button
                className="flex justify-start mt-0.5 "
                onClick={onLikedChange}
              >
                {isLiked ? (
                  <LikeOutlined width={30} height={30} />
                ) : (
                  <LikeFilled
                    width={30}
                    height={30}
                    style={{ color: "#cb6f04" }}
                  />
                )}
              </button>
              <div>325</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
