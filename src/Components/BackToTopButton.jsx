import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const openWhatsApp = () => {
        const phoneNumber = "9779818209370";
        const message = "Hello! I would like to know more about Hotel Yellow Pagoda.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className={`group relative flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20b859] transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
                }`}
                style={{ transitionDelay: '100ms' }}
                aria-label="Contact on WhatsApp"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                    Chat on WhatsApp
                    <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                </span>
            </button>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`group relative flex items-center justify-center w-12 h-12 bg-[#1a1b1a] text-white rounded-full shadow-lg hover:bg-[#ba9d75] transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
                }`}
                aria-label="Back to top"
            >
                <ArrowUp size={22} className="transition-transform duration-300 group-hover:-translate-y-1" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                    Back to Top
                    <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                </span>
            </button>
        </div>
    );
};

export default BackToTopButton;