import React from 'react';
import { MapPin, Mail, Phone, Github } from 'lucide-react';
import { personalInfo, aboutText } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-cyan-500">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800">{aboutText.greeting}</h3>
            <p className="text-gray-600 leading-relaxed">{aboutText.description1}</p>
            <p className="text-gray-600 leading-relaxed">{aboutText.description2}</p>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <MapPin className="text-cyan-600" size={20} />
                </div>
                <span className="text-gray-700">{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Mail className="text-cyan-600" size={20} />
                </div>
                <span className="text-gray-700">{personalInfo.email}</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Phone className="text-cyan-600" size={20} />
                </div>
                <span className="text-gray-700">{personalInfo.phone}</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Github className="text-cyan-600" size={20} />
                </div>
                <span className="text-gray-700">{personalInfo.github}</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Sittal"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
