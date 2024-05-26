"use client";

import PageTitle from "@/components/Molecules/PageTitle";
import AboutContentArea from "./AboutContentArea";
import { CommimentsComponent } from "@/components/Organisms/CommimentsComponent";
import { OutstandingNews } from "@/components/Organisms/OutstandingNews";

const AboutPageComponent = (props: {}) => {
  return (
    <>
      <PageTitle mainTitle="Giới Thiệu" subTitle="Trang Chủ - Giới Thiệu" />
      <AboutContentArea />
      <CommimentsComponent />
      <OutstandingNews />
    </>
  );
};

export default AboutPageComponent;
