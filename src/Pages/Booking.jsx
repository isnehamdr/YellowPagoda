import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'

// Banner Component
const Banner = () => {
    return (
        <div className="w-full relative">
            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[90vh]">
                <img 
                    className="w-full h-full object-cover" 
                    src="images/hero.jpg" 
                    alt="Yellow Pagoda - Luxury Resort & Event Venue" 
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-[100px] mb-4 font-bold">
                        Book Now
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
                        Experience tranquility and luxury at Yellow Pagoda
                    </p>
                </div>
            </div>
        </div>
    );
};

// Booking Engine Script Component
const BookingEngineScript = () => {
    useEffect(() => {
        document.querySelectorAll('script[data-booking-engine]').forEach(s => s.remove());
        document.querySelectorAll('#be-booking-form, #be-search-form').forEach(c => c.innerHTML = '');

        const scriptContent = `
            !function(e,n){
                var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
                if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                ["np-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}}(window, [
                      ["setContext", "BE-INT-barandarestro-com_2025-11-19", "en"],
                    ['embed', 'booking-form', { container: 'be-booking-form' }],
                    ['embed', 'search-form', { container: 'be-search-form' }]
                ]);
        `;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.setAttribute("data-booking-engine", "true");
        script.textContent = scriptContent.trim();
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) script.parentNode.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 py-12">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Select Your Room
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Choose from our luxurious rooms and suites with stunning mountain views
                        </p>
                    </div>
                    
                    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div id="be-booking-form" className="w-full"></div>
                    </div>

                    <div className="w-full mt-12">
                        <div id="be-search-form" className="w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Booking Page
const Booking = () => {
    useEffect(() => {
        document.title = "Booking | Yellow Pagoda - Luxury Resort & Event Venue - Luxury Resort in Nepal";
    }, []);

    return (
        <>
            <Helmet>
<title>Book Now | Yellow Pagoda - Offical Website</title>
                <meta name="description" content="Book your luxury stay at Yellow Pagoda - Luxury Resort & Event Venue. Premium accommodations, fine dining, and breathtaking mountain views in Pokhara, Nepal." />
                <meta name="keywords" content="hotel booking Pokhara, luxury resort booking, Baranda accommodation booking, Pokhara hotel reservation, luxury stay booking Nepal, premium rooms Pokhara" />
                
                {/* SINGLE Canonical */}
                <link rel="canonical" href="https://hotelyellowpagoda.com/booking" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hotelyellowpagoda.com/booking" />
                <meta property="og:title" content="Booking | Yellow Pagoda - Luxury Resort & Event Venue - Luxury Resort & Event Venue" />
                <meta property="og:description" content="Reserve your luxury stay at Yellow Pagoda - Luxury Resort & Event Venue. Enjoy premium accommodations, fine dining, and breathtaking mountain views in Nepal." />
                <meta property="og:image" content="https://hotelyellowpagoda.com/images/logo.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Booking | Yellow Pagoda - Luxury Resort & Event Venue - Luxury Resort & Event Venue" />
                <meta name="twitter:description" content="Reserve your luxury stay at Yellow Pagoda - Luxury Resort & Event Venue. Enjoy premium accommodations, fine dining, and breathtaking mountain views in Nepal." />
                <meta name="twitter:image" content="https://hotelyellowpagoda.com/images/logo.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Booking | Yellow Pagoda - Luxury Resort & Event Venue",
                        "description": "Book your stay at Yellow Pagoda - Luxury Resort & Event Venue luxury resort and event venue in Nepal",
                        "url": "https://hotelyellowpagoda.com/booking",
                        "image": "https://hotelyellowpagoda.com/images/logo.png",
                        "mainEntity": {
                            "@type": "Hotel",
                            "name": "Yellow Pagoda - Luxury Resort & Event Venue",
                            "description": "Luxury resort offering premium accommodations, fine dining restaurant, and event hosting facilities with stunning mountain views",
                           "address": {
  "@type": "PostalAddress",
  "streetAddress": "7 Besisahar - Chame Sadak, Besisahar 3",
  "addressLocality": "Lamjung",
  "addressRegion": "Gandaki Province",
  "postalCode": "3600",
  "addressCountry": "NP"
},
                            "amenities": [
                                "Fine Dining Restaurant",
                                "Event Venue",
                                "Luxury Accommodation",
                                "Mountain Views",
                                "Premium Service"
                            ],
                            "makesOffer": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "priceCurrency": "NPR",
                                "description": "Luxury room bookings available"
                            }
                        },
                        "potentialAction": {
                            "@type": "ReserveAction",
                            "target": "https://hotelyellowpagoda.com/booking",
                            "description": "Book your stay at Yellow Pagoda - Luxury Resort & Event Venue"
                        }
                    })}
                </script>
            </Helmet>
            
            <div className="w-full overflow-hidden">
                <Banner />
                <BookingEngineScript />
            </div>
        </>
    );
};

export default Booking;