import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative bg-[#0B0B0C] min-h-screen overflow-hidden">
        {/* Ambient Background Glow - Fixed positioning for full viewport coverage */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Top-left glow - Responsive sizing */}
          <div className="absolute -top-50 -left-37.5 w-125 h-125 rounded-full bg-[#C6A972]/10 blur-3xl md:-top-25 md:-left-25 md:w-150 md:h-150 lg:w-175 lg:h-175" />

          {/* Bottom-right glow - Responsive sizing */}
          <div className="absolute -bottom-62.5 -right-37.5 w-125 h-125 rounded-full bg-[#E0C48A]/10 blur-3xl md:-bottom-37.5 md:-right-25 md:w-150 md:h-150 lg:w-175 lg:h-175" />
        </div>

        {/* Content wrapper with relative positioning to sit above the fixed background */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
        <p>jjjjjjjjjjjjjfffffffffffffffffffffffffffffffffffffffffff</p>
      </div>
    </>
  );
}

export default App;
