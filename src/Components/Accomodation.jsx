// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import roomData from "../data/roomdata.json";
// import { Wifi, Tv, Bath, Sofa, Droplets, Bed, Coffee, Umbrella } from "lucide-react";

// // ── SVG Icons ─────────────────────────────────────────────────────────────────
// const AreaIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
//     <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
//   </svg>
// );
// const GuestsIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );
// const BedIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M2 4v16" /><path d="M2 8h28a2 2 0 0 1 2 2v10" />
//     <path d="M2 17h20" /><path d="M6 8v9" />
//   </svg>
// );
// const BathIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5" />
//     <line x1="10" y1="5" x2="8" y2="7" /><line x1="2" y1="12" x2="22" y2="12" />
//   </svg>
// );
// const ChevronLeft = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 18 9 12 15 6" />
//   </svg>
// );
// const ChevronRight = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// // ── Amenity icon map — lucide-react components ────────────────────────────────
// const AMENITY_ICONS = {
//   wifi:   { Icon: Wifi,      label: "WiFi" },
//   tv:     { Icon: Tv,        label: "TV" },
//   bath:   { Icon: Bath,      label: "Bath" },
//   couch:  { Icon: Sofa,      label: "Lounge" },
//   sink:   { Icon: Droplets,  label: "Hot Water" },  // Sink unavailable in lucide-react
//   bed:    { Icon: Bed,       label: "Bed" },
//   coffee: { Icon: Coffee,    label: "Coffee" },
//   beach:  { Icon: Umbrella,  label: "Balcony" },
// };

// // ── Image Carousel ────────────────────────────────────────────────────────────
// const ImageCarousel = ({ images, title, price, pricePer }) => {
//   const [current, setCurrent] = useState(0);
//   const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
//   const next = () => setCurrent((c) => (c + 1) % images.length);

//   return (
//     <div className="relative w-full md:w-[54%] min-h-[340px] md:min-h-[440px] flex-shrink-0 overflow-hidden group">
//       {images.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           alt={`${title} — view ${i + 1}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//             i === current ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}

//       {/* Price badge */}
//       {/* <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1.5 text-xs font-semibold tracking-widest text-gray-800 shadow-sm">
//         ${price} / {pricePer}
//       </div> */}

//       {/* Nav — only show if multiple images */}
//       {images.length > 1 && (
//         <>
//           <button onClick={prev} aria-label="Previous image"
//             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-all duration-200 opacity-0 group-hover:opacity-100">
//             <ChevronLeft />
//           </button>
//           <button onClick={next} aria-label="Next image"
//             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-all duration-200 opacity-0 group-hover:opacity-100">
//             <ChevronRight />
//           </button>
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
//             {images.map((_, i) => (
//               <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to image ${i + 1}`}
//                 className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-white" : "bg-white/50"}`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// // ── Details Panel ─────────────────────────────────────────────────────────────
// const DetailsPanel = ({
//   breadcrumb, title, area, guests, beds, bathrooms,
//   description, slug, amenities,
// }) => (
//   <div className="flex flex-col justify-center px-10 py-10 md:py-12 flex-1">
//     {/* Breadcrumb */}
//     <p className="text-sm text-gray-500 tracking-widest mb-3 uppercase">{breadcrumb}</p>

//     {/* Title */}
//     <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-snug">{title}</h2>

//     {/* Specs row */}
//     <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-gray-500 text-sm mb-6">
//       <span className="flex items-center gap-1.5"><AreaIcon />{area}</span>
//       <span className="text-gray-300">|</span>
//       <span className="flex items-center gap-1.5"><GuestsIcon />{guests} Guests</span>
//       <span className="text-gray-300">|</span>
//       <span className="flex items-center gap-1.5"><BedIcon />{beds}</span>
//       <span className="text-gray-300">|</span>
//       <span className="flex items-center gap-1.5"><BathIcon />{bathrooms}</span>
//     </div>

//     {/* Description */}
//     <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg">{description}</p>

