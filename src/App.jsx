import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/Footer";

// SEO — react-helmet-async
// Install: npm install react-helmet-async
import { HelmetProvider } from "react-helmet-async";

// LENIS
import Lenis from "@studio-freight/lenis";
import BackToTopButton from "./Components/BackToTopButton";
import RoomPage from "./Pages/RoomPage";
import RoomDetail from "./Pages/RoomDetail";
import Contact from "./Pages/Contact";
import ServicePage from "./Pages/ServicePage";
import Activitiespage from "./Pages/Activitiespage";
import Conference from "./Pages/Conference";
import Gallery from "./Pages/Gallery";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0);

  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // HelmetProvider must wrap the entire app so every page component
    // can use <Helmet> to update <head> tags dynamically.
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/details/:slug" element={<RoomDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/activities" element={<Activitiespage />} />
          <Route path="/conference-and-meeting" element={<Conference />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* other routes */}
        </Routes>

        <BackToTopButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;