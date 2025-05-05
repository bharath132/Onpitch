import React from 'react';
import { FileText, BarChart3, Briefcase, BookOpen, LineChart, Award } from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} />,
    title: '100+ Proven Business Model Templates',
    description: 'Access professionally crafted templates for every industry and business type.'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Free and Premium Business Plan Samples',
    description: 'Study real-world examples from successful startups and established businesses.'
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Startup Guides & Financial Planning Tools',
    description: 'Comprehensive resources to guide you through every stage of business development.'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Entrepreneurial Insights & Case Studies',
    description: 'Learn from real stories of success and failure to inform your business decisions.'
  },
  {
    icon: <LineChart size={24} />,
    title: 'Tools to Build, Pitch & Scale',
    description: 'Everything you need to take your business from concept to thriving enterprise.'
  },
  {
    icon: <Award size={24} />,
    title: 'Expert-Reviewed Content',
    description: 'All resources are vetted by industry professionals and successful entrepreneurs.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600">Comprehensive tools and resources to help entrepreneurs at every stage of their journey.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 text-purple-600 rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;