//     {/* Amenities icons */}
//     {amenities && amenities.length > 0 && (
//       <div className="flex flex-wrap gap-3 mb-8">
//         {amenities.map((key) => {
//           const item = AMENITY_ICONS[key];
//           if (!item) return null;
//           const { Icon, label } = item;
//           return (
//             <span
//               key={key}
//               title={label}
//               aria-label={label}
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-[#cbb882] text-[#cbb882] hover:bg-[#cbb882] hover:text-white transition-colors duration-200"
//             >
//               <Icon size={16} />
//             </span>
//           );
//         })}
//       </div>
//     )}

//     {/* CTAs */}
//     <div className="flex items-center gap-6">
//       <Link
//         to={`/details/${slug}`}
//         className="group/link inline-flex items-center gap-1 text-sm font-semibold text-gray-800 border-b border-gray-800 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
//       >
//         Discover More
//         <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">›</span>
//       </Link>
//     </div>
//   </div>
// );

// // ── AccommodationCard ─────────────────────────────────────────────────────────
// const AccommodationCard = ({ room, reverse = false }) => {
//   const carousel = (
//     <ImageCarousel
//       images={room.images}
//       title={room.title}
//       price={room.price}
//       pricePer={room.pricePer}
//     />
//   );
//   const details = (
//     <DetailsPanel
//       breadcrumb={room.breadcrumb}
//       title={room.title}
//       area={room.area}
//       guests={room.guests}
//       beds={room.beds}
//       bathrooms={room.bathrooms}
//       description={room.description}
//       slug={room.slug}
//       amenities={room.amenities}
//     />
//   );

//   return (
//     <div className="flex flex-col md:flex-row items-stretch overflow-hidden w-full gap-10">
//       {reverse ? <>{details}{carousel}</> : <>{carousel}{details}</>}
//     </div>
//   );
// };

// // ── Main Page ─────────────────────────────────────────────────────────────────
// const Accommodation = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="py-24 text-center px-4">
//         <p className="text-sm font-semibold text-gray-600 tracking-[2px] mb-6 uppercase">
//           Welcome to Yellow Pagoda
//         </p>
//         <h2
//           className="text-5xl tracking-[3px] leading-relaxed mb-6 text-gray-900"
//           style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
//         >
//           Select Your Cozy Room
//         </h2>
//         <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
//           In a new setting composed of exceptional hotel chalets, nestled in a forest of pine trees,
//           the Yellow Pagoda Pokhara is expanding into a harmonious and refined unit that affirms its
//           purpose: to sublimate the stay of its guests by a tailor-made service.
//         </p>
//         <div className="flex items-center justify-center gap-6 max-w-xl mx-auto text-sm">
//           <div className="flex items-center gap-2 text-gray-600 uppercase tracking-widest font-medium">
//             <img className="w-8 h-8" src="/images/clock.png" alt="" />
//             Check In: 12:00 pm
//           </div>
//           <span className="text-gray-300">|</span>
//           <div className="flex items-center gap-2 text-gray-600 uppercase tracking-widest font-medium">
//             <img className="w-8 h-8" src="/images/clock.png" alt="" />
//             Check Out: 12:00 pm
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-24 h-px bg-gray-300 mx-auto mb-16" />

//       {/* Room cards — alternating layout */}
//       <div className="px-12 pb-24 flex flex-col gap-16">
//         {roomData.map((room, index) => (
//           <React.Fragment key={room.id}>
//             <AccommodationCard room={room} reverse={index % 2 !== 0} />
//             {index < roomData.length - 1 && (
//               <div className="w-full h-px bg-gray-200" />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accommodation;
// export { AccommodationCard };


import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import roomData from "../data/roomdata.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wifi, Tv, Bath, Sofa, Droplets, Bed, Coffee, Umbrella } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── SVG Icons ──────────────────────────────────────────────────────────────────
const AreaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);
const GuestsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16" /><path d="M2 8h28a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" /><path d="M6 8v9" />
  </svg>
);
const BathIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5" />
    <line x1="10" y1="5" x2="8" y2="7" /><line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── Amenity icon map ───────────────────────────────────────────────────────────
const AMENITY_ICONS = {
  wifi:   { Icon: Wifi,      label: "WiFi" },
  tv:     { Icon: Tv,        label: "TV" },
  bath:   { Icon: Bath,      label: "Bath" },
  couch:  { Icon: Sofa,      label: "Lounge" },
  sink:   { Icon: Droplets,  label: "Hot Water" },
  bed:    { Icon: Bed,       label: "Bed" },
  coffee: { Icon: Coffee,    label: "Coffee" },
  beach:  { Icon: Umbrella,  label: "Balcony" },
};

// ── Image Carousel ─────────────────────────────────────────────────────────────
const ImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full md:w-[54%] min-h-[260px] sm:min-h-[320px] md:min-h-[440px] flex-shrink-0 overflow-hidden group">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} — view ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRightIcon />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ── Details Panel ──────────────────────────────────────────────────────────────
const DetailsPanel = ({ breadcrumb, title, area, guests, beds, bathrooms, description, slug, amenities }) => (
  <div className="flex flex-col justify-center px-5 sm:px-7 md:px-10 py-7 md:py-12 flex-1">
    {/* Breadcrumb */}
    <p className="text-xs sm:text-sm text-gray-500 tracking-widest mb-2 md:mb-3 uppercase">{breadcrumb}</p>

    {/* Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-5 leading-snug">{title}</h2>

    {/* Specs row — wrap naturally on mobile */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-5 md:gap-y-3 text-gray-500 text-xs sm:text-sm mb-5 md:mb-6">
      <span className="flex items-center gap-1.5"><AreaIcon />{area}</span>
      <span className="text-gray-300 hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5"><GuestsIcon />{guests} Guests</span>
      <span className="text-gray-300 hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5"><BedIcon />{beds}</span>
      <span className="text-gray-300 hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5"><BathIcon />{bathrooms}</span>
    </div>

    {/* Description */}
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 md:mb-6 max-w-lg">{description}</p>

    {/* Amenities */}
    {amenities?.length > 0 && (
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
        {amenities.map((key) => {
          const item = AMENITY_ICONS[key];
          if (!item) return null;
          const { Icon, label } = item;
          return (
            <span
              key={key}
              title={label}
              aria-label={label}
              className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-[#cbb882] text-[#cbb882] hover:bg-[#cbb882] hover:text-white transition-colors duration-200"
            >
              <Icon size={15} />
            </span>
          );
        })}
      </div>
    )}

    {/* CTA */}
    <div className="flex items-center gap-6">
      <Link
        to={`/details/${slug}`}
        className="group/link inline-flex items-center gap-1 text-sm font-semibold text-gray-800 border-b border-gray-800 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
      >
        Discover More
        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">›</span>
      </Link>
    </div>
  </div>
);

// ── AccommodationCard ──────────────────────────────────────────────────────────
const AccommodationCard = ({ room, reverse = false }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  const carousel = <ImageCarousel images={room.images} title={room.title} />;
  const details = (
    <DetailsPanel
      breadcrumb={room.breadcrumb}
      title={room.title}
      area={room.area}
      guests={room.guests}
      beds={room.beds}
      bathrooms={room.bathrooms}
      description={room.description}
      slug={room.slug}
      amenities={room.amenities}
    />
  );

  return (
    // On mobile: always stack image on top, details below.
    // On md+: side-by-side with alternating reverse layout (original behaviour).
    <div
      ref={cardRef}
      className="flex flex-col md:flex-row items-stretch overflow-hidden w-full gap-0 md:gap-10"
    >
      {/* Mobile always shows image first, desktop respects reverse prop */}
      <div className="block md:hidden w-full">
        {carousel}
        {details}
      </div>
      <div className="hidden md:flex w-full items-stretch gap-10">
        {reverse ? <>{details}{carousel}</> : <>{carousel}{details}</>}
      </div>
    </div>
  );
};

// ── Main Page ──────────────────────────────────────────────────────────────────
const Accommodation = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = headerRef.current?.children;
      if (!children) return;
      gsap.fromTo(
        Array.from(children),
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div ref={headerRef} className="py-16 md:py-24 text-center px-4">
        <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-[2px] mb-4 md:mb-6 uppercase">
          Welcome to Yellow Pagoda
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl tracking-[2px] md:tracking-[3px] leading-snug md:leading-relaxed mb-4 md:mb-6 text-gray-900"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Select Your Cozy Room
        </h2>
        <p className="text-gray-500 mt-3 md:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8 md:mb-12 leading-relaxed px-2">
          In a new setting composed of exceptional hotel chalets, nestled in a forest of pine trees,
          the Yellow Pagoda Pokhara is expanding into a harmonious and refined unit that affirms its
          purpose: to sublimate the stay of its guests by a tailor-made service.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 max-w-xl mx-auto text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-600 uppercase tracking-widest font-medium">
            <img className="w-6 h-6 sm:w-8 sm:h-8" src="/images/clock.png" alt="" />
            Check In: 12:00 pm
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2 text-gray-600 uppercase tracking-widest font-medium">
            <img className="w-6 h-6 sm:w-8 sm:h-8" src="/images/clock.png" alt="" />
            Check Out: 12:00 pm
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-24 h-px bg-gray-300 mx-auto mb-10 md:mb-16" />

      {/* Room cards */}
      <div className="px-4 sm:px-8 md:px-12 pb-16 md:pb-24 flex flex-col gap-10 md:gap-16">
        {roomData.map((room, index) => (
          <React.Fragment key={room.id}>
            <AccommodationCard room={room} reverse={index % 2 !== 0} />
            {index < roomData.length - 1 && (
              <div className="w-full h-px bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
export { AccommodationCard };