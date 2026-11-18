// TP3 - Étape 5 : composition de l'application
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Footer />
    </div>
  );
}

export default App;
