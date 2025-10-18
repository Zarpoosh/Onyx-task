import React, { useState, useEffect } from 'react';
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
  // بررسی Local Storage برای حالت قبلی تم
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // پیش‌فرض تاریک
  });

  // اعمال کلاس body و ذخیره در Local Storage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'text-light' : 'bg-light text-dark'}>
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
