// TD4 : carte interactive (événements + useState)
import { useState } from "react";
import styles from "./Destination.module.css";

function Destination({ nom, pays, description, prix, image }) {
  // Activité 1 : afficher / masquer les détails
  const [afficherDetails, setAfficherDetails] = useState(false);
  // Activité 2 : favori
  const [estFavori, setEstFavori] = useState(false);
  // Bonus : message au 2e clic sur favoris
  const [message, setMessage] = useState("");

  function toggleFavori() {
    if (estFavori) {
      setMessage("Cette destination est déjà dans vos favoris");
    } else {
      setEstFavori(true);
      setMessage("");
    }
  }

  // Défi : tout remettre à zéro
  function reinitialiser() {
    setAfficherDetails(false);
    setEstFavori(false);
    setMessage("");
  }

  return (
    <article className={styles.destination}>
      <img src={image} alt={nom} className={styles.image} />
      <h2 className={styles.titre}>{nom}</h2>
      <p className={styles.pays}>{pays}</p>
      <h3 className={styles.prix}>{prix} DT</h3>

      <div className={styles.boutons}>
        <button onClick={() => setAfficherDetails(!afficherDetails)}>
          {afficherDetails ? "Masquer les détails" : "Voir les détails"}
        </button>

        <button
          className={estFavori ? styles.favoriActif : ""}
          onClick={toggleFavori}
        >
          {estFavori ? "Dans mes favoris" : "♡ Ajouter aux favoris"}
        </button>

        <button onClick={reinitialiser}>Réinitialiser</button>
      </div>

      {afficherDetails && <p className={styles.description}>{description}</p>}
      {message && <p className={styles.message}>{message}</p>}
    </article>
  );
}

export default Destination;
