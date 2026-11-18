// TP3 - Étape 5 : App compose l'interface (Header, Destinations, Footer)
// TP5 : on ajoute Reservation après les destinations
import Header from "./components/Header";
import Banner from "./components/Banner";
import Destinations from "./components/Destinations";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer";
import Tp2 from "./components/tp2/Tp2";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Destinations />
      <Reservation />
      {/* TP2 : exercices d'initiation (enlève cette ligne pour les cacher) */}
      <Tp2 />
      <Footer />
    </>
  );
}

export default App;
