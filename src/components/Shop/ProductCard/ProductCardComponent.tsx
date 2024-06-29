import React, { useEffect } from "react";
import { Rate } from "antd";
import Link from "next/link";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "../../../utils/formatPrice";
import "./index.scss";
import AddCartButton from "@/components/Atoms/AddCartButton";
import useAppContext from "@/hooks/useAppContext";
import shopApi from "@/api/shop/shopApi";

interface ProductCardProps {
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  priceSold: number;
  rate: number;
  superCategoryName: string;
  category: ProductCardProps;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({
  categoryId,
  categoryName,
  image,
  priceIn,
  priceSold,
  rate,
  superCategoryName,
  category,
}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [totalFeedback, setTotalFeedback] = React.useState(0);

  const getFeedbackAllById = async (categoryId: number) => {
    try {
      // enableLoading();
      const response = await shopApi.getFeedbackById(categoryId);
      // console.log(response.data.result.$values.length);
      if (response.data.isSuccess) {
        setTotalFeedback(response.data.result.$values.length);
      } else {
        console.log("Failed to fetch data");
        return [];
      }
      // disableLoading();
      return response.data.result.$values;
    } catch (error) {
      // enableLoading();
      console.error("Error fetching data:", error);
      // disableLoading();
      return [];
    }
  };

  useEffect(() => {
    getFeedbackAllById(Number(categoryId));
  }, [categoryId]);

  return (
    <>
      <Link href={`${PATH_SHOP.productDetails(categoryId)}`}>
        <div className="flex flex-col gap-3 w-[280px]  rounded-2xl shadow-lg p-3 box-border transition ease-in-out duration-500 hover:scale-110 hover:bg-white hover:shadow-orange-200  ">
          <div className="w-full h-full flex justify-center items-center content-center">
            <img
              className="w-full h-[282px] object-contain box-content transition ease-in-out duration-500 hover:scale-110 rounded"
              src={image}
              alt={categoryName}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="font-baloo-2 text-base text-zinc-300 font-semibold">
              {superCategoryName}
            </div>
            <div className="w-full font-baloo-2 text-lg text-black font-medium mb-2">
              {categoryName}
            </div>
            <div className="flex gap-3 items-center content-center">
              <Rate
                className="text-sm text-red-400"
                allowHalf
                disabled
                value={rate}
              />
              <div className="text-sm text-zinc-400">({totalFeedback})</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-2 items-center ">
              <div className="font-quicksand text-chocolate text-lg font-bold">
                {formatPrice(priceSold)}₫
              </div>
              {/* <div className="font-quicksand text-zinc-400 text-xs font-bold line-through mt-0.5">
                {formatPrice(priceIn)}₫
              </div> */}
            </div>
            <div>
              <AddCartButton product={category} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCardComponent;
