import React from 'react';
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
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-cyan-50 rounded-full group-hover:bg-cyan-500 transition-colors duration-300">
                    <Icon className="text-cyan-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                  <div className="w-full space-y-2">
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-gray-500 text-center">{skill.level}%</p>
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
