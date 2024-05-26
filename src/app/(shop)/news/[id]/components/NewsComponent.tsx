"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PageTitle from "@/components/Molecules/PageTitle";
import News1Component from "./News1";
import News2Component from "./News2";
import News3Component from "./News3";
import { OutstandingNews } from "@/components/Organisms/OutstandingNews";

const DetailNewsComponent = (props: {}) => {
  const params = useParams();
  const newsId = params.id as string;
  const [newsComponent, setNewsComponent] = useState<any>(null);

  useEffect(() => {
    switch (newsId) {
      case "1":
        setNewsComponent(<News1Component />);
        break;
      case "2":
        setNewsComponent(<News2Component />);
        break;
      case "3":
        setNewsComponent(<News3Component />);
        break;
      default:
        break;
    }
  }, []);

  if (newsComponent == null) return <></>;

  return (
    <>
      <PageTitle
        mainTitle="Chi Tiết Tin Tức"
        subTitle="Trang Chủ - Tin Tức - Chi Tiết"
      />
      <section className="w-full relative bg-white flex flex-col items-end justify-start pt-[1.625rem] px-[0rem] pb-[0.018rem] box-border gap-[2.625rem] leading-[normal] tracking-[normal] mq900:gap-[1.313rem]">
        <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] pr-[1.25rem] pl-[1.812rem] box-border max-w-full mq900:pb-[1.25rem] mq900:box-border mq1350:pb-[1.875rem] mq1350:box-border">
          <div className="w-[81.813rem] flex flex-col items-start justify-start gap-[2.381rem] max-w-full text-left text-[0.938rem] text-chocolate font-baloo mq900:gap-[1.188rem]">
            {newsComponent}
          </div>
        </div>
      </section>
      <OutstandingNews activeNews={newsId} />
    </>
  );
};

export default DetailNewsComponent;
