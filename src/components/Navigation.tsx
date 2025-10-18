import { useState, useEffect } from "react";
import { Menu, X, Calendar, Image as ImageIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", path: "/", label: "Home" },
    { id: "events", path: "/events", label: "Events", icon: Calendar },
    { id: "gallery", path: "/gallery", label: "Gallery", icon: ImageIcon },
    { id: "blog", path: "/blog", label: "Blog" },
    { id: "contact", path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-xl border-b border-[#A259FF]/20 shadow-[0_0_30px_rgba(162,89,255,0.2)] nav-shrink"
          : "bg-[#121212]/90 backdrop-blur-lg border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-24" : "h-28"
          }`}
        >
          <Link
            to="/"
            className="relative flex items-center gap-4 text-white text-xl font-bold group"
          >
            <div className="flex items-center gap-3">
              <img
                src="/agenl.png"
                alt="Agnel Logo"
                className="w-20 h-20 object-contain"
              />

              <img
                src="/logo.png"
                alt="E-Cell Logo"
                className="w-20 h-20 object-contain"
              />

              <span className="relative z-10 font-['Space_Grotesk'] tracking-wide">
                APV <span className="text-[#A259FF]">E-CELL</span>
              </span>
            </div>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A259FF] to-[#872ff7] group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A259FF] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300">
              APV E-CELL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium font-['Space_Grotesk'] transition-all duration-300 group
                    ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white shadow-[0_0_20px_rgba(162,89,255,0.6)] border border-white/30"
                        : "text-[#CCCCCC] hover:text-white hover:bg-[#A259FF]/20 hover:shadow-[0_0_15px_rgba(162,89,255,0.4)] border border-transparent hover:border-[#A259FF]/30"
                    }`}
                >
                  <span className="relative z-10 flex items-center">
                    {IconComponent && (
                      <IconComponent className="w-4 h-4 mr-2" />
                    )}
                    {item.label}
                    {location.pathname === item.path && (
                      <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                    )}
                  </span>
                  {location.pathname === item.path && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-[#A259FF] opacity-70 blur-[10px] z-0"></span>
                      <span className="absolute inset-0 rounded-full border border-white/40 z-0"></span>
                    </>
                  )}
                  <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#A259FF]/40 transition-all duration-300 z-0"></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#CCCCCC] hover:text-white hover:bg-[#A259FF]/20 rounded-full transition-all duration-300 border border-transparent hover:border-[#A259FF]/30"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#A259FF]/20 bg-[#121212]/95 backdrop-blur-lg">
            <div className="space-y-2 px-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-6 py-3 text-sm font-medium font-['Space_Grotesk'] transition-all duration-300 rounded-lg border ${
                      isActive(item.path)
                        ? "text-white bg-gradient-to-r from-[#A259FF]/80 to-[#872ff7]/80 border-[#A259FF]/30 shadow-[0_0_15px_rgba(162,89,255,0.5)]"
                        : "text-[#CCCCCC] hover:text-white hover:bg-[#A259FF]/20 border-transparent hover:border-[#A259FF]/20 hover:shadow-[0_0_10px_rgba(162,89,255,0.3)]"
                    }`}
                  >
                    <div className="flex items-center">
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 mr-2" />
                      )}
                      {item.label}
                      {isActive(item.path) && (
                        <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Glowing accent at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A259FF] to-transparent opacity-50"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
