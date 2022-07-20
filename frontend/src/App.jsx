import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
import Technos from "./pages/Technos";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import { PathContextProvider } from "./contexts/pathContext";
import "./styles/App.scss";

const App = () => {
  return (
    <PathContextProvider>
      <div className="App">
        <Header />
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/real" element={<Realisations />} />
            <Route path="/tech" element={<Technos />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </PathContextProvider>
  );
};

export default App;
