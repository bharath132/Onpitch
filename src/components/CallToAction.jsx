import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building Your Dream Business Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of entrepreneurs who have transformed their ideas into successful businesses with OnPitch.in
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started for Free
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700 hover:border-purple-700 transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
          
          <p className="mt-6 text-purple-200 text-sm">
            No credit card required. Free plan available with premium upgrade options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;