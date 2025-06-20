"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { allCocktails } from "../../constants/index.js";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (offset) =>
    allCocktails[(currentIndex + offset + totalCocktails) % totalCocktails];

  const current = getCocktailAt(0);
  const prev = getCocktailAt(-1);
  const next = getCocktailAt(1);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="pt-0 pb-20  md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-black text-white relative"
    >
      <div className="text-center mb-4 z-20 relative">
        <h2 className="section-heading text-yellow text-4xl md:text-6xl font-modern-negra uppercase tracking-wide">
          The Gallery
        </h2>
      </div>

      <h2 id="gallery-heading" className="sr-only">
        Drink Menu
      </h2>

      <nav
        className="cocktail-tabs"
        role="tablist"
        aria-label="Cocktail Navigation"
      >
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`cocktail-panel-${index}`}
              className={`transition-all duration-200 font-modern-negra border-b pb-2 md:text-3xl text-xl ${
                isActive
                  ? "text-yellow border-yellow scale-100"
                  : "text-white/50 border-transparent hover:text-yellow hover:border-yellow"
              } active:scale-95 shadow-none`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            aria-label="Previous"
            className="group flex items-center gap-2 hover:text-yellow active:scale-95 transition-all duration-200 shadow-none"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span className="hidden md:block text-3xl font-modern-negra leading-none">
              {prev.name}
            </span>
            <img
              src="/images/right-arrow.png"
              alt="Previous"
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>

          <button
            aria-label="Next"
            className="group flex items-center gap-2 hover:text-yellow active:scale-95 transition-all duration-200 shadow-none"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span className="hidden md:block text-3xl font-modern-negra leading-none">
              {next.name}
            </span>
            <img
              src="/images/left-arrow.png"
              alt="Next"
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={current.image}
            alt={current.name}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div className="info space-y-4 lg:translate-y-4">
            <p>Recipe for:</p>
            <p
              ref={titleRef}
              id="title"
              className="font-modern-negra text-yellow text-3xl md:text-6xl max-w-[12rem] md:max-w-[18rem] leading-tight"
            >
              {current.name}
            </p>
          </div>

          <div className="details space-y-5 md:max-w-md text-left">
            <h2 ref={headingRef} className="text-3xl md:text-5xl font-serif">
              {current.title}
            </h2>
            <p ref={descRef} className="text-base md:text-lg pe-5">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
