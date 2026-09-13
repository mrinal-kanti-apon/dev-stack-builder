import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <Hero />

      <TechnologySection />

      <ProjectsSection />

      <AboutSection />

      <ContactSection />


    

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