import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About2 from "../Components/About2";
import About3 from "../Components/About3";
import Services from "../Components/Services";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.hotelyellowpagoda.com";

const AboutPage = () => {
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
          SEO HEAD TAGS — About Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>About Us | Hotel Yellow Pagoda – Luxury Hotel Pokhara</title>
        <meta
          name="description"
          content="Discover the story behind Hotel Yellow Pagoda – a luxury boutique hotel in the heart of Pokhara, Nepal. Learn about our heritage, values, and dedication to exceptional hospitality."
        />
        <meta
          name="keywords"
          content="about Hotel Yellow Pagoda, luxury boutique hotel Pokhara, Nepal hotel history, Pokhara hospitality, hotel story Nepal"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/about`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="About Us | Hotel Yellow Pagoda – Luxury Hotel Pokhara"
        />
        <meta
          property="og:description"
          content="Discover the story behind Hotel Yellow Pagoda – a luxury boutique hotel in the heart of Pokhara, Nepal. Heritage, values, and world-class hospitality."
        />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={`${SITE_URL}/images/aboutbg.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hotel Yellow Pagoda – Luxury Boutique Hotel in Pokhara, Nepal"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="About Us | Hotel Yellow Pagoda – Luxury Hotel Pokhara"
        />
        <meta
          name="twitter:description"
          content="Discover the story behind Hotel Yellow Pagoda – a luxury boutique hotel in Pokhara, Nepal. Heritage, values, and world-class hospitality."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/aboutbg.jpg`}
        />

        {/* ----- JSON-LD: AboutPage ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Hotel Yellow Pagoda",
            "description": "Learn about Hotel Yellow Pagoda – a luxury boutique hotel in Pokhara, Nepal, committed to exceptional hospitality and comfort.",
            "url": "${SITE_URL}/about",
            "image": "${SITE_URL}/images/aboutbg.jpg",
            "mainEntity": {
              "@type": "Hotel",
              "name": "Hotel Yellow Pagoda",
              "url": "${SITE_URL}",
              "description": "Luxury boutique hotel in Pokhara, Nepal offering premium rooms, fine dining, spa and event facilities.",
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
        style={{ backgroundImage: "url('/images/lobby2.png')" }}
      >
        <div className="min-h-screen bg-black/60 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-16">
          <div
            ref={textRef}
            className="container mx-auto text-white text-center flex flex-col items-center justify-center"
          >
            <p className="mb-4 md:mb-8 text-base sm:text-lg md:text-lg font-semibold tracking-wide leading-relaxed">
              An Iconic Hotel in the Heart of Pokhara
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 md:mb-10 leading-tight">
              About The Hotel
            </h1>

            <p className="text-base sm:text-lg md:text-lg font-medium max-w-2xl mx-auto leading-7 sm:leading-8 px-2 sm:px-0">
              A luxury boutique hotel in the heart of wine country
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT 2 */}
      <div className="gsap-section overflow-hidden">
        <About2 />
      </div>

      {/* ABOUT 3 */}
      <div className="gsap-section overflow-hidden">
        <About3 />
      </div>

      {/* SERVICES */}
      <div className="gsap-section overflow-hidden">
        <Services />
      </div>
    </>
  );
};

export default AboutPage;