import { Metadata } from "next";
import HomePageComponent from "./pageComponent";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description:
    "We are Loco. who sell handmade products and help disadvantaged people.",
};

export default function Home() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}
