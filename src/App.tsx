import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <TechnologySection />

      <section id="projects" className="hidden" />
      <section id="about" className="hidden" />
      <section id="contact" className="hidden" />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
      />

      <Footer />
      
    </div>

  );

}



 export default App;