import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const PAGES_DROPDOWN = [
  { label: "Services",             path: "/services" },
  { label: "Conference & Meeting", path: "/conference-and-meeting" },
  { label: "Activities",           path: "/activities" },
  { label: "Gallery",              path: "/gallery" },
];

const NAV_LINKS = [
  { label: "Home",    path: "/" },
  { label: "About",   path: "/about" },
  { label: "Rooms",   path: "/rooms" },
  { label: "Contact", path: "/contact" },
  { label: "Explore",   path: "/pages", dropdown: PAGES_DROPDOWN },
];

export default function Navbar() {
  const location = useLocation();

  const [menuOpen,    setMenuOpen]    = useState(false);
  const [pagesOpen,   setPagesOpen]   = useState(false);
  const [desktopDrop, setDesktopDrop] = useState(false);
  const [showNavbar,  setShowNavbar]  = useState(true);

  const lastScrollY   = useRef(0);
  const dropdownRef   = useRef(null);
  const mobileMenuRef = useRef(null);
  const hoverTimeout  = useRef(null);

  // ── FIX: Lock/unlock body scroll when mobile menu opens/closes ──────────────
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (menuOpen) {
      const scrollY = window.scrollY;
      lastScrollY.current = scrollY;

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, lastScrollY.current);
      setPagesOpen(false);
    }

    const preventBackgroundScroll = (event) => {
      if (!mobileMenuRef.current?.contains(event.target)) {
        event.preventDefault();
      }
    };

    if (menuOpen) {
      document.addEventListener("wheel", preventBackgroundScroll, { passive: false });
      document.addEventListener("touchmove", preventBackgroundScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", preventBackgroundScroll);
      document.removeEventListener("touchmove", preventBackgroundScroll);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [menuOpen]);

  // ── Close everything on route change ────────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false);
    setPagesOpen(false);
    setDesktopDrop(false);
  }, [location.pathname]);

  // ── Hide / show navbar on scroll ────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 10)                       setShowNavbar(true);
      else if (y > lastScrollY.current) setShowNavbar(false);
      else                              setShowNavbar(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close desktop dropdown on outside click ──────────────────────────────────
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDrop(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // ── Active-state helpers ─────────────────────────────────────────────────────
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isPagesActive = () =>
    isActive("/pages") ||
    PAGES_DROPDOWN.some((d) => location.pathname.startsWith(d.path));

  // ── Desktop hover handlers ───────────────────────────────────────────────────
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setDesktopDrop(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDesktopDrop(false), 120);
  };

  // ── Unified mobile menu close ────────────────────────────────────────────────
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── NAVBAR ────────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-2 transition-all duration-500 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <div className="w-24">
            <Link to="/">
              <img src="images/logo.png" className="w-24 cursor-pointer" alt="logo" />
            </Link>
          </div>

          {/* CENTER NAV — desktop */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 border border-white/20 bg-black/15 backdrop-blur-md rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              {NAV_LINKS.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setDesktopDrop((v) => !v)}
                      className={`relative flex items-center gap-1 px-6 py-2 rounded-full text-[17px] font-medium transition-all duration-300 cursor-pointer ${
                        isPagesActive()
                          ? "bg-white text-[#1d1d1d]"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${desktopDrop ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-52 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300 origin-top ${
                        desktopDrop
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      {PAGES_DROPDOWN.map((sub) => (
                        <Link key={sub.path} to={sub.path}>
                          <button
                            className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 ${
                              location.pathname === sub.path
                                ? "bg-white/20 text-white"
                                : "text-white/80 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {sub.label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} to={item.path}>
                    <button
                      className={`relative px-6 py-2 rounded-full text-[17px] font-medium transition-all duration-300 cursor-pointer ${
                        isActive(item.path)
                          ? "bg-white text-[#1d1d1d]"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                )
              )}
            </div>
          </nav>

          {/* BOOK NOW — desktop */}
          <Link to="/booking" className="hidden lg:block">
            <button className="group relative h-[calc(48px+8px)] flex items-center hover:text-black justify-center rounded-full bg-black/15 backdrop-blur-md py-1 pl-6 pr-14 font-medium text-neutral-50 transition-all duration-300 cursor-pointer">
              <span className="z-10 pr-2">Book Now</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-14 h-14 rounded-full border border-white bg-white flex items-center justify-center text-black cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ── OVERLAY ───────────────────────────────────────────────────────────── */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ── OFFCANVAS ─────────────────────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[300px] z-50 transform transition-transform duration-500 ease-in-out flex flex-col overflow-hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "black" }}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 flex-shrink-0">
          <div className="w-20">
            {/* <Link to="/" onClick={closeMobileMenu}>
              <img src="images/logo.png" className="w-20 cursor-pointer" alt="logo" />
            </Link> */}
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links — only THIS section scrolls if content overflows */}
        <div className="flex flex-col gap-2 p-6 flex-1 overflow-y-auto overscroll-contain [scrollbar-gutter:stable] [WebkitOverflowScrolling:touch]">
          {NAV_LINKS.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setPagesOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 cursor-pointer ${
                    isPagesActive()
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* Accordion body — fixed: duration-300 (was invalid duration-400) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    pagesOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 pl-3">
                    {PAGES_DROPDOWN.map((sub) => (
                      <Link key={sub.path} to={sub.path} onClick={closeMobileMenu}>
                        <button
                          className={`w-full text-left px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                            location.pathname === sub.path
                              ? "bg-white text-black"
                              : "text-white/75 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {sub.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.path} onClick={closeMobileMenu}>
                <button
                  className={`w-full text-left px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 cursor-pointer ${
                    isActive(item.path)
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            )
          )}
        </div>

        {/* Book Now — pinned to bottom */}
        <div className="p-6 border-t border-white/10 flex-shrink-0">
          <Link to="/booking" onClick={closeMobileMenu}>
            <button className="group relative w-full inline-flex h-[52px] items-center justify-center rounded-full bg-white backdrop-blur-md py-1 pl-6 pr-14 font-medium text-black transition-all duration-300 hover:text-white overflow-hidden cursor-pointer">
              <span className="z-10 pr-2">Book Now</span>
              <div className="absolute right-1 inline-flex h-11 w-11 items-center justify-end rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
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
