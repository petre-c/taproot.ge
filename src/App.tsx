import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MatrixRain } from "@/components/MatrixRain";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Meetups } from "@/components/sections/Meetups";
import { Coffee } from "@/components/sections/Coffee";
import { Join } from "@/components/sections/Join";

export default function App() {
  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Amber matrix-rain backdrop */}
      <MatrixRain />
      {/* Vignette + scrim: darkens edges and lays a dark wash over the rain so
          page text stays readable while the amber glow shows through. */}
      <div className="matrix-vignette pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      {/* Foreground content sits above the backdrop */}
      <div className="text-shadow-readable relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Meetups />
          <Coffee />
          <Join />
        </main>
        <Footer />
      </div>
    </div>
  );
}
