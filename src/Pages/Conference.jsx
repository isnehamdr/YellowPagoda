import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConferenceAndMeeting from "../Components/ConferenceAndMeeting";
import Hall from "../Components/Hall";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.hotelyellowpagoda.com";

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

      const mainWords = mainHeading.innerText.split(" ");
      mainHeading.innerHTML = mainWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(" ");
      const mainSpans = mainHeading.querySelectorAll("span");

      const subWords = subHeading.innerText.split(" ");
      subHeading.innerHTML = subWords
        .map((w) => `<span class="inline-block">${w}</span>`)
        .join(" ");
      const subSpans = subHeading.querySelectorAll("span");

      const st = (trigger, start = "top 82%") => ({
        trigger,
        start,
        toggleActions: "play none none reverse",
      });

      gsap.fromTo(subtitle, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
        scrollTrigger: st(subtitle),
      });

      gsap.fromTo(mainSpans, { opacity: 0, y: 36, skewX: 4 }, {
        opacity: 1, y: 0, skewX: 0, duration: 0.7, stagger: 0.09,
        ease: "power3.out", scrollTrigger: st(mainHeading),
      });

      gsap.fromTo(subSpans, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.04, delay: 0.35,
        ease: "power2.out", scrollTrigger: st(subHeading, "top 85%"),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================================================================
          SEO HEAD TAGS — Conference & Meeting Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>Conference & Meeting Facilities | Hotel Yellow Pagoda Pokhara</title>
        <meta
          name="description"
          content="Host your next conference, corporate event, or meeting at Hotel Yellow Pagoda in Pokhara, Nepal. State-of-the-art halls, AV equipment, catering, and professional event planning services."
        />
        <meta
          name="keywords"
          content="conference hall Pokhara, meeting rooms Nepal, event venue Pokhara, corporate events Nepal, Hotel Yellow Pagoda conference, banquet hall Pokhara"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/conference-and-meeting`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="Conference & Meeting Facilities | Hotel Yellow Pagoda Pokhara"
        />
        <meta
          property="og:description"
          content="Host your next conference or corporate event at Hotel Yellow Pagoda, Pokhara. Modern halls, AV tech, catering, and expert event planning."
        />
        <meta property="og:url" content={`${SITE_URL}/conference-and-meeting`} />
        <meta property="og:image" content={`${SITE_URL}/images/hall1.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Conference and meeting hall at Hotel Yellow Pagoda, Pokhara"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="Conference & Meeting Facilities | Hotel Yellow Pagoda Pokhara"
        />
        <meta
          name="twitter:description"
          content="Host your next conference or corporate event at Hotel Yellow Pagoda, Pokhara. Modern halls, AV tech, catering and expert planning."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/hall1.png`} />

        {/* ----- JSON-LD: EventVenue ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "Hotel Yellow Pagoda – Conference & Meeting Facilities",
            "description": "State-of-the-art conference halls and meeting rooms at Hotel Yellow Pagoda in Pokhara, Nepal. Equipped with AV technology, catering services, and professional event planning.",
            "url": "${SITE_URL}/conference-and-meeting",
            "image": "${SITE_URL}/images/hall1.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pokhara",
              "addressCountry": "NP"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "AV Equipment", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Catering Services", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "High-Speed Wi-Fi", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Event Planning Support", "value": true }
            ],
            "containedInPlace": {
              "@type": "Hotel",
              "name": "Hotel Yellow Pagoda",
              "url": "${SITE_URL}"
            }
          }
        `}</script>
      </Helmet>

      {/* ================================================================
          PAGE CONTENT
          ================================================================ */}
      <div
        ref={sectionRef}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/hall1.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-6 md:px-8 py-20 md:py-24 lg:py-32">
          <div className="w-full max-w-6xl mx-auto">
            <p
              ref={subtitleRef}
              className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.2em] md:tracking-widest mb-4 md:mb-6"
            >
              Our Conference Facilities
            </p>

            <h1
              ref={mainHeadingRef}
              className="text-5xl sm:text-5xl md:text-7xl font-medium text-white text-center tracking-wide md:tracking-[8px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-5xl mx-auto px-2"
            >
              Conference & Meeting Spaces
            </h1>

            <h2
              ref={subHeadingRef}
              className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-white text-center tracking-wide md:tracking-[2px] leading-relaxed md:leading-[1.2] lg:leading-relaxed max-w-4xl mx-auto px-2 mt-6 sm:mt-8 md:mt-12"
            >
              Spend your comfortable holiday in the heart of the beautiful
              Pokhara Valley.
            </h2>
          </div>
        </div>
      </div>

      <ConferenceAndMeeting />
      <Hall />
    </>
  );
};

export default Conference;