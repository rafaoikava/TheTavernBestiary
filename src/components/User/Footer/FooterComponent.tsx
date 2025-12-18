import "../../../assets/App.css";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div>
      <nav className="flex bg-softFawn text-deepWalnut font-fellDouble font-semibold gap-4 justify-center items-center p-2 h-20 flex-col">
        <p>
          Para realizar o acesso de admin e verificar as demais ações realize
          seu <Link to="/login">login</Link>
        </p>
        <p>Projeto realizado por Rafael Oikava</p>
      </nav>
    </div>
  );
}
