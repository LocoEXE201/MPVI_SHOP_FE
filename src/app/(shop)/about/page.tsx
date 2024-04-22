import { Metadata } from "next";
import AboutPageProvider from "./components/AboutPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. About Page",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageProvider />
    </>
  );
}
