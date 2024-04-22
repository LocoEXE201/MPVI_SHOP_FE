import { Metadata } from "next";
import RegisterPageProvider from "./components/RegisterPageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Register Page",
};

export default function RegisterPage() {
  return (
    <>
      <RegisterPageProvider />
    </>
  );
}
