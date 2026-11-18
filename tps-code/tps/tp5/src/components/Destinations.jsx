import Destination from "./Destination";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <h2 className="section-title">Nos destinations</h2>

      <div className="destination-list">
        {destinations.map((d) => (
          // key obligatoire dans un map ; {...d} envoie toutes les props
          <Destination key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
