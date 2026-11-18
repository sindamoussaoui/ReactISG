// TP2 - Exercice 1 : Resultat
// Partie A : opérateur ternaire + style en ligne
// Partie B : classes CSS conditionnelles (fichier Resultat.css)
import "./Resultat.css";

function Resultat() {
  const moyenne = 14; // Essaie avec 8 : le message devient "Refusé" en rouge
  const admis = moyenne >= 10;

  // ---- Partie A : style en ligne ----
  const style = {
    color: admis ? "green" : "red",
    backgroundColor: admis ? "lightgreen" : "lightcoral",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <>
      <div style={style}>
        <h3>{admis ? "Admis" : "Refusé"}</h3>
        <p>Moyenne : {moyenne}</p>
      </div>

      {/* ---- Partie B : classes CSS ---- */}
      <div className={admis ? "admis" : "refuse"} style={{ marginTop: 10 }}>
        <h3>{admis ? "Admis" : "Refusé"}</h3>
        <p>Moyenne : {moyenne}</p>
      </div>
    </>
  );
}

export default Resultat;
