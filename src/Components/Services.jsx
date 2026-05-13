import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    const sectionRef = useRef(null)
    const textSectionRef = useRef(null)
    const subtitleRef = useRef(null)
    const headingRef = useRef(null)
    const servicesGridRef = useRef(null)
    const serviceCardsRef = useRef([])
    const rightImageRef = useRef(null)

    const services = [
        {
            icon: "images/icons/car.png",
            title: "Airport Pick-up Service",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
        {
            icon: "images/icons/house-keeping.png",
            title: "Housekeeper Services",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
        {
            icon: "images/icons/wifi.png",
            title: "Wifi & Internet",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
        {
            icon: "images/icons/machine.png",
            title: "Laundry Services",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
        {
            icon: "images/icons/bed.png",
            title: "Breakfast in Bed",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
        {
            icon: "images/icons/swim.png",
            title: "Swimming Pool",
            desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
        },
    ]

    useEffect(() => {

        // REMOVE GSAP ON SMALL SCREENS
        if (window.innerWidth < 768) return;

        const ctx = gsap.context(() => {

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

            // ── Services Grid Animation ──
            gsap.from(servicesGridRef.current, {
                scrollTrigger: {
                    trigger: servicesGridRef.current,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out"
            })

            // ── Service Cards Animations ──
            serviceCardsRef.current.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                    y: 30,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "back.out(0.8)"
                })
            })

            // ── Right Image Animation ──
            gsap.from(rightImageRef.current, {
                scrollTrigger: {
                    trigger: rightImageRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: 60,
                scale: 0.95,
                duration: 1,
                ease: "power3.out"
            })

            // ── Parallax Effect on Right Image ──
            gsap.to(rightImageRef.current, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: rightImageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            })

            // ── Icon Animations ──
            const icons = document.querySelectorAll('.service-icon');

            icons.forEach((icon, index) => {
                gsap.from(icon, {
                    scrollTrigger: {
                        trigger: icon,
                        start: "top 95%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    },
                    scale: 0,
                    rotation: -180,
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "back.out(1.2)"
                })
            })

            // ── Text Parallax ──
            gsap.to(textSectionRef.current, {
                yPercent: -5,
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
        <div ref={sectionRef}>
            <div className="px-4 md:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">

                    <div ref={textSectionRef} className="space-y-6">

                        <p
                            ref={subtitleRef}
                            className='font-medium tracking-[1px] uppercase text-sm'
                        >
                            Discover the Services we offered
                        </p>

                        <h1
                            ref={headingRef}
                            className='text-3xl md:text-5xl text-[#1a1b1a] max-w-md leading-tight md:leading-[65px]'
                        >
                            Chalets With All the Benefits of a Hotel
                        </h1>

                        <div
                            ref={servicesGridRef}
                            className="grid grid-cols-1 sm:grid-cols-2 px-8 gap-6 mt-12 lg:gap-12"
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    ref={el => serviceCardsRef.current[index] = el}
                                    className="flex items-start space-x-2 gap-4 group"
                                >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="service-icon w-10 h-10 sm:w-12 sm:h-12 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                    />

                                    <div>
                                        <h3 className="text-base sm:text-lg mb-1 sm:mb-2 text-[#1a1b1a] font-medium">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm sm:text-md text-gray-600">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <img
                            ref={rightImageRef}
                            className='w-full h-[50vh] md:h-[90vh] object-cover transition-transform duration-700 hover:scale-105'
                            src="images/cheif.jpg"
                            alt="CozyStay Lodge"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services