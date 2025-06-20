import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/gallery.jsx";
import Contact from "./components/Contact.jsx";
import Pricing from "./components/pricing.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default App;
