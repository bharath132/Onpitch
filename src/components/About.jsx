import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Transform your business ideas into reality',
  'Learn from real-world business success stories',
  'Save time with ready-to-use templates and tools',
  'Get feedback from a community of entrepreneurs',
  'Build investor-ready pitch decks and business plans'
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business planning"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OnPitch.in</h2>
            <p className="text-xl text-gray-700 mb-6">
              OnPitch.in empowers entrepreneurs by providing everything they need to turn ideas into thriving ventures. 
              Our comprehensive platform is designed to guide you through every step of your entrepreneurial journey.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-150"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;