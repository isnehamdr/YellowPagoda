import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./Components/Footer";

// LENIS
import Lenis from "@studio-freight/lenis";
import BackToTopButton from "./Components/BackToTopButton";
import RoomPage from "./Pages/RoomPage";
import RoomDetail from "./Pages/RoomDetail";
import Contact from "./Pages/Contact";


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
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/rooms" element={<RoomPage/>} />
          <Route path="/details/:slug" element={<RoomDetail/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* other routes */}
        </Routes>

        <BackToTopButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;