import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Data Scientist',
    'AI/ML Enthusiast',
    'Web Developer',
    'Problem Solver'
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-cyan-500">Sittal Basyal</span>
            </h1>
            <div className="h-16">
              <p className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950 px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 rounded-full transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 rounded-full transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 rounded-full transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative animate-fadeIn delay-200">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sittal Basyal"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
