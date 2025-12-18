import { Outlet } from "react-router-dom";
import NavBar from "../components/User/Navbar/Navbar";
import FooterComponent from "../components/User/Footer/FooterComponent";

export default function PrivateLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterComponent />
    </>
  );
}
