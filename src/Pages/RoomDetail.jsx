import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import roomData from "../data/roomdata.json";

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

const StatBadge = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
    <Icon size={15} className="text-gray-400 flex-shrink-0" />
    {label}
  </span>
);

const FamilyFeature = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl px-5 py-4 text-center min-w-[130px] bg-white">
    <Icon size={22} className="text-gray-600" />
    <span className="text-xs text-gray-600 leading-tight">{label}</span>
  </div>
);

const AmenityItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2.5 text-gray-600 text-sm py-1">
    <Icon size={16} className="text-gray-400 flex-shrink-0" />
    {label}
  </div>
);

const InclusionItem = ({ text }) => (
  <li className="flex items-start gap-2 text-sm text-gray-600">
    <Check size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
    {text}
  </li>
);

const RoomDetail = () => {
  const { slug } = useParams();

  const room = useMemo(
    () => roomData.find((item) => item.slug === slug),
    [slug]
  );

  // Separate states for better UX
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Room not found
          </h1>
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

  const amenityItems = room.amenities
    .map((key) => AMENITY_DETAILS[key])
    .filter(Boolean);

  const description = room.detailDescription?.length
    ? room.detailDescription
    : [room.description];

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* HERO SECTION - Fixed to first image (or you can make it auto-change) */}
      <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[620px] overflow-hidden">
        <img
          src={room.images?.[heroImageIndex] || room.images?.[0]}
          alt={room.title}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-white/80 tracking-[3px] uppercase text-xs sm:text-sm mb-4">
              Our Rooms
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              {room.title}
            </h1>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 sm:px-6 lg:px-24 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT SIDE */}
          <div className="flex-1 min-w-0">

            {/* IMAGE GALLERY - Independent from Hero */}
            <div className="mb-10">
              {/* MAIN GALLERY IMAGE */}
              <div className="w-full h-[260px] sm:h-[380px] md:h-[460px] rounded-3xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={room.images?.[galleryActiveIndex]}
                  alt={room.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {room.images?.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setGalleryActiveIndex(index)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 snap-start
                      ${galleryActiveIndex === index 
                        ? "border-black shadow-md scale-105" 
                        : "border-transparent hover:border-gray-300"}`}
                  >
                    <img
                      src={img}
                      alt={`${room.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <StatBadge icon={Maximize2} label={room.area} />
              <StatBadge icon={Users} label={`${room.guests} Guests`} />
              <StatBadge icon={BedDouble} label={room.beds} />
              <StatBadge icon={Bath} label={room.bathrooms} />
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-4 mb-10">
              {description.map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* FAMILY FEATURES */}
            <h2 className="text-xl font-semibold mb-5">
              Family-friendly Amenities
            </h2>
            <div className="flex flex-wrap gap-4 mb-12">
              {room.familyFeatures?.map((feature, i) => (
                <FamilyFeature
                  key={i}
                  icon={FAMILY_ICONS[i] || GlassWater}
                  label={feature.label}
                />
              ))}
            </div>

            {/* INCLUSIONS */}
            <h2 className="text-xl font-semibold mb-5">
              What's included in this suite?
            </h2>
            <ul className="space-y-3">
              {room.inclusions?.map((item, i) => (
                <InclusionItem key={i} text={item} />
              ))}
            </ul>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0">
            <div className="sticky top-6 bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="px-6 py-6 border-b">
                <h3 className="text-2xl font-semibold">Amenities</h3>
              </div>

              <div className="px-6 py-6 space-y-4">
                {amenityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </div>
                      <Check size={17} className="text-green-600" />
                    </div>
                  );
                })}
              </div>

              <div className="px-6 py-6 bg-gray-50 border-t">
                <a
                  href={room.bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-gray-900 hover:bg-black text-white text-center py-4 rounded-2xl font-medium transition-colors text-base"
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