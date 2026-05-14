import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About3 = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const roomCardsRef = useRef([]);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Ensure all elements are present before animating
      if (
        !subtitleRef.current ||
        !headingRef.current ||
        !gridRef.current ||
        !sectionRef.current
      ) {
        return;
      }

      // Store references to avoid stale closures in cleanup
      const subtitle = subtitleRef.current;
      const heading = headingRef.current;
      const grid = gridRef.current;

      // Helper to split heading text into spans for word-by-word animation
      const originalHeadingText = heading.innerText;
      const words = originalHeadingText.split(' ');
      heading.innerHTML = words
        .map((word) => `<span class="inline-block opacity-0 translate-y-4">${word}</span>`)
        .join(' ');
      const wordSpans = heading.querySelectorAll('span');

      // Kill any existing ScrollTriggers for these elements
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === subtitle ||
          trigger.vars.trigger === heading ||
          trigger.vars.trigger === grid
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

      // Animation 2: Heading - staggered word animation
      if (wordSpans.length) {
        gsap.fromTo(
          wordSpans,
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
              trigger: heading,
              start: 'top 80%',
              end: 'bottom 50%',
              toggleActions: 'play none none reverse',
              scroller: window,
            },
          }
        );
      }

      // Animation 3: Grid items - sequential stagger animation
      const gridItems = roomCardsRef.current.filter(card => card !== null);
      if (gridItems.length) {
        gsap.fromTo(
          gridItems,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(0.6)',
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              end: 'bottom 40%',
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
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/bed2.jpg')",
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
            className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.2em] md:tracking-widest mb-4 md:mb-10"
          >
            Enjoy Your Stay At The Hotel
          </p>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl  font-medium text-white text-center tracking-wide md:tracking-[3px] leading-tight md:leading-[1.2] lg:leading-[1.3] max-w-5xl mx-auto px-2"
          >
            Spend your comfortable holiday in the heart of the beautiful Pokhara Valley
          </h2>

          {/* Room Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-14 lg:mt-20 w-full"
          >
            <div
              ref={(el) => (roomCardsRef.current[0] = el)}
              className="room-card  p-5 md:p-6 rounded-xl border border-white/20 text-center transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:border-white/40"
            >
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Executive Suite Rooms
              </p>
            </div>
            <div
              ref={(el) => (roomCardsRef.current[1] = el)}
              className="room-card  p-5 md:p-6 rounded-xl border border-white/20 text-center transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:border-white/40"
            >
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Deluxe king Rooms
              </p>
            </div>
            <div
              ref={(el) => (roomCardsRef.current[2] = el)}
              className="room-card  p-5 md:p-6 rounded-xl border border-white/20 text-center transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:border-white/40"
            >
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Deluxe queen Rooms
              </p>
            </div>
            <div
              ref={(el) => (roomCardsRef.current[3] = el)}
              className="room-card  p-5 md:p-6 rounded-xl border border-white/20 text-center transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:border-white/40"
            >
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Superior king Rooms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;