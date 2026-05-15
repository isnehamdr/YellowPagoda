import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Activities2 from "../Components/Activities2";



gsap.registerPlugin(ScrollTrigger);

const ActivitiesPage = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // HERO IMAGE ANIMATION
    gsap.fromTo(
      heroRef.current,
      {
        scale: 1.08,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // TEXT ANIMATION
    gsap.fromTo(
      textRef.current.children,
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
      }
    );

    // SCROLL REVEAL ANIMATION
    const sections = gsap.utils.toArray(".gsap-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // HERO PARALLAX EFFECT
    gsap.to(heroRef.current, {
      backgroundPosition: "50% 30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // CLEANUP
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/boating.jpg')",
        }}
      >
        {/* OVERLAY */}
        <div className="min-h-screen bg-black/60 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-16">
          
          {/* CONTENT */}
          <div
            ref={textRef}
            className="container mx-auto text-white text-center flex flex-col items-center justify-center"
          >
            <p className="mb-4 md:mb-8 text-base sm:text-lg md:text-lg font-semibold tracking-wide leading-relaxed">
             Things To Do in The Valley
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 md:mb-10 leading-tight">
      Local Activities
            </h1>

            <p className="text-base sm:text-lg md:text-lg font-medium max-w-2xl mx-auto leading-7 sm:leading-8 px-2 sm:px-0">
             Make the most of your time in Pokhara Valley with our collection of curated packages and experiences.
            </p>
          </div>
        </div>
      </div>

      <Activities2/>


    </>
  );
};

export default ActivitiesPage;