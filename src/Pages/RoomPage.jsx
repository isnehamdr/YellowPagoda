import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accomodation from '../Components/Accomodation';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RoomPage = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Ensure all elements are present before animating
      if (
        !subtitleRef.current ||
        !mainHeadingRef.current ||
        !subHeadingRef.current ||
        !sectionRef.current
      ) {
        return;
      }

      // Store references to avoid stale closures in cleanup
      const subtitle = subtitleRef.current;
      const mainHeading = mainHeadingRef.current;
      const subHeading = subHeadingRef.current;

      // Helper to split heading text into spans for word-by-word animation
      const originalMainHeadingText = mainHeading.innerText;
      const mainWords = originalMainHeadingText.split(' ');
      mainHeading.innerHTML = mainWords
        .map((word) => `<span class="inline-block opacity-0 translate-y-4">${word}</span>`)
        .join(' ');
      const mainWordSpans = mainHeading.querySelectorAll('span');

      // Split subheading text
      const originalSubHeadingText = subHeading.innerText;
      const subWords = originalSubHeadingText.split(' ');
      subHeading.innerHTML = subWords
        .map((word) => `<span class="inline-block opacity-0 translate-y-4">${word}</span>`)
        .join(' ');
      const subWordSpans = subHeading.querySelectorAll('span');

      // Kill any existing ScrollTriggers for these elements
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === subtitle ||
          trigger.vars.trigger === mainHeading ||
          trigger.vars.trigger === subHeading
        ) {
          trigger.kill();
        }
      });

      // Animation 1: Subtitle - fade in and slide up
      gsap.fromTo(
        subtitle,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitle,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            scroller: window,
          },
        }
      );

      // Animation 2: Main Heading - staggered word animation
      if (mainWordSpans.length) {
        gsap.fromTo(
          mainWordSpans,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mainHeading,
              start: 'top 80%',
              end: 'bottom 50%',
              toggleActions: 'play none none reverse',
              scroller: window,
            },
          }
        );
      }

      // Animation 3: Sub Heading - staggered word animation with slight delay
      if (subWordSpans.length) {
        gsap.fromTo(
          subWordSpans,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: subHeading,
              start: 'top 80%',
              end: 'bottom 50%',
              toggleActions: 'play none none reverse',
              scroller: window,
            },
          }
        );
      }
    }, 100);

    // Cleanup function to kill all ScrollTriggers
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <> 
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/rooms/imgi_6_superior-king.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
        {/* Inner Wrapper for max-width and centering */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.2em] md:tracking-widest mb-4 md:mb-6"
          >
            Our Accommodations
          </p>

          {/* Main Heading */}
          <h2
            ref={mainHeadingRef}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white text-center tracking-wide md:tracking-[8px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-5xl mx-auto px-2"
          >
            Stay With Us
          </h2>

          {/* Sub Heading */}
          <h3
            ref={subHeadingRef}
            className="text-base md:text-lg lg:text-xl font-medium text-white text-center tracking-wide md:tracking-[2px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-4xl mx-auto px-2 mt-8 md:mt-12"
          >
            Spend your comfortable holiday in the heart of the beautiful Napa Valley.
          </h3>
        </div>
      </div>
    </div>
    <Accomodation/>
     </>
  );
};

export default RoomPage;