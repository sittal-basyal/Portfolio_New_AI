import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Button } from './ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-cyan-500">Blog</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Button
                  variant="ghost"
                  className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 p-0 h-auto font-semibold group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
