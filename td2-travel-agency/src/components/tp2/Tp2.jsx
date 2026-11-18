// Regroupe tous les exercices du TP2 pour les voir dans le navigateur.
// Pour les cacher : enlève <Tp2 /> dans App.jsx.
import Resultat from "./Resultat";
import Etudiant from "./Etudiant";
import Budget from "./Budget";
import Formation from "./Formation";

function Tp2() {
  return (
    <section className="bloc">
      <h2>TP2 - Initiation React</h2>
      <h4>Exercice 1 : Résultat</h4>
      <Resultat />
      <h4>Exercice 2 : Étudiant</h4>
      <Etudiant />
      <h4>Exercice 3 : Budget</h4>
      <Budget />
      <h4>Exercice 4 : Formation</h4>
      <Formation />
    </section>
  );
}

export default Tp2;
