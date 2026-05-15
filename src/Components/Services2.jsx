import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: '/images/icons/car.png',
    title: 'Airport Pick-up Service',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
  {
    icon: '/images/icons/house-keeping.png',
    title: 'Housekeeper Services',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
  {
    icon: '/images/icons/wifi.png',
    title: 'Wifi & Internet',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
  {
    icon: '/images/icons/machine.png',
    title: 'Laundry Services',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
  {
    icon: '/images/icons/bed.png',
    title: 'Breakfast in Bed',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
  {
    icon: '/images/icons/swim.png',
    title: 'Swimming Pool',
    desc: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.',
  },
]

const Services2 = () => {
  const sectionRef   = useRef(null)
  const labelRef     = useRef(null)
  const headingRef   = useRef(null)
  const subTextRef   = useRef(null)
  const cardsRef     = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header stagger ───────────────────────────────────────────
      gsap.fromTo(
        [labelRef.current, headingRef.current, subTextRef.current],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── Cards stagger ────────────────────────────────────────────
      const cards = cardsRef.current.filter(Boolean)
      gsap.fromTo(
        cards,
        { opacity: 0, y: 48, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full overflow-x-hidden bg-white py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <p
          ref={labelRef}
          className="uppercase text-xs tracking-[0.12em] sm:tracking-[0.25em] text-gray-700 font-semibold mb-4"
        >
          Introducing Our Services &amp; Facilities
        </p>

        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
         
        >
          All you need to know to<br className="hidden sm:block" /> ensure your trip is perfect.
        </h2>

        <p
          ref={subTextRef}
          className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          State-of-the-art amenities include a dramatic double-story loft lounge, spectacular rooftop
          lounge, Technogym fitness center, media corner, and a gracious 24/7 resident services team.
        </p>
      </div>

      {/* ── Divider ────────────────────────────────────────────────── */}
      {/* <div className="w-16 h-px bg-gray-200 mx-auto mb-12 md:mb-16" /> */}

      {/* ── Service Cards Grid ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4  border border-gray-100 rounded-sm overflow-hidden">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#f8f8f8] flex flex-col items-center text-center px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 hover:bg-gray-50 transition-colors duration-300 group"
          >
            {/* Icon container */}
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 md:mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'white' }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-7 h-7 sm:w-12 sm:h-12 object-contain text-[#826f36]"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 md:mb-3 leading-snug">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services2
