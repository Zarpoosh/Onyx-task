import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import NavScrollExample from './components/navbar/Navbar';
// import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Services from './components/sections/services/Services';
import Projects from './components/sections/projects/Projects';
import Products from './components/sections/products/Products';
import Footer from './components/footer/Footer';
import ImageSlider from './components/ slider/InageSlider';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  

  const toggleDarkMode = () => {
  setDarkMode(prev => {
    if (!prev) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    return !prev;
  });
};


  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <NavScrollExample darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ImageSlider />
      {/* <Hero /> */}
      <About />
      <Services />
      <Projects />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
