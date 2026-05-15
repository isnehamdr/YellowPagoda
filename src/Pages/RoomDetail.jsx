// import { useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import roomData from "../data/roomdata.json";

// import {
//   Maximize2,
//   Users,
//   BedDouble,
//   Bath,
//   Wifi,
//   Tv,
//   Wind,
//   Coffee,
//   GlassWater,
//   Droplets,
//   Check,
// } from "lucide-react";

// const AMENITY_DETAILS = {
//   wifi: { icon: Wifi, label: "Wifi & Internet" },
//   tv: { icon: Tv, label: "Cable TV" },
//   bath: { icon: Bath, label: "Bathroom" },
//   couch: { icon: Wind, label: "Lounge Area" },
//   sink: { icon: Droplets, label: "Hot Water" },
//   bed: { icon: BedDouble, label: "Premium Bedding" },
//   coffee: { icon: Coffee, label: "Coffee Setup" },
//   beach: { icon: GlassWater, label: "Balcony / View" },
// };

// const FAMILY_ICONS = [GlassWater, BedDouble, Wind];

// const StatBadge = ({ icon: Icon, label }) => (
//   <span className="flex items-center gap-1.5 text-gray-500 text-sm">
//     <Icon size={15} className="text-gray-400 flex-shrink-0" />
//     {label}
//   </span>
// );

// const FamilyFeature = ({ icon: Icon, label }) => (
//   <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl px-5 py-4 text-center min-w-[130px] bg-white">
//     <Icon size={22} className="text-gray-600" />
//     <span className="text-xs text-gray-600 leading-tight">{label}</span>
//   </div>
// );

// const AmenityItem = ({ icon: Icon, label }) => (
//   <div className="flex items-center gap-2.5 text-gray-600 text-sm py-1">
//     <Icon size={16} className="text-gray-400 flex-shrink-0" />
//     {label}
//   </div>
// );

// const InclusionItem = ({ text }) => (
//   <li className="flex items-start gap-2 text-sm text-gray-600">
//     <Check size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//     {text}
//   </li>
// );

// const RoomDetail = () => {
//   const { slug } = useParams();

//   const room = useMemo(
//     () => roomData.find((item) => item.slug === slug),
//     [slug]
//   );

//   // Separate states for better UX
//   const [heroImageIndex, setHeroImageIndex] = useState(0);
//   const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

//   if (!room) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white px-4">
//         <div className="text-center max-w-lg">
//           <h1 className="text-3xl font-semibold text-gray-900 mb-4">
//             Room not found
//           </h1>
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

//   const amenityItems = room.amenities
//     .map((key) => AMENITY_DETAILS[key])
//     .filter(Boolean);

//   const description = room.detailDescription?.length
//     ? room.detailDescription
//     : [room.description];

//   return (
//     <div className="bg-white min-h-screen font-sans">

//       {/* HERO SECTION - Fixed to first image (or you can make it auto-change) */}
//       <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[620px] overflow-hidden">
//         <img
//           src={room.images?.[heroImageIndex] || room.images?.[0]}
//           alt={room.title}
//           className="w-full h-full object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-black/45"></div>

//         <div className="absolute inset-0 flex items-center justify-center px-4">
//           <div className="text-center">
//             <p className="text-white/80 tracking-[3px] uppercase text-xs sm:text-sm mb-4">
//               Our Rooms
//             </p>
//             <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
//               {room.title}
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="px-4 sm:px-6 lg:px-24 py-10 lg:py-14">
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

//           {/* LEFT SIDE */}
//           <div className="flex-1 min-w-0">

//             {/* IMAGE GALLERY - Independent from Hero */}
//             <div className="mb-10">
//               {/* MAIN GALLERY IMAGE */}
//               <div className="w-full h-[260px] sm:h-[380px] md:h-[460px] rounded-3xl overflow-hidden mb-4 shadow-sm">
//                 <img
//                   src={room.images?.[galleryActiveIndex]}
//                   alt={room.title}
//                   className="w-full h-full object-cover transition-all duration-500"
//                 />
//               </div>

//               {/* THUMBNAILS */}
//               <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
//                 {room.images?.map((img, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setGalleryActiveIndex(index)}
//                     className={`w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 snap-start
//                       ${galleryActiveIndex === index 
//                         ? "border-black shadow-md scale-105" 
//                         : "border-transparent hover:border-gray-300"}`}
//                   >
//                     <img
//                       src={img}
//                       alt={`${room.title} ${index + 1}`}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* STATS */}
//             <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
//               <StatBadge icon={Maximize2} label={room.area} />
//               <StatBadge icon={Users} label={`${room.guests} Guests`} />
//               <StatBadge icon={BedDouble} label={room.beds} />
//               <StatBadge icon={Bath} label={room.bathrooms} />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="space-y-4 mb-10">
//               {description.map((para, i) => (
//                 <p key={i} className="text-sm text-gray-600 leading-relaxed">
//                   {para}
//                 </p>
//               ))}
//             </div>

//             {/* FAMILY FEATURES */}
//             <h2 className="text-xl font-semibold mb-5">
//               Family-friendly Amenities
//             </h2>
//             <div className="flex flex-wrap gap-4 mb-12">
//               {room.familyFeatures?.map((feature, i) => (
//                 <FamilyFeature
//                   key={i}
//                   icon={FAMILY_ICONS[i] || GlassWater}
//                   label={feature.label}
//                 />
//               ))}
//             </div>

//             {/* INCLUSIONS */}
//             <h2 className="text-xl font-semibold mb-5">
//               What's included in this suite?
//             </h2>
//             <ul className="space-y-3">
//               {room.inclusions?.map((item, i) => (
//                 <InclusionItem key={i} text={item} />
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0">
//             <div className="sticky top-6 bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
//               <div className="px-6 py-6 border-b">
//                 <h3 className="text-2xl font-semibold">Amenities</h3>
//               </div>

