
import React, { useState, useEffect } from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Home from '../pages/home';
import Contact from '../pages/contact';
import Products from '../pages/products';
import Solutions from '../pages/solutions';
import Process from '../pages/process';
import About from '../pages/about';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  return (
    <div className="app-container">
      {/* Navigation bar */}
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Page content */}
      {currentPage === 'home' && (
        <Home setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'about' && (
        <About setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'products' && (
        <Products setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'solutions' && (
        <Solutions setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'process' && (
        <Process setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'contact' && (
        <Contact />
      )}

      {/* Footer navigation */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
