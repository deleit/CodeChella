import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Experiencia from "pages/Experiencia";
import Setores from "pages/Setores";
import FAQ from "pages/FAQ";
import Ingresso from "pages/Ingresso";
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

      <Route path="/faq" element={
        <FAQ />
      } />
      
      <Route path="/ingresso" element={
        <Ingresso />
      } />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
