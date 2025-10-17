import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export type BlogCardProps = {
  id: string;
  cover: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, cover, title, excerpt, author, date }) => (
  <Link
    to={`/blog/${id}`}
    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
    style={{ textDecoration: "none", textShadow: "none" }}
  >
    <div className="h-48 overflow-hidden bg-gray-100">
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors" style={{ textShadow: "none" }}>
        {title}
      </h3>
      <p className="text-base text-gray-600 mb-4 flex-1 line-clamp-3 leading-relaxed">
        {excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto text-sm pt-4 border-t border-gray-100">
        <span className="font-semibold text-gray-900">{author}</span>
        <span className="text-gray-500">{date.split(',')[0]}</span>
      </div>
    </div>
  </Link>
);

export default BlogCard;
