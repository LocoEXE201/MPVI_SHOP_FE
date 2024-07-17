import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { Checkbox, Col, Row } from "antd";
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
import useCategories from "@/api/warehouse/category";
import useSuperCategory from "@/api/warehouse/superCategory";

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
  priceSold: number;
  rate: number;
  notes: string;
  superCategoryName: string;
  category: ProductCardProps;
}

const ProductsComponent = (prop: {}) => {
  // const { isLoading, enableLoading, disableLoading } = useAppContext();
  const {
    getAllCategory,
    category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useCategories();
  const {
    getAllSuperCategory,
    superCategory,
    isLoading: superCategoryLoading,
    error: superCategoryError,
  } = useSuperCategory();
  // const [category, setCategory] = React.useState<ProductCardProps[]>([]);
  // const [superCategory, setSuperCategory] = React.useState<SuperCategoryDTO[]>(
  //   []
  // );
  const [value2, setValue2] = React.useState<number[]>([0, 1000]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredPrice, setFilteredPrice] = useState("All");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // const getAllCategory: any = async () => {
  //   try {
  //     enableLoading();
  //     const response = await categoryApi.getAllCategory();
  //     if (response.status === 200) {
  //       disableLoading();
  //       setCategory(response.data.result);
  //     } else {
  //       console.log("Failed to fetch data. Status code:", response.status);
  //       return [];
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return [];
  //   }
  // };

  // React.useEffect(() => {
  //   getAllCategory();
  // }, []);

  // console.log(category);

  // const getAllSuperCategory: any = async () => {
  //   try {
  //     enableLoading();
  //     const response = await superCategoryApi.getAllSuperCategory();
  //     if (response.status === 200) {
  //       disableLoading();
  //       setSuperCategory(response.data.result);
  //     } else {
  //       console.log("Failed to fetch data. Status code:", response.status);
  //       return [];
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return [];
  //   }
  // };

  React.useEffect(() => {
    getAllSuperCategory();
  }, []);

  React.useEffect(() => {
    getAllCategory();
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
    return (
      value2[0] * 1000 <= cate.priceSold && cate.priceSold <= value2[1] * 1000
    );
  });

  // console.log(filterCategory);

  const handleChange = (value: string) => {
    setFilteredPrice(value);
    setPage(1);
  };

  const handleCheckboxChange = (superCategory: string, checked: boolean) => {
    setSelectedItems((prevSelectedItems) => {
      if (checked) {
        return [...prevSelectedItems, superCategory];
      } else {
        return prevSelectedItems.filter((cate) => cate !== superCategory);
      }
    });
    setPage(1);
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
      return a.priceSold - b.priceSold;
    } else if (filteredPrice === "maxToMin") {
      return b.priceSold - a.priceSold;
    } else {
      return 0;
    }
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedCategory = sortedAndFilteredCategory.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const filterCategoryDisplay = (filterCategory: ProductCardProps[]) => {
    if (filterCategory?.length > 0) {
      return (
        <div className="flex flex-col justify-center items-center content-center gap-4 w-full p-4">
          <div className="w-full grid grid-cols-4 gap-x-40 gap-y-9 mq1350:flex mq1350:flex-wrap mq1350:justify-center mq1350:gap-x-5">
            {filterCategory?.map((cate: any, index) => (
              <ProductCardComponent
                key={index}
                categoryId={cate.categoryId}
                categoryName={cate.categoryName}
                image={cate.image}
                priceIn={cate.priceIn}
                priceSold={cate.priceSold}
                rate={cate.rate}
                superCategoryName={cate.superCategory.superCategoryName}
                category={cate}
              />
            ))}
          </div>
          <div className=" w-full flex justify-center items-center content-center my-px ">
            <ThemeProvider theme={theme}>
              <Pagination
                count={Math.ceil(
                  sortedAndFilteredCategory.length / itemsPerPage
                )}
                page={page}
                onChange={handlePageChange}
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
          <div className="mt-3 text-[1.2rem]">Không có sản phẩm phù hợp</div>
        </div>
      );
    }
  };

  return (
    <>
      <Loading loading={categoryLoading || superCategoryLoading} />
      <PageTitle mainTitle="Sản Phẩm" subTitle="Trang Chủ - Sản Phẩm" />
      <div className="w-[83rem] mq1350:w-full flex flex-row mq1350:flex-col items-start mq1350:items-center justify-center max-w-full gap-5 mt-2.5 pl-2">
        <div className="flex flex-col gap-7 p-6 w-[306px] mq1350:w-[95%] h-[413px] mq1350:h-auto border-[1px] border-solid border-zinc-200 bg-zinc-100 rounded ">
          <div>
            <div className="font-baloo text-lg mq1350:text-center text-black">
              Danh Mục Sản Phẩm
            </div>
            <hr className="h-px bg-zinc-200 border-0" />
          </div>

          <div className="mq1350:flex mq1350:justify-center mq1350:w-full mq1350:flex-wrap">
            {superCategory ? (
              <Checkbox.Group style={{ width: "100%" }}>
                <Col className="flex flex-col gap-3 mq1350:flex-row mq1350:flex-wrap mq900:gap-x-[2%] mq1350:gap-[5%] mq1350:justify-center mq1350:w-full">
                  {superCategory?.map((supercategory: any, index: any) => (
                    <Row key={index} className="mq900:w-[48%]">
                      <Checkbox
                        value={supercategory?.superCategoryName}
                        onChange={(e: CheckboxChangeEvent) =>
                          handleCheckboxChange(
                            supercategory?.superCategoryName,
                            e.target.checked
                          )
                        }
                      >
                        <div className="flex flex-row mq1350:w-auto w-[200px] justify-between mq1350::justify-start font-baloo-2 text-sm text-zinc-500">
                          <div>{supercategory?.superCategoryName}</div>
                          <div className="mq1350:ml-[10px]">
                            [{supercategory?.totalCategory}]
                          </div>
                        </div>
                      </Checkbox>
                    </Row>
                  ))}
                </Col>
              </Checkbox.Group>
            ) : (
              <Checkbox.Group style={{ width: "100%" }}>
                <Col className="flex flex-col gap-3">
                  <Row>
                    <Checkbox>
                      <div className="flex flex-row w-[200px] justify-between font-baloo-2 text-sm text-zinc-500">
                        <div className="">Another</div>
                        <div>[0]</div>
                      </div>
                    </Checkbox>
                  </Row>
                </Col>
              </Checkbox.Group>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div className="font-baloo text-lg text-black">Lọc Theo Giá</div>
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
        </div>
        <div className="mq1350:w-[95%] w-full h-full flex flex-col gap-y-3 justify-center align-items-center">
          <div className="w-full h-[47px] mq900:h-auto mq900:pb-3 mq900:gap-x flex flex-row mq900:flex-wrap gap-2 mq900:justify-start mq900:pl-3 justify-evenly content-center items-center border-solid border-gray-300 bg-zinc-100 rounded shadow-lg">
            <div className="mq900:hidden flex flex-row gap-1 content-center p-2">
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
            <div className="mq900:w-[100%] flex-1 mq900:flex-auto mq900:text-primary w-[600px] mq1350:w-auto font-baloo-2 text-gray-100 text-sm mq900:font-baloo mq900:text-[1.1rem]">
              Chúng tôi tìm thấy <span>{category?.length}</span> sản phẩm bạn
              cần tìm
            </div>
            <div className="flex font-baloo text-gray-100 text-sm content-center mq900:content-start mq900:justify-start mt-0.5 ">
              Sắp xếp
            </div>
            <div className="mq900:ml-2 mq900:mr-2 text-black">
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
          {filterCategoryDisplay(paginatedCategory)}
        </div>
      </div>
    </>
  );
};

export default ProductsComponent;
