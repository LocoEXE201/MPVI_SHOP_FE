import PageTitle from "@/components/Molecules/PageTitle";
import React from "react";
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
}

const ProductDetailsComponent = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const params = useParams();
  const categoryId = params.productId;
  const [category, setCategory] = React.useState<ProductCardProps[] | null>();
  const [value2, setValue2] = React.useState<number[]>([37, 52]);
  const [quantity, setQuantity] = React.useState<number>(0);
  const router = useRouter();

  const navigateToPage = (route: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    }
    router.push(route);
  };

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

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả ",
      children: <DetailFrame />,
    },
    {
      key: "2",
      label: "Đánh giá",
      children: "Content of Tab Pane 2",
    },
  ];

  const addQuantity = (quantity: any) => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = (quantity: any) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

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

  const categoryItem = category?.find(
    (cate) => Number(cate.categoryId) === Number(categoryId)
  );
  const name = categoryItem?.categoryName;
  // console.log(categoryItem);

  return (
    <div>
      <Loading loading={isLoading} />
      <PageTitle mainTitle="Sản Phẩm" subTitle="Trang Chủ - Sản Phẩm" />
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-h-max flex flex-row mt-2.5 mb-6">
          <div className=" flex flex-col gap-7 p-6 w-[306px] h-[413px] border-[1px] border-solid border-zinc-200 bg-zinc-100 rounded box-border">
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
          <div className="w-full h-full flex flex-col gap-3 p-1 box-border ">
            <div className="ml-2.5">
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
            <div className="flex flex-row gap-4 items-center">
              <div className="flex flex-col w-[495px] h-[591px] items-center ">
                <div className="flex w-[471px] h-[470px] justify-center items-center content-center border-[1px] border-zinc-400 border-solid rounded mb-1.5 ">
                  <img
                    src={categoryItem?.image}
                    className="object-contain transition ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <ul className="flex flex-row gap-4  ">
                    <li className="w-[85px] h-[85px]">
                      <img
                        src="/mock/image 5.png"
                        className="object-contain transition ease-in-out hover:scale-110"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src="/mock/image 9.png"
                        className="object-contain transition ease-in-out hover:scale-110"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src="/mock/image 8.png"
                        className="object-contain transition ease-in-out hover:scale-110"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src="/mock/image 10.png"
                        className="object-contain transition ease-in-out hover:scale-110"
                      />
                    </li>
                    <li className="w-[85px] h-[85px]">
                      <img
                        src="/mock/image 11.png"
                        className="object-contain transition ease-in-out hover:scale-110"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[495px] h-[591px]">
                <div className="font-baloo text-xl">
                  {categoryItem?.categoryName}
                </div>
                <div className="font-baloo-2 text-base text-zinc-400">
                  Gấu bông được làm thủ công từ sợi lên tự nhiên và mềm mại. Có
                  nhiều hình dáng dễ thương và xinh xắn.
                </div>
                <hr className="h-px bg-zinc-300 border-0" />
                <div className="flex gap-3">
                  <Rate
                    className="text-base text-red-400"
                    allowHalf
                    disabled
                    defaultValue={categoryItem?.rate}
                    style={{ marginTop: "3px" }}
                  />
                  <div className="font-poppins text-base text-zinc-400">
                    ( 75 Đánh giá )
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="font-poppins text-2xl text-chocolate font-semibold">
                    {formatPrice((categoryItem?.priceIn ?? 0) * 1000)}đ
                  </div>
                  <div className="font-poppins text-base text-zinc-400 line-through mt-1.5">
                    60.000đ
                  </div>
                </div>
                <div className="flex flex-row gap-2 font-baloo-2 text-lg">
                  <div className="font-semibold">Phân loại:</div>
                  <ul className="flex flex-row justify-around gap-1">
                    <li>
                      <button className="w-[80px] h-[30px] flex items-center justify-center bg-chocolate font-medium text-white border-[1px] border-solid border-zinc-200 rounded">
                        Teddy
                      </button>
                    </li>
                    <li>
                      <button className="w-[70px] h-[30px] flex items-center justify-center font-medium text-zinc-400 border-[1px] border-solid border-zinc-200 rounded">
                        Pooh
                      </button>
                    </li>
                    <li>
                      <button className="w-[80px] h-[30px] flex items-center justify-center font-medium text-zinc-400 border-[1px] border-solid border-zinc-200 rounded">
                        Thỏ
                      </button>
                    </li>
                    <li>
                      <button className="w-[80px] h-[30px] flex items-center justify-center font-medium text-zinc-400 border-[1px] border-solid border-zinc-200 rounded">
                        Gấu Dâu
                      </button>
                    </li>
                    <li>
                      <button className="w-[80px] h-[30px] flex items-center justify-center font-medium text-zinc-400 border-[1px] border-solid border-zinc-200 rounded">
                        Cáo
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-2 font-baloo-2 font-semibold text-lg">
                  <div>Số lượng:</div>
                  <div className="flex flex-row gap-3">
                    <button
                      className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
                      onClick={() => addQuantity(quantity)}
                    >
                      +
                    </button>
                    <div className="flex items-center content-center text-chocolate text-xl">
                      {quantity}
                    </div>
                    <button
                      className="w-[20px] h-[20px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate font-normal mt-1"
                      onClick={() => reduceQuantity(quantity)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="w-[152px] h-[40px] flex flex-row gap-1 bg-chocolate text-white text-base justify-center items-center content-center rounded">
                    <img
                      src="/Icons/cart.svg"
                      className="w-[20px] h-[20px] text-base "
                    />
                    <div className="font-baloo-2 text-base font-bold  ">
                      Thêm Giỏ Hàng
                    </div>
                  </button>
                  <button className="w-[95px] h-[40px] flex justify-center items-center content-center border-[1px] border-solid border-chocolate rounded text-chocolate">
                    Mua Ngay
                  </button>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-solid border-zinc-300 rounded p-4 box-border w-full h-full">
              <ConfigProvider
                theme={{
                  components: {
                    Tabs: {
                      itemActiveColor: "#CB6F04",
                      inkBarColor: "#CB6F04",
                      itemSelectedColor: "#CB6F04",
                      itemHoverColor: "#CB6F04",
                      titleFontSizeLG: 22,
                      fontFamily: "Segoe UI Symbol",
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

            <div className="flex flex-col gap-4 w-full justify-center">
              <div className="flex justify-center items-center content-center font-baloo text-9xl ">
                Sản Phẩm Khác
              </div>
              <div className="grid grid-cols-4 col-auto ">
                {category?.map((cate: any, index) => {
                  if (index < 4) {
                    return (
                      <ProductCardComponent
                        key={index}
                        categoryId={cate.categoryId}
                        categoryName={cate.categoryName}
                        image={cate.image}
                        priceIn={cate.priceIn}
                        rate={cate.rate}
                        superCategoryName={cate.superCategory.superCategoryName}
                      />
                    );
                  }
                })}
              </div>
              <div className="flex w-full justify-end items-end content-end border-box ">
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
