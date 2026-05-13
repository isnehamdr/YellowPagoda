import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const sectionRef = useRef(null);
    const textSectionRef = useRef(null);
    const subtitleRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);
    const testimonialCardsRef = useRef([]);

    const testimonials = [
        {
            id: 1,
            desc: "Absolutely wonderful experience! The service was impeccable and the attention to detail made our stay truly memorable. Would definitely recommend to anyone looking for a premium experience.",
            name: "Sarah Johnson",
        },
        {
            id: 2,
            desc: "From the moment we arrived, we felt welcomed and valued. The facilities were top-notch and the staff went above and beyond to ensure our comfort. Can't wait to return!",
            name: "Michael Chen",
        },
        {
            id: 3,
            desc: "Exceptional in every way. The quality of service exceeded our expectations and the little personal touches made all the difference. Truly a five-star experience from start to finish.",
            name: "Emma Rodriguez",
        },
        {
            id: 4,
            desc: "The perfect getaway! Every aspect of our stay was carefully considered and executed. We'll be telling all our friends about this hidden gem.",
            name: "David Wilson",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    useEffect(() => {
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
            });

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
            });

            // ── Slider Section Animation ──
            gsap.from(sliderRef.current, {
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out"
            });

            // ── Animate each testimonial card as they appear in slider ──
            const animateCards = () => {
                const cards = document.querySelectorAll('.testimonial-card');
                cards.forEach((card, index) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 70%",
                            toggleActions: "play none none reverse"
                        },
                        opacity: 0,
                        scale: 0.9,
                        y: 30,
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "back.out(0.8)"
                    });
                });
            };

            // Initial animation
            animateCards();

            // Re-animate when slider changes (for autoplay/loop)
            if (sliderRef.current) {
                const sliderElement = sliderRef.current;
                const observer = new MutationObserver(() => {
                    animateCards();
                });
                observer.observe(sliderElement, { childList: true, subtree: true });
                
                // Cleanup observer
                return () => observer.disconnect();
            }

            // ── Star animations ──
            const stars = document.querySelectorAll('.star-icon');
            stars.forEach((star, index) => {
                gsap.from(star, {
                    scrollTrigger: {
                        trigger: star,
                        start: "top 95%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    },
                    scale: 0,
                    rotation: 360,
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "back.out(1.2)"
                });
            });

            // ── Parallax effect on text section ──
            gsap.to(textSectionRef.current, {
                yPercent: -5,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: 0.8
                }
            });

            // ── Floating animation for active testimonial cards ──
            const cards = document.querySelectorAll('.testimonial-card');
            cards.forEach((card) => {
                gsap.to(card, {
                    y: -5,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 overflow-hidden">
            <div ref={textSectionRef} className="text-center space-y-6 mb-12">
                <p ref={subtitleRef} className='font-medium tracking-[1px] uppercase text-sm'>
                    Feedback From Our Dear Guests
                </p>
                <h1 ref={headingRef} className='text-3xl sm:text-5xl text-[#1a1b1a] sm:leading-[65px]'>
                    What They Say About Us
                </h1>
            </div>

            <div ref={sliderRef}>
                <Slider {...settings} className="testimonial-slider">
                    {testimonials.map((testimonial, idx) => (
                        <div key={testimonial.id} className="px-4">
                            <div className="testimonial-card flex flex-col items-center text-center h-full">
                                
                                {/* Stars */}
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="star-icon w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-[#333632] mb-6 text-base md:text-lg italic">
                                    "{testimonial.desc}"
                                </p>

                                {/* Name */}
                                <p className="font-semibold text-gray-900 mb-2 text-lg">
                                    {testimonial.name}
                                </p>

                                {/* Tripadvisor */}
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-green-600 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.141-12.533c0-.944.567-1.467 1.557-1.467.637 0 1.156.229 1.495.6.15.167.271.355.271.6 0 .311-.249.533-.557.533-.194 0-.375-.09-.529-.24-.156-.151-.327-.222-.533-.222-.222 0-.378.08-.378.267v.044c.229-.204.51-.311.844-.311.689 0 1.156.378 1.156 1.022 0 .644-.511 1.067-1.111 1.067-.6 0-1.022-.378-1.156-.889h-.044v.8h-.533v-2.4zm3.022 1.244c0-.4.311-.689.689-.689.378 0 .689.289.689.689 0 .4-.311.689-.689.689-.378 0-.689-.289-.689-.689z" />
                                    </svg>
                                    <span className="text-xs text-gray-500">
                                        Tripadvisor
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Add custom styles for enhanced testimonial cards */}
            <style jsx>{`
                .testimonial-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .testimonial-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </div>
    );
};

export default Testimonials;