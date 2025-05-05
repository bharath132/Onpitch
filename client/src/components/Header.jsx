import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/logo.jpg'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center animate-fade-in">
            <img src={logo} alt="OnPitch Logo" className="h-8 w-8" />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>OnPitch</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-gray-500 transition duration-150 animate-fade-in animate-delay-100 inline-flex items-center`}
            >
              Features
            </a>
            <a 
              href="#about" 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-gray-500 transition duration-150 animate-fade-in animate-delay-200 inline-flex items-center`}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-gray-500 transition duration-150 animate-fade-in animate-delay-300 inline-flex items-center`}
            >
              Testimonials
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 transition duration-150 animate-fade-in animate-delay-400"
            >
              Get Started
            </a>
          </nav>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-scale-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a 
              href="#features" 
              className="block py-2 text-gray-800 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block py-2 text-gray-800 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-gray-800 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#" 
              className="block mt-2 px-4 py-2 bg-black text-white text-center rounded-md hover:bg-gray-800 transition duration-150"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;