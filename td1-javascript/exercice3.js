// TD1 - Exercice 3 : Destructuring

// ---------- Partie A : tableau ----------
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

// 1. Premier et deuxième pays
const [premier, deuxieme] = pays;
console.log("A1.", premier, deuxieme);

// 2. Uniquement le troisième (les virgules sautent les éléments)
const [, , troisieme] = pays;
console.log("A2.", troisieme);

// 3. Premier dans destinationPrincipale, les autres dans autresPays (rest)
const [destinationPrincipale, ...autresPays] = pays;
console.log("A3.", destinationPrincipale, autresPays);

// ---------- Partie B : objet ----------
const voyage = {
  destination: "Bali",
  prix: 1800,
  duree: 10,
  transport: "Avion",
  hotel: "5 étoiles",
};

// 1. Extraire destination et prix
const { destination, prix } = voyage;
console.log("B1.", destination, prix);

// 2. Extraire destination dans une variable appelée ville
const { destination: ville } = voyage;
console.log("B2.", ville);

// 3. Extraire prix et duree avec des valeurs par défaut
const { prix: prixVoyage = 0, duree = 1 } = voyage;
console.log("B3.", prixVoyage, duree);

// 4. Fonction avec destructuring dans les paramètres
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
  console.log(`B4. Voyage à ${destination} : ${prix} DT, ${duree} jours, transport : ${transport}, hôtel : ${hotel}`);
}
afficherVoyage(voyage);