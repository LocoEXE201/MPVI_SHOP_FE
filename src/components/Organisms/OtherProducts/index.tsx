"use client";
import type { NextPage } from "next";
import "./index.scss";

const OtherProducts: NextPage = () => {
  return (
    <section className="OtherProducts_Area mr-[-0.313rem] mb-[1.949rem] self-stretch rounded-8xs bg-black box-border flex flex-col items-end justify-start pt-[3rem] px-[1rem] pb-[1.875rem] gap-[1.906rem] max-w-full text-left text-[1rem] text-chocolate font-baloo border-[1px] border-solid border-whitesmoke-300">
      <div className="w-[99.25rem] flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2.188rem] text-white font-baloo mq900:gap-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem]">
          <h2 className="m-0 relative text-inherit tracking-[0.48px] leading-[1.313rem] font-normal font-inherit z-[1] mq450:text-[1.313rem] mq450:leading-[0.813rem] mq900:text-[1.75rem] mq900:leading-[1.063rem]">
            Sản Phẩm Khác
          </h2>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.375rem] text-[0.75rem] font-lato">
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-6@2x.png"
              />
              <div className="w-[3.763rem] rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-hotpink flex flex-row items-start justify-start pt-[0.412rem] pb-[0.775rem] pr-[0.825rem] pl-[1.25rem] box-border z-[1]">
                <div className="flex-1 relative leading-[0.75rem]">Hot</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Móc khóa len thủ công</p>
                      <p className="m-0">Nhiều hình dáng</p>
                    </span>
                  </div>
                </div>
                <div className="w-[16.094rem] flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start gap-[0.062rem] shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.063rem] whitespace-nowrap">
                            ₫15.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.438rem] whitespace-nowrap">
                              ₫20.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-7@2x.png"
              />
              <div className="rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-lightskyblue flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.231rem] pl-[1.25rem] z-[1]">
                <div className="relative leading-[0.75rem] inline-block min-w-[1.381rem]">
                  Sale
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Set đồ len thủ công</p>
                      <p className="m-0">Dành cho các bé</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex flex-row items-start justify-start gap-[2.381rem] mq450:gap-[1.188rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.375rem] whitespace-nowrap">
                            ₫75.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.938rem] whitespace-nowrap">
                              ₫100.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-8@2x.png"
              />
              <div className="rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-mediumseagreen flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.225rem] pl-[1.25rem] z-[1]">
                <div className="relative leading-[0.75rem] inline-block min-w-[1.563rem]">
                  New
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[1.125rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border text-[0.938rem]">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Gấu bông len thủ công</p>
                      <p className="m-0">Nhiều hình dáng</p>
                    </span>
                  </div>
                </div>
                <div className="w-[16.094rem] flex flex-row items-end justify-between gap-[1.25rem] text-chocolate font-quicksand">
                  <div className="w-[7.906rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.487rem] box-border">
                    <div className="self-stretch flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.006rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.125rem]">
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.313rem] whitespace-nowrap">
                            ₫45.000
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[1.256rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                        <div className="w-[3.294rem] flex flex-row items-end justify-start gap-[0.4rem]">
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem]">
                            <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                              (5.0)
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] text-left text-[0.875rem] text-darkgray-100 font-quicksand">
                          <b className="relative [text-decoration:line-through] leading-[1.125rem] inline-block min-w-[3.438rem] whitespace-nowrap">
                            ₫60.000
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-6@2x.png"
              />
              <div className="w-[3.763rem] rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-hotpink flex flex-row items-start justify-start pt-[0.412rem] pb-[0.775rem] pr-[0.825rem] pl-[1.25rem] box-border z-[1]">
                <div className="flex-1 relative leading-[0.75rem]">Hot</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Móc khóa len thủ công</p>
                      <p className="m-0">Nhiều hình dáng</p>
                    </span>
                  </div>
                </div>
                <div className="w-[16.094rem] flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start gap-[0.062rem] shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.063rem] whitespace-nowrap">
                            ₫15.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.438rem] whitespace-nowrap">
                              ₫20.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-7@2x.png"
              />
              <div className="rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-lightskyblue flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.231rem] pl-[1.25rem] z-[1]">
                <div className="relative leading-[0.75rem] inline-block min-w-[1.381rem]">
                  Sale
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Set đồ len thủ công</p>
                      <p className="m-0">Dành cho các bé</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex flex-row items-start justify-start gap-[2.381rem] mq450:gap-[1.188rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.375rem] whitespace-nowrap">
                            ₫75.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.938rem] whitespace-nowrap">
                              ₫100.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-8@2x.png"
              />
              <div className="rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-mediumseagreen flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.225rem] pl-[1.25rem] z-[1]">
                <div className="relative leading-[0.75rem] inline-block min-w-[1.563rem]">
                  New
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[1.125rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border text-[0.938rem]">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Gấu bông len thủ công</p>
                      <p className="m-0">Nhiều hình dáng</p>
                    </span>
                  </div>
                </div>
                <div className="w-[16.094rem] flex flex-row items-end justify-between gap-[1.25rem] text-chocolate font-quicksand">
                  <div className="w-[7.906rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.487rem] box-border">
                    <div className="self-stretch flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.006rem]">
                        <div className="flex flex-row items-start justify-start gap-[0.125rem]">
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.313rem] whitespace-nowrap">
                            ₫45.000
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[1.256rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                        <div className="w-[3.294rem] flex flex-row items-end justify-start gap-[0.4rem]">
                          <img
                            className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                            alt=""
                            src="/Icons/star_rating_icon.svg"
                          />
                          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem]">
                            <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                              (5.0)
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] text-left text-[0.875rem] text-darkgray-100 font-quicksand">
                          <b className="relative [text-decoration:line-through] leading-[1.125rem] inline-block min-w-[3.438rem] whitespace-nowrap">
                            ₫60.000
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-6@2x.png"
              />
              <div className="w-[3.763rem] rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-hotpink flex flex-row items-start justify-start pt-[0.412rem] pb-[0.775rem] pr-[0.825rem] pl-[1.25rem] box-border z-[1]">
                <div className="flex-1 relative leading-[0.75rem]">Hot</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Móc khóa len thủ công</p>
                      <p className="m-0">Nhiều hình dáng</p>
                    </span>
                  </div>
                </div>
                <div className="w-[16.094rem] flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start gap-[0.062rem] shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.063rem] whitespace-nowrap">
                            ₫15.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.438rem] whitespace-nowrap">
                              ₫20.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
          <div className="flex-1 rounded-mini hover_product hover:bg-black cursor-pointer bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] gap-[1.162rem] min-w-[18.375rem] max-w-[18.75rem] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[15rem] relative">
              <img
                className="h-full w-full absolute !m-[0] top-[-0.025rem] left-[calc(50%_-_148px)] rounded-8xs overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mock/OtherProducts/divcrimageinner-7@2x.png"
              />
              <div className="rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-lightskyblue flex flex-row items-start justify-start pt-[0.437rem] pb-[0.75rem] pr-[1.231rem] pl-[1.25rem] z-[1]">
                <div className="relative leading-[0.75rem] inline-block min-w-[1.381rem]">
                  Sale
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[1.125rem] text-[0.938rem] text-gray-700 font-baloo-2">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.493rem]">
                <div className="w-[9.313rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.093rem] box-border">
                  <div className="flex-1 relative tracking-[0.48px] leading-[0.938rem] font-semibold hover_category">
                    Sản Phẩm Len
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-[1.125rem] text-gray-300">
                  <div className="h-[2.438rem] hover_name flex-1 relative tracking-[0.48px] leading-[1.5rem] font-medium flex items-center">
                    <span>
                      <p className="m-0">Set đồ len thủ công</p>
                      <p className="m-0">Dành cho các bé</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.681rem] text-center text-[0.688rem] text-darkgray-200 font-poppins">
                  <div className="flex flex-row items-end justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.131rem] shrink-0 [debug_commit:1de1738]">
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                      <img
                        className="h-[0.938rem] w-[0.969rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/Icons/star_rating_icon.svg"
                      />
                    </div>
                    <div className="w-[1.925rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
                      <div className="self-stretch relative tracking-[0.48px] leading-[0.625rem] inline-block min-w-[1.925rem] shrink-0 [debug_commit:1de1738]">
                        (5.0)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.093rem] text-left text-[1.125rem] text-chocolate font-quicksand">
                    <div className="flex flex-row items-start justify-start gap-[2.381rem] mq450:gap-[1.188rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.325rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-row items-end justify-start shrink-0 [debug_commit:1de1738]">
                          <b className="relative leading-[1.5rem] inline-block min-w-[4.375rem] whitespace-nowrap">
                            ₫75.000
                          </b>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] text-[0.875rem] text-darkgray-100">
                            <b className="h-[1.125rem] relative [text-decoration:line-through] leading-[1.5rem] flex items-center shrink-0 min-w-[3.938rem] whitespace-nowrap">
                              ₫100.000
                            </b>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.3rem] pb-[0.075rem] pr-[0.75rem] pl-[0.937rem] bg-chocolate hover:bg-yellow-600 h-[2.25rem] rounded flex flex-row items-center justify-center box-border gap-[0.243rem] shrink-0 [debug_commit:1de1738]">
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
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.375rem] text-[0.75rem] font-lato">
          <div className="flex flex-row items-start justify-end py-[0rem] px-[0.187rem] box-border">
            <div className="flex-1 rounded-8xs hover:bg-black hover:border-[2px] border-dashed border-white cursor-pointer bg-white flex flex-row items-center justify-center pt-[0.687rem] pb-[0.5rem] pl-[1.2rem] pr-[0.5rem] relative whitespace-nowrap z-[1]">
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
