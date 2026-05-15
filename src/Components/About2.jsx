// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import React, { useState, useRef, useEffect, useCallback } from 'react'

// const images = [
//   { src: '/images/hall.jpg', alt: 'Hotel hall' },
//   { src: '/images/cycling.jpg', alt: 'Cycling activity' },
//   { src: '/images/lobby.jpg', alt: 'Hotel lobby' },
//   { src: '/images/restro.jpg', alt: 'Restaurant' },
//   { src: '/images/swimming.jpg', alt: 'Swimming pool' },
//   { src: '/images/service.jpg', alt: 'Service area' },
// ]

// // extended: [last, ...all, first]
// const extended = [images[images.length - 1], ...images, images[0]]

// const About2 = () => {
//   const [cur, setCur] = useState(1) // 1 = first real slide
//   const [animated, setAnimated] = useState(true)
//   const outerRef = useRef(null)
//   const trackRef = useRef(null)

//   const peek = () => {
//     const w = outerRef.current?.offsetWidth ?? 700
//     return w < 500 ? w * 0.12 : w * 0.17
//   }

//   const slideW = () => (outerRef.current?.offsetWidth ?? 700) - peek() * 2

//   const applyLayout = useCallback((index, anim) => {
//     const track = trackRef.current
//     const outer = outerRef.current
//     if (!track || !outer) return
//     const sw = slideW()
//     track.querySelectorAll('.c-slide').forEach(s => { s.style.width = `${sw}px` })
//     track.style.transition = anim ? 'transform 0.5s cubic-bezier(.4,0,.2,1)' : 'none'
//     track.style.transform = `translateX(${-(index * sw - peek())}px)`
//   }, [])

//   useEffect(() => {
//     applyLayout(cur, animated)
//   }, [cur, animated, applyLayout])

//   useEffect(() => {
//     const handleResize = () => applyLayout(cur, false)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [cur, applyLayout])

//   const handleTransitionEnd = () => {
//     if (cur === 0) { 
//       setAnimated(false)
//       setCur(images.length)
//     } else if (cur === images.length + 1) { 
//       setAnimated(false)
//       setCur(1)
//     } else {
//       setAnimated(true)
//     }
//   }

//   const goTo = (idx) => { 
//     setAnimated(true)
//     setCur(idx)
//   }

//   // real dot index (cur is 1-based in extended)
//   const realIdx = cur === 0 ? images.length - 1 : cur === images.length + 1 ? 0 : cur - 1

//   return (
//     <div className="py-24 relative">
//       <p className="uppercase text-sm text-gray-500 text-center font-semibold tracking-widest mb-6">
//         Welcome to Hotel Yellow Pagoda
//       </p>
//       <h2 className="text-center text-3xl md:text-5xl font-medium leading-relaced max-w-4xl mx-auto mb-6 px-4">
//         Exceptional Chalets, tailored services and the experience of unique holidays
//       </h2>
//       <p className="text-center text-md text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed px-4">
//         We are located in the heart of the city of Pokhara.-minutes' walk to the Lakeside, where
//                     every corner is a showpiece of Nepali natural history and culture. Morover the modern global
//                     backpacking travelers most preferred hub in Pokhara-'Lakeside' is also just a few minutes' walk from
//                     our hotel.Not to be outdone, our location is surrounded by Casinos, world class restaurants, branded
//                     shops and the sights and sounds of the modern world and the ancient bazaars from this part of the
//                     world.
//                     "The Yellow Pagoda"-is a name that reflects hospitality, unique friendly service and comfort
//                     comparable to the best.
//       </p>

//       {/* Image Slider with buttons on sides */}
//       <div className="relative max-w-7xl mx-auto">
//         {/* Previous Button - Left side */}
//         <button 
//           onClick={() => goTo(cur - 1)}
//           className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
//           aria-label="Previous"
//         >
//          <ChevronLeft size={16} className="md:w-5 md:h-5" />
//         </button>

//         {/* Slider Container */}
//         <div ref={outerRef} className="overflow-hidden">
//           <div ref={trackRef} className="flex" onTransitionEnd={handleTransitionEnd}>
//             {extended.map((img, i) => (
//               <div key={i} className="c-slide flex-shrink-0 px-1 md:px-2 box-border">
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-64 md:h-[580px] object-cover "
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Next Button - Right side */}
//         <button 
//           onClick={() => goTo(cur + 1)}
//           className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
//           aria-label="Next"
//         >
//          <ChevronRight size={16} className="md:w-5 md:h-5" />
//         </button>
//       </div>

