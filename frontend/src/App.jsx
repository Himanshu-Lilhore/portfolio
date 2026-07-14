import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Waves from "./components/Waves";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { pingView } from "./lib/analytics";

export default function App() {
  useEffect(() => {
    pingView();
  }, []);

  return (
    <div className="relative">
      <Navbar />

      {/* Sticky-reveal stage: the Hero pins in place, and the ocean panel
          below scrolls up over it — the waves rise to cover the hero and
          carry the next section in with them. */}
      <div className="relative">
        <Hero />

        <div className="relative z-10 -mt-[40vh]">
          {/* Waves are the top edge of the rising panel; the frontmost layer
              is ink-950 so it fuses seamlessly into the content below. */}
          <Waves className="h-[46vh]" />
          {/* -mt-px overlaps the wave band by 1px so no hairline seam can show
              between the ink ocean and the ink section. */}
          <main className="relative -mt-px bg-ink-950">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
