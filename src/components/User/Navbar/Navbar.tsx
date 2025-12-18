import { Link } from "react-router-dom";
import "../../../assets/App.css";

export default function NavBar() {
  return (
    <div>
      <nav className="flex bg-softFawn text-deepWalnut font-fellDouble font-semibold gap-4 justify-center items-center p-2 h-11">
        <Link to="/">O Hall Principal</Link>
        <Link to="#">Baquete do Herói</Link>
        <Link to="#">Sucos de Monstros</Link>
        <Link to="#">Misturas Alquímicas</Link>
        <Link to="#">Fragmentos de Estrela</Link>
      </nav>
    </div>
  );
}
