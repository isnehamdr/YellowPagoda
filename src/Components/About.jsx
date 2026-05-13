import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const textSectionRef = useRef(null)
    const welcomeTextRef = useRef(null)
    const headingRef = useRef(null)
    const descriptionRef = useRef(null)
    const buttonRef = useRef(null)
    const leftColumnRef = useRef(null)
    const middleColumnRef = useRef(null)
    const rightColumnRef = useRef(null)
    const leftImagesRef = useRef([])
    const rightImagesRef = useRef([])
    const captionsRef = useRef([])
    const middleLineTopRef = useRef(null)
    const middleLineBottomRef = useRef(null)
    const middleTextRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Fade in animations for text section ──
            gsap.from(welcomeTextRef.current, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out"
            })

            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out"
            })

            gsap.from(descriptionRef.current, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            })

            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.6,
                delay: 0.6,
                ease: "back.out(0.8)"
            })

            // ── Left Column Animations ──
            gsap.from(leftColumnRef.current, {
                scrollTrigger: {
                    trigger: leftColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -60,
                duration: 1,
                ease: "power3.out"
            })

            // ── Right Column Animations ──
            gsap.from(rightColumnRef.current, {
                scrollTrigger: {
                    trigger: rightColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: 60,
                duration: 1,
                ease: "power3.out"
            })

            // ── Middle Column Animations ──
            gsap.from(middleColumnRef.current, {
                scrollTrigger: {
                    trigger: middleColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power3.out"
            })

            // ── Middle Line Animations (Top and Bottom) ──
            gsap.from(middleLineTopRef.current, {
                scrollTrigger: {
                    trigger: middleColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                scaleY: 0,
                transformOrigin: "top center",
                duration: 1.2,
                ease: "power2.inOut"
            })

            gsap.from(middleLineBottomRef.current, {
                scrollTrigger: {
                    trigger: middleColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                scaleY: 0,
                transformOrigin: "top center",
                duration: 1.2,
                delay: 0.3,
                ease: "power2.inOut"
            })

            // ── Middle Text Animation ──
            gsap.from(middleTextRef.current, {
                scrollTrigger: {
                    trigger: middleColumnRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                rotationX: -15,
                duration: 0.8,
                delay: 0.2,
                ease: "back.out(1)"
            })

            // ── Left Images Animations with Stagger ──
            leftImagesRef.current.forEach((img, index) => {
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 90%",
                        end: "bottom 70%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "power3.out"
                })
            })

            // ── Right Images Animations with Stagger ──
            rightImagesRef.current.forEach((img, index) => {
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 90%",
                        end: "bottom 70%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    ease: "power3.out"
                })
            })

            // ── Captions Animations ──
            captionsRef.current.forEach((caption, index) => {
                gsap.from(caption, {
                    scrollTrigger: {
                        trigger: caption,
                        start: "top 95%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    x: -10,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out"
                })
            })

            // ── Parallax Effect on Scroll for Images ──
            const allImages = [...leftImagesRef.current, ...rightImagesRef.current]
            allImages.forEach(img => {
                if (img) {
                    gsap.to(img, {
                        yPercent: -8,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                            invalidateOnRefresh: true
                        }
                    })
                }
            })

            // ── Subtle Parallax for the whole section ──
            gsap.to(textSectionRef.current, {
                yPercent: -5,
                opacity: 0.95,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: 0.8
                }
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className='overflow-hidden'>
            <div ref={textSectionRef} className="max-w-5xl mx-auto px-4 text-center space-y-6 py-24">
                <p ref={welcomeTextRef} className='font-medium tracking-[1px] uppercase text-sm'>Welcome to Hotel Yellow Pagoda </p>
                <h1 ref={headingRef} className='text-3xl sm:text-5xl text-[#1a1b1a] sm:leading-[65px]'>Exceptional Chalets, tailored services and the experience of unique holidays</h1>
                <p ref={descriptionRef} className='text-[#333632] leading-[30px] mb-12 text-[18px]'>We are located in the heart of the city of Pokhara minutes walk to the Lakeside, where
                    every corner is a showpiece of Nepali natural history and culture. Morover the modern global
                    backpacking travelers most preferred hub in Pokhara-Lakeside is also just a few minutes walk from
                    our hotel.</p>

                <Link ref={buttonRef} to="/rooms" className='inline-block py-4 px-10 bg-[#1a1b1a] text-white hover:bg-[#ba9d75] border border-[#1a1b1a] hover:border-white transition-all duration-300'>Explore Our Story</Link>
            </div>

            <div className="px-4 md:px-24 py-8">
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left Column */}
                    <div ref={leftColumnRef} className="flex flex-col w-full md:w-1/3 mb-8 md:mb-0">
                        <img
                            ref={el => leftImagesRef.current[0] = el}
                            src="/images/swimming.jpg"
                            alt="Left Image"
                            className="w-full h-[40vh] md:h-[80vh] object-cover"
                        />
                        <p ref={el => captionsRef.current[0] = el} className="mt-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#b99d75] before:rounded-full">
                            Roof top Swimming Pool
                        </p>
                        <div className="mt-8 md:mt-24 w-full md:ms-[160px]">
                            <img
                                ref={el => leftImagesRef.current[1] = el}
                                src="images/restro.jpg"
                                alt="Bottom Left Image"
                                className="w-full h-[40vh] md:h-[80vh] object-cover"
                            />
                            <p ref={el => captionsRef.current[1] = el} className="mt-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#b99d75] before:rounded-full">
                                Restaurant & Bar
                            </p>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div ref={middleColumnRef} className="relative flex flex-col items-center w-full md:w-1/3 px-0 md:px-4 my-8 md:my-0">
                        <div ref={middleLineTopRef} className="hidden md:block w-px h-[60vh] bg-[#b99d75] mb-4"></div>

                        <div ref={middleTextRef} className="py-4 md:py-8 px-4 text-center">
                            <h2 className="text-2xl md:text-[32px] text-[#1a1b1a]">
                               Experience the epitome of luxury
                            </h2>
                        </div>

                        <div ref={middleLineBottomRef} className="hidden md:block w-px h-[90vh] bg-[#b99d75] mt-4"></div>
                    </div>

                    {/* Right Column */}
                    <div ref={rightColumnRef} className="flex flex-col items-center w-full md:w-1/3 mt-0 md:mt-36">
                        <div className="w-full">
                            <img
                                ref={el => rightImagesRef.current[0] = el}
                                src="images/bed.jpg"
                                alt="Right Top Image"
                                className="w-full h-[40vh] md:h-[80vh] object-cover"
                            />
                            <p ref={el => captionsRef.current[2] = el} className="mt-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#b99d75] before:rounded-full">
                                Top notch facilities and services
                            </p>

                            <div className="mt-8 md:mt-24 md:-ml-[160px]">
                                <img
                                    ref={el => rightImagesRef.current[1] = el}
                                    src="images/hall.jpg"
                                    alt="Bottom Left Image"
                                    className="w-full h-[40vh] md:h-[55vh] object-cover"
                                />
                                <p ref={el => captionsRef.current[3] = el} className="mt-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#b99d75] before:rounded-full">
                                    Meetings & Conferences
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About