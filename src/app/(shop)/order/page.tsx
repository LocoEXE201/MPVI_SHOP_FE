import { Metadata } from "next";
import OrderPageProvider from "./components/OrderPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Products Page",
};

export default function OrderPage() {
  return (
    <>
      <OrderPageProvider />
    </>
  );
}
