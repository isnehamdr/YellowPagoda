import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.hotelyellowpagoda.com";
const generateVerificationCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// ─── Contact Info Card ────────────────────────────────────────────────────────
const InfoCard = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center gap-3 p-8 transition-colors duration-500 group">
    <div className="w-12 h-12 flex items-center justify-center transition-colors duration-500">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h2 className="text-3xl uppercase tracking-wide font-medium mt-1">{title}</h2>
    <h2 className="text-lg text-center leading-relaxed">{detail}</h2>
  </div>
);

// ─── Form Field ───────────────────────────────────────────────────────────────
const Field = ({ label, type = "text", placeholder, value, onChange, name, rows }) => {
  const baseClass =
    "w-full bg-transparent border-b border-white/20 focus:border-amber-400/70 outline-none text-white/90 text-sm py-3 placeholder:text-white/30 transition-colors duration-300 resize-none";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
        {label}
      </label>
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClass}
        />
      )}
    </div>
  );
};

// ─── Main Contact Component ───────────────────────────────────────────────────
const Contact = () => {
  const sectionRef    = useRef(null);
  const subtitleRef   = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const infoRef       = useRef(null);
  const formRef       = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState(generateVerificationCode);
  const [enteredCode, setEnteredCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredCode.trim() !== verificationCode) {
      setVerificationError("The verification code is incorrect. Please enter the new code below.");
      setVerificationCode(generateVerificationCode());
      setEnteredCode("");
      return;
    }

    setVerificationError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setEnteredCode("");
    setVerificationCode(generateVerificationCode());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const refs = [subtitleRef, mainHeadingRef, subHeadingRef];
      if (refs.some((r) => !r.current)) return;

      const splitWords = (el) => {
        const words = el.innerText.split(" ");
        el.innerHTML = words
          .map((w) => `<span class="inline-block opacity-0 translate-y-4">${w}</span>`)
          .join(" ");
        return el.querySelectorAll("span");
      };

      const mainSpans = splitWords(mainHeadingRef.current);
      const subSpans  = splitWords(subHeadingRef.current);

      ScrollTrigger.getAll().forEach((t) => {
        if ([subtitleRef, mainHeadingRef, subHeadingRef].some((r) => t.vars.trigger === r.current)) {
          t.kill();
        }
      });

      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: subtitleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      if (mainSpans.length) {
        gsap.fromTo(mainSpans, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: mainHeadingRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }

      if (subSpans.length) {
        gsap.fromTo(subSpans, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.04, delay: 0.25, ease: "power3.out",
          scrollTrigger: { trigger: subHeadingRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const elements = [infoRef.current, formRef.current].filter(Boolean);
    if (!elements.length) return;
    elements.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, delay: i * 0.15, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
  }, []);

  return (
    <>
      {/* ================================================================
          SEO HEAD TAGS — Contact Page
          ================================================================ */}
      <Helmet>
        {/* ----- Primary ----- */}
        <title>Contact Us | Hotel Yellow Pagoda – Pokhara, Nepal</title>
        <meta
          name="description"
          content="Get in touch with Hotel Yellow Pagoda in Pokhara, Nepal. Call us, email us, or use our contact form for reservations, event enquiries, and general information."
        />
        <meta
          name="keywords"
          content="contact Hotel Yellow Pagoda, hotel phone Pokhara, hotel email Nepal, Pokhara hotel reservation enquiry, Yellow Pagoda address"
        />
        <meta name="robots" content="index, follow" />

        {/* ----- Canonical ----- */}
        <link rel="canonical" href={`${SITE_URL}/contact`} />

        {/* ----- Open Graph ----- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hotel Yellow Pagoda" />
        <meta
          property="og:title"
          content="Contact Us | Hotel Yellow Pagoda – Pokhara, Nepal"
        />
        <meta
          property="og:description"
          content="Reach Hotel Yellow Pagoda in Pokhara, Nepal. Call, email, or submit our contact form for reservations and event enquiries."
        />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/images/lobby.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hotel Yellow Pagoda lobby – Contact Us"
        />

        {/* ----- Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelYellowPagoda" />
        <meta
          name="twitter:title"
          content="Contact Us | Hotel Yellow Pagoda – Pokhara, Nepal"
        />
        <meta
          name="twitter:description"
          content="Reach Hotel Yellow Pagoda in Pokhara, Nepal. Call, email, or use our contact form for reservations and event enquiries."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/lobby.jpg`} />

        {/* ----- JSON-LD: ContactPage ----- */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Hotel Yellow Pagoda",
            "description": "Contact page for Hotel Yellow Pagoda – phone, email, address, and enquiry form.",
            "url": "${SITE_URL}/contact",
            "image": "${SITE_URL}/images/lobby.jpg",
            "mainEntity": {
              "@type": "Hotel",
              "name": "Hotel Yellow Pagoda",
              "url": "${SITE_URL}",
              "telephone": "+977-061-457991",
              "email": "info@yellowpagoda.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Damside RD",
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
        ref={sectionRef}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/lobby.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-20 md:py-32">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block w-10 sm:w-16 h-px" />
              <p
                ref={subtitleRef}
                className="uppercase text-[10px] sm:text-xs text-white font-semibold tracking-[0.3em]"
              >
                Stay in Touch
              </p>
            </div>

            <h2
              ref={mainHeadingRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-[0.05em] leading-none mb-8 md:mb-10"
            >
              Contact Us
            </h2>

            <h2
              ref={subHeadingRef}
              className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-widest leading-relaxed max-w-xl mx-auto"
            >
              For bookings and enquiries, please call us or write to us.
            </h2>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 md:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4">
            Yellow Pagoda, Pokhara
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-snug">
            Plan Your Stay With Us
          </h2>
          <p className="text-sm sm:text-base font-light leading-[1.85] max-w-2xl mx-auto">
            Interested in learning more about our hotel? Looking to plan a
            meeting, wedding, or event? We would love to show you the endless
            possibilities of Yellow Pagoda. Use the contact information or form
            below and we will get back to you as soon as possible.
          </p>
        </div>

        {/* INFO CARDS */}
        <section ref={infoRef} className="px-5 sm:px-8 md:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-black">
            <InfoCard icon="/images/call.png"     title="Call Us"  detail="+977 061-457991" />
            <InfoCard icon="/images/location.png" title="Address"  detail="Damside RD, Pokhara, Nepal" />
            <InfoCard icon="/images/mail.png"     title="Email Us" detail="info@yellowpagoda.com" />
          </div>
        </section>
      </section>

      {/* FORM + IMAGE */}
      <section>
        <div className="grid grid-cols-1 min-h-[580px] lg:min-h-[760px] lg:grid-cols-2 lg:items-stretch">
          {/* Left — image */}
          <div className="relative hidden w-full overflow-hidden lg:block lg:min-h-[760px]">
            <img
              src="/images/lobby.jpg"
              alt="Hotel Yellow Pagoda lobby"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-amber-900/10" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/80 text-sm font-light tracking-wide">Yellow Pagoda Hotel</p>
              <p className="text-white/40 text-xs tracking-widest uppercase">Pokhara, Nepal</p>
            </div>
          </div>

          {/* Right — form */}
          <div
            ref={formRef}
            className="flex min-h-[580px] flex-col justify-center bg-[#0c0c0a] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[760px] lg:px-14 lg:py-20"
          >
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white mb-3">Get In Touch</p>
              <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
                Send Us a Message
              </h2>
            </div>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 py-16 border border-amber-400/20 text-center px-8">
                <p className="text-white/80 text-base font-light tracking-wide">
                  Thank you for reaching out.
                </p>
                <p className="text-white/40 text-sm">We'll be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field label="Your Name"  name="name"  placeholder="Ram Bahadur"           value={formData.name}    onChange={handleChange} />
                  <Field label="Your Email" type="email" name="email" placeholder="ram@example.com" value={formData.email}   onChange={handleChange} />
                </div>
                <Field label="Subject" name="subject" placeholder="Room booking, event enquiry…" value={formData.subject} onChange={handleChange} />
                <Field
                  label="Your Message"
                  name="message"
                  placeholder="Tell us about your plans and we'll make it unforgettable…"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
                <div className="flex flex-col gap-4 border border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                      6-Digit Verification Code
                    </p>
                    <p className="text-2xl font-semibold tracking-[0.35em] text-white">
                      {verificationCode}
                    </p>
                    {/* <p className="text-xs text-white/45">
                      This code regenerates whenever the page reloads and after each failed or successful submission.
                    </p> */}
                  </div>

                  <Field
                    label="Enter Verification Code"
                    name="enteredCode"
                    placeholder="Type the 6-digit code"
                    value={enteredCode}
                    onChange={(e) => {
                      setEnteredCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                      setVerificationError("");
                    }}
                  />

                  {verificationError ? (
                    <p className="text-sm text-red-300">{verificationError}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="self-start mt-2 px-10 py-3.5 border border-white text-white text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-amber-400/10 active:scale-[0.98] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
