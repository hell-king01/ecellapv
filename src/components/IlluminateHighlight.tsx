import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, ArrowRight, Zap } from "lucide-react";

const IlluminateHighlight = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Illuminate Featured Event Card */}
        <div className="relative bg-gradient-to-br from-[#A259FF]/10 via-[#872ff7]/10 to-[#00F0FF]/10 rounded-3xl border-2 border-[#00F0FF]/30 backdrop-blur-lg overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#00F0FF]/20 to-[#A259FF]/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#872ff7]/20 to-[#00F0FF]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            {/* Featured Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F0FF] to-[#A259FF] rounded-full px-6 py-2 mb-6">
              <Zap className="w-4 h-4 text-white fill-current" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Featured Workshop
              </span>
              <Zap className="w-4 h-4 text-white fill-current" />
            </div>

            {/* Event Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">
              ✨{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#A259FF] to-[#872ff7]">
                ILLUMINATE
              </span>
            </h2>

            {/* Event Subtitle */}
            <p className="text-xl sm:text-2xl text-[#00F0FF] font-semibold mb-6">
              An Exclusive Workshop by E-Cell IIT Bombay
            </p>

            {/* Event Details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#00F0FF] mb-2">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Date</span>
                </div>
                <p className="text-white text-lg">October 16, 2025</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#A259FF] mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Venue</span>
                </div>
                <p className="text-white text-lg">Seminar Hall</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-center text-[#872ff7] mb-2">
                  <ArrowRight className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Fee</span>
                </div>
                <p className="text-white text-lg">₹700</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-[#CCCCCC] mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to kickstart your entrepreneurial journey? Join our exclusive, high-energy workshop powered by E-Cell IIT Bombay! Learn from industry experts, participate in hands-on activities, and get a chance to win exciting prizes and certificates.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
              {[
                'IIT Bombay Certificate',
                'Exclusive Startup Kit',
                'Hands-on Workshops',
                'Networking Opportunities',
                'E-Summit Discounts',
                'Mentorship Sessions'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-left p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF] flex-shrink-0"></div>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/LrvXyt8DBXkHZU2s6"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-gradient-to-r from-[#00F0FF] to-[#A259FF] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 border-none cursor-pointer flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#00F0FF]/50"
              >
                <Zap className="w-5 h-5" />
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => navigate("/events/illuminate")}
                className="w-full sm:w-auto bg-transparent text-[#00F0FF] border-2 border-[#00F0FF] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-[#00F0FF] hover:text-[#0D0D1F] cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Deadline Notice */}
            <div className="mt-8 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 animate-pulse">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <span className="text-red-300 font-medium text-sm">
                Registration Deadline: October 7, 2025, 11:59 PM IST
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IlluminateHighlight;
