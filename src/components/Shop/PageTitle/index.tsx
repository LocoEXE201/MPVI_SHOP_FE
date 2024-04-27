"use client";

interface PageTitleProps {
  mainTitle?: string;
  subTitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <div className="bg-chocolate w-[117.563rem] mt-2 flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem]">
      <div className=" text-white w-[78rem] flex flex-row items-end justify-between py-[1.2rem] box-border max-w-full">
        <div className="w-[83rem] flex flex-row items-center justify-between max-w-full">
          <div className="font-baloo relative tracking-[0.48px] leading-[1.188rem] flex items-center shrink-0">
            {mainTitle ?? ""}
          </div>
          <div className="font-baloo-2 relative text-[1rem] tracking-[0.48px] leading-[1.25rem] capitalize font-medium">
            {subTitle ?? ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
