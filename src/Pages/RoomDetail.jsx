// import { useMemo, useState, useRef, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import roomData from "../data/roomdata.json";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   Maximize2, Users, BedDouble, Bath, Wifi, Tv, Wind,
//   Coffee, GlassWater, Droplets, Check,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// // ── Config ─────────────────────────────────────────────────────────────────────
// const AMENITY_DETAILS = {
//   wifi:   { icon: Wifi,        label: "Wifi & Internet" },
//   tv:     { icon: Tv,          label: "Cable TV" },
//   bath:   { icon: Bath,        label: "Bathroom" },
//   couch:  { icon: Wind,        label: "Lounge Area" },
//   sink:   { icon: Droplets,    label: "Hot Water" },
//   bed:    { icon: BedDouble,   label: "Premium Bedding" },
//   coffee: { icon: Coffee,      label: "Coffee Setup" },
//   beach:  { icon: GlassWater,  label: "Balcony / View" },
// };
// const FAMILY_ICONS = [GlassWater, BedDouble, Wind];

// // ── Small reusable pieces ──────────────────────────────────────────────────────
// const StatBadge = ({ icon: Icon, label }) => (
//   <span className="flex items-center gap-1.5 text-gray-500 text-sm">
//     <Icon size={15} className="text-gray-400 flex-shrink-0" />
//     {label}
//   </span>
// );

// const FamilyFeature = ({ icon: Icon, label }) => (
//   <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl px-4 py-4 text-center min-w-[110px] sm:min-w-[130px] bg-white">
//     <Icon size={22} className="text-gray-600" />
//     <span className="text-xs text-gray-600 leading-tight">{label}</span>
//   </div>
// );

// const InclusionItem = ({ text }) => (
//   <li className="flex items-start gap-2 text-sm text-gray-600">
//     <Check size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//     {text}
//   </li>
// );

// // ── Main Component ─────────────────────────────────────────────────────────────
// const RoomDetail = () => {
//   const { slug } = useParams();
//   const room = useMemo(() => roomData.find((r) => r.slug === slug), [slug]);

//   const [heroImageIndex]            = useState(0);
//   const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

//   // Refs for GSAP
//   const heroRef        = useRef(null);
//   const heroTextRef    = useRef(null);
//   const galleryRef     = useRef(null);
//   const statsRef       = useRef(null);
//   const descRef        = useRef(null);
//   const familyRef      = useRef(null);
//   const inclusionsRef  = useRef(null);
//   const sidebarRef     = useRef(null);

//   useEffect(() => {
//     if (!room) return;

//     const ctx = gsap.context(() => {
//       // ── Hero text entrance ────────────────────────────────────────
//       const heroChildren = heroTextRef.current?.children;
//       if (heroChildren) {
//         gsap.fromTo(
//           Array.from(heroChildren),
//           { opacity: 0, y: 30 },
//           { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: "power3.out", delay: 0.15 }
//         );
//       }

//       // ── Shared scroll-trigger factory ─────────────────────────────
//       const reveal = (target, vars = {}) =>
//         gsap.fromTo(
//           target,
//           { opacity: 0, y: 44 },
//           {
//             opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
//             scrollTrigger: { trigger: target, start: "top 88%", toggleActions: "play none none reverse" },
//             ...vars,
//           }
//         );

//       reveal(galleryRef.current);
//       reveal(statsRef.current, { duration: 0.6 });
//       reveal(descRef.current,  { duration: 0.7 });
//       reveal(familyRef.current);
//       reveal(inclusionsRef.current);
//       reveal(sidebarRef.current, { y: 30, duration: 0.8 });
//     });

//     return () => ctx.revert();
//   }, [room]);

//   // ── Not found ─────────────────────────────────────────────────────────────────
//   if (!room) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white px-4">
//         <div className="text-center max-w-lg">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-4">Room not found</h2>
//           <p className="text-gray-500 mb-6">
//             The room you are looking for does not exist or its slug does not match the room data.
//           </p>
//           <Link
//             to="/rooms"
//             className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
//           >
//             Back to Rooms
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const amenityItems  = room.amenities.map((k) => AMENITY_DETAILS[k]).filter(Boolean);
//   const description   = room.detailDescription?.length ? room.detailDescription : [room.description];

//   return (
//     <div className="bg-white min-h-screen font-sans">

//       {/* ── HERO ──────────────────────────────────────────────────────────────── */}
//       <div
//         ref={heroRef}
//         className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[620px] overflow-hidden"
//       >
//         <img
//           src={room.images?.[heroImageIndex] || room.images?.[0]}
//           alt={room.title}
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/45" />
//         <div className="absolute inset-0 flex items-center justify-center px-4">
//           <div ref={heroTextRef} className="text-center">
//             <p className="text-white/80 tracking-[3px] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
//               Our Rooms
//             </p>
//             <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
//               {room.title}
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
//       <div className="px-4 sm:px-6 lg:px-24 py-8 lg:py-14">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">

//           {/* ── LEFT ──────────────────────────────────────────────────────────── */}
//           <div className="flex-1 min-w-0">

//             {/* Gallery */}
//             <div ref={galleryRef} className="mb-8 md:mb-10">
//               <div className="w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-3 md:mb-4 shadow-sm">
//                 <img
//                   src={room.images?.[galleryActiveIndex]}
//                   alt={room.title}
//                   className="w-full h-full object-cover transition-all duration-500"
//                 />
//               </div>
//               {/* Thumbnails */}
//               <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
//                 {room.images?.map((img, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setGalleryActiveIndex(i)}
//                     className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 snap-start
//                       ${galleryActiveIndex === i ? "border-black shadow-md scale-105" : "border-transparent hover:border-gray-300"}`}
//                   >
//                     <img
//                       src={img}
//                       alt={`${room.title} ${i + 1}`}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stats */}
//             <div ref={statsRef} className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 mb-6 md:mb-8">
//               <StatBadge icon={Maximize2} label={room.area} />
//               <StatBadge icon={Users}     label={`${room.guests} Guests`} />
//               <StatBadge icon={BedDouble} label={room.beds} />
//               <StatBadge icon={Bath}      label={room.bathrooms} />
//             </div>

//             {/* Description */}
//             <div ref={descRef} className="space-y-3 md:space-y-4 mb-8 md:mb-10">
//               {description.map((para, i) => (
//                 <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
//               ))}
//             </div>

//             {/* Family features */}
//             <div ref={familyRef} className="mb-8 md:mb-12">
//               <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">Family-friendly Amenities</h2>
//               <div className="flex flex-wrap gap-3 md:gap-4">
//                 {room.familyFeatures?.map((feature, i) => (
//                   <FamilyFeature key={i} icon={FAMILY_ICONS[i] || GlassWater} label={feature.label} />
//                 ))}
//               </div>
//             </div>

//             {/* Inclusions */}
//             <div ref={inclusionsRef}>
//               <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">What's included in this suite?</h2>
//               <ul className="space-y-2 md:space-y-3">
//                 {room.inclusions?.map((item, i) => (
//                   <InclusionItem key={i} text={item} />
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* ── RIGHT SIDEBAR ─────────────────────────────────────────────────── */}
//           {/* On mobile: renders below left content, full width, not sticky.      */}
//           {/* On lg+: fixed width, sticky — exactly as original.                  */}
//           <div
//             ref={sidebarRef}
//             className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0"
//           >
//             <div className="lg:sticky lg:top-6 bg-white border border-gray-200 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
//               <div className="px-5 sm:px-6 py-5 sm:py-6 border-b">
//                 <h3 className="text-xl sm:text-2xl font-semibold">Amenities</h3>
//               </div>

