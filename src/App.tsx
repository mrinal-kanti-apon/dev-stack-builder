import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <section id="technologies" className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Explore The 
            <h2 className="text-pink-500">Technologies</h2>
          </h2>

          <p className="mt-3 text-slate-600">
            Pick one technology per categorty to build your ideal stack.
          </p>
        </div>
      </section>

      <section id="projects" className="hidden" />
      <section id="about" className="hidden" />
      <section id="contact" className="hidden" />
    </div>

  );

}

export default App;
