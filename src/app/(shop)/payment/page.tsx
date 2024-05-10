import { Metadata } from "next";
import PaymentPageProvider from "./components/PaymentPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Products Page",
};

export default function OrderPage() {
  return (
    <>
      <PaymentPageProvider />
    </>
  );
}
