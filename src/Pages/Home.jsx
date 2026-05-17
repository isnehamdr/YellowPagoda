import React, { useEffect } from "react";
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
  //  const BookingEngineScript = () => {
  //     useEffect(() => {
  //         document.querySelectorAll('script[data-booking-engine]').forEach(s => s.remove());
  //         document.querySelectorAll('#be-booking-form, #be-search-form').forEach(c => c.innerHTML = '');
  
  //         const scriptContent = `
  //             !function(e,n){
  //                 var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
  //                 if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
  //                 !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
  //                 a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
  //                 ["np-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}}(window, [
  //                       ["setContext", "BE-INT-barandarestro-com_2025-11-19", "en"],
  //                     ['embed', 'search-form', { container: 'be-search-form' }]
  //                 ]);
  //         `;
  
  //         const script = document.createElement("script");
  //         script.type = "text/javascript";
  //         script.async = true;
  //         script.setAttribute("data-booking-engine", "true");
  //         script.textContent = scriptContent.trim();
  //         document.body.appendChild(script);
  
  //         return () => {
  //             if (script.parentNode) script.parentNode.removeChild(script);
  //         };
  //     }, []);
  
  //     return (<></>);
  // };
   
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
      {/* <BookingEngineScript/> */}
  
    </>
  );
};

export default Home;
