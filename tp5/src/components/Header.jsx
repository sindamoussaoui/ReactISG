import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>✈️ Travel Agency</h1>
      <nav className={styles.nav}>
        <a href="#">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#reservation">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
