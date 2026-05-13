import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useRef, useEffect, useCallback } from 'react'

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

const About2 = () => {
  const [cur, setCur] = useState(1) // 1 = first real slide
  const [animated, setAnimated] = useState(true)
  const outerRef = useRef(null)
  const trackRef = useRef(null)

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

  const handleTransitionEnd = () => {
    if (cur === 0) { 
      setAnimated(false)
      setCur(images.length)
    } else if (cur === images.length + 1) { 
      setAnimated(false)
      setCur(1)
    } else {
      setAnimated(true)
    }
  }

  const goTo = (idx) => { 
    setAnimated(true)
    setCur(idx)
  }

  // real dot index (cur is 1-based in extended)
  const realIdx = cur === 0 ? images.length - 1 : cur === images.length + 1 ? 0 : cur - 1

  return (
    <div className="py-24 relative">
      <p className="uppercase text-sm text-gray-500 text-center font-semibold tracking-widest mb-6">
        Welcome to Hotel Yellow Pagoda
      </p>
      <h2 className="text-center text-3xl md:text-5xl font-medium leading-relaced max-w-4xl mx-auto mb-6 px-4">
        Exceptional Chalets, tailored services and the experience of unique holidays
      </h2>
      <p className="text-center text-md text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed px-4">
        We are located in the heart of the city of Pokhara.-minutes' walk to the Lakeside, where
                    every corner is a showpiece of Nepali natural history and culture. Morover the modern global
                    backpacking travelers most preferred hub in Pokhara-'Lakeside' is also just a few minutes' walk from
                    our hotel.Not to be outdone, our location is surrounded by Casinos, world class restaurants, branded
                    shops and the sights and sounds of the modern world and the ancient bazaars from this part of the
                    world.
                    "The Yellow Pagoda"-is a name that reflects hospitality, unique friendly service and comfort
                    comparable to the best.
      </p>

      {/* Image Slider with buttons on sides */}
      <div className="relative max-w-7xl mx-auto">
        {/* Previous Button - Left side */}
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
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-[580px] object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button - Right side */}
        <button 
          onClick={() => goTo(cur + 1)}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
         <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      {/* <div className="flex items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
        <div className="flex gap-1.5 md:gap-2 items-center">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => goTo(i + 1)}
              className="h-1.5 md:h-2 rounded-full border-none cursor-pointer transition-all duration-200"
              style={{ 
                width: i === realIdx ? '16px md:22px' : '6px md:8px', 
                background: i === realIdx ? '#1f2937' : '#d1d5db' 
              }}
              aria-label={`Slide ${i + 1}`} 
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default About2