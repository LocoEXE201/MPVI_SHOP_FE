import { Metadata } from "next";
import NewsPageProvider from "./components/NewsPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. News Page",
};

export default function NewsPage() {
  return (
    <>
      <NewsPageProvider />
    </>
  );
}
































