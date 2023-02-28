import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Experiencia from "pages/Experiencia";
import Setores from "pages/Setores";
import Footer from "components/Footer";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={
        <Home />
      } />

      <Route path="/experiencia" element={
        <Experiencia />
      } />

      <Route path="/setores" element={
        <Setores />
      } />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
