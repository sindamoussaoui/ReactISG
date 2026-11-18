// TP5 : formulaire de réservation (composants contrôlés avec useState)
import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
  // Étape 3 : un état par champ
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [destination, setDestination] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [nbVoyageurs, setNbVoyageurs] = useState(1);
  const [typeVoyage, setTypeVoyage] = useState("Confort");
  const [demandes, setDemandes] = useState("");

  // Étape 6 : l'état qui contient la réservation validée (null au début)
  const [reservation, setReservation] = useState(null);

  // Étapes 5 et 7 : soumission + validation
  function handleSubmit(e) {
    e.preventDefault(); // empêche le rechargement de la page

    if (nom.trim() === "") {
      alert("Veuillez saisir votre nom !");
      return;
    }
    if (email.trim() === "") {
      alert("Veuillez saisir votre adresse e-mail !");
      return;
    }
    if (destination === "") {
      alert("Veuillez sélectionner une destination !");
      return;
    }
    if (dateDepart === "") {
      alert("Veuillez renseigner la date de départ !");
      return;
    }
    if (Number(nbVoyageurs) < 1) {
      alert("Le nombre de voyageurs doit être supérieur ou égal à 1 !");
      return;
    }

    setReservation({
      nom,
      email,
      telephone,
      destination,
      dateDepart,
      nbVoyageurs,
      typeVoyage,
      demandes,
    });
    alert("Réservation enregistrée !");
  }

  // Bouton Réinitialiser
  function reinitialiser() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("");
    setDateDepart("");
    setNbVoyageurs(1);
    setTypeVoyage("Confort");
    setDemandes("");
    setReservation(null);
  }

  return (
    <section id="reservation" className="bloc">
      <h2>Réserver un voyage</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nom et prénom
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>

        <label>
          Adresse e-mail
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Téléphone
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </label>

        <label>
          Destination
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">-- Choisir une destination --</option>
            <option value="Santorin">Santorin</option>
            <option value="Bali">Bali</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
          </select>
        </label>

        <label>
          Date de départ
          <input type="date" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)} />
        </label>

        <label>
          Nombre de voyageurs
          <input
            type="number"
            min="1"
            value={nbVoyageurs}
            onChange={(e) => setNbVoyageurs(e.target.value)}
          />
        </label>

        <fieldset className={styles.radios}>
          <legend>Type de voyage</legend>
          {["Économique", "Confort", "Luxe"].map((type) => (
            <label key={type} className={styles.radio}>
              <input
                type="radio"
                name="typeVoyage"
                value={type}
                checked={typeVoyage === type}
                onChange={(e) => setTypeVoyage(e.target.value)}
              />
              {type}
            </label>
          ))}
        </fieldset>

        <label>
          Demandes particulières
          <textarea
            rows="3"
            value={demandes}
            onChange={(e) => setDemandes(e.target.value)}
          />
        </label>

        <div className={styles.actions}>
          <button type="submit">Réserver</button>
          <button type="button" onClick={reinitialiser}>
            Réinitialiser
          </button>
        </div>
      </form>

      {/* Étape 6 : le récapitulatif s'affiche seulement si reservation existe */}
      {reservation && (
        <div className={styles.recap}>
          <h3>Récapitulatif de votre réservation</h3>
          <p>
            {reservation.nom} – {reservation.email}
            {reservation.telephone && ` – ${reservation.telephone}`} –{" "}
            {reservation.destination} – {reservation.dateDepart} –{" "}
            {reservation.nbVoyageurs} voyageur(s) – {reservation.typeVoyage}
            {reservation.demandes && ` – ${reservation.demandes}`}
          </p>
        </div>
      )}
    </section>
  );
}

export default Reservation;
