import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, ArrowRight } from "lucide-react";

const events = [
  {
    id: "illuminate",
    title: "Illuminate",
    date: "October 16, 2025",
    description:
      "An exclusive, high-energy workshop powered by E-Cell IIT Bombay to kickstart your entrepreneurial journey.",
    button: "View Details",
    path: "/events/illuminate",
  },
  {
    id: "pitchnova",
    title: "Pitchnova",
    date: "August 25, 2025",
    description:
      "The ultimate pitch battle for student startups and entrepreneurs.",
    button: "View Details",
    path: "/events/pitchnova",
  },
];

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CategoryBadge = ({ category }: { category: string }) => {
    const colors = {
      Competition: "bg-red-500/20 text-red-300 border-red-500/30",
      Workshop: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Networking: "bg-green-500/20 text-green-300 border-green-500/30",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          colors[category as keyof typeof colors] ||
          "bg-gray-500/20 text-gray-300 border-gray-500/30"
        }`}
      >
        {category}
      </span>
    );
  };

  const handleNavigateToEvent = (eventPath: string) => {
    navigate(eventPath);
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)",
      }}
    >
      <Navigation />

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#A259FF]/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#872ff7]">
                Events
              </span>
            </h1>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed">
              Join us in shaping the future through innovation, collaboration,
              and entrepreneurial excellence
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`
                group relative bg-gradient-to-br from-[#151522]/90 to-[#0D0D1F]/90 
                backdrop-blur-sm rounded-3xl border border-[#A259FF]/20 
                overflow-hidden transition-all duration-500 hover:scale-105
                hover:shadow-[0_20px_40px_rgba(162,89,255,0.3)]
                hover:border-[#A259FF]/40 w-full
                transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/5 via-transparent to-[#872ff7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-12 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-bold text-white mb-4 font-sans">
                    {event.title}
                  </h2>
                  <div className="flex items-center justify-center text-[#A259FF] mb-6">
                    <Calendar className="w-6 h-6 mr-3" />
                    <span className="text-xl font-medium">{event.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl text-[#CCCCCC] mb-12 text-center leading-relaxed max-w-xl mx-auto">
                  {event.description}
                </p>

                {/* CTA Button - Fully clickable version */}
                <div className="text-center">
                  <button
                    className="
      bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white 
      rounded-full font-semibold transition-all duration-300 
      hover:scale-105 hover:shadow-lg border-none cursor-pointer
      flex items-center justify-center gap-3 group-hover:gap-4
      py-5 px-12 text-xl mx-auto
      focus:outline-none focus:ring-2 focus:ring-[#A259FF]/50
      active:scale-95 relative
    "
                    onClick={() => navigate(event.path)}
                    type="button"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      userSelect: "none",
                    }}
                  >
                    <Users className="w-6 h-6 select-none" />
                    <span className="select-none">{event.button}</span>
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 select-none" />
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A259FF]/10 to-[#872ff7]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#872ff7]/10 to-[#A259FF]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
