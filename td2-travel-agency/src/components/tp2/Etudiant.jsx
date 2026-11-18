// TP2 - Exercice 2 : informations dynamiques
function Etudiant() {
  const nom = "Ahmed";
  const prenom = "Ali";
  const age = 20;
  const filiere = "Informatique";

  return (
    <div>
      <h3>Nom complet : {prenom} {nom}</h3>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Âge : {age} ans</p>
      <p>Filière : {filiere}</p>
    </div>
  );
}

export default Etudiant;
