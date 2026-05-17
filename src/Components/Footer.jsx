import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Partners section at the top */}
                    <div className="mb-8 flex justify-center items-center flex-col pt-12">
                        <h2 className="text-white text-xl text-center mb-6">Associated With</h2>
                        <div className="bg-black py- px-6 md:px-12 lg:px-24">
                            <div className="flex justify-center  ">
                                {/* Booking.com logo */}
                                <a href="/" target='_blank' aria-label="Booking.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/booking.png"
                                        alt="Booking.com"
                                        className="w-18 object-cover"
                                    />
                                </a>

                                {/* Agoda logo */}
                                <a href="/" target='_blank' aria-label="Agoda" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/agoda.png"
                                        alt="Agoda"
                                        className="w-18 object-cover"
                                    />
                                </a>

                                {/* Tripadvisor logo */}
                                <a href="/" target='_blank' aria-label="Tripadvisor" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/tripadvisor.png"
                                        alt="Tripadvisor"
                                        className="w-18 object-cover "
                                    />
                                </a>
                                <a href="/" target='_blank' aria-label="Tripadvisor" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/Makemytrip.png"
                                        alt="make my trip"
                                        className="w-18 object-cover "
                                    />
                                </a>
                                <a href="/" target='_blank' aria-label="Tripadvisor" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/expedia.png"
                                        alt="expedia"
                                        className="w-18 object-cover "
                                    />
                                </a>
                                <a href="/" target='_blank' aria-label="Tripadvisor" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <img
                                        src="/images/icons/trip.com.png"
                                        alt="trip.com"
                                        className="w-18 object-cover "
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        {/* Left column - Image */}
                        <div className="lg:w-1/3 w-full">
                            <img
                                src="images/line.png"
                                alt="Hotel Yellow Pagoda"
                                className="w-full h-full object-cover rounded-lg"
                                style={{ minHeight: '300px' }}
                            />
                        </div>

                        {/* Right column - Content */}
                        <div className="lg:w-2/3 w-full lg:ms-12">
                            {/* Hotel name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">Hotel Yellow Pagoda</h2>
                                    <p className="text-gray-300 mb-4">
                                        Experience luxury and comfort in the heart of Pokhara. Our hotel offers premium amenities and exceptional service for an unforgettable stay.
                                    </p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-white hover:text-yellow-500 transition">
                                            <FaFacebook size={20} />
                                        </a>
                                        <a href="#" className="text-white hover:text-yellow-500 transition">
                                            <FaTwitter size={20} />
                                        </a>
                                        <a href="#" className="text-white hover:text-yellow-500 transition">
                                            <FaInstagram size={20} />
                                        </a>
                                        <a href="#" className="text-white hover:text-yellow-500 transition">
                                            <FaYoutube size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start">
                                            <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                            <span>Damside RD, Pokhara, Nepal</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FaPhone className="mt-1 mr-2 flex-shrink-0" />
                                            <span>+977 061-457991, 061-457992</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FaEnvelope className="mt-1 mr-2 flex-shrink-0" />
                                            <span>info@yellowpagoda.com</span>
                                        </li>
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center mt-4 text-white hover:text-yellow-500 transition"
                                    >
                                        Get Directions <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Links with responsive border */}
                            <div className="flex  pt-12 pb-8">
                                <div className="border border-gray-300 rounded-full px-2 sm:px-8 py-2 sm:py-4 w-full max-w-max">
                                    <div className="flex flex-wrap items-center justify-center gap-x-0 text-gray-300">
                                        <Link to="/" className="hover:text-white transition px-3 sm:px-4 border-r border-gray-300 text-sm sm:text-base">Home</Link>
                                                    <Link to="/about" className="hover:text-white transition px-3 sm:px-4 border-r border-gray-300 text-sm sm:text-base">About Us</Link>
                                        <Link to="/rooms" className="hover:text-white transition px-3 sm:px-4 border-r border-gray-300 text-sm sm:text-base">Rooms & Suites</Link>
                                       
                            
                                        <Link to="/contact" className="hover:text-white transition px-3 sm:px-4 text-sm sm:text-base">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="w-full bg-gray-700/60 py-6 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white text-sm mb-2 md:mb-0">
                            &copy; {new Date().getFullYear()} Hotel Yellow Pagoda. All rights reserved. Crafted by <a href="https://www.sait.com.np/" target='_blank'>S.A I.T Solution Nepal</a>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <Link to="/privacy" className="text-white hover:text-white text-sm transition">Privacy Policy</Link>
                            <Link to="/terms" className="text-white hover:text-white text-sm transition">Terms of Service</Link>
                            <Link to="/cookies" className="text-white hover:text-white text-sm transition">Cookies Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;