//               <div className="px-6 py-6 space-y-4">
//                 {amenityItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <div
//                       key={item.label}
//                       className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon size={18} className="text-gray-500" />
//                         <span className="text-sm text-gray-700">{item.label}</span>
//                       </div>
//                       <Check size={17} className="text-green-600" />
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="px-6 py-6 bg-gray-50 border-t">
//                 <a
//                   href={room.bookingLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="block w-full bg-gray-900 hover:bg-black text-white text-center py-4 rounded-2xl font-medium transition-colors text-base"
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

import {
  Maximize2, Users, BedDouble, Bath, Wifi, Tv, Wind,
  Coffee, GlassWater, Droplets, Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Config ─────────────────────────────────────────────────────────────────────
const AMENITY_DETAILS = {
  wifi:   { icon: Wifi,        label: "Wifi & Internet" },
  tv:     { icon: Tv,          label: "Cable TV" },
  bath:   { icon: Bath,        label: "Bathroom" },
  couch:  { icon: Wind,        label: "Lounge Area" },
  sink:   { icon: Droplets,    label: "Hot Water" },
  bed:    { icon: BedDouble,   label: "Premium Bedding" },
  coffee: { icon: Coffee,      label: "Coffee Setup" },
  beach:  { icon: GlassWater,  label: "Balcony / View" },
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
  const room = useMemo(() => roomData.find((r) => r.slug === slug), [slug]);

  const [heroImageIndex]            = useState(0);
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  // Refs for GSAP
  const heroRef        = useRef(null);
  const heroTextRef    = useRef(null);
  const galleryRef     = useRef(null);
  const statsRef       = useRef(null);
  const descRef        = useRef(null);
  const familyRef      = useRef(null);
  const inclusionsRef  = useRef(null);
  const sidebarRef     = useRef(null);

  useEffect(() => {
    if (!room) return;

    const ctx = gsap.context(() => {
      // ── Hero text entrance ────────────────────────────────────────
      const heroChildren = heroTextRef.current?.children;
      if (heroChildren) {
        gsap.fromTo(
          Array.from(heroChildren),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: "power3.out", delay: 0.15 }
        );
      }

      // ── Shared scroll-trigger factory ─────────────────────────────
      const reveal = (target, vars = {}) =>
        gsap.fromTo(
          target,
          { opacity: 0, y: 44 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: target, start: "top 88%", toggleActions: "play none none reverse" },
            ...vars,
          }
        );

      reveal(galleryRef.current);
      reveal(statsRef.current, { duration: 0.6 });
      reveal(descRef.current,  { duration: 0.7 });
      reveal(familyRef.current);
      reveal(inclusionsRef.current);
      reveal(sidebarRef.current, { y: 30, duration: 0.8 });
    });

    return () => ctx.revert();
  }, [room]);

  // ── Not found ─────────────────────────────────────────────────────────────────
  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Room not found</h1>
          <p className="text-gray-500 mb-6">
            The room you are looking for does not exist or its slug does not match the room data.
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const amenityItems  = room.amenities.map((k) => AMENITY_DETAILS[k]).filter(Boolean);
  const description   = room.detailDescription?.length ? room.detailDescription : [room.description];

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[620px] overflow-hidden"
      >
        <img
          src={room.images?.[heroImageIndex] || room.images?.[0]}
          alt={room.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div ref={heroTextRef} className="text-center">
            <p className="text-white/80 tracking-[3px] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Our Rooms
            </p>
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              {room.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-24 py-8 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">

          {/* ── LEFT ──────────────────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Gallery */}
            <div ref={galleryRef} className="mb-8 md:mb-10">
              <div className="w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-3 md:mb-4 shadow-sm">
                <img
                  src={room.images?.[galleryActiveIndex]}
                  alt={room.title}
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
                      ${galleryActiveIndex === i ? "border-black shadow-md scale-105" : "border-transparent hover:border-gray-300"}`}
                  >
                    <img
                      src={img}
                      alt={`${room.title} ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 mb-6 md:mb-8">
              <StatBadge icon={Maximize2} label={room.area} />
              <StatBadge icon={Users}     label={`${room.guests} Guests`} />
              <StatBadge icon={BedDouble} label={room.beds} />
              <StatBadge icon={Bath}      label={room.bathrooms} />
            </div>

            {/* Description */}
            <div ref={descRef} className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {description.map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Family features */}
            <div ref={familyRef} className="mb-8 md:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">Family-friendly Amenities</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {room.familyFeatures?.map((feature, i) => (
                  <FamilyFeature key={i} icon={FAMILY_ICONS[i] || GlassWater} label={feature.label} />
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div ref={inclusionsRef}>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 md:mb-5">What's included in this suite?</h2>
              <ul className="space-y-2 md:space-y-3">
                {room.inclusions?.map((item, i) => (
                  <InclusionItem key={i} text={item} />
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────────────────────── */}
          {/* On mobile: renders below left content, full width, not sticky.      */}
          {/* On lg+: fixed width, sticky — exactly as original.                  */}
          <div
            ref={sidebarRef}
            className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0"
          >
            <div className="lg:sticky lg:top-6 bg-white border border-gray-200 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="px-5 sm:px-6 py-5 sm:py-6 border-b">
                <h3 className="text-xl sm:text-2xl font-semibold">Amenities</h3>
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
                        <span className="text-sm text-gray-700">{item.label}</span>
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
                  rel="noreferrer"
                  className="block w-full bg-gray-900 hover:bg-black text-white text-center py-3.5 sm:py-4 rounded-xl md:rounded-2xl font-medium transition-colors text-sm sm:text-base"
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetail;