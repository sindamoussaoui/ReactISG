// TP5 : Reservation s'affiche après la section des destinations
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
