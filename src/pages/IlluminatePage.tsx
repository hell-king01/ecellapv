import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Ticket, Users, ArrowRight, Zap, Award, Briefcase, MessageCircle } from 'lucide-react';

const IlluminatePage: React.FC = () => {
  const navigate = useNavigate();

  const details = {
    date: '16th Oct 2025',
    time: '10am-4pm',
    venue: 'Seminar Hall, Agnel Polytechnic Vashi',
    status: 'Event Concluded',
    brochureLink: 'https://drive.google.com/file/d/1P3cdSsxc5_9R8GC0RperV3xUW6BZLhkA/view?usp=sharing'
  };

  const contacts = [
    { name: 'Soham Dhanokar', role: 'President, APV E-Cell', phone: '+91 9321895202' },
    { name: 'Parth Naukudkar', role: 'Finance & Operation Head, APV E-Cell', phone: '+91 8828167334' },
  ];

  const benefits = [
    { icon: <Award className="w-8 h-8 text-[#A259FF]" />, text: 'IIT Bombay certificate & exclusive startup kit' },
    { icon: <Briefcase className="w-8 h-8 text-[#A259FF]" />, text: 'Real startup skills for your future' },
    { icon: <Users className="w-8 h-8 text-[#A259FF]" />, text: 'Boosted confidence, new friends, and networking' },
    { icon: <Ticket className="w-8 h-8 text-[#A259FF]" />, text: 'Discounts on the legendary E-Summit at IITB!' },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white pt-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151522] to-[#0D0D1F]" />
        <div className="absolute inset-0 opacity-10 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-[#A259FF] hover:text-white transition-colors duration-300 mb-8 font-semibold"
          >
            <ArrowRight className="w-5 h-5 transform rotate-180" />
            Back to Events
          </button>

          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A259FF]">
              Illuminate Workshop
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to kickstart your entrepreneurial journey? An exclusive, high-energy workshop powered by <span className="font-bold text-[#A259FF]">E-Cell IIT Bombay</span>!
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Details & Contacts */}
            <div className="md:col-span-1 space-y-8">
              {/* Details Card */}
              <div className="bg-[#151522]/80 p-6 rounded-2xl border border-[#A259FF]/20">
                <h2 className="text-2xl font-bold mb-6 text-white">Event Details</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-4"><Calendar className="w-5 h-5 text-[#A259FF]" /> <span>{details.date}</span></li>
                  <li className="flex items-center gap-4"><Zap className="w-5 h-5 text-[#A259FF]" /> <span>{details.time}</span></li>
                  <li className="flex items-center gap-4"><MapPin className="w-5 h-5 text-[#A259FF]" /> <span>{details.venue}</span></li>
                  <li className="flex items-center gap-4 text-yellow-400 font-medium">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                    <span>{details.status}</span>
                  </li>
                </ul>
              </div>

              {/* Contacts Card */}
              <div className="bg-[#151522]/80 p-6 rounded-2xl border border-[#A259FF]/20">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
                <div className="space-y-4">
                  {contacts.map(contact => (
                    <div key={contact.name}>
                      <p className="font-semibold text-white">{contact.name}</p>
                      <p className="text-sm text-gray-400">{contact.role}</p>
                      <a href={`tel:${contact.phone}`} className="text-[#A259FF] hover:underline">{contact.phone}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - About & Benefits */}
            <div className="md:col-span-2 bg-[#151522]/80 p-8 rounded-2xl border border-[#A259FF]/20">
              <h2 className="text-3xl font-bold mb-6 text-white">About the Workshop</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Get inspired by a star entrepreneur, crack real startup challenges, and dive into hands-on business games and team fun. You’ll learn how to brainstorm ideas 💡, create your first business model 📊, explore startup finance 💸, and master the perfect pitch 🎤.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white">What's in it for you?</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#0D0D1F]/60 rounded-lg">
                    {benefit.icon}
                    <p className="text-gray-300">{benefit.text}</p>
                  </div>
                ))}
              </div>

              {/* Event Status */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#A259FF]/10 to-[#872ff7]/10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Event Concluded</h3>
                <p className="text-gray-300">Thank you to everyone who participated in Illuminate 2025!</p>
                <div className="mt-4">
                  <a 
                    href={details.brochureLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-transparent border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    View Event Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IlluminatePage;
