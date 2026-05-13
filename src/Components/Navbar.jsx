import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // useRef for tracking last scroll position
  const lastScrollY = useRef(0);

  const navLinks = ["Home", "About", "Packages", "Contact", "Pages"];

  // Function to get the route path for each link
  const getRoutePath = (item) => {
    switch(item) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "Packages":
        return "/packages";
      case "Contact":
        return "/contact";
      case "Pages":
        return "/pages";
      default:
        return "/";
    }
  };

  // SHOW/HIDE NAVBAR ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at top
      if (currentScrollY < 10) {
        setShowNavbar(true);
      }
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else {
        setShowNavbar(true);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-2 transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="w-24">
            <Link to="/">
              <img src="images/logo.png" className="w-24 cursor-pointer" alt="logo" />
            </Link>
          </div>

          {/* CENTER NAV */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 border border-white/20 bg-black/15 backdrop-blur-md rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              {navLinks.map((item, index) => (
                <Link key={index} to={getRoutePath(item)}>
                  <button
                    className={`relative px-6 py-2 rounded-full text-[17px] font-medium transition-all duration-300 cursor-pointer ${
                      item === "Home"
                        ? "bg-white text-[#1d1d1d]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* BOOK NOW BUTTON */}
          <Link to="/book-now">
            <button className="group hidden lg:flex relative h-[calc(48px+8px)] items-center hover:text-black justify-center rounded-full bg-black/15 backdrop-blur-md py-1 pl-6 pr-14 font-medium text-neutral-50 transition-all duration-300 cursor-pointer">
              <span className="z-10 pr-2">Book Now</span>

              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-14 h-14 rounded-full border border-[#800020] bg-white/10 backdrop-blur-md flex items-center justify-center text-[#800020] cursor-pointer"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* OFFCANVAS */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #800020 0%, #5a0015 100%)",
        }}
      >
        {/* TOP */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="w-20">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src="images/logo.png" className="w-20 cursor-pointer" alt="logo" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3 p-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={getRoutePath(item)}
              onClick={() => setOpen(false)}
            >
              <button
                className={`w-full text-left px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 cursor-pointer ${
                  item === "Home"
                    ? "bg-white text-[#800020]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <div className="absolute bottom-8 left-6 right-6">
          <Link to="/book-now" onClick={() => setOpen(false)}>
            <button className="group relative w-full inline-flex h-[52px] items-center justify-center rounded-full bg-white/10 backdrop-blur-md py-1 pl-6 pr-14 font-medium text-white transition-all duration-300 hover:text-white overflow-hidden cursor-pointer">
              <span className="z-10 pr-2">Book Now</span>

              <div className="absolute right-1 inline-flex h-11 w-11 items-center justify-end rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#800020] transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}