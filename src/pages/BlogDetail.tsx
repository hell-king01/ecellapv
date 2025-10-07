import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../index.css';

// Calculate reading time in minutes
const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Simple markdown renderer for the blog content
const renderMarkdown = (md: string) => {
  if (!md) return null;
  
  
  const lines = md.split('\n');
  
  return lines.map((line, index) => {

    // Handle headers
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-white font-sans">{line.substring(2)}</h1>;
    } else if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl md:text-3xl font-bold mb-4 mt-10 text-white font-sans">{line.substring(3)}</h2>;
    } else if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl md:text-2xl font-semibold mb-3 mt-8 text-gray-100 font-sans">{line.substring(4)}</h3>;
    } else if (line.startsWith('- ')) {
      return <li key={index} className="ml-6 list-disc text-base md:text-lg mb-2 text-gray-300 leading-relaxed">{line.substring(2)}</li>;
    } else if (line.match(/^\d+\. /)) {
      return <li key={index} className="ml-6 list-decimal text-base md:text-lg mb-2 text-gray-300 leading-relaxed">{line.replace(/^\d+\. /, '')}</li>;
    } else if (line.startsWith('>> ')) {
      return (
        <div key={index} className="my-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-purple-500 text-lg text-gray-200 leading-relaxed rounded-r-lg">
          {line.substring(3)}
        </div>
      );
    } else if (line.startsWith('> ')) {
      return (
        <blockquote key={index} className="border-l-4 border-purple-500 pl-4 italic text-gray-300 my-6 text-lg leading-relaxed">
          {line.substring(2)}
        </blockquote>
      );
    } else if (line.startsWith('![')) {
      const match = line.match(/!\[.*\]\((.*)\)/);
      if (match && match[1]) {
        return (
          <div key={index} className="my-8">
            <img 
              src={match[1]} 
              alt="" 
              className="rounded-lg w-full max-w-3xl mx-auto shadow-lg" 
            />
          </div>
        );
      }
    } else if (line.trim() === '') {
      return <br key={index} />;
    }
    
    return <p key={index} className="mb-6 text-base md:text-lg text-gray-300 leading-relaxed font-sans">{line}</p>;
  });
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);
  
  const readingTime = useMemo(() => post ? calculateReadingTime(post.content) : 0, [post]);
  
  // Get related posts (excluding current post)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(p => p.id !== post.id)
      .slice(0, 2); // Show max 2 related posts
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 font-sans">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Blog</span>
        </button>

        <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight font-sans">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} min read
            </div>
          </div>
          
          {post.cover && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{post.author}</p>
                  <p className="text-xs text-gray-400">E-Cell APV</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
        
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-sans">You might also like</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map(relatedPost => (
                <div 
                  key={relatedPost.id} 
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  {relatedPost.cover && (
                    <div className="h-40 bg-gray-800 overflow-hidden">
                      <img 
                        src={relatedPost.cover} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{relatedPost.date.split(',')[0]}</span>
                      <span className="mx-2">•</span>
                      <span>{calculateReadingTime(relatedPost.content)} min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;  