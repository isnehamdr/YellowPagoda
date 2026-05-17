import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.hotelyellowpagoda.com";

const galleryFiles = [
  "0V9A9877.jpg","0V9A9878.jpg","0V9A9882.jpg","0V9A9894.jpg","0V9A9895.jpg",
  "0V9A9907.jpg","0V9A9911.jpg","0V9A9913.jpg","0V9A9915.jpg","0V9A9919.jpg",
  "0V9A9921.jpg","0V9A9924.jpg","0V9A9926.jpg","0V9A9927.jpg","0V9A9934.jpg",
  "0V9A9939.jpg","0V9A9942.jpg","0V9A9944.jpg","0V9A9946.jpg","0V9A9953.jpg",
  "0V9A9959.jpg","0V9A9966.jpg","0V9A9974.jpg","0V9A9977.jpg","0V9A9980.jpg",
  "0V9A9982.jpg","0V9A9985.jpg","0V9A9988.jpg","0V9A9990.jpg","0V9A9993.jpg",
];

const cardHeights = [
  "h-[260px] sm:h-[320px] md:h-[420px]",
  "h-[220px] sm:h-[260px] md:h-[300px]",
  "h-[280px] sm:h-[340px] md:h-[460px]",
  "h-[240px] sm:h-[280px] md:h-[360px]",
];

const galleryImages = galleryFiles.map((file, index) => ({
  id: index + 1,
  src: `/images/gallery/${file}`,
  alt: `Hotel Yellow Pagoda – gallery image ${index + 1}`,
  category: "Gallery",
  title: `Photo ${String(index + 1).padStart(2, "0")}`,
  height: cardHeights[index % cardHeights.length],
}));

const Gallery = () => {
  const heroRef       = useRef(null);
  const subtitleRef   = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const introRef      = useRef(null);
  const cardRefs      = useRef([]);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mobileSliderSettings = {
    dots: false, arrows: false, infinite: true, speed: 500,
    slidesToShow: 1, slidesToScroll: 1, autoplay: true,
    autoplaySpeed: 3000, adaptiveHeight: true,
  };

  // Open lightbox with selected image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage(e);
      } else if (e.key === "ArrowLeft") {
        prevImage(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const subtitle   = subtitleRef.current;
      const mainHeading = mainHeadingRef.current;
      const subHeading  = subHeadingRef.current;

      if (!subtitle || !mainHeading || !subHeading) return;

      const mainWords = mainHeading.textContent.split(" ");
      mainHeading.innerHTML = mainWords
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(" ");

      const subWords = subHeading.textContent.split(" ");
      subHeading.innerHTML = subWords
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(" ");

      const mainSpans = mainHeading.querySelectorAll("span");
      const subSpans  = subHeading.querySelectorAll("span");

      const st = (trigger, start = "top 82%") => ({
        trigger, start, toggleActions: "play none none reverse",
      });

      gsap.fromTo(subtitle, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", scrollTrigger: st(subtitle) });
      gsap.fromTo(mainSpans, { opacity: 0, y: 36, skewX: 4 }, { opacity: 1, y: 0, skewX: 0, duration: 0.7, stagger: 0.09, ease: "power3.out", scrollTrigger: st(mainHeading) });
      gsap.fromTo(subSpans,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.04, delay: 0.35, ease: "power2.out", scrollTrigger: st(subHeading, "top 85%") });

      gsap.fromTo(introRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: introRef.current, start: "top 88%", toggleActions: "play none none reverse" },
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 50, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: index * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* ================================================================
          SEO HEAD TAGS — Gallery Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>Photo Gallery | Hotel Yellow Pagoda – Pokhara, Nepal</title>
        <meta
          name="description"
          content="Browse the Hotel Yellow Pagoda photo gallery – explore our elegant rooms, dining spaces, event halls, outdoor areas, and the beauty of Pokhara, Nepal."
        />
        <meta
          name="keywords"
          content="Hotel Yellow Pagoda, Yellow Pagoda Pokhara, Hotel Yellow Pagoda gallery, Pokhara hotel photos, luxury hotel images Nepal, hotel room photos, hotel dining gallery"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/gallery`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="Photo Gallery | Hotel Yellow Pagoda – Pokhara, Nepal"
        />
        <meta
          property="og:description"
          content="Explore Hotel Yellow Pagoda's photo gallery – rooms, dining, events, and the scenic beauty of Pokhara, Nepal."
        />
        <meta property="og:url" content={`${SITE_URL}/gallery`} />
        <meta property="og:image" content={`${SITE_URL}/images/pagoda2.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hotel Yellow Pagoda – aerial view, Pokhara Nepal"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="Photo Gallery | Hotel Yellow Pagoda – Pokhara, Nepal"
        />
        <meta
          name="twitter:description"
          content="Explore Hotel Yellow Pagoda's photo gallery – rooms, dining, events, and the scenic beauty of Pokhara, Nepal."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/pagoda2.webp`} />

        {/* ----- JSON-LD: ImageGallery ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Hotel Yellow Pagoda Photo Gallery",
            "description": "A visual tour of Hotel Yellow Pagoda in Pokhara, Nepal – rooms, dining areas, event spaces, and outdoor surroundings.",
            "url": "${SITE_URL}/gallery",
            "image": "${SITE_URL}/images/pagoda2.webp",
            "author": {
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

      {/* HERO */}
      <div
        ref={heroRef}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/pagoda2.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-6 md:px-8 py-20 md:py-24 lg:py-32">
          <div className="w-full max-w-6xl mx-auto">
            <p
              ref={subtitleRef}
              className="uppercase text-xs sm:text-sm md:text-base text-white text-center font-semibold tracking-[0.12em] sm:tracking-[0.2em] md:tracking-widest mb-4 md:mb-6"
            >
              Moments Around The Hotel
            </p>

            <h1
              ref={mainHeadingRef}
              className="text-5xl sm:text-5xl md:text-7xl font-medium text-white text-center tracking-normal sm:tracking-wide md:tracking-[8px] leading-tight md:leading-[1.2] lg:leading-relaxed max-w-5xl mx-auto px-2"
            >
              Gallery
            </h1>

            <h2
              ref={subHeadingRef}
              className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-white text-center tracking-normal sm:tracking-wide md:tracking-[2px] leading-relaxed md:leading-[1.2] lg:leading-relaxed max-w-4xl mx-auto px-2 mt-6 sm:mt-8 md:mt-12"
            >
              Discover the spaces, stays, dining, and experiences that shape your time at Hotel Yellow Pagoda.
            </h2>
          </div>
        </div>
      </div>

      {/* GALLERY GRID */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div
            ref={introRef}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16"
          >
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.16em] text-[#826f36] font-semibold mb-4">
                Visual Journey
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-5">
                A closer look at the hotel experience.
              </h3>
            </div>
            <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
              From elegant rooms and warm hospitality to dining, events, and
              leisure spaces, this gallery brings together the details guests
              remember most.
            </p>
          </div>

          {/* Mobile slider */}
          <div className="block sm:hidden">
            <Slider {...mobileSliderSettings} className="gallery-mobile-slider">
              {galleryImages.map((image, index) => (
                <article
                  key={image.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="px-1 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="overflow-hidden bg-[#f7f4ee] group">
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                  </div>
                </article>
              ))}
            </Slider>
          </div>

          {/* Desktop masonry */}
          <div className="hidden sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance] sm:block">
            {galleryImages.map((image, index) => (
              <article
                key={image.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="mb-4 md:mb-5 break-inside-avoid overflow-hidden bg-[#f7f4ee] group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${image.height} overflow-hidden`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-6 md:left-10 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-6 md:right-10 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base bg-black/50 px-3 py-1 rounded-full">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Main image */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
