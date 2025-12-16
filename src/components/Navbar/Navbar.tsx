import "../../assets/App.css";

export default function NavBar() {
  return (
    <div>
      <nav className="flex bg-softFawn text-deepWalnut font-fellDouble font-semibold gap-4 justify-center items-center p-2 h-11">
        <a href="#">Baquete do Herói</a>
        <a href="#">Sucos de Monstros</a>
        <a href="#">Misturas Alquímicas</a>
        <a href="#">Fragmentos de Estrela</a>
      </nav>
    </div>
  );
}
