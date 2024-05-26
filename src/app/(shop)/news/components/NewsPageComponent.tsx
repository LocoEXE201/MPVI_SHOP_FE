"use client";

import PageTitle from "@/components/Molecules/PageTitle";
import { OutstandingNews } from "@/components/Organisms/OutstandingNews";

const NewsPageComponent = (props: {}) => {
  return (
    <>
      <PageTitle mainTitle="Tin Tức" subTitle="Trang Chủ - Tin Tức" />
      <OutstandingNews />
    </>
  );
};

export default NewsPageComponent;
