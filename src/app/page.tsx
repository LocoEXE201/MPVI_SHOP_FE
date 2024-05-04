import { Metadata } from "next";
import HomePageComponent from "./pageComponent";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Landing Page",
};

export default function Home() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}
