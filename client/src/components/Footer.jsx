import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import logo from '/logo.jpg'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
            <img src={logo} alt="OnPitch Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">OnPitch.in</span>
            </div>
            <p className="mb-4">
              Empowering entrepreneurs with the tools, templates, and insights they need to succeed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Business Templates</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Financial Tools</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Startup Guide</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Help Center</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span>support@onpitch.in</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span>+91 9787721111</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OnPitch.in. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;