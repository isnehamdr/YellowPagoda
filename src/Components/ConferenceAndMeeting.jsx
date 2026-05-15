import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConferenceAndMeeting = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = sectionRef.current?.children;

      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 sm:px-8 md:px-12 py-16 md:py-24">
      <div ref={sectionRef} className="max-w-4xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-[2px] uppercase mb-4">
          Conference & Meeting
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-snug md:leading-relaxed mb-6"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Elegant Spaces for Meetings & Events
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Whether you're planning a corporate meeting, private gathering,
          workshop, or special event, our conference spaces provide a refined
          and comfortable atmosphere with modern facilities, personalized
          service, and a professional setting designed to make every occasion
          successful and memorable.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gray-300 mx-auto mt-10" />

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 mt-10">

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{ borderColor: '#c9a96e' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-1">
                Call Us For A Quote
              </p>
              <a
                href="tel:+977061457991"
                className="text-2xl sm:text-3xl text-gray-800 hover:text-[#c9a96e] transition-colors duration-300"
                style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
              >
             +977 061-457991
              </a>
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden sm:block w-px h-14 bg-gray-300 mx-12" />

          {/* Email */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{ borderColor: '#c9a96e' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-1">
                Email Us For A Quote
              </p>
              <a
                href="mailto:info@yellowpagoda.com"
                className="text-xl sm:text-2xl text-gray-800 hover:text-[#c9a96e] transition-colors duration-300"
                style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
              >
                info@yellowpagoda.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConferenceAndMeeting;