import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  {
    id: 1,
    label: 'Adventure',
    title: 'Bungee Jump\nin Pokhara',
    description:
      "Pokhara's tower bungee at Hemja delivers a high-adrenaline drop with sweeping views of the surrounding hills. Located about 20 minutes from Lakeside, it is known as Nepal's only tower bungee and is a favorite for thrill seekers.",
    imageAlt: 'Bungee Jump in Pokhara',
    imageOverlayLabel: 'ADVENTURE',
    imageOverlayTitle: 'Bungee Jump',
    imageSrc: '/images/bunjee_jump.jpg',
    imageLeft: true,
  },
  {
    id: 2,
    label: 'Leisure',
    title: 'Boating on\nPhewa Lake',
    description:
      "Boating on Phewa Lake is one of Pokhara's signature experiences, with calm water, colorful wooden boats, and clear reflections of the Annapurna range. It is also the classic way to reach the island temple of Tal Barahi.",
    imageAlt: 'Boating on Phewa Lake',
    imageOverlayLabel: 'LEISURE',
    imageOverlayTitle: 'Boating',
    imageSrc: '/images/boating.jpg',
    imageLeft: false,
  },
  {
    id: 3,
    label: 'Spiritual',
    title: 'Bindabasini\nTemple',
    description:
      "Bindabasini Temple is one of Pokhara's best-known Hindu shrines, dedicated to Goddess Durga and set in the old town area. Visitors come for its peaceful atmosphere, religious importance, and beautiful hilltop views of the city and mountains.",
    imageAlt: 'Bindabasini Temple',
    imageOverlayLabel: 'SPIRITUAL',
    imageOverlayTitle: 'Bindabasini Temple',
    imageSrc: '/images/bindabasini.jpg',
    imageLeft: true,
  },
  {
    id: 4,
    label: 'Culture',
    title: 'Old\nBazaar',
    description:
      "Pokhara's Old Bazaar reflects the city's trading history and traditional character, with busy local shops, heritage streets, and everyday market life. It pairs especially well with a visit to nearby Bindabasini for a more cultural side of the city.",
    imageAlt: 'Pokhara Old Bazaar',
    imageOverlayLabel: 'CULTURE',
    imageOverlayTitle: 'Old Bazaar',
    imageSrc: '/images/bazar.jpg',
    imageLeft: false,
  },
  {
    id: 5,
    label: 'Heritage',
    title: 'Tal Barahi\nTemple',
    description:
      "Tal Barahi Temple stands on a small island in the middle of Phewa Lake and is one of Pokhara's most important religious landmarks. This two-storied pagoda temple is reached by boat, making the visit both scenic and spiritually memorable.",
    imageAlt: 'Tal Barahi Temple',
    imageOverlayLabel: 'HERITAGE',
    imageOverlayTitle: 'Tal Barahi Temple',
    imageSrc: '/images/barahi.jpg',
    imageLeft: true,
  },
]

// ─── Single card ─────────────────────────────────────────────────────────────
const ActivityCard = ({ activity }) => {
  const cardRef  = useRef(null)
  const imageRef = useRef(null)
  const textRef  = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const descRef  = useRef(null)

  useEffect(() => {
    // gsap.context scoped to this card — reverts only its own ScrollTriggers
    const ctx = gsap.context(() => {

      const sharedTrigger = {
        trigger: cardRef.current,
        start: 'top 82%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
      }

      // Image slides in from its natural side + slight scale
      gsap.fromTo(
        imageRef.current,
        { x: activity.imageLeft ? -80 : 80, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: sharedTrigger }
      )

      // Text column slides in from opposite side
      gsap.fromTo(
        textRef.current,
        { x: activity.imageLeft ? 80 : -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.15, scrollTrigger: sharedTrigger }
      )

      // Label → title → description stagger within the text block
      gsap.fromTo(
        [labelRef.current, titleRef.current, descRef.current],
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.13,
          delay: 0.3,
          scrollTrigger: sharedTrigger,
        }
      )

      // Gentle parallax on image while page scrolls
      gsap.to(imageRef.current, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

    }, cardRef) // ← scoped: only kills triggers registered inside this context

    return () => ctx.revert()
  }, [activity.imageLeft])

  // ── Image block ─────────────────────────────────────────────────────────
  const ImageBlock = () => (
    <div ref={imageRef} className="relative w-full md:w-[52%] flex-shrink-0">
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[420px] group">

        {/* Decorative gold border frame */}
        <div className="absolute inset-4 border-2 border-[#ba9d75] z-10 pointer-events-none" />

        <div className="overflow-hidden w-full h-full">
          <img
            src={activity.imageSrc}
            alt={activity.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

        {/* Bottom overlay text */}
        <div className="absolute bottom-5 left-5 z-20">
          <p className="text-white text-[10px] tracking-[0.22em] uppercase font-semibold mb-1 opacity-75">
            {activity.imageOverlayLabel}
          </p>
          <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
            {activity.imageOverlayTitle}
          </h3>
        </div>
      </div>
    </div>
  )

  // ── Text block ──────────────────────────────────────────────────────────
  const TextBlock = () => (
    <div
      ref={textRef}
      className={`flex-1 flex flex-col justify-center py-8 md:py-0 ${
        activity.imageLeft
          ? 'md:pl-14 lg:pl-20 text-left'
          : 'md:pr-14 lg:pr-20 text-left md:text-right'
      }`}
    >
      <p ref={labelRef} className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-400 mb-3">
        {activity.label}
      </p>

      <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-snug mb-5 lg:whitespace-pre-line">
        {activity.title}
      </h2>

      <p
        ref={descRef}
        className={`text-sm text-gray-500 leading-relaxed mb-6 max-w-sm ${
          activity.imageLeft ? '' : 'md:ml-auto'
        }`}
      >
        {activity.description}
      </p>
    </div>
  )

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        activity.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-0 md:gap-8 mb-12 md:mb-24`}
    >
      <ImageBlock />
      <TextBlock />
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
const Activities2 = ({ labelRef, headingRef, subTextRef }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header trio fades + rises on scroll into view
      const els = [labelRef?.current, headingRef?.current, subTextRef?.current].filter(Boolean)
      if (els.length) {
        gsap.fromTo(
          els,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [labelRef, headingRef, subTextRef])

  return (
    <section ref={sectionRef} className="py-24 bg-white">

      {/* Intro Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
        <p
          ref={labelRef}
          className="uppercase text-xs tracking-[0.25em] text-gray-700 font-semibold mb-4"
        >
          Introducing Our Services &amp; Facilities
        </p>

        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
        >
          All you need to know to
          <br className="hidden sm:block" />
          ensure your trip is perfect.
        </h2>

        <p
          ref={subTextRef}
          className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          State-of-the-art amenities include a dramatic double-story loft lounge,
          spectacular rooftop lounge, Technogym fitness center, media corner, and
          a gracious 24/7 resident services team.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="px-4 sm:px-6 lg:px-24">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>

    </section>
  )
}

export default Activities2