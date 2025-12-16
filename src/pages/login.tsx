import LoginComponent from "../components/Login/LoginComponent/LoginComponent";
import FooterComponent from "../components/User/Footer/FooterComponent";
import NavBar from "../components/User/Navbar/Navbar";

export default function Login() {
  return (
    <>
      <NavBar />
      <LoginComponent />
      <FooterComponent />
    </>
  );
}