//       {/* Dot Indicators */}
//       {/* <div className="flex items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
//         <div className="flex gap-1.5 md:gap-2 items-center">
//           {images.map((_, i) => (
//             <button 
//               key={i} 
//               onClick={() => goTo(i + 1)}
//               className="h-1.5 md:h-2 rounded-full border-none cursor-pointer transition-all duration-200"
//               style={{ 
//                 width: i === realIdx ? '16px md:22px' : '6px md:8px', 
//                 background: i === realIdx ? '#1f2937' : '#d1d5db' 
//               }}
//               aria-label={`Slide ${i + 1}`} 
//             />
//           ))}
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default About2

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/images/hall.jpg', alt: 'Hotel hall' },
  { src: '/images/cycling.jpg', alt: 'Cycling activity' },
  { src: '/images/lobby.jpg', alt: 'Hotel lobby' },
  { src: '/images/restro.jpg', alt: 'Restaurant' },
  { src: '/images/swimming.jpg', alt: 'Swimming pool' },
  { src: '/images/service.jpg', alt: 'Service area' },
]

// extended: [last, ...all, first]
const extended = [images[images.length - 1], ...images, images[0]]

// Duration (ms) each slide is shown before auto-advancing
const AUTO_INTERVAL = 6000
// Ken Burns zoom target scale
const KB_SCALE = 1.18

const About2 = () => {
  const [cur, setCur] = useState(1) // 1 = first real slide
  const [animated, setAnimated] = useState(true)
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const descRef = useRef(null)

  // Per-slide Ken Burns GSAP tweens — keyed by slide DOM index
  const kbTweens = useRef({})
  // Auto-scroll timer
  const autoTimer = useRef(null)
  // Track whether we are mid-jump (no animation snap)
  const isJumping = useRef(false)

  // ─── Layout helpers ───────────────────────────────────────────────

  const peek = () => {
    const w = outerRef.current?.offsetWidth ?? 700
    return w < 500 ? w * 0.12 : w * 0.17
  }

  const slideW = () => (outerRef.current?.offsetWidth ?? 700) - peek() * 2

  const applyLayout = useCallback((index, anim) => {
    const track = trackRef.current
    const outer = outerRef.current
    if (!track || !outer) return
    const sw = slideW()
    track.querySelectorAll('.c-slide').forEach(s => { s.style.width = `${sw}px` })
    track.style.transition = anim ? 'transform 0.5s cubic-bezier(.4,0,.2,1)' : 'none'
    track.style.transform = `translateX(${-(index * sw - peek())}px)`
  }, [])

  useEffect(() => {
    applyLayout(cur, animated)
  }, [cur, animated, applyLayout])

  useEffect(() => {
    const handleResize = () => applyLayout(cur, false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [cur, applyLayout])

  // ─── Ken Burns helpers ────────────────────────────────────────────

  /**
   * Start Ken Burns on the slide at position `slideIndex` in the extended array.
   * We always reset first, then animate over AUTO_INTERVAL ms.
   */
  const startKB = useCallback((slideIndex) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.querySelectorAll('.c-slide img')
    const img = slides[slideIndex]
    if (!img) return

    // Kill any existing tween on this img
    if (kbTweens.current[slideIndex]) {
      kbTweens.current[slideIndex].kill()
    }

    // Reset immediately to scale 1, centred
    gsap.set(img, { scale: 1, xPercent: 0, yPercent: 0, transformOrigin: '50% 50%' })

    // Vary the origin slightly per slide for visual interest
    const origins = ['50% 50%', '60% 40%', '40% 60%', '55% 45%', '45% 55%', '50% 60%', '50% 40%']
    const origin = origins[slideIndex % origins.length]

    kbTweens.current[slideIndex] = gsap.to(img, {
      scale: KB_SCALE,
      transformOrigin: origin,
      duration: AUTO_INTERVAL / 1000 + 0.5, // slightly longer than interval so it doesn't stutter
      ease: 'sine.inOut',
    })
  }, [])

  const stopKB = useCallback((slideIndex) => {
    if (kbTweens.current[slideIndex]) {
      kbTweens.current[slideIndex].kill()
      const track = trackRef.current
      if (!track) return
      const slides = track.querySelectorAll('.c-slide img')
      const img = slides[slideIndex]
      if (img) gsap.set(img, { scale: 1 })
    }
  }, [])

  // ─── Auto-scroll ──────────────────────────────────────────────────

  const scheduleAuto = useCallback(() => {
    clearInterval(autoTimer.current)
    autoTimer.current = setInterval(() => {
      setCur(prev => {
        setAnimated(true)
        return prev + 1
      })
    }, AUTO_INTERVAL)
  }, [])

  // ─── Slide change side-effects ────────────────────────────────────

  // When `cur` changes, fire KB on the new active slide
  useEffect(() => {
    if (isJumping.current) return // skip during snap-jump
    startKB(cur)
    // Stop KB on neighbours to save GPU
    stopKB(cur - 1)
    stopKB(cur + 1)
  }, [cur, startKB, stopKB])

  // ─── Transition end ───────────────────────────────────────────────

  const handleTransitionEnd = () => {
    if (cur === 0) {
      isJumping.current = true
      setAnimated(false)
      setCur(images.length)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false
          startKB(images.length)
        })
      })
    } else if (cur === images.length + 1) {
      isJumping.current = true
      setAnimated(false)
      setCur(1)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false
          startKB(1)
        })
      })
    } else {
      setAnimated(true)
    }
  }

  const goTo = (idx) => {
    clearInterval(autoTimer.current)
    setAnimated(true)
    setCur(idx)
    scheduleAuto()
  }

  // ─── Scroll-triggered entrance animations ────────────────────────

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up for text elements
      gsap.fromTo(
        [headingRef.current, subRef.current, descRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Slide in the carousel
      gsap.fromTo(
        outerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: outerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ─── Bootstrap ────────────────────────────────────────────────────

  useEffect(() => {
    // Start KB on initial slide
    startKB(cur)
    // Start auto-scroll
    scheduleAuto()

    return () => {
      clearInterval(autoTimer.current)
      Object.values(kbTweens.current).forEach(t => t?.kill())
    }
  }, []) // intentionally empty — runs once on mount

  // real dot index (cur is 1-based in extended)
  const realIdx = cur === 0 ? images.length - 1 : cur === images.length + 1 ? 0 : cur - 1

  return (
    <div ref={sectionRef} className="py-24 relative">
      <p
        ref={subRef}
        className="uppercase text-sm text-gray-500 text-center font-semibold tracking-widest mb-6"
      >
        Welcome to Hotel Yellow Pagoda
      </p>
      <h2
        ref={headingRef}
        className="text-center text-3xl md:text-5xl font-medium max-w-4xl mx-auto mb-6 px-4"
      >
        Exceptional Chalets, tailored services and the experience of unique holidays
      </h2>
      <p
        ref={descRef}
        className="text-center text-md text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed px-4"
      >
        We are located in the heart of the city of Pokhara—minutes' walk to the Lakeside, where
        every corner is a showpiece of Nepali natural history and culture. Moreover the modern global
        backpacking travelers most preferred hub in Pokhara—'Lakeside' is also just a few minutes'
        walk from our hotel. Not to be outdone, our location is surrounded by Casinos, world class
        restaurants, branded shops and the sights and sounds of the modern world and the ancient
        bazaars from this part of the world. "The Yellow Pagoda"—is a name that reflects
        hospitality, unique friendly service and comfort comparable to the best.
      </p>

      {/* Image Slider with buttons on sides */}
      <div className="relative max-w-7xl mx-auto">
        {/* Previous Button */}
        <button
          onClick={() => goTo(cur - 1)}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft size={16} className="md:w-5 md:h-5" />
        </button>

        {/* Slider Container */}
        <div ref={outerRef} className="overflow-hidden">
          <div ref={trackRef} className="flex" onTransitionEnd={handleTransitionEnd}>
            {extended.map((img, i) => (
              <div key={i} className="c-slide flex-shrink-0 px-1 md:px-2 box-border">
                {/* overflow-hidden on the wrapper clips the Ken Burns zoom */}
                <div className="overflow-hidden w-full h-56 sm:h-72 md:h-[580px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover will-change-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => goTo(cur + 1)}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
        <div className="flex gap-1.5 md:gap-2 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i + 1)}
              className="h-1.5 md:h-2 rounded-full border-none cursor-pointer transition-all duration-300"
              style={{
                width: i === realIdx ? '22px' : '8px',
                background: i === realIdx ? '#1f2937' : '#d1d5db',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About2