import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animate-delay-200"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Revolutionizing Business Planning</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Empowering Entrepreneurs to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Pitch Smarter
              </span>
              ,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Plan Better
              </span>
              , and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Grow Faster
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in animate-delay-200">
              Business model templates, startup tools, and expert insights — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href='/login'
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-bounce-in hover-lift"
              >
                Explore Templates
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                
              </a>
              
              <a 
                href="/about" 
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white border border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 animate-bounce-in animate-delay-200 hover-lift"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400 animate-fade-in animate-delay-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                10,000+ Users
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                500+ Templates
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                24/7 Support
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Entrepreneurs collaborating"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 filter grayscale"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          fill="white"
          className="h-16 w-full"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;