import React from 'react';
import { blogPosts } from '../../data/blog';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-20 bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;