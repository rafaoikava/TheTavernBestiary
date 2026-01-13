import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { logout } from "../services/firebaseAuth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  if (!context) return null;
  const { user } = context;
  console.log("user -->", user, "current -->", auth.currentUser);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (user === null) {
      navigate(-1);
    }
  }, [user, navigate]);

  async function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await logout();
  }

  return (
    <>
      esta Logado <br />
      <button className="formbutton" type="button" onClick={handleLogout}>
        sair
      </button>
    </>
  );
}
