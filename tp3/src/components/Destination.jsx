// TP3 - Étape 2 : carte d'une destination
import styles from "./Destination.module.css";

function Destination({ nom, pays, description, prix, image }) {
  return (
    <article className={styles.destination}>
      <img src={image} alt={nom} className={styles.image} />
      <h2 className={styles.titre}>{nom}</h2>
      <p className={styles.pays}>{pays}</p>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.prix}>{prix} DT</h3>
    </article>
  );
}

export default Destination;
