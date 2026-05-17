
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Services2 from '../Components/Services2';
// import Service3 from '../Components/Service3';
// import Testimonials from '../Components/Testimonials';


// gsap.registerPlugin(ScrollTrigger);

// const ServicePage = () => {
//   const sectionRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const mainHeadingRef = useRef(null);
//   const subHeadingRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const subtitle = subtitleRef.current;
//       const mainHeading = mainHeadingRef.current;
//       const subHeading = subHeadingRef.current;

//       if (!subtitle || !mainHeading || !subHeading) return;

//       // — Word-split: main heading —
//       const mainWords = mainHeading.innerText.split(' ');
//       mainHeading.innerHTML = mainWords
//         .map((w) => `<span class="inline-block">${w}</span>`)
//         .join(' ');
//       const mainSpans = mainHeading.querySelectorAll('span');

//       // — Word-split: sub heading —
//       const subWords = subHeading.innerText.split(' ');
//       subHeading.innerHTML = subWords
//         .map((w) => `<span class="inline-block">${w}</span>`)
//         .join(' ');
//       const subSpans = subHeading.querySelectorAll('span');

//       // shared ScrollTrigger defaults
//       const st = (trigger, start = 'top 82%') => ({
//         trigger,
//         start,
//         toggleActions: 'play none none reverse',
//       });

//       // Subtitle
//       gsap.fromTo(
//         subtitle,
//         { opacity: 0, y: 24 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.75,
//           ease: 'power2.out',
//           scrollTrigger: st(subtitle),
//         }
//       );

//       // Main heading — staggered words with slight clip feel
//       gsap.fromTo(
//         mainSpans,
//         { opacity: 0, y: 36, skewX: 4 },
//         {
//           opacity: 1,
//           y: 0,
//           skewX: 0,
//           duration: 0.7,
//           stagger: 0.09,
//           ease: 'power3.out',
//           scrollTrigger: st(mainHeading),
//         }
//       );

//       // Sub heading — softer stagger, delayed after main
//       gsap.fromTo(
//         subSpans,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.55,
//           stagger: 0.04,
//           delay: 0.35,
//           ease: 'power2.out',
//           scrollTrigger: st(subHeading, 'top 85%'),
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">
//       <div
//         ref={sectionRef}
//         className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: "url('/images/s1.jpeg')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-6 md:px-8 py-20 md:py-24 lg:py-32">
//           <div className="w-full max-w-6xl mx-auto">

//             {/* Subtitle */}
//             <p
//               ref={subtitleRef}
//               className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.12em] sm:tracking-[0.2em] md:tracking-widest mb-4 md:mb-6"
//             >
// High standards of hospitality            </p>

//             {/* Main Heading — bumped up on small screens */}
//             <h2
//               ref={mainHeadingRef}
//               className="text-5xl sm:text-5xl md:text-7xl font-medium text-white text-center tracking-normal sm:tracking-wide md:tracking-[8px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-5xl mx-auto px-2"
//             >
// Premium Services            </h2>

//             {/* Sub Heading — better line-height on small screens */}
//             <h3
//               ref={subHeadingRef}
//               className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-white text-center tracking-normal sm:tracking-wide md:tracking-[2px] leading-relaxed md:leading-[1.2] lg:leading-relaxed max-w-4xl mx-auto px-2 mt-6 sm:mt-8 md:mt-12"
//             >
//         We strive to provide our guests with luxury, comfort & tailor-made service.
//             </h3>

//           </div>
//         </div>
//       </div>


//       <Services2/>
//       <Service3/>
//       <Testimonials/>


  
//     </div>
//   );
// };

// export default ServicePage;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";

import Services2 from "../Components/Services2";
import Service3 from "../Components/Service3";
import Testimonials from "../Components/Testimonials";

gsap.registerPlugin(ScrollTrigger);

const ServicePage = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);

  // SEO CONFIG
  const SITE_URL = "https://www.hotelyellowpagoda.com";
  const PAGE_URL = `${SITE_URL}/services`;

  const pageTitle = "Premium Hotel Services | Hotel Yellow Pagoda Nepal";

  const pageDescription =
    "Explore premium hospitality services at Hotel Yellow Pagoda including dining, concierge, spa, and personalized guest experiences in Nepal.";

  const ogImage = `${SITE_URL}/images/s1.jpeg`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const subtitle = subtitleRef.current;
      const mainHeading = mainHeadingRef.current;
      const subHeading = subHeadingRef.current;

      if (!subtitle || !mainHeading || !subHeading) return;

      const mainWords = mainHeading.innerText.split(" ");
      mainHeading.innerHTML = mainWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(" ");

      const subWords = subHeading.innerText.split(" ");
      subHeading.innerHTML = subWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(" ");

      const mainSpans = mainHeading.querySelectorAll("span");
      const subSpans = subHeading.querySelectorAll("span");

      const st = (trigger, start = "top 82%") => ({
        trigger,
        start,
        toggleActions: "play none none reverse",
      });

      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: st(subtitle),
        }
      );

      gsap.fromTo(
        mainSpans,
        { opacity: 0, y: 36, skewX: 4 },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: st(mainHeading),
        }
      );

      gsap.fromTo(
        subSpans,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.04,
          delay: 0.35,
          ease: "power2.out",
          scrollTrigger: st(subHeading, "top 85%"),
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Hotel Yellow Pagoda, Yellow Pagoda Pokhara, hotel services Nepal, luxury hotel services, concierge service Nepal, premium hospitality Nepal, Hotel Yellow Pagoda services"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Hotel Yellow Pagoda premium services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hotel Hospitality Services",
            provider: {
              "@type": "Hotel",
              name: "Hotel Yellow Pagoda",
              url: SITE_URL,
            },
            areaServed: "Nepal",
            description: pageDescription,
          })}
        </script>
      </Helmet>

      <main className="w-full overflow-x-hidden">

        {/* HERO */}
        <section
          ref={sectionRef}
          className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/images/s1.jpeg')" }}
          aria-label="Hotel services hero section"
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-8 py-24">
            <div className="w-full max-w-6xl mx-auto text-center">

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="uppercase text-xs md:text-base text-white font-semibold tracking-widest mb-6"
              >
                High standards of hospitality
              </p>

              {/* Main Heading */}
              <h2
                ref={mainHeadingRef}
                className="text-5xl md:text-7xl font-medium text-white tracking-[2px] md:tracking-[8px] leading-tight"
              >
                Premium Services
              </h2>

              {/* Sub Heading */}
              <h2
                ref={subHeadingRef}
                className="text-base md:text-xl font-medium text-white mt-8 leading-relaxed max-w-4xl mx-auto"
              >
                We strive to provide our guests with luxury, comfort & tailor-made service.
              </h2>

            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section aria-label="Hotel services details">
          <Services2 />
        </section>

        <section aria-label="Additional hotel services">
          <Service3 />
        </section>

        <section aria-label="Guest testimonials">
          <Testimonials />
        </section>

      </main>
    </>
  );
};

export default ServicePage;
