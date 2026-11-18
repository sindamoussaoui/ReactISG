// TP3 (étape 2) puis TD4 : carte de destination avec props et useState
import { useState } from "react";
import styles from "./Destination.module.css";

// Les props sont "destructurées" directement dans les paramètres
function Destination({ nom, pays, prix, description, image }) {
  // Activité 1 : afficher / masquer les détails
  const [afficherDetails, setAfficherDetails] = useState(false);
  // Activité 2 : favori
  const [estFavori, setEstFavori] = useState(false);
  // Bonus : message quand on clique une 2e fois sur favoris
  const [message, setMessage] = useState("");

  function toggleFavori() {
    if (estFavori) {
      setMessage("Cette destination est déjà dans vos favoris");
    } else {
      setEstFavori(true);
      setMessage("");
    }
  }

  // Défi : remettre tout à zéro
  function reinitialiser() {
    setAfficherDetails(false);
    setEstFavori(false);
    setMessage("");
  }

  return (
    <article className={styles.carte}>
      <img src={`/images/${image}`} alt={nom} className={styles.image} />
      <h3>{nom}</h3>
      <p className={styles.infos}>
        {pays} · {prix} DT
      </p>

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

      {afficherDetails && <p>{description}</p>}
      {message && <p className={styles.message}>{message}</p>}
    </article>
  );
}

export default Destination;
