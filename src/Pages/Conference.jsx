import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accomodation from '../Components/Accomodation';
import ConferenceAndMeeting from '../Components/ConferenceAndMeeting';
import Hall from '../Components/Hall';

gsap.registerPlugin(ScrollTrigger);

const Conference = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const subtitle = subtitleRef.current;
      const mainHeading = mainHeadingRef.current;
      const subHeading = subHeadingRef.current;

      if (!subtitle || !mainHeading || !subHeading) return;

      // — Word-split: main heading —
      const mainWords = mainHeading.innerText.split(' ');
      mainHeading.innerHTML = mainWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(' ');
      const mainSpans = mainHeading.querySelectorAll('span');

      // — Word-split: sub heading —
      const subWords = subHeading.innerText.split(' ');
      subHeading.innerHTML = subWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(' ');
      const subSpans = subHeading.querySelectorAll('span');

      // shared ScrollTrigger defaults
      const st = (trigger, start = 'top 82%') => ({
        trigger,
        start,
        toggleActions: 'play none none reverse',
      });

      // Subtitle
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: st(subtitle),
        }
      );

      // Main heading — staggered words with slight clip feel
      gsap.fromTo(
        mainSpans,
        { opacity: 0, y: 36, skewX: 4 },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: st(mainHeading),
        }
      );

      // Sub heading — softer stagger, delayed after main
      gsap.fromTo(
        subSpans,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.04,
          delay: 0.35,
          ease: 'power2.out',
          scrollTrigger: st(subHeading, 'top 85%'),
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/hall1.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-6 md:px-8 py-20 md:py-24 lg:py-32">
          <div className="w-full max-w-6xl mx-auto">

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.2em] md:tracking-widest mb-4 md:mb-6"
            >
              Our Conference Facilities
            </p>

            {/* Main Heading — bumped up on small screens */}
            <h2
              ref={mainHeadingRef}
              className="text-5xl sm:text-5xl md:text-7xl font-medium text-white text-center tracking-wide md:tracking-[8px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-5xl mx-auto px-2"
            >
              Conference & Meeting Spaces
            </h2>

            {/* Sub Heading — better line-height on small screens */}
            <h3
              ref={subHeadingRef}
              className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-white text-center tracking-wide md:tracking-[2px] leading-relaxed md:leading-[1.2] lg:leading-relaxed max-w-4xl mx-auto px-2 mt-6 sm:mt-8 md:mt-12"
            >
              Spend your comfortable holiday in the heart of the beautiful Pokhara Valley.
            </h3>

          </div>
        </div>
      </div>

      <ConferenceAndMeeting/>
      <Hall/>
    </>
  );
};

export default Conference;