import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Activities = () => {
    const sectionRef = useRef(null)
    const leftImageRef = useRef(null)
    const textSectionRef = useRef(null)
    const subtitleRef = useRef(null)
    const headingRef = useRef(null)
    const descriptionRef = useRef(null)
    const galleryRef = useRef([])
    const galleryCaptionsRef = useRef([])
    const bottomImageRef = useRef(null)

    const galleryImages = [
        { src: "images/pkr-4.jpg", title: "Paragliding " },
        { src: "images/boating.jpg", title: "Boating" },
        { src: "images/cycling.jpg", title: "Cycling" },
        { src: "images/ultralight_flight.jpg", title: "Ultralight Flight" }
    ];

    useEffect(() => {
        // Check if screen is mobile (768px or less)
        const isMobile = window.innerWidth < 768;
        
        // If mobile, don't run animations
        if (isMobile) return;

        const ctx = gsap.context(() => {
            // ── Left Image Animation ──
            gsap.from(leftImageRef.current, {
                scrollTrigger: {
                    trigger: leftImageRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -60,
                scale: 0.95,
                duration: 1,
                ease: "power3.out"
            })

            // ── Text Section Animations ──
            gsap.from(subtitleRef.current, {
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
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
                    start: "top 85%",
                    end: "bottom 70%",
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
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            })

            // ── Gallery Images Animations with Stagger ──
            galleryRef.current.forEach((img, index) => {
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        start: "top 90%",
                        end: "bottom 70%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power3.out"
                })
            })

            // ── Gallery Captions Animations ──
            galleryCaptionsRef.current.forEach((caption, index) => {
                gsap.from(caption, {
                    scrollTrigger: {
                        trigger: caption,
                        start: "top 95%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    delay: index * 0.15 + 0.2,
                    ease: "power2.out"
                })
            })

            // ── Bottom Image Animation ──
            gsap.from(bottomImageRef.current, {
                scrollTrigger: {
                    trigger: bottomImageRef.current,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 60,
                scale: 0.98,
                duration: 1.2,
                ease: "power3.out"
            })

            // ── Parallax Effect on Left Image ──
            gsap.to(leftImageRef.current, {
                yPercent: -8,
                ease: "none",
                scrollTrigger: {
                    trigger: leftImageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            })

            // ── Parallax Effect on Gallery Images ──
            galleryRef.current.forEach((img) => {
                gsap.to(img, {
                    yPercent: -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.8
                    }
                })
            })

            // ── Parallax Effect on Bottom Image ──
            gsap.to(bottomImageRef.current, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: bottomImageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            })

            // ── Border Animation for Gallery Images ──
            const borders = document.querySelectorAll('.gallery-border');
            borders.forEach((border, index) => {
                gsap.from(border, {
                    scrollTrigger: {
                        trigger: border,
                        start: "top 90%",
                        end: "bottom 70%",
                        toggleActions: "play none none reverse"
                    },
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power2.out"
                })
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className='overflow-hidden'>
            <div className="px-4 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">
                    <div className="relative group">
                        <div className="overflow-hidden">
                            <img 
                                ref={leftImageRef}
                                className='w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-500 group-hover:scale-105' 
                                src="images/barahi.jpg" 
                                alt="CozyStay Lodge" 
                            />
                        </div>
                    </div>
                    <div ref={textSectionRef} className="space-y-6">
                        <p ref={subtitleRef} className='font-medium tracking-[1px] uppercase text-sm'>Unforgattable Experiences</p>
                        <h1 ref={headingRef} className='text-3xl md:text-5xl text-[#1a1b1a] leading-tight md:leading-[65px]'>Make The Most Of Your Time</h1>
                        <p ref={descriptionRef} className='text-[#333632] leading-[30px] mb-12 text-base md:text-[18px]'>Make the most of your time in Pokhara Valley with our collection of curated packages and experiences. From private wine tours of the valley's most celebrated vineyards to romantic couples' getaways, our team will take care of every detail so you can enjoy a relaxing retreat.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-8 py-12 md:py-24">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`relative group ${index % 2 === 1 ? 'sm:mt-12 md:mt-24' : ''}`}
                        >
                            <div className="gallery-border absolute h-[46vh] sm:h-[56vh] inset-4 border-2 border-[#ba9d75] z-10 pointer-events-none"></div>
                            <div className="overflow-hidden h-[50vh] sm:h-[60vh]">
                                <img 
                                    ref={el => galleryRef.current[index] = el}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                                    src={image.src} 
                                    alt={image.title} 
                                />
                            </div>
                            <p 
                                ref={el => galleryCaptionsRef.current[index] = el}
                                className="mt-2 text-lg font-medium"
                            >
                                {image.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <img 
                    ref={bottomImageRef}
                    className='w-full h-[60vh] object-cover transition-transform duration-700 hover:scale-105' 
                    src="images/lobby.jpg" 
                    alt="Hotel Lobby" 
                />
            </div>
        </div>
    )
}

export default Activities