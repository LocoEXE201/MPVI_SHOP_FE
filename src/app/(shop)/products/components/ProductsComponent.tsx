import PageTitle from "@/components/Molecules/PageTitle";
import useAppContext from "@/hooks/useAppContext";
import React, { useEffect } from "react";
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
// Define custom theme
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

const ProductsComponent = (prop: {}) => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = React.useState<string[]>([]);
  const [value2, setValue2] = React.useState<number[]>([37, 52]);

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

  console.log(category);
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Sản Phẩm" subTitle="Trang Chủ - Sản Phẩm" />
      <div className="w-[83rem] flex flex-row items-start justify-center max-w-full gap-5 mt-2.5">
        <div className=" flex flex-col gap-7 p-6 w-[306px] h-[413px] border-[1px] border-solid border-zinc-200 bg-zinc-100 rounded ">
          <div>
            <div className="font-baloo text-lg">Danh Mục Sản Phẩm</div>
            <hr className="h-px bg-zinc-200 border-0" />
          </div>

          <div>
            <Checkbox.Group style={{ width: "100%" }}>
              <Col className="flex flex-col gap-3">
                <Row>
                  <Checkbox value="A">
                    <div className="flex flex-row w-[200px] justify-between font-baloo-2 text-sm text-zinc-500">
                      <div className="">Sản Phẩm Len</div>
                      <div>[12]</div>
                    </div>
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox value="B">
                    <div className="flex flex-row w-[200px] justify-between font-baloo-2 text-sm text-zinc-500">
                      <div>Văn Phòng Phẩm</div>
                      <div>[13]</div>
                    </div>
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox value="C">
                    <div className="flex flex-row w-[200px] justify-between font-baloo-2 text-sm text-zinc-500">
                      <div>Khác</div>
                      <div>[14]</div>
                    </div>
                  </Checkbox>
                </Row>
              </Col>
            </Checkbox.Group>
          </div>
          {/* <ul>
            <li>Sản phẩm len</li>
            <li>Văn phòng phẩm </li>
            <li>Khác</li>
          </ul> */}
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
              getAriaValueText={valuetext}
              disableSwap
              style={{ color: "#CB6F04" }}
            />
            <div className="flex flex-row gap-2 font-poppins text-zinc-500 font-bold ">
              <div className="font-baloo text-lg text-black font-normal ">
                Giá:
              </div>{" "}
              đ {formatPrice(value2[0] * 10000)} - đ{" "}
              {formatPrice(value2[1] * 10000)}
            </div>
          </div>

          <div>
            <button className="w-[82px] h-[40px] bg-chocolate text-base text-white rounded">
              Tìm Kiếm
            </button>
          </div>
        </div>
        <div className="w-[800px] h-[1597px] flex flex-col gap-3 ">
          <div className="w-[966px] h-[47px] flex flex-row gap-2 justify-evenly content-center items-center border-solid border-gray-300 bg-zinc-100 rounded shadow-lg  ">
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
              Chúng tôi tìm thấy <span>29</span> sản phẩm bạn cần tìm
            </div>
            <div className=" flex font-baloo text-gray-100 text-sm content-center mt-0.5 ">
              Sắp xếp
            </div>
            <div>
              <Select
                defaultValue="minToMax"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "minToMax", label: "Giá Tăng Dần" },
                  { value: "maxToMin", label: "Giá Giảm Dần" },
                  { value: "All", label: "Tất Cả Sản Phẩm" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-48 gap-y-9">
            {category.map((cate: any, index) => (
              <ProductCardComponent
                key={index}
                categoryId={cate.categoryId}
                categoryName={cate.categoryName}
                image={cate.image}
                priceIn={cate.priceIn}
                rate={cate.rate}
                superCategoryName={cate.superCategory.superCategoryName}
              />
            ))}
          </div>
          <div className=" w-[966px] h-[47px] flex justify-center items-center content-center my-px">
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
      </div>
    </>
  );
};

export default ProductsComponent;
