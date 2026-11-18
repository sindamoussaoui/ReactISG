// TP2 - Exercice 3 : conditions
function Budget() {
  const budget = 1500;
  let message;

  if (budget >= 2000) {
    message = "Voyage premium";
  } else if (budget >= 1000) {
    message = "Voyage économique";
  } else {
    message = "Budget insuffisant";
  }

  return (
    <div>
      <p>Budget : {budget} DT</p>
      <h3>{message}</h3>
    </div>
  );
}

export default Budget;
