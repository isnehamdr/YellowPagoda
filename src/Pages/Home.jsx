import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Rooms from "../Components/Rooms";
import Activities from "../Components/Activities";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

// ---------------------------------------------------------------------------
// Canonical base URL — update this once when the production domain is known.
// All page components import from here so a single edit propagates everywhere.
// ---------------------------------------------------------------------------
export const SITE_URL = "https://hotelyellowpagoda.com/";

const Home = () => {
  return (
    <>
      {/* ================================================================
          SEO HEAD TAGS — Home Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>Hotel Yellow Pagoda | Luxury Hotel in Kathmandu, Nepal</title>
        <meta
          name="description"
          content="Hotel Yellow Pagoda – award-winning luxury hotel in Kathmandu. Enjoy premium rooms, fine dining, spa, and conference facilities. Book direct for the best rate."
        />
        <meta
          name="keywords"
          content="Hotel Yellow Pagoda, luxury hotel Kathmandu, Nepal boutique hotel, Kathmandu accommodation, hotel near Thamel"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="Hotel Yellow Pagoda | Luxury Hotel in Kathmandu, Nepal"
        />
        <meta
          property="og:description"
          content="Hotel Yellow Pagoda – award-winning luxury hotel in Kathmandu. Enjoy premium rooms, fine dining, spa, and conference facilities. Book direct for the best rate."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/og-home.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hotel Yellow Pagoda lobby – Luxury Hotel in Kathmandu, Nepal"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="Hotel Yellow Pagoda | Luxury Hotel in Kathmandu, Nepal"
        />
        <meta
          name="twitter:description"
          content="Hotel Yellow Pagoda – award-winning luxury hotel in Kathmandu. Premium rooms, dining, spa & conferences. Book direct."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/images/og-home.jpg`}
        />

        {/* ----- JSON-LD: WebSite + Sitelinks Searchbox ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Hotel Yellow Pagoda",
            "url": "${SITE_URL}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${SITE_URL}/rooms?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>

      {/* ================================================================
          PAGE CONTENT
          ================================================================ */}
      <Hero />
      <About />
      <Rooms />
      <Activities />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;