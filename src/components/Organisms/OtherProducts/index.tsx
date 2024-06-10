"use client";
import type { NextPage } from "next";
import "./index.scss";
import { useEffect, useState } from "react";
import { CategoryDTO } from "@/models/warehouse/CategoryDTO";
import categoryApi from "@/api/warehouse/categoryApi";
import { useRouter } from "next/navigation";
import { LOCALSTORAGE_CONSTANTS } from "@/constants/WebsiteConstant";
import { PATH_SHOP } from "@/routes/paths";
import { formatPrice } from "@/utils/formatPrice";

const OtherProducts: NextPage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  useEffect(() => {
    categoryApi
      .getAllCategory()
      .then((res) => {
        if (res.data && res.data.result) {
          setCategories(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigateToPage = (route: string) => {
    localStorage.setItem(LOCALSTORAGE_CONSTANTS.CURRENT_PAGE, route);
    router.push(route);
  };

  if (categories.length <= 0)
    return <div className="w-full h-[0.5rem] my-5"></div>;

  return (
    <section className="OtherProducts_Area mr-[-0.313rem] mb-[1.949rem] self-stretch rounded-8xs bg-black box-border flex flex-col items-end justify-start pt-[3rem] px-[1rem] pb-[1.875rem] gap-[1.906rem] max-w-full text-left text-[1rem] text-chocolate font-baloo">
      <div className="w-[99.25rem] flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2.188rem] text-white font-baloo mq900:gap-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem]">
          <h2 className="m-0 relative text-inherit tracking-[0.48px] leading-[1.313rem] font-normal font-inherit z-[1] mq450:text-[1.313rem] mq450:leading-[0.813rem] mq900:text-[1.75rem] mq900:leading-[1.063rem]">
            Sản Phẩm Khác
          </h2>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.375rem] text-[0.75rem] font-lato">
          {categories.map((category, index) => {
            if (index + 1 > 8) return <></>;
            return (
              <div
                onClick={() => {
                  router.push(PATH_SHOP.productDetails(category.categoryId));
                }}
                key={index}
                className="border-[1px] border-whitesmoke-200 border-dashed flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1]"
              >
                <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pb-[15rem] relative">
                  <img
                    className="h-full w-full absolute !m-[0] rounded-8xs overflow-hidden shrink-0 object-cover"
                    alt=""
                    src={
                      category.image ??
                      "/LandingPage/Carousel/carousel_mini.png"
                    }
                  />
                  {category && category.rate > 4 ? (
                    <>
                      <div className="absolute top-0 left-0 rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-hotpink flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.225rem] pl-[1.25rem] z-[1]">
                        <div className="relative leading-[0.75rem] inline-block min-w-[1.563rem]">
                          Hot
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {!category.rate || (category && category.rate <= 0) ? (
                    <>
                      <div className="absolute top-0 left-0  rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-mediumseagreen flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.225rem] pl-[1.25rem] z-[1]">
                        <div className="relative leading-[0.75rem] inline-block min-w-[1.563rem]">
                          New
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* <div className="absolute top-0 left-0  rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-lightskyblue flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.231rem] pl-[1.25rem] z-[1]">
                    <div className="relative leading-[0.75rem] inline-block min-w-[1.381rem]">
                      Sale
                    </div>
                  </div> */}
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.2rem]">
                    <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                      <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                        {category.superCategory
                          ? category.superCategory.superCategoryName
                          : ""}
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                      <div className="hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                        <span>
                          <p className="m-0">
                            {category.categoryName &&
                            category.categoryName?.length >= 25
                              ? category.categoryName.substring(0, 25) + "..."
                              : ""}
                            {category.categoryName &&
                            category.categoryName?.length < 25
                              ? category.categoryName
                              : ""}
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="w-[16.094rem] flex flex-col items-start justify-start gap-[0.3rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                      <div className="flex flex-row items-end justify-start gap-[0.2rem]">
                        {category && category.rate > 0 ? (
                          <>
                            <div className="flex flex-row items-center justify-center gap-[0.131rem] shrink-0 translate-y-[-1px]">
                              <img
                                className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                                alt=""
                                src={`/Icons/${Math.ceil(category.rate) >= 1 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                              />
                              <img
                                className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                                alt=""
                                src={`/Icons/${Math.ceil(category.rate) >= 2 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                              />
                              <img
                                className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                                alt=""
                                src={`/Icons/${Math.ceil(category.rate) >= 3 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                              />
                              <img
                                className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                                alt=""
                                src={`/Icons/${Math.ceil(category.rate) >= 4 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                              />
                              <img
                                className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                                alt=""
                                src={`/Icons/${Math.ceil(category.rate) >= 5 ? "star_rating_icon_active" : "star_rating_icon"}.svg`}
                              />
                            </div>
                            <div className="translate-y-[1.5px] flex flex-col items-start justify-end pt-[0rem] px-[0rem] box-border">
                              <div className="self-stretch relative inline-block shrink-0">
                                ({category.rate})
                              </div>
                            </div>
                          </>
                        ) : (
                          <p className="font-baloo-2 text-[0.75rem]">
                            Mong quý khách ủng hộ
                          </p>
                        )}
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                            <div className="flex flex-row items-end justify-start gap-[0.062rem] shrink-0">
                              {category.priceSold ? (
                                <>
                                  <b className="relative leading-[1.5rem] inline-block min-w-[4.063rem] whitespace-nowrap">
                                    ₫{formatPrice(category.priceSold)}
                                  </b>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0">
                            <img
                              className="h-[0.875rem] w-[0.875rem] mr-1 relative overflow-hidden shrink-0"
                              alt=""
                              src="/Icons/cart_icon_white.svg"
                              style={{ transform: "translateY(-1px)" }}
                            />
                            <b className="relative text-[0.875rem] leading-[1.5rem] inline-block font-lato text-white text-left min-w-[2.5rem]">
                              Thêm
                            </b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.375rem] text-[0.75rem] font-lato">
          <div
            className="cursor-pointer flex flex-row items-start justify-end py-[0rem] px-[0.187rem] box-border"
            onClick={() => {
              navigateToPage(PATH_SHOP.products);
            }}
          >
            <div className="flex-1 rounded-8xs hover:bg-black border-[2px] border-dashed border-white cursor-pointer bg-white flex flex-row items-center justify-center pt-[0.687rem] pb-[0.5rem] pl-[1.2rem] pr-[0.5rem] relative whitespace-nowrap z-[1]">
              <div className="text-primary text-[1.1rem] font-baloo tracking-[0.48px] leading-[1.25rem] flex items-center">
                Xem Thêm Nhiều Sản Phẩm Khác
              </div>
              <img
                className="ml-[0.4rem] relative overflow-hidden shrink-0"
                alt=""
                src="/Icons/arrow_left_active.svg"
                style={{ transform: "translateY(-1px)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;
