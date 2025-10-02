import React from "react";
import Navigation from "../components/Navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-[#151522] to-[#0D0D1F] text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] text-white mb-8 text-center tracking-tight drop-shadow-lg">
            Contact Us
          </h1>

          {/* College Images Section */}

          {/* Location and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Location Section */}
            <div className="bg-[#18182a]/80 border border-[#A259FF]/20 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-['Space_Grotesk']">
                <MapPin className="w-6 h-6 text-[#A259FF]" />
                Location
              </h3>
              <div className="space-y-4">
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    Agnel Polytechnic Vashi
                  </h4>
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Sector 9A, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                </div>
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <h4 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#A259FF]" />
                    Office Hours
                  </h4>
                  <p className="text-[#CCCCCC] text-sm">
                    Monday - Friday: 9:00 AM - 3:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <h4 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#A259FF]" />
                    General Contact
                  </h4>
                  <p className="text-[#CCCCCC] text-sm">
                    Phone:{" "}
                    <a
                      href="tel:02227661924"
                      className="text-[#A259FF] underline"
                    >
                      02227661924
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:423agnel@gmail.com"
                      className="text-[#A259FF] underline"
                    >
                      423agnel@gmail.com
                    </a>
                    <br />
                    Website:{" "}
                    <a
                      href="https://www.apv.ac.in"
                      className="text-[#A259FF] underline"
                      target="_blank"
                    >
                      www.apv.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* E-Cell Contact Section */}
            <div className="bg-[#18182a]/80 border border-[#A259FF]/20 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-['Space_Grotesk']">
                <Mail className="w-6 h-6 text-[#A259FF]" />
                E-Cell Contacts
              </h3>
              <div className="space-y-4">
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    General E-Cell
                  </h4>
                  <p className="text-[#CCCCCC] text-sm">
                    Email:{" "}
                    <a
                      href="mailto:ecell@apv.edu"
                      className="text-[#A259FF] underline"
                    >
                      team@ecellapv.in
                    </a>
                  </p>
                </div>
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <div className="font-semibold text-lg text-white mb-2">
                    Mr Pranavkumar Bhadane
                  </div>
                  <div className="text-sm text-[#CCCCCC] mb-2">
                    Faculty Coordinator
                  </div>
                  <div className="text-sm">
                    Phone:{" "}
                    <a
                      href="tel:+917821096591"
                      className="text-[#A259FF] underline"
                    >
                      +91 78210 96591
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:johndoe@apv.edu"
                      className="text-[#A259FF] underline"
                    >
                      pranavkumar@ecellapv.in
                    </a>
                  </div>
                </div>
                <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20">
                  <div className="font-semibold text-lg text-white mb-2">
                    Soham Dhanokar
                  </div>
                  <div className="text-sm text-[#CCCCCC] mb-2">
                    E-Cell President
                  </div>
                  <div className="text-sm">
                    Phone:{" "}
                    <a
                      href="tel:+919321895202"
                      className="text-[#A259FF] underline"
                    >
                      +91 93218 95202
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:president@ecellapv.in"
                      className="text-[#A259FF] underline"
                    >
                      president@ecellapv.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-[#18182a]/80 border border-[#A259FF]/20 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-['Space_Grotesk']">
              Find Us on Map
            </h3>
            <div className="bg-[#232347]/60 rounded-xl p-4 border border-[#A259FF]/20 h-64 flex items-center justify-center">
              <div className="text-center text-[#CCCCCC]">
                <MapPin className="w-16 h-16 text-[#A259FF] mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">
                  Agnel Polytechnic Vashi
                </p>
                <p className="text-sm mb-4">
                  Sector 9A, Vashi, Navi Mumbai, Maharashtra 400703
                </p>
                <a
                  href="https://maps.google.com/?q=Agnel+Polytechnic+Vashi+Sector+9A+Vashi+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
