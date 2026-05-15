import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Service3 = () => {
  const sectionRef  = useRef(null)
  const leftRef     = useRef(null)
  const centerRef   = useRef(null)
  const rightTopRef = useRef(null)
  const rightBotRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = 'power3.out'

      // Left panel — slide in from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease,
          scrollTrigger: { trigger: leftRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } }
      )

      // Center panel — fade up
      gsap.fromTo(centerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease, delay: 0.1,
          scrollTrigger: { trigger: centerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } }
      )

      // Right top — slide in from right
      gsap.fromTo(rightTopRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease, delay: 0.15,
          scrollTrigger: { trigger: rightTopRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } }
      )

      // Right bottom — fade up
      gsap.fromTo(rightBotRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease, delay: 0.2,
          scrollTrigger: { trigger: rightBotRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } }
      )

      // Ken Burns on the two photos
      ;[leftRef, rightTopRef].forEach((ref) => {
        const img = ref.current?.querySelector('img')
        if (!img) return
        gsap.fromTo(img,
          { scale: 1 },
          { scale: 1.06, duration: 8, ease: 'sine.inOut', repeat: -1, yoyo: true }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full overflow-x-hidden pb-24">
      {/* ── 3-column asymmetric grid ─────────────────────────────── */}
      <div className="flex flex-col md:flex-row w-full min-h-[420px] md:min-h-[560px] lg:min-h-[720px] overflow-x-hidden">

        {/* ── LEFT — tall photo with text overlay ──────────────── */}
        <div
          ref={leftRef}
          className="relative w-full md:w-[37%] min-h-[340px] md:min-h-full overflow-hidden flex-shrink-0"
        >
          <img
            src="/images/s1.jpeg"
            alt="Spa & Wellness"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 md:px-10 pb-8 md:pb-12">
            <p className="uppercase text-white/70 tracking-[0.12em] sm:tracking-[0.25em] text-[10px] sm:text-xs mb-3">
              Relax &amp; Restart
            </p>
            <h2
              className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-3 leading-tight"
           
            >
              Drinking &amp; Dinning
            </h2>
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-5 max-w-xs">
             Pokhara offers a vibrant dining scene with over 100 restaurants serving everything from regional flavors to Asian fusion and international cuisine. Whether you're exploring the town or staying in, enjoy handcrafted cocktails in our bar and garden area or savor our chefs’ signature creations in the dining room.

            </p>
            <a
              href="#"
              className="inline-block text-white text-xs tracking-widest uppercase border-b border-white/50 pb-0.5 hover:border-white transition-colors duration-300"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* ── CENTER + RIGHT column wrapper ────────────────────── */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row flex-1">

          {/* ── CENTER — green panel + image below ──────────────── */}
          <div className="flex flex-col flex-1">
          <div
            ref={centerRef}
            className="relative flex flex-col items-center justify-center px-8 sm:px-10 md:px-12 py-14 md:py-16 overflow-hidden"
            style={{ minHeight: '280px' }}
          >
            {/* Green bg image */}
            <img
              src="/images/bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* slight dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 text-center max-w-xs mx-auto">
              <p className="uppercase text-white/60 tracking-[0.12em] sm:tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                Explore the Valley
              </p>
              <h2
                className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-4 leading-tight"
               
              >
                Local Activities
              </h2>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6">
                Make the most of your time in Napa Valley with our collection of curated packages
                and experiences.
              </p>
              <a
                href="#"
                className="inline-block text-white text-xs tracking-widest uppercase border-b border-white/50 pb-0.5 hover:border-white transition-colors duration-300"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Image slot below Local Activities */}
          <div
            className="relative overflow-hidden"
            style={{ minHeight: '420px' }}
          >
            <img
              src="/images/cycling.jpg"
              alt="Local Activities scenery"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          </div>{/* end center column */}

          {/* ── RIGHT — stacked: photo top, green text bottom ──── */}
          <div className="flex flex-col flex-1 md:flex-row lg:flex-col">

            {/* Right top photo */}
            <div
              ref={rightTopRef}
              className="relative flex-1 overflow-hidden"
              style={{ minHeight: '200px' }}
            >
              <img
                src="/images/s6.jpg"
                alt="Local Activities"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right bottom — green textured panel */}
            <div
              ref={rightBotRef}
              className="relative flex flex-col items-center justify-center px-8 sm:px-10 py-12 md:py-14 overflow-hidden"
              style={{ minHeight: '220px' }}
            >
              <img
                src="/images/bg.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 text-center max-w-xs mx-auto">
                <p className="uppercase text-white/60 tracking-[0.12em] sm:tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                  Gastronomy
                </p>
                <h2
                  className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-4 leading-tight"
               
                >
                  Restaurants &amp; Bars
                </h2>
                <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6">
                  Our bars and restaurants cover a variety of culinary traditions, from fine and
                  imaginative cuisine to the exotic.
                </p>
                <a
                  href="#"
                  className="inline-block text-white text-xs tracking-widest uppercase border-b border-white/50 pb-0.5 hover:border-white transition-colors duration-300"
                >
                  Discover More
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Service3
