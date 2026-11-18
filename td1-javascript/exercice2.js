// TD1 - Exercice 2 : Les réservations
const reservations = [
  { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
  { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
  { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
  { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
  { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" },
];

// 1. Réservations confirmées uniquement
const confirmees = reservations.filter((r) => r.statut === "Confirmée");
console.log("1. Réservations confirmées :", confirmees);

// 2. Noms des clients
const clients = reservations.map((r) => r.client);
console.log("2. Clients :", clients);

// 3. Réservation numéro 103
const reservation103 = reservations.find((r) => r.numero === 103);
console.log("3. Réservation 103 :", reservation103);

// 4. Montant total des réservations confirmées
const totalConfirme = reservations
  .filter((r) => r.statut === "Confirmée")
  .reduce((somme, r) => somme + r.montant, 0);
console.log("4. Total confirmé :", totalConfirme, "DT");

// 5. Toutes les réservations sont-elles confirmées ?
const toutesConfirmees = reservations.every((r) => r.statut === "Confirmée");
console.log("5. Toutes confirmées ?", toutesConfirmees);

// 6. Tableau { client, voyage }
// Les parenthèses autour de { } sont obligatoires pour retourner un objet
const voyages = reservations.map((r) => ({ client: r.client, voyage: r.destination }));
console.log("6. Clients et voyages :", voyages);