import { Metadata } from "next";
import ProductsPageProvider from "./components/ProductsPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Products Page",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsPageProvider />
    </>
  );
}
