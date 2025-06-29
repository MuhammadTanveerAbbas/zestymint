import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  useGSAP(() => {
    // Scroll background animation (unchanged)
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );

    const links = document.querySelectorAll("nav ul li a");

    // Keep references to listeners and tweens for cleanup
    const listeners = [];

    links.forEach((link) => {
      // Create paused hover tween
      const hoverTween = gsap.to(link, {
        color: "#FFD700", // gold color
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
        paused: true,
      });

      // Event handlers
      const onMouseEnter = () => hoverTween.play();
      const onMouseLeave = () => hoverTween.reverse();

      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);

      // Store references for cleanup
      listeners.push({ link, onMouseEnter, onMouseLeave });
    });

    // Cleanup on unmount
    return () => {
      listeners.forEach(({ link, onMouseEnter, onMouseLeave }) => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  });

  return (
    <nav>
      <div>
        <a href="home" className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="logo" />
          <p>Zestymint</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
