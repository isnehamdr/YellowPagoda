import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    
    const sectionRef = useRef(null);
    const welcomeTextRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const swiperRef = useRef(null);
    const ctaButtonRef = useRef(null);

    const handleSlideChange = (swiperInstance) => {
        setActiveIndex(swiperInstance.realIndex);
    };

    const goToSlide = (index) => {
        if (swiper) {
            swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Text Section Animations ──
            gsap.from(welcomeTextRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out"
            });

            gsap.from(descriptionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            });

            // ── Swiper Section Animation ──
            gsap.from(swiperRef.current, {
                scrollTrigger: {
                    trigger: swiperRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });

            // ── CTA Button Animation ──
            gsap.from(ctaButtonRef.current, {
                scrollTrigger: {
                    trigger: ctaButtonRef.current,
                    start: "top 90%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.8,
                delay: 0.3,
                ease: "back.out(0.8)"
            });

            // ── Parallax Effect on Background ──
            gsap.to(".bg-parallax", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const slides = [
        {
            id: 1,
            src: "images/rooms/imgi_4_deluxe-king.jpg",
            alt: "deluxe king room",
            title: "Deluxe King Room",
            description: "Experience our grand reception area with premium services"
        },
        {
            id: 2,
            src: "images/rooms/imgi_4_deluxe-king.jpg",
            alt: "deluxe king",
            title: "Deluxe King Room",
            description: "Offering free toiletries and bathrobes, this twin room includes a private bathroom with a shower, a hairdryer and slippers. The spacious air-conditioned twin room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a minibar as well as lake views. The unit has 2 beds."
        },
        {
            id: 3,
            src: "images/rooms/imgi_6_superior-king.jpg",
            alt: "superior king",
            title: "Superior King Room",
            description: "Experience our grand reception area with premium services"
        },
        {
            id: 4,
            src: "images/rooms/imgi_7_superior-twin.jpg",
            alt: "superior twin",
            title: "Superior Twin Room",
            description: "Experience our grand reception area with premium services"
        },
        {
            id: 5,
            src: "images/rooms/imgi_8_executive-suite.jpg",
            alt: "executive suite",
            title: "Executive Suite Room",
            description: "Experience our grand reception area with premium services"
        },
    ];

    return (
        <div ref={sectionRef} className="w-full relative my-24">
            {/* Background with 70% image and 30% transparent overlay */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="bg-parallax h-[70%] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('images/bg3.jpg')" }}
                ></div>
              

                <div className="h-[30%] w-full bg-white"></div>
            </div>
            {/* Content */}
            <div className="relative z-10">
                <div className="max-w-5xl px-4 mx-auto pt-24">
                    <div className="text-center space-y-6 mb-16">
                        <p ref={welcomeTextRef} className='font-medium tracking-[1px] uppercase text-sm text-white'>Welcome to Hotel Yellow Pagoda</p>
                        <h2 ref={headingRef} className='text-5xl text-white leading-[65px]'>Select Your Cozy Room</h2>
                        <p ref={descriptionRef} className='text-white leading-[30px] text-[18px]'>In a new setting composed of exceptional hotels chalets, nestled in a forest of pine trees, the Hotel Yellow Pagoda is expanding into a harmonious and refined unit that affirms it's purpose: to sublimate the stay of its guests by a tailor-made service.</p>
                    </div>
                </div>
            </div>

            <div ref={swiperRef} className="relative overflow-hidden">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSlideChange={handleSlideChange}
                    onSwiper={setSwiper}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    breakpoints={{
                        640: {
                            spaceBetween: 20
                        },
                        1024: {
                            spaceBetween: 40
                        }
                    }}
                    className="relative center-mode-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={slide.id}
                            className="!w-[70%] sm:!w-[60%] transition-all duration-500"
                        >
                            {({ isActive }) => (
                                <div className={`relative transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-100'}`}>
                                    <div className="h-[60vh] md:h-[90vh] w-full relative overflow-hidden">
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        {(isActive || window.innerWidth < 640) && (
                                            <>
                                                <div
                                                    className="absolute inset-0 transition-all duration-500"
                                                    style={{
                                                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)'
                                                    }}
                                                ></div>
                                                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8 transition-all duration-500">
                                                    <h3 className="text-xl md:text-3xl mb-2 md:mb-3">{slide.title}</h3>
                                                    <p className="text-sm md:text-lg max-w-md line-clamp-2">{slide.description}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div ref={ctaButtonRef} className="flex justify-center mt-16">
                <Link to="/rooms" className='py-4 px-10 bg-[#1a1b1a] text-white hover:bg-[#ba9d75] border border-[#1a1b1a] hover:border-white transition-all duration-300'>Explore All Rooms</Link>
            </div>
        </div>
    );
};

export default Rooms;
