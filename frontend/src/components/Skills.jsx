import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, FileCode, Terminal, Database, GitBranch, Atom, TrendingUp } from 'lucide-react';
import { skills } from '../data/mock';
import { Progress } from './ui/progress';

const iconMap = {
  Code,
  Palette,
  FileCode,
  Terminal,
  Database,
  GitBranch,
  Atom,
  TrendingUp
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        let currentValue = 0;
        const increment = skill.level / 50; // Animate over ~50 frames
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= skill.level) {
            currentValue = skill.level;
            clearInterval(timer);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.round(currentValue);
            return newValues;
          });
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-cyan-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-900 rounded-full group-hover:bg-cyan-500 dark:group-hover:bg-cyan-500 transition-colors duration-300">
                    <Icon className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                  <div className="w-full space-y-2">
                    <Progress value={animatedValues[index]} className="h-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{animatedValues[index]}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
