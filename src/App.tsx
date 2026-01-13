import { onAuthStateChanged, type User } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Home from "./pages/home";
import LoginComponent from "./components/Login/LoginComponent/LoginComponent";
import PublicLayout from "./publicLayout/PublicLayout";
import PrivateLayout from "./privateLayout/PrivateLayout";
import Admin from "./pages/admin";
import ColorsBase from "./pages/color";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState<boolean>(false);

  useEffect(() => {
    const authValidator = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
    return authValidator;
  });

  if (!authReady) return null;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginComponent />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/color" element={<ColorsBase />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
