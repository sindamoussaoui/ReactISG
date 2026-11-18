// TD1 - Exercice 1 : Fonctions avancées sur les tableaux
const destinations = [
  { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
  { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
  { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
  { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
  { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
  { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false },
];

// 1. forEach : afficher le nom de toutes les villes
console.log("1. Villes proposées :");
destinations.forEach((d) => console.log("  -", d.ville));

// 2. map : tableau contenant uniquement les noms des villes
const villes = destinations.map((d) => d.ville);
console.log("2. Tableau des villes :", villes);

// 3. filter : destinations dont le prix < 1500 DT
const pasCheres = destinations.filter((d) => d.prix < 1500);
console.log("3. Prix < 1500 DT :", pasCheres);

// 4. find : destination dont l'id = 3
const dest3 = destinations.find((d) => d.id === 3);
console.log("4. Destination id 3 :", dest3);

// 5. findIndex : position de Tokyo
const positionTokyo = destinations.findIndex((d) => d.ville === "Tokyo");
console.log("5. Position de Tokyo :", positionTokyo);

// 6. some : au moins une destination disponible ?
const auMoinsUneDispo = destinations.some((d) => d.disponible);
console.log("6. Au moins une disponible ?", auMoinsUneDispo);

// 7. every : tous les prix > 0 ?
const tousPrixPositifs = destinations.every((d) => d.prix > 0);
console.log("7. Tous les prix > 0 ?", tousPrixPositifs);

// 8. reduce : budget total pour visiter toutes les destinations
const budgetTotal = destinations.reduce((somme, d) => somme + d.prix, 0);
console.log("8. Budget total :", budgetTotal, "DT");