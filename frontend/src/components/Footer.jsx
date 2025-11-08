import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold mb-4"
              >
                Sittal<span className="text-cyan-500">.</span>
              </button>
              <p className="text-gray-400">
                Data Science & AI/ML Enthusiast passionate about creating intelligent solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-cyan-500 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{personalInfo.location}</li>
                <li>{personalInfo.email}</li>
                <li>{personalInfo.phone}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Sittal Basyal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Desktop Only */}
      {showBackToTop && !isMobile && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ChevronUp size={24} />
        </Button>
      )}
    </>
  );
};

export default Footer;
