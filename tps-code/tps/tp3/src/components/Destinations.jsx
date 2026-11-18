// TP3 - Étape 3 : on utilise trois fois le composant Destination
import Destination from "./Destination";
import santorin from "../assets/santorini.jpg";
import bali from "../assets/bali.jpg";
import rome from "../assets/rome.jpg";

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <h2 className="section-title">Nos destinations</h2>

      <div className="destination-list">
        <Destination
          nom="Santorin"
          pays="Grèce"
          description="Découvrez les magnifiques paysages des îles grecques."
          prix={1200}
          image={santorin}
        />
        <Destination
          nom="Bali"
          pays="Indonésie"
          description="Plages paradisiaques, rizières et temples."
          prix={1800}
          image={bali}
        />
        <Destination
          nom="Rome"
          pays="Italie"
          description="Histoire, monuments et gastronomie italienne."
          prix={950}
          image={rome}
        />
      </div>
    </section>
  );
}

export default Destinations;
