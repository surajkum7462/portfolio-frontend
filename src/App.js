import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import HomePremium from './pages/HomePremium';
import About from './pages/About';
import AboutPremium from './pages/AboutPremium';
import Projects from './pages/Projects';
import ProjectsPremium from './pages/ProjectsPremium';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Socials from './pages/Socials';
import Portfolio3DUniverse from './pages/Portfolio3DUniverse';
import Navbar from './components/Navbar';
import NavbarPremium from './components/NavbarPremium';

import 'swiper/css';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="pt-16">
        <NavbarPremium />
        <Routes>
          <Route path="/" element={<HomePremium />} />
          <Route path="/home-classic" element={<Home />} />
          <Route path="/about" element={<AboutPremium />} />
          <Route path="/about-classic" element={<About />} />
          <Route path="/projects" element={<ProjectsPremium />} />
          <Route path="/projects-classic" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
