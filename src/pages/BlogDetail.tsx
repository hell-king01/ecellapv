import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../index.css';

const renderMarkdown = (md: string) => {
  if (!md) return null;

  const lines = md.split('\n');

  return lines.map((line, index) => {
    if (line.startsWith('# ')) {
      return (
        <h1 key={index} className="text-4xl md:text-5xl font-bold mb-8 mt-16 text-gray-900 leading-tight">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-gray-900 leading-snug">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl md:text-3xl font-semibold mb-5 mt-10 text-gray-800 leading-snug">
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-8 mb-3 text-lg md:text-xl text-gray-700 leading-relaxed list-disc marker:text-gray-400">
          {line.substring(2)}
        </li>
      );
    } else if (line.match(/^\d+\. /)) {
      return (
        <li key={index} className="ml-8 mb-3 text-lg md:text-xl text-gray-700 leading-relaxed list-decimal marker:text-gray-400">
          {line.replace(/^\d+\. /, '')}
        </li>
      );
    } else if (line.startsWith('>> ')) {
      return (
        <div key={index} className="my-10 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <p className="text-xl text-gray-800 leading-relaxed font-medium italic">
            {line.substring(3)}
          </p>
        </div>
      );
    } else if (line.startsWith('> ')) {
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-6 my-8 italic text-xl text-gray-600 leading-relaxed">
          {line.substring(2)}
        </blockquote>
      );
    } else if (line.startsWith('![')) {
      const match = line.match(/!\[.*\]\((.*)\)/);
      if (match && match[1]) {
        return (
          <div key={index} className="my-12">
            <img
              src={match[1]}
              alt=""
              className="rounded-lg w-full shadow-md"
            />
          </div>
        );
      }
    } else if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={index} className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.trim() === '') {
      return <div key={index} className="h-4" />;
    }

    return (
      <p key={index} className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
        {line}
      </p>
    );
  });
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(p => p.id !== post.id)
      .slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Post Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-base"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ textShadow: 'none' }}>
      <style>{`
        .blog-detail-content h1,
        .blog-detail-content h2,
        .blog-detail-content h3,
        .blog-detail-content h4,
        .blog-detail-content h5,
        .blog-detail-content h6,
        .blog-detail-content p,
        .blog-detail-content span,
        .blog-detail-content div {
          text-shadow: none !important;
        }
      `}</style>
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 md:py-20 blog-detail-content">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-base text-gray-600 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">E-Cell APV</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-gray-500">
              <span>{post.date}</span>
            </div>
          </div>

          {post.cover && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </header>

        <div className="prose-custom max-w-none">
          {renderMarkdown(post.content)}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">E-Cell APV</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map(relatedPost => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-gray-100"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  {relatedPost.cover && (
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={relatedPost.cover}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-base text-gray-600 line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.date.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-20"></div>
    </div>
  );
};

export default BlogDetail;
