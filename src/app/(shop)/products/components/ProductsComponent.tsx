import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { Checkbox, Col, Row } from "antd";
import type { GetProp } from "antd";
import { Select, Space } from "antd";
import { formatPrice } from "../../../../utils/formatPrice";
import ProductCard from "@/components/Shop/ProductCard";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import "./index.scss";
import categoryApi from "@/api/warehouse/categoryApi";
import Loading from "@/components/Templates/Loading/Loading";
import ProductCardComponent from "@/components/Shop/ProductCard/ProductCardComponent";
import superCategoryApi from "@/api/warehouse/superCategoryApi";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SuperCategoryDTO } from "@/models/warehouse/SuperCategoryDTO";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function valuetext(value: number) {
  return `đ ${value * 10000}`;
}

const minDistance = 10;

interface ProductCardProps {
  categoryId: number;
  categoryName: string;
  image: string;
  priceIn: number;
  rate: number;
  superCategoryName: string;
  category: ProductCardProps;
}

const ProductsComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = React.useState<ProductCardProps[]>([]);
  const [superCategory, setSuperCategory] = React.useState<SuperCategoryDTO[]>(
    []
  );
  const [value2, setValue2] = React.useState<number[]>([10, 1000]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredPrice, setFilteredPrice] = useState("All");

  const getAllCategory: any = async () => {
    try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
        // console.log(response.data);
        disableLoading();
        setCategory(response.data.result);
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
    getAllCategory();
  }, []);

  // console.log(category);

  const getAllSuperCategory: any = async () => {
    try {
      enableLoading();
      const response = await superCategoryApi.getAllSuperCategory();
      if (response.status === 200) {
        disableLoading();
        setSuperCategory(response.data.result);
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
    getAllSuperCategory();
  }, []);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
        console.log(clamped);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
        console.log(clamped);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };

  const filterCategory = category?.filter((cate: any) => {
    return value2[0] <= cate.priceIn && cate.priceIn <= value2[1];
  });

  const handleChange = (value: string) => {
    setFilteredPrice(value);
  };

  const handleCheckboxChange = (superCategory: string, checked: boolean) => {
    setSelectedItems((prevSelectedItems) => {
      if (checked) {
        return [...prevSelectedItems, superCategory];
      } else {
        return prevSelectedItems.filter((cate) => cate !== superCategory);
      }
    });
  };

  const selectedCategory = (
    selectedItems: string[],
    filterCategory: ProductCardProps[]
  ) => {
    if (selectedItems?.length > 0) {
      return selectedItems?.flatMap((selected) => {
        return filterCategory?.filter(
          (cate: any) => cate.superCategory.superCategoryName === selected
        );
      });
    } else {
      return filterCategory;
    }
  };

  const sortedAndFilteredCategory = selectedCategory(
    selectedItems,
    filterCategory
  )?.sort((a, b) => {
    if (filteredPrice === "minToMax") {
      return a.priceIn - b.priceIn;
    } else if (filteredPrice === "maxToMin") {
      return b.priceIn - a.priceIn;
    } else {
      return 0;
    }
  });

  const filterCategoryDisplay = (filterCategory: ProductCardProps[]) => {
    if (filterCategory?.length > 0) {
      return (
        <div className="flex flex-col justify-center items-center content-center gap-4 w-full p-3">
          <div className="grid grid-cols-3 gap-x-20 gap-y-9">
            {filterCategory?.map((cate: any, index) => (
              <ProductCardComponent
                key={index}
                categoryId={cate.categoryId}
                categoryName={cate.categoryName}
                image={cate.image}
                priceIn={cate.priceIn}
                rate={cate.rate}
                superCategoryName={cate.superCategory.superCategoryName}
                category={cate}
              />
            ))}
          </div>
          <div className=" w-full flex justify-center items-center content-center my-px ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={3}
                variant="outlined"
                shape="rounded"
                size="large"
              />
            </ThemeProvider>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center content-center text-lg text-zinc-400 font-bold font-baloo-2">
          <div>Không có sản phẩm phù hợp</div>
        </div>
      );
    }
  };

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Sản Phẩm" subTitle="Trang Chủ - Sản Phẩm" />
      <div className="w-[83rem] flex flex-row items-start justify-center max-w-full gap-5 mt-2.5 pl-2">
        <div className=" flex flex-col gap-7 p-6 w-[306px] h-[413px] border-[1px] border-solid border-zinc-200 bg-zinc-100 rounded ">
          <div>
            <div className="font-baloo text-lg">Danh Mục Sản Phẩm</div>
            <hr className="h-px bg-zinc-200 border-0" />
          </div>

          <div>
            <Checkbox.Group style={{ width: "100%" }}>
              <Col className="flex flex-col gap-3">
                {superCategory.map((supercategory: any, index: any) => (
                  <Row key={index}>
                    <Checkbox
                      value={supercategory?.superCategoryName}
                      onChange={(e: CheckboxChangeEvent) =>
                        handleCheckboxChange(
                          supercategory?.superCategoryName,
                          e.target.checked
                        )
                      }
                    >
                      <div className="flex flex-row w-[200px] justify-between font-baloo-2 text-sm text-zinc-500">
                        <div className="">
                          {supercategory?.superCategoryName}
                        </div>
                        <div>[{supercategory?.totalCategory}]</div>
                      </div>
                    </Checkbox>
                  </Row>
                ))}
              </Col>
            </Checkbox.Group>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div className="font-baloo text-lg">Lọc Theo Giá</div>
              <hr className="h-px bg-zinc-200 border-0" />
            </div>

            <Slider
              getAriaLabel={() => "Minimum distance shift"}
              value={value2}
              onChange={handleChange2}
              //   valueLabelDisplay="auto"
              min={0}
              max={1000}
              getAriaValueText={valuetext}
              disableSwap
              style={{ color: "#CB6F04" }}
            />
            <div className="flex flex-row gap-2 font-poppins text-zinc-500 font-bold ">
              <div className="font-baloo text-lg text-black font-normal ">
                Giá:
              </div>{" "}
              đ {formatPrice(value2[0] * 1000)} - đ{" "}
              {formatPrice(value2[1] * 1000)}
            </div>
          </div>

          <div>
            <button className="w-[82px] h-[40px] bg-chocolate text-base text-white rounded">
              Tìm Kiếm
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-3 ">
          <div className="w-full h-[47px] flex flex-row gap-2 justify-evenly content-center items-center border-solid border-gray-300 bg-zinc-100 rounded shadow-lg  ">
            <div className="flex flex-row gap-1 content-center p-2">
              <button className=" flex w-[30px] h-[30px] bg-chocolate rounded justify-center content-center items-center">
                {" "}
                <img
                  className="cursor-pointer h-[15px] w-[15px]"
                  loading="lazy"
                  alt=""
                  src="/Icons/list.svg"
                />
              </button>
              <button className="flex w-[30px] h-[30px] bg-white rounded justify-center content-center items-center">
                {" "}
                <img
                  className="cursor-pointer h-[15px] w-[15px]"
                  loading="lazy"
                  alt=""
                  src="/Icons/tables.svg"
                />
              </button>
            </div>
            <div className="w-[600px] font-baloo-2 text-gray-100 text-sm ">
              Chúng tôi tìm thấy <span>{category?.length}</span> sản phẩm bạn cần
              tìm
            </div>
            <div className=" flex font-baloo text-gray-100 text-sm content-center mt-0.5 ">
              Sắp xếp
            </div>
            <div>
              <Select
                defaultValue="All"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "All", label: "Tất Cả Sản Phẩm" },
                  { value: "minToMax", label: "Giá Tăng Dần" },
                  { value: "maxToMin", label: "Giá Giảm Dần" },
                ]}
              />
            </div>
          </div>
          {filterCategoryDisplay(sortedAndFilteredCategory)}
        </div>
      </div>
    </>
  );
};

export default ProductsComponent;
