import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../index.css';

// Simple markdown renderer for the blog content
const renderMarkdown = (md: string) => {
  if (!md) return null;
  
  // Split content into lines
  const lines = md.split('\n');
  
  return lines.map((line, index) => {
    // Handle headers
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mb-4 mt-8 text-white">{line.substring(2)}</h1>;
    } else if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-semibold mb-3 mt-6 text-gray-200">{line.substring(3)}</h2>;
    } else if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-medium mb-2 mt-4 text-gray-300">{line.substring(4)}</h3>;
    } else if (line.startsWith('- ')) {
      return <li key={index} className="ml-6 list-disc text-base mb-1">{line.substring(2)}</li>;
    } else if (line.match(/^\d+\. /)) {
      return <li key={index} className="ml-6 list-decimal text-base mb-1">{line.replace(/^\d+\. /, '')}</li>;
    } else if (line.startsWith('>> ')) {
      return (
        <div key={index} className="my-6 p-6 bg-glass-card border-l-8 border-neon-purple text-xl font-semibold text-neon-purple rounded-xl shadow-lg">
          {line.substring(3)}
        </div>
      );
    } else if (line.startsWith('> ')) {
      return <blockquote key={index} className="border-l-4 border-neon-purple pl-4 italic text-neon-purple mb-3">{line.substring(2)}</blockquote>;
    } else if (line.startsWith('![')) {
      const match = line.match(/!\[.*\]\((.*)\)/);
      if (match && match[1]) {
        return <img key={index} src={match[1]} alt="" className="rounded-xl my-4 w-full max-w-2xl mx-auto" />;
      }
    } else if (line.trim() === '') {
      return <br key={index} />;
    }
    
    return <p key={index} className="mb-5 text-lg text-gray-200 leading-relaxed">{line}</p>;
  });
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--deep-bg)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neon-purple mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-neon-purple text-white rounded-lg hover:bg-opacity-80 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-bg)] pt-32 pb-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-neon-purple hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Back to Blog
        </button>

        <article className="glass-card p-8 rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-6 text-gray-400">
            <span className="font-semibold text-neon-purple">{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          {post.cover && (
            <div className={`relative w-full max-w-2xl mx-auto my-8 ${post.id === '1' ? 'mt-0' : ''}`}>
              <div className="aspect-video w-full">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
