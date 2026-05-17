import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: image drifts up as you scroll down
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // scrub with smoothness
        },
      });

      // Subtle scale-up on the image as it scrolls
      gsap.to(imgRef.current, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fades out + moves up on scroll
      gsap.to([headingRef.current, paragraphRef.current, buttonRef.current], {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });

      // Entrance animation on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(imgRef.current, {
        scale: 1.15,
        duration: 1.8,
      })
        .from(
          headingRef.current,
          { y: 60, opacity: 0, duration: 1.2 },
          "-=1.2"
        )
        .from(
          paragraphRef.current,
          { y: 40, opacity: 0, duration: 1 },
          "-=0.6"
        )
        .from(
          buttonRef.current,
          { y: 30, opacity: 0, duration: 0.9 },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        ref={imgRef}
        className="absolute inset-0 w-full h-[130%] object-cover object-top will-change-transform"
        style={{ top: "-15%" }}
        src="images/hero.jpg"
        alt="Hotel Yellow Pagoda Hero"
      />

      {/* DARK OVERLAY - adjust opacity for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          ref={headingRef}
          className="text-white text-4xl md:text-6xl lg:text-8xl mb-4 font-bold leading-tight max-w-7xl"
        >
          Hotel Yellow Pagoda
        </h1>

        <p
          ref={paragraphRef}
          className="text-white text-base md:text-lg max-w-xl mb-8"
        >
          Our hotel is an opulent establishment that offers lavish amenities, 
          exceptional service, and sumptuous decor.
        </p>

        
      </div>

      {/* <div className="absolute inset-x-0 bottom-4 z-50 px-4 sm:px-6 lg:px-8">
        <div id="block-search" className="mx-auto w-full max-w-7xl">
          <div
            id="be-search-form"
            className="be-container min-h-[88px] rounded-2xl bg-white backdrop-blur-md px-4"
          />
        </div>
      </div> */}

    </div>
  );
};

export default Hero;
