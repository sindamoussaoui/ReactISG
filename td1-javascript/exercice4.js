// TD1 - Exercice 4 : Spread Operator (...)

// ---------- Partie A : tableaux ----------
const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

// 1. Copier destinationsEurope
const copie = [...destinationsEurope];
console.log("A1. Copie :", copie);

// 2. Fusionner les deux tableaux
const fusion = [...destinationsEurope, ...destinationsAsie];
console.log("A2. Fusion :", fusion);

// 3. Ajouter Lisbonne au début sans modifier l'original
const avecLisbonne = ["Lisbonne", ...destinationsEurope];
console.log("A3. Avec Lisbonne :", avecLisbonne);

// 4. Ajouter Londres à la fin sans modifier l'original
const avecLondres = [...destinationsEurope, "Londres"];
console.log("A4. Avec Londres :", avecLondres);

// 5. Toutes les destinations sauf Paris
const sansParis = fusion.filter((d) => d !== "Paris");
console.log("A5. Sans Paris :", sansParis);

console.log("L'original n'a pas changé :", destinationsEurope);

// ---------- Partie B : objets ----------
const reservation = {
  numero: 201,
  client: "Nadia",
  destination: "Bali",
  statut: "En attente",
};

// 1. Copie de l'objet
const copieReservation = { ...reservation };
console.log("B1. Copie :", copieReservation);

// 2. Nouvelle réservation avec statut Confirmée
const confirmee = { ...reservation, statut: "Confirmée" };
console.log("B2. Confirmée :", confirmee);

// 3. Ajouter assurance: true
const avecAssurance = { ...reservation, assurance: true };
console.log("B3. Avec assurance :", avecAssurance);

// 4. Modifier statut et destination en même temps
const modifiee = { ...reservation, statut: "Confirmée", destination: "Rome" };
console.log("B4. Modifiée :", modifiee);

console.log("L'original n'a pas changé :", reservation);