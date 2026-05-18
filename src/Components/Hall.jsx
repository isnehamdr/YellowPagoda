import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    image: "/images/hall2.png",
    label: "Conference & Events",
    heading: "Sabina Hall",
    desc: "Our flagship hall designed for large-scale gatherings. Accommodates up to 200 pax in Theatre Style, 70 pax in \"U\" Setup, and 120 pax in Round Table Setup — ideal for conferences, seminars, and grand celebrations.",
    capacity: { theatre: "200 pax", u: "70 pax", roundTable: "120 pax" },
  },
  {
    image: "/images/hall3.png",
    label: "Conference & Events",
    heading: "Anil Hall",
    desc: "A versatile and spacious hall perfectly suited for corporate events and social gatherings. Holds 200 pax in Theatre Style, 70 pax in \"U\" Setup, and 120 pax in Round Table Setup with all modern amenities.",
    capacity: { theatre: "200 pax", u: "70 pax", roundTable: "120 pax" },
  },
  {
    image: "/images/hall4.png",
    label: "Intimate Gatherings",
    heading: "Ajit Hall",
    desc: "A cosy and well-appointed hall for smaller, more intimate meetings and get-togethers. Comfortably seats 30 pax in Theatre Style and 15 pax in \"U\" Setup — perfect for focused sessions and private meetings.",
    capacity: { theatre: "30 pax", u: "15 pax", roundTable: "N/A" },
  },
  {
    image: "/images/hall5.png",
    label: "Intimate Gatherings",
    heading: "Ajay Hall",
    desc: "An elegant compact space ideal for exclusive meetings, interviews, and small seminars. Seats 30 pax in Theatre Style and 15 pax in \"U\" Setup, equipped with all essentials for a smooth programme.",
    capacity: { theatre: "30 pax", u: "15 pax", roundTable: "N/A" },
  },
];

const Hall = () => {
  const heroLeftRef  = useRef(null);
  const heroRightRef = useRef(null);
  const card0Ref     = useRef(null);
  const card1Ref     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      gsap.fromTo(heroLeftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease,
          scrollTrigger: { trigger: heroLeftRef.current, start: "top 85%", toggleActions: "play none none reverse" } }
      );

      gsap.fromTo(heroRightRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease, delay: 0.15,
          scrollTrigger: { trigger: heroRightRef.current, start: "top 85%", toggleActions: "play none none reverse" } }
      );

      [card0Ref, card1Ref].forEach((ref, i) => {
        gsap.fromTo(ref.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.85, ease, delay: i * 0.15,
            scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" } }
        );
      });

      const heroImg = heroLeftRef.current?.querySelector("img");
      if (heroImg) {
        gsap.fromTo(heroImg,
          { scale: 1 },
          { scale: 1.07, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="w-full">

        {/* ── TOP HERO — split left photo / right dark green ─────── */}
        <div className="flex flex-col md:flex-row w-full min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">

          {/* Left — photo */}
          <div
            ref={heroLeftRef}
            className="relative w-full md:w-[55%] min-h-[260px] md:min-h-full overflow-hidden flex-shrink-0"
          >
            <img
              src="/images/hall1.png"
              alt="Yellow Pagoda Halls"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Right — dark green panel */}
          <div
            ref={heroRightRef}
            className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-14 lg:px-20 py-12 md:py-16"
            style={{ backgroundColor: "#3b4a3a" }}
          >
            <img
              src="/images/bg2.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
            />
            <div className="relative z-10 max-w-md">
              <p className="uppercase text-white/60 tracking-[0.25em] text-[10px] sm:text-xs mb-4 font-semibold">
                Halls Galore
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
              >
                Hall at Yellow Pagoda Pokhara Valley
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
                At Yellow Pagoda we have a galore of halls to suit your desire — for conducting
                conferences, seminars, parties, meetings and any get-together of your choice.
                Our spacious halls are well equipped with modern facilities, excellent lifts,
                and ample car and motorbike parking, with a capacity ranging from 50 to 500 pax.
              </p>
              <a
                href="/contact"
                className="inline-block border border-white/60 text-white text-xs tracking-[0.2em] uppercase px-7 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Information
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM — two-column hall cards ────────────────────── */}
        <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

            {packages.map((pkg, i) => (
              <div
                key={i}
                ref={i === 0 ? card0Ref : card1Ref}
                className="flex flex-col"
              >
                {/* Image */}
                <div className="w-full overflow-hidden  mb-6 md:mb-8" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.heading}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Label */}
                <p className="uppercase text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 font-semibold mb-3">
                  {pkg.label}
                </p>

                {/* Heading */}
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-snug mb-4"
                  style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
                >
                  {pkg.heading}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                  {pkg.desc}
                </p>

                {/* Capacity table */}
                <div className="mt-auto border-t border-gray-100 pt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Theatre</p>
                    <p className="text-sm font-semibold text-gray-700">{pkg.capacity.theatre}</p>
                  </div>
                  <div className="border-x border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">"U" Setup</p>
                    <p className="text-sm font-semibold text-gray-700">{pkg.capacity.u}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Round Table</p>
                    <p className="text-sm font-semibold text-gray-700">{pkg.capacity.roundTable}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>
    </>
  );
};

export default Hall;