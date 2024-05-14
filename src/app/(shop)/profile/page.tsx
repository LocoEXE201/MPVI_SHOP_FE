import { Metadata } from "next";
import ProfilePageProvider from "./components/ProfilePageProvider";

export const metadata: Metadata = {
  title: "Loco. - Love Connection",
  description: "This is Loco. Products Page",
};

export default function ProfilePage() {
  return (
    <>
      <ProfilePageProvider />
    </>
  );
}
