import FooterComponent from "../components/User/Footer/FooterComponent";
import MainMenuComponent from "../components/User/MainMenuComponent/MainMenuComponent";
import NavBar from "../components/User/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <NavBar /> <br />
      <MainMenuComponent /> <br />
      <FooterComponent />
    </>
  );
}
