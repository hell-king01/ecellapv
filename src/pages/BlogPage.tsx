import React from "react";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogPosts";
import "../index.css";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" style={{ textShadow: 'none' }}>
      <style>{`
        .blog-page-content h1,
        .blog-page-content h2,
        .blog-page-content h3,
        .blog-page-content h4,
        .blog-page-content p,
        .blog-page-content span,
        .blog-page-content div {
          text-shadow: none !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-16 blog-page-content">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">APV E-CELL Blogs</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">Insights for the next generation of innovators</p>
          <div className="w-full max-w-4xl h-64 md:h-80 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 rounded-2xl shadow-lg mb-12 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <svg className="w-32 h-32 md:w-40 md:h-40 mx-auto text-gray-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-gray-500 text-lg font-medium mt-4">Explore Our Latest Insights</p>
            </div>
          </div>
        </section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
