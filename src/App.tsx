import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Home from "./pages/home";
import LoginComponent from "./components/Login/LoginComponent/LoginComponent";
import PublicLayout from "./publicLayout/PublicLayout";
import PrivateLayout from "./privateLayout/PrivateLayout";
import Admin from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginComponent />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
