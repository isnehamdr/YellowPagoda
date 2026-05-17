import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Activities2 from "../Components/Activities2";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.hotelyellowpagoda.com";

const ActivitiesPage = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current.children,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, duration: 1, ease: "power3.out" }
    );

    const sections = gsap.utils.toArray(".gsap-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 80, opacity: 0 },
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* ================================================================
          SEO HEAD TAGS — Activities Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>Local Activities & Experiences | Hotel Yellow Pagoda Pokhara</title>
        <meta
          name="description"
          content="Explore curated local activities and experiences around Pokhara Valley from Hotel Yellow Pagoda – boating, trekking, cultural tours, and more. Make the most of your stay in Nepal."
        />
        <meta
          name="keywords"
          content="Hotel Yellow Pagoda, Yellow Pagoda Pokhara, activities Pokhara, things to do Pokhara, Pokhara Valley tours, boating Pokhara, trekking Nepal"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/activities`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="Local Activities & Experiences | Hotel Yellow Pagoda Pokhara"
        />
        <meta
          property="og:description"
          content="Explore curated local activities around Pokhara Valley – boating, trekking, cultural tours and more, handpicked by Hotel Yellow Pagoda."
        />
        <meta property="og:url" content={`${SITE_URL}/activities`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/boating.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Boating on Phewa Lake near Hotel Yellow Pagoda, Pokhara"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="Local Activities & Experiences | Hotel Yellow Pagoda Pokhara"
        />
        <meta
          name="twitter:description"
          content="Curated activities around Pokhara Valley – boating, trekking, cultural tours and more, handpicked by Hotel Yellow Pagoda."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/boating.jpg`}
        />

        {/* ----- JSON-LD: TouristAttraction / CollectionPage ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Local Activities & Experiences – Hotel Yellow Pagoda",
            "description": "Curated local activities and experiences around Pokhara Valley offered by Hotel Yellow Pagoda, including boating, trekking, and cultural tours.",
            "url": "${SITE_URL}/activities",
            "image": "${SITE_URL}/images/boating.jpg",
            "provider": {
              "@type": "Hotel",
              "name": "Hotel Yellow Pagoda",
              "url": "${SITE_URL}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pokhara",
                "addressCountry": "NP"
              }
            }
          }
        `}</script>
      </Helmet>

      {/* ================================================================
          PAGE CONTENT
          ================================================================ */}

      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/boating.jpg')" }}
      >
        <div className="min-h-screen bg-black/60 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-16">
          <div
            ref={textRef}
            className="container mx-auto text-white text-center flex flex-col items-center justify-center"
          >
            <p className="mb-4 md:mb-8 text-base sm:text-lg md:text-lg font-semibold tracking-wide leading-relaxed">
              Things To Do in The Valley
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 md:mb-10 leading-tight">
              Local Activities
            </h2>

            <p className="text-base sm:text-lg md:text-lg font-medium max-w-2xl mx-auto leading-7 sm:leading-8 px-2 sm:px-0">
              Make the most of your time in Pokhara Valley with our collection
              of curated packages and experiences.
            </p>
          </div>
        </div>
      </div>

      <Activities2 />
    </>
  );
};

export default ActivitiesPage;
