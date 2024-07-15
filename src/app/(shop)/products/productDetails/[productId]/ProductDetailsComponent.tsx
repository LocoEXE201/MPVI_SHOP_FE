import PageTitle from "@/components/Molecules/PageTitle";
import React, { useState } from "react";
import { formatPrice } from "../../../../../utils/formatPrice";
import { Checkbox, Col, ConfigProvider, Row, Space } from "antd";
import Slider from "@mui/material/Slider";
import useAppContext from "@/hooks/useAppContext";
import { Breadcrumb } from "antd";
import { PATH_SHOP } from "@/routes/paths";
import { Rate } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import DetailFrame from "@/components/Shop/DetailFrame";
import { useParams } from "next/navigation";
import categoryApi from "@/api/warehouse/categoryApi";
import Loading from "@/components/Templates/Loading/Loading";
import ProductCardComponent from "@/components/Shop/ProductCard/ProductCardComponent";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { useRouter } from "next/navigation";
import { Product } from "../../../../../../interfaces";
import { useAppSelector } from "@/store/store";
import {
  productQtySelector,
  increment,
  decrement,
} from "@/store/features/cartSlice";
import { useDispatch } from "react-redux";
import QuantityButton from "@/components/Atoms/QuantityButton";
import cartApi from "@/api/shop/cartApi";
import FeedbackFrame from "@/components/Shop/FeedbackFrame";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SuperCategoryDTO } from "@/models/warehouse/SuperCategoryDTO";
import superCategoryApi from "@/api/warehouse/superCategoryApi";

interface Props {
  product: Product;
}

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

const ProductDetailsComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const params = useParams();
  const categoryId = params.productId;
  const [category, setCategory] = React.useState<Product[]>([]);
  const [superCategory, setSuperCategory] = React.useState<SuperCategoryDTO[]>(
    []
  );
  const [value2, setValue2] = React.useState<number[]>([10, 1000]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredPrice, setFilteredPrice] = useState("All");
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [averageOfFeedback, setAverageOfFeedback] = useState(0);
  const router = useRouter();

  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

  const getAllCategory: any = async () => {
    try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
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

  const categoryItem: any = category?.find(
    (cate) => Number(cate.categoryId) === Number(categoryId)
  );
  const name = categoryItem?.categoryName;
  const id = categoryItem?.categoryId;

  const quantity = useAppSelector((state) =>
    productQtySelector(state, Number(id))
  );

  const dispatch = useDispatch();

  // console.log(totalFeedback);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả ",
      children: <DetailFrame notes={categoryItem?.notes} />,
    },
    {
      key: "2",
      label: "Đánh giá",
      children: (
        <FeedbackFrame
          categoryId={categoryId}
          setTotalFeedback={setTotalFeedback}
          setAverageOfFeedback={setAverageOfFeedback}
        />
      ),
    },
  ];

  return (
    <div>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Sản Phẩm" subTitle="Trang Chủ - Sản Phẩm" />
      <div className="flex items-center justify-center w-full">
        <div className="w-full h-full mt-2.5 mb-6 flex mq1725:flex-row mq1350:flex-row mq900:flex-col mq450: flex-col">
          <div className=" flex flex-col mq1725:flex mq1350:flex mq900:hidden mq450:hidden gap-7 p-6 w-[306px] h-[413px] border-[1px] border-solid border-zinc-200 bg-zinc-100 rounded  ">
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
              {/* <button className="w-[82px] h-[40px] bg-chocolate text-base text-white rounded">
                Tìm Kiếm
              </button> */}
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-3 p-1 box-border ">
            <div className="ml-2.5 mq800:flex justify-center items-center content-center">
              <ConfigProvider
                theme={{
                  components: {
                    Breadcrumb: {
                      iconFontSize: 30,
                      itemColor: "red",
                      lastItemColor: "#CB6F04",
                      linkColor: "#CB6F04",
                      separatorColor: "#2B2B2D",
                    },
                  },
                }}
              >
                <Space>
                  <Breadcrumb
                    separator=">"
                    items={[
                      {
                        title: "Trang Chủ",
                        href: `${PATH_SHOP.root}`,
                      },
                      {
                        title: "Sản Phẩm",
                        href: `${PATH_SHOP.products}`,
                      },
                      {
                        title: `${name}`,
                      },
                    ]}
                    style={{ fontSize: "18px" }}
                  />
                </Space>
              </ConfigProvider>
            </div>
            <div className="flex mq1725:flex-row mq1350:flex-row mq900:flex-row mq800:flex-col mq450:flex-col gap-4 items-center">
              <div className="flex flex-col w-[495px] h-max items-center ">
                <div className="flex w-[400px] h-[400px] justify-center items-center content-center border-[1px] border-zinc-400 border-solid rounded mb-1.5 ">
                  <img
                    src={categoryItem?.image}
                    className=" w-full h-full object-contain transition ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <ul className="mq1725:flex mq1350:flex mq900:flex mq800:hidden mq450:hidden flex-row gap-4  ">
                    <li className="w-[85px] h-[85px]">
                      <img
                        src={categoryItem?.image}
                        className="w-full h-full object-contain transition ease-in-out hover:scale-110 rounded"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src={categoryItem?.image}
                        className="w-full h-full object-contain transition ease-in-out hover:scale-110 rounded"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src={categoryItem?.image}
                        className="w-full h-full object-contain transition ease-in-out hover:scale-110 rounded"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src={categoryItem?.image}
                        className="w-full h-full object-contain transition ease-in-out hover:scale-110 rounded"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src={categoryItem?.image}
                        className="w-full h-full object-contain transition ease-in-out hover:scale-110 rounded"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full h-max mq1725:py-5 mq1350:py-5 mq900:py-5 mq800:p-5 ml-5 mq768:justify-center items-center content-center mq450:p-5  ">
                <div className="font-baloo text-xl">
                  {categoryItem?.categoryName}
                </div>
                <div className="font-baloo-2 text-base text-zinc-400">
                  Sản phẩm làm bằng len thân thiện với người sử dụng và góp phần
                  ủng hộ người khiếm thị.
                </div>
                <hr className="h-px bg-zinc-300 border-0" />
                <div className="flex gap-3 mq768:flex-col gap-3">
                  <Rate
                    className="text-base text-red-400"
                    allowHalf
                    disabled
                    defaultValue={categoryItem?.rate}
                    style={{ marginTop: "3px" }}
                  />
                  <div className="font-poppins text-base text-zinc-400 ">
                    ( {totalFeedback} Đánh giá )
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="font-poppins text-2xl text-chocolate font-semibold">
                    {formatPrice(categoryItem?.priceSold ?? 0)}đ
                  </div>
                  <div className="font-poppins text-base text-zinc-400 line-through mt-1.5">
                    {formatPrice(categoryItem?.priceIn ?? 0)}đ
                  </div>
                </div>
                <div className="flex flex-row gap-2 font-baloo-2 font-semibold text-lg">
                  <div className="mq768:hidden">Số lượng:</div>
                  <div className="flex flex-row gap-3">
                    <QuantityButton
                      onIncrease={(e: any) => {
                        e.preventDefault();
                        dispatch(increment(categoryItem));
                      }}
                      onDecrease={(e: any) => {
                        e.preventDefault();
                        dispatch(decrement(categoryItem));
                      }}
                      quantity={!quantity ? 0 : quantity}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <button
                    className="w-[152px] h-[40px] flex flex-row gap-1 bg-chocolate text-white text-base justify-center items-center content-center rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(increment(categoryItem));
                    }}
                  >
                    <img
                      src="/Icons/cart.svg"
                      className="w-[20px] h-[20px] text-base "
                    />
                    <div className="font-baloo-2 text-base font-bold  ">
                      Thêm Giỏ Hàng
                    </div>
                  </button>
                  {/* <AddCartButtonDetails product={categoryItem} /> */}
                  <button className="w-[95px] h-[40px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate">
                    Mua Ngay
                  </button>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-solid border-zinc-300 rounded box-border w-full h-full px-8 mq900:ml-3 px-4 mq800:ml-3 px-4 mq768:ml-4 mq450:ml-3 px-4  ">
              <ConfigProvider
                theme={{
                  components: {
                    Tabs: {
                      itemActiveColor: "#CB6F04",
                      inkBarColor: "#CB6F04",
                      itemSelectedColor: "#CB6F04",
                      itemHoverColor: "#CB6F04",
                      titleFontSizeLG: 22,
                      fontFamily: "Baloo",
                      fontWeightStrong: 800,
                    },
                  },
                }}
              >
                <Tabs
                  defaultActiveKey="1"
                  size="large"
                  style={{
                    marginBottom: 32,
                    fontSize: 16,
                    fontFamily: "baloo2",
                    color: "#7A7A7A",
                  }}
                  items={items}
                />
              </ConfigProvider>
            </div>

            <div className="flex flex-col gap-4 w-full justify-center mq1350:justify-center items-center content-center mq900:justify-center items-center content-center mq800:justify-center items-center content-center mq450:justify-center items-center content-center ">
              <div className="flex justify-center items-center content-center font-baloo text-9xl ">
                Sản Phẩm Khác
              </div>
              <div className="grid mq1725:grid-cols-4 gap-8 mq1350:grid-cols-2 gap-5 col-auto mq900:grid-cols-1 mq450: grid-cols-1 gap-5 col-auto ">
                {category?.map((cate: any, index) => {
                  if (index < 4) {
                    return (
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
                    );
                  }
                })}
              </div>
              <div className="flex w-full mq1725:justify-end items-end content-end mq1350:justify-center items-center content-center mq900: justify-center items-center content-center mq450: justify-center items-center content-center border-box ">
                <button
                  className="flex flex-row justify-center items-center content-center w-[132px] h-[49px] bg-chocolate text-white rounded font-baloo-2 text-base font-bold"
                  onClick={() => navigateToPage(PATH_SHOP.products)}
                >
                  <div className="flex flex-row justify-center items-center content-center ml-3">
                    Xem Thêm
                  </div>
                  <img
                    src="/Icons/arrow.svg"
                    className="text-white w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