//               <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-3 sm:space-y-4">
//                 {amenityItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <div
//                       key={item.label}
//                       className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon size={17} className="text-gray-500" />
//                         <span className="text-sm text-gray-700">{item.label}</span>
//                       </div>
//                       <Check size={16} className="text-green-600" />
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="px-5 sm:px-6 py-5 sm:py-6 bg-gray-50 border-t">
//                 <a
//                   href={room.bookingLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="block w-full bg-gray-900 hover:bg-black text-white text-center py-3.5 sm:py-4 rounded-xl md:rounded-2xl font-medium transition-colors text-sm sm:text-base"
//                 >
//                   Book Your Stay
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomDetail;

import { useMemo, useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import roomData from "../data/roomdata.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";

import {
  Maximize2,
  Users,
  BedDouble,
  Bath,
  Wifi,
  Tv,
  Wind,
  Coffee,
  GlassWater,
  Droplets,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Config ─────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.hotelyellowpagoda.com";

const AMENITY_DETAILS = {
  wifi: { icon: Wifi, label: "Wifi & Internet" },
  tv: { icon: Tv, label: "Cable TV" },
  bath: { icon: Bath, label: "Bathroom" },
  couch: { icon: Wind, label: "Lounge Area" },
  sink: { icon: Droplets, label: "Hot Water" },
  bed: { icon: BedDouble, label: "Premium Bedding" },
  coffee: { icon: Coffee, label: "Coffee Setup" },
  beach: { icon: GlassWater, label: "Balcony / View" },
};

const FAMILY_ICONS = [GlassWater, BedDouble, Wind];

// ── Small reusable pieces ──────────────────────────────────────────────────────
const StatBadge = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
    <Icon size={15} className="text-gray-400 flex-shrink-0" />
    {label}
  </span>
);

const FamilyFeature = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl px-4 py-4 text-center min-w-[110px] sm:min-w-[130px] bg-white">
    <Icon size={22} className="text-gray-600" />
    <span className="text-xs text-gray-600 leading-tight">{label}</span>
  </div>
);

const InclusionItem = ({ text }) => (
  <li className="flex items-start gap-2 text-sm text-gray-600">
    <Check size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
    {text}
  </li>
);

