import { Outlet } from "react-router-dom";
import NavBar from "../components/User/Navbar/Navbar";
import FooterComponent from "../components/User/Footer/FooterComponent";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
