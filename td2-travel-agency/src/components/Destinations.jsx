// TP3 (étape 3) puis TD4 : liste des destinations avec map()
import Destination from "./Destination";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <section id="destinations" className="bloc">
      <h2>Nos destinations</h2>
      <div className="grille">
        {destinations.map((d) => (
          // key obligatoire dans un map ; {...d} envoie toutes les props
          <Destination key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
