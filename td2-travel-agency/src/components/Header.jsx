// TP3 - Étape 1 : Header
// export default : permet d'importer le composant dans un autre fichier
function Header() {
  return (
    <header className="header">
      <h1> Travel Agency</h1>
      <nav>
        <a href="#">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#reservation">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
