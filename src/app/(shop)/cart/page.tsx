import CartPageProvider from "./components/CartPageProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Products Page",
};

export default function CartPage() {
  return (
    <>
      <CartPageProvider />
    </>
  );
}
