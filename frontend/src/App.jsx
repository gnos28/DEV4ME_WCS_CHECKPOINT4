import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;
