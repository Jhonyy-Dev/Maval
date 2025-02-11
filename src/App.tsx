import Hero from "./paginas/hero";
import Projects from "./paginas/componentePagina/projects";
import Numeros from "./paginas/componentePagina/numeros";
import Razones from "./paginas/componentePagina/trabajaNosotros";
import Testimonios from "./paginas/componentePagina/testimonios";
import Footer from "./paginas/componentePagina/footer";
import Servicios from "./paginas/componentePagina/servicios";
import MapSection from "./paginas/componentePagina/MapSection";

function App() {
  return (
    <div className="container mx-auto px-4 mb-4">
      <Hero />
      <Projects />
      <Numeros />
      <Razones />
      <Servicios />
      <Testimonios />
      <MapSection />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
