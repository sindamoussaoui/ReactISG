// TD1 - Exercice 5 : Mini-projet - Gestion des favoris
const favoris = [
  { id: 1, ville: "Venise", pays: "Italie", visite: false },
  { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
  { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
  { id: 4, ville: "Barcelone", pays: "Espagne", visite: true },
];

// 1. Afficher toutes les destinations favorites
console.log("1. Toutes les destinations favorites :");
favoris.forEach((f) => console.log(`  - ${f.ville} (${f.pays}) - visitée : ${f.visite}`));

// 2. Destinations pas encore visitées
const nonVisitees = favoris.filter((f) => !f.visite);
console.log("2. Non visitées :", nonVisitees);

// 3. Tableau contenant uniquement les noms des villes
const noms = favoris.map((f) => f.ville);
console.log("3. Noms des villes :", noms);

// 4. Destination avec l'identifiant 3
const favori3 = favoris.find((f) => f.id === 3);
console.log("4. Destination id 3 :", favori3);

// 5. Nombre de destinations déjà visitées avec reduce
const nbVisitees = favoris.reduce((compteur, f) => (f.visite ? compteur + 1 : compteur), 0);
console.log("5. Nombre de visitées :", nbVisitees);

// 6. Ajouter une destination sans modifier l'original
const avecNouvelle = [...favoris, { id: 5, ville: "Tokyo", pays: "Japon", visite: false }];
console.log("6. Avec nouvelle destination :", avecNouvelle);

// 7. Modifier "visite" de l'id 1 sans modifier l'original
const apresVisite = favoris.map((f) => (f.id === 1 ? { ...f, visite: true } : f));
console.log("7. Après modification de l'id 1 :", apresVisite);

// 8. Supprimer la destination id 2 sans modifier l'original
const sansMarrakech = favoris.filter((f) => f.id !== 2);
console.log("8. Sans l'id 2 :", sansMarrakech);

console.log("Le tableau original n'a pas changé :", favoris.length, "éléments");