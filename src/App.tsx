import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Meetups } from "@/components/sections/Meetups";
import { Coffee } from "@/components/sections/Coffee";
import { Join } from "@/components/sections/Join";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth">
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
  );
}
