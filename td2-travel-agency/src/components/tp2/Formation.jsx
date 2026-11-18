// TP2 - Exercice 4 : affichage conditionnel avec &&
function Formation() {
  const disponible = true;
  const places = 5;

  return (
    <div>
      <h3>React JS</h3>
      {disponible && <p>Inscriptions ouvertes</p>}
      {places > 0 && <p>Il reste des places</p>}
    </div>
  );
}

export default Formation;
