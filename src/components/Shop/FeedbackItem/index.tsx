import React from "react";
import { Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const FeedbackItem = () => {
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
            <div>Vo Nguyen Trung Son</div>
            <div>
              <Rate
                className="text-sm text-red-400"
                allowHalf
                disabled
                defaultValue={5}
              />
            </div>
            <div className="flex flex-row gap-2 ">
              <div>20-10-2023</div>
              <div>|</div>
              <div>Phân loại: Book</div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <div className="w-8/12">
              Máy khá gọn, thích hợp cho người thích gọn nhẹ dễ bỏ túi quần
              jean. Máy nhỏ hơn Iphone XR, được cái cầm nắm chắc tay
            </div>
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
              <button className="flex justify-start mt-0.5 ">
                <LikeOutlined width={30} height={30} />
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
