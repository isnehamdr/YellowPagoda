import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 30,
        scale: 1.05,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      gsap.to([headingRef.current, paragraphRef.current].filter(Boolean), {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "40% top",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(searchBoxRef.current, {
        yPercent: -10,
        opacity: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "55% top",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(imgRef.current, { scale: 1.15, duration: 1.8, force3D: true })
        .from(headingRef.current, { y: 60, opacity: 0, duration: 1.2 }, "-=1.2")
        .from(paragraphRef.current, { y: 40, opacity: 0, duration: 1 }, "-=0.6")
        .from(searchBoxRef.current, { y: 40, opacity: 0, duration: 1 }, "-=0.8");
    }, sectionRef);

    return () => {
      ctx.revert();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen">

      {/* IMAGE — no pointer events needed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          ref={imgRef}
          className="absolute w-full h-[130%] object-cover object-top"
          style={{
            top: "-15%",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          src="images/hero.jpg"
          alt="Hotel Yellow Pagoda Hero"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* TEXT — no pointer events needed */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1
          ref={headingRef}
          className="text-white text-4xl md:text-6xl lg:text-8xl mb-4 font-bold leading-tight max-w-7xl"
          style={{ willChange: "transform, opacity" }}
        >
          Hotel Yellow Pagoda
        </h1>
        <p
          ref={paragraphRef}
          className="text-white text-base md:text-lg max-w-xl mb-8"
          style={{ willChange: "transform, opacity" }}
        >
          Our hotel is an opulent establishment that offers lavish amenities,
          exceptional service, and sumptuous decor.
        </p>
      </div>

      {/* BOOKING BOX — pointer-events-none on wrapper, auto only on the card itself */}
      <div
        className="absolute inset-x-0 bottom-12 px-4 pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      >
        <div
          ref={searchBoxRef}
          id="block-search"
          className="mx-auto w-full max-w-7xl"
        >
          <div
            id="be-search-form"
            className="be-container min-h-[88px] rounded-2xl bg-white backdrop-blur-md px-4 pointer-events-auto"
            // ✅ Only the actual visible card receives pointer events
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;