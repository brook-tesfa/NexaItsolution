import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group relative backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/10">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            {post.author}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;