// ── Main Component ─────────────────────────────────────────────────────────────
const RoomDetail = () => {
  const { slug } = useParams();

  const room = useMemo(
    () => roomData.find((r) => r.slug === slug),
    [slug]
  );

  const [heroImageIndex] = useState(0);
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  // SEO DATA
  const pageTitle = room
    ? `${room.title} | Hotel Yellow Pagoda Pokhara`
    : "Room Not Found | Hotel Yellow Pagoda";

  const pageDescription = room
    ? `${room.description?.slice(0, 140)} Experience luxury accommodation at Hotel Yellow Pagoda Pokhara.`
    : "The requested room could not be found.";

  const canonicalUrl = `${SITE_URL}/details/${slug}`;

  // Refs for GSAP
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const galleryRef = useRef(null);
  const statsRef = useRef(null);
  const descRef = useRef(null);
  const familyRef = useRef(null);
  const inclusionsRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!room) return;

    const ctx = gsap.context(() => {
      const heroChildren = heroTextRef.current?.children;

      if (heroChildren) {
        gsap.fromTo(
          Array.from(heroChildren),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      const reveal = (target, vars = {}) =>
        gsap.fromTo(
          target,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            ...vars,
          }
        );

      reveal(galleryRef.current);
      reveal(statsRef.current, { duration: 0.6 });
      reveal(descRef.current, { duration: 0.7 });
      reveal(familyRef.current);
      reveal(inclusionsRef.current);
      reveal(sidebarRef.current, { y: 30, duration: 0.8 });
    });

    return () => ctx.revert();
  }, [room]);

  // ── Not found ─────────────────────────────────────────────────────────────────
  if (!room) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Room not found
            </h2>

            <p className="text-gray-500 mb-6">
              The room you are looking for does not exist or its slug does not
              match the room data.
            </p>

            <Link
              to="/rooms"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Rooms
            </Link>
          </div>
        </div>
      </>
    );
  }

  const amenityItems = room.amenities
    .map((k) => AMENITY_DETAILS[k])
    .filter(Boolean);

  const description = room.detailDescription?.length
    ? room.detailDescription
    : [room.description];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`${room.title}, Hotel Yellow Pagoda, Yellow Pagoda Pokhara, luxury hotel room Pokhara, boutique hotel Nepal, Pokhara accommodation`}
        />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={`${SITE_URL}${room.images?.[0]}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={`${SITE_URL}${room.images?.[0]}`}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: room.title,
            description: room.description,
            image: room.images?.map((img) => `${SITE_URL}${img}`),
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: room.guests,
            },
            bed: room.beds,
            url: canonicalUrl,
            amenityFeature: amenityItems.map((item) => ({
              "@type": "LocationFeatureSpecification",
              name: item.label,
              value: true,
            })),
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen font-sans">

        {/* HERO */}
        <div
          ref={heroRef}
          className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[620px] overflow-hidden"
        >
          <img
            src={room.images?.[heroImageIndex] || room.images?.[0]}
            alt={`${room.title} at Hotel Yellow Pagoda Pokhara`}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div ref={heroTextRef} className="text-center">
              <p className="text-white/80 tracking-[3px] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Our Rooms
              </p>

              <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                {room.title}
              </h2>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="px-4 sm:px-6 lg:px-24 py-8 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">

            {/* LEFT */}
            <div className="flex-1 min-w-0">

              {/* Gallery */}
              <div ref={galleryRef} className="mb-8 md:mt-8">
                <div className="w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-3 md:mb-4 shadow-sm">
                  <img
                    src={room.images?.[galleryActiveIndex]}
                    alt={`${room.title} gallery image ${
                      galleryActiveIndex + 1
                    }`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                  {room.images?.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setGalleryActiveIndex(i)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 snap-start
                      ${
                        galleryActiveIndex === i
                          ? "border-black shadow-md scale-105"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${room.title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 mb-6 md:mb-8"
              >
                <StatBadge icon={Maximize2} label={room.area} />
                <StatBadge icon={Users} label={`${room.guests} Guests`} />
                <StatBadge icon={BedDouble} label={room.beds} />
                <StatBadge icon={Bath} label={room.bathrooms} />
              </div>

              {/* Description */}
              <section ref={descRef} className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {description.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </section>

              {/* Family features */}
              <section ref={familyRef} className="mb-8 md:mb-12">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">
                  Family-friendly Amenities
                </h2>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {room.familyFeatures?.map((feature, i) => (
                    <FamilyFeature
                      key={i}
                      icon={FAMILY_ICONS[i] || GlassWater}
                      label={feature.label}
                    />
                  ))}
                </div>
              </section>

              {/* Inclusions */}
              <section ref={inclusionsRef}>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">
                  What's included in this suite?
                </h2>

                <ul className="space-y-2 md:space-y-3">
                  {room.inclusions?.map((item, i) => (
                    <InclusionItem key={i} text={item} />
                  ))}
                </ul>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside
              ref={sidebarRef}
              className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 mb-8 lg:mt-0"
            >
              <div className="lg:sticky lg:top-6 bg-white border border-gray-200 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 sm:px-6 py-5 sm:py-6 border-b">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Amenities
                  </h2>
                </div>

                <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-3 sm:space-y-4">
                  {amenityItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={17} className="text-gray-500" />

                          <span className="text-sm text-gray-700">
                            {item.label}
                          </span>
                        </div>

                        <Check size={16} className="text-green-600" />
                      </div>
                    );
                  })}
                </div>

                <div className="px-5 sm:px-6 py-5 sm:py-6 bg-gray-50 border-t">
                  <a
                    href={room.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-900 hover:bg-black text-white text-center py-3.5 sm:py-4 rounded-xl md:rounded-2xl font-medium transition-colors text-sm sm:text-base"
                  >
                    Book Your Stay
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
