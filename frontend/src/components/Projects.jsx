import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'data', label: 'Data Science' },
    { id: 'ai', label: 'AI/ML' }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          My <span className="text-cyan-500">Projects</span>
        </h2>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              className={activeFilter === filter.id ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-gray-300 hover:border-cyan-500'}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
