import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Calendar,
  Users,
  Download,
  Info,
  MessageCircle,
  MapPin,
  Target,
  Trophy,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Star,
  Network,
  Rocket,
  Zap,
} from "lucide-react";
import VideoSection from "../components/VideoSection";

const whyPitchnova = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Trophies + Certificates",
    content: "Winner will get Certificate from IIT BOMBAY and Trophies",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Networking Opportunities",
    content: "Connect with industry experts, mentors, and fellow entrepreneurs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Incubation Opportunities",
    content: "Get access to startup incubation programs and mentorship",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Chance to compete in Eureka! Zonals",
    content:
      "Top performers can get a chance to compete at the IIT BOMBAY zonal level",
    color: "from-green-500 to-emerald-500",
  },
];

const timelineEvents = [
  {
    title: "Event Launch",
    date: "August 8, 2025",
    description: "Registration opens for all participants",
    icon: <Lightbulb className="w-5 h-5" />,
    status: "completed",
  },
  {
    title: "Registration Deadline",
    date: "August 16, 2025 : 11:59 AM",
    description: "Last date to complete registration",
    icon: <Users className="w-5 h-5" />,
    status: "completed",
  },
  {
    title: "Online Orientation",
    date: "August 16, 2025 Evening",
    description: "Mandatory orientation session",
    icon: <Info className="w-5 h-5" />,
    status: "completed",
  },
  {
    title: "Pitchnova Event",
    date: "August 25, 2025",
    description: "Main event day - Pitch competition",
    icon: <Trophy className="w-5 h-5" />,
    status: "active",
  },
];

const eventHighlights = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Date",
    content: "25th August 2025",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Venue",
    content: "Seminar Hall, Agnel Polytechnic, Vashi",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Purpose",
    content: "Foster knowledge-sharing, through Pitching competition",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Winners",
    content:
      "Top 3 teams can get a chance compete in IIT Bombay's Eureka! Zonal rounds",
    color: "from-yellow-500 to-orange-500",
  },
];

const competitionStructure = [
  {
    phase: "Pitch Presentation",
    duration: "2 minutes",
    description: "Present your startup idea with passion and clarity",
    icon: "🎯",
  },
  {
    phase: "Q&A Session",
    duration: "3 minutes",
    description: "Answer jury questions and defend your concept",
    icon: "🤔",
  },
  {
    phase: "Evaluation",
    duration: "Real-time",
    description:
      "Jury evaluates based on innovation, viability, and presentation",
    icon: "⚖️",
  },
  {
    phase: "Results",
    duration: "Same day",
    description: "Top 3 teams will be awarded!",
    icon: "🏆",
  },
];

const judgingCriteria = [
  { criteria: "Innovation & Uniqueness", weight: "25%", color: "bg-blue-500" },
  { criteria: "Market Potential", weight: "20%", color: "bg-green-500" },
  { criteria: "Business Viability", weight: "20%", color: "bg-purple-500" },
  { criteria: "Team Capability", weight: "15%", color: "bg-yellow-500" },
  { criteria: "Presentation Quality", weight: "20%", color: "bg-red-500" },
];

const PitchnovaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#151522] to-[#1a1a2e]">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A259FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#872ff7]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#A259FF]/5 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      <main
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="text-center mb-16 pt-12">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-extrabold font-['Space_Grotesk'] bg-gradient-to-r from-[#A259FF] via-[#872ff7] to-[#ff6b9d] bg-clip-text text-transparent mb-6 animate-gradient-x">
              PITCHNOVA
            </h1>
            <div className="absolute -top-4 -right-4 animate-bounce">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Where{" "}
            <span className="text-[#A259FF] font-semibold">Innovation</span>{" "}
            Meets
            <span className="text-[#872ff7] font-semibold"> Opportunity</span> -
            The Ultimate Startup Pitching Competition
          </p>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-6 py-3 rounded-full font-medium">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Event Concluded - Thank you for participating!</span>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Event Timeline
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A259FF] to-[#872ff7] rounded-full"></div>

            <div className="space-y-8 sm:space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row sm:items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } transition-all duration-700`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node - Positioned differently for mobile */}
                  <div className="flex sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-10 mb-4 sm:mb-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 flex items-center justify-center mx-auto sm:mx-0
              ${
                event.status === "completed"
                  ? "bg-green-500 border-green-400 text-white"
                  : event.status === "active"
                  ? "bg-[#A259FF] border-[#872ff7] text-white animate-pulse"
                  : "bg-gray-600 border-gray-500 text-gray-300"
              }`}
                    >
                      {event.status === "completed" ? (
                        <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : (
                        event.icon
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-5/12 ${
                      index % 2 === 0
                        ? "sm:text-right sm:pr-8"
                        : "sm:text-left sm:pl-8"
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300 break-words overflow-hidden">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-words hyphens-auto">
                        {event.title}
                      </h3>
                      <p className="text-[#A259FF] font-medium mb-2 text-sm sm:text-base break-words">
                        {event.date}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm break-words leading-relaxed hyphens-auto">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VideoSection />

        {/* Open for All Colleges Highlight */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 font-semibold text-lg">
                🎓 Open for All Colleges & Universities
              </span>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-center text-orange-200 text-sm mt-2">
              Students from Polytechnic, Degree, MBA & all educational
              backgrounds welcome
            </p>
          </div>
        </div>

        {/* Competition Structure */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Competition Flow
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {competitionStructure.map((phase, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                  currentStep === index + 1
                    ? "border-[#A259FF] shadow-[#A259FF]/20 shadow-2xl"
                    : "border-white/10"
                }`}
              >
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {phase.phase}
                </h3>
                <div className="text-[#A259FF] font-semibold mb-3">
                  {phase.duration}
                </div>
                <p className="text-gray-300 text-sm">{phase.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#A259FF]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Pitchnova Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Pitchnova?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPitchnova.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IIT Bombay Certificate Highlight Section - Compact Version */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl border-2 border-yellow-500/30 backdrop-blur-lg overflow-hidden p-6 sm:p-8">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>

              <div className="relative text-center">
                {/* Special Achievement Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider">
                    Prestigious Recognition
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Main Highlight */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                  🏆{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                    IIT Bombay
                  </span>{" "}
                  Certificate
                </h2>

                <p className="text-lg sm:text-xl text-yellow-300 font-semibold mb-4">
                  A Mark of Excellence in Innovation
                </p>

                {/* Description */}
                <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
                  Stand out from the crowd! Top performers in Pitchnova get a
                  chance to receive a prestigious certificate from{" "}
                  <span className="text-yellow-300 font-bold">IIT Bombay</span>{" "}
                  – one of India's premier institutes of technology.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-yellow-500/20">
                    <div className="text-xl mb-1">🎯</div>
                    <h4 className="text-yellow-300 font-semibold mb-1 text-sm">
                      Recognition
                    </h4>
                    <p className="text-gray-300 text-xs">
                      Official recognition from IIT Bombay
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-yellow-500/20">
                    <div className="text-xl mb-1">📜</div>
                    <h4 className="text-yellow-300 font-semibold mb-1 text-sm">
                      Certificate
                    </h4>
                    <p className="text-gray-300 text-xs">
                      Digital certificate for your portfolio
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-yellow-500/20">
                    <div className="text-xl mb-1">⭐</div>
                    <h4 className="text-yellow-300 font-semibold mb-1 text-sm">
                      Prestige
                    </h4>
                    <p className="text-gray-300 text-xs">
                      Boost your academic & career profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Judging Criteria */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Judging Criteria
          </h2>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              {judgingCriteria.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {item.criteria}
                      </span>
                      <span className="text-[#A259FF] font-bold">
                        {item.weight}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: item.weight }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabbed Content Section - Overview and Guidelines Only */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              {[
                {
                  id: "overview",
                  label: "Event Overview",
                  icon: <Info className="w-5 h-5" />,
                },
                {
                  id: "guidelines",
                  label: "Registration Guidelines",
                  icon: <CheckCircle className="w-5 h-5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-4 sm:px-8 sm:py-5 flex items-center justify-center gap-3 font-medium transition-all duration-300 text-sm sm:text-lg ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#A259FF]/20 to-[#872ff7]/20 text-[#A259FF] border-b-4 border-[#A259FF] shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.icon}
                  <span className="text-center leading-tight">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {activeTab === "overview" && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      About Pitchnova
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full"></div>
                  </div>

                  <p className="text-gray-300 text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                    Agnel Polytechnic Vashi's E-Cell proudly unveils{" "}
                    <span className="text-[#A259FF] font-semibold">
                      Pitchnova
                    </span>{" "}
                    — a dynamic pitching competition designed to ignite
                    innovation and entrepreneurial spirit among aspiring
                    changemakers!
                  </p>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    Scheduled for August 25th, 2025, Pitchnova welcomes
                    students, startups, and innovators from across all
                    educational backgrounds—be it Polytechnic, Degree, MBA, or
                    any other field—to present their groundbreaking ideas.
                  </p>

                  <div className="bg-gradient-to-br from-[#A259FF]/10 via-[#872ff7]/10 to-[#ff6b9d]/10 rounded-2xl p-6 sm:p-8 border-2 border-[#A259FF]/30 backdrop-blur-lg">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                      What Makes Pitchnova Special?
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Chance to compete in Eureka! Zonals",
                        "Expert jury panel with industry experience",
                        "Networking opportunities with fellow entrepreneurs",
                        "Comprehensive feedback on your startup idea",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "guidelines" && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Registration Guidelines
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full"></div>
                  </div>

                  <div className="grid gap-8">
                    {[
                      {
                        title: "Registration Requirements",
                        icon: "📝",
                        color: "from-blue-500/20 to-cyan-500/20",
                        borderColor: "border-blue-500/30",
                        items: [
                          "Complete registration by August 16 11:59 AM, 2025",
                          "Register on Eureka! website with NEC ID of APV E-Cell as referral id. (ecell.in/eureka)",
                          "Teams: 1-6 members from same institution",
                          "The registration fee is ₹200 for teams of up to 4 members. For teams with more than 4 members, an additional ₹50 is charged for each extra member.",
                        ],
                      },
                      {
                        title: "Submission Guidelines",
                        icon: "📋",
                        color: "from-purple-500/20 to-pink-500/20",
                        borderColor: "border-purple-500/30",
                        items: [
                          "Submit pitch deck (PPT) by August 24, 2025",
                          "Use provided PPT template from resources section",
                          "Include: problem, solution, market, model, team, financials",
                        ],
                      },
                      {
                        title: "Important Notes",
                        icon: "⚠️",
                        color: "from-red-500/20 to-orange-500/20",
                        borderColor: "border-red-500/30",
                        items: [
                          "No refund policy applies",
                          "Eureka registration process will be guided during orientation",
                          "Eureka! registration mandatory by August 17, 2025",
                          "Failure to register on Eureka! website will result in automatic disqualification",
                        ],
                      },
                    ].map((section, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${section.color} rounded-2xl p-6 sm:p-8 border-2 ${section.borderColor} backdrop-blur-lg`}
                      >
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                          <span className="text-2xl">{section.icon}</span>
                          {section.title}
                        </h4>
                        <div className="space-y-4">
                          {section.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 bg-white/10 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-[#A259FF] flex-shrink-0 mt-1" />
                              <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Resources Section - Separate from tabs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Resources & Community
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Download essential resources and connect with the Pitchnova
              community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Presentation */}
            <div className="group bg-gradient-to-br from-[#A259FF]/10 to-[#872ff7]/10 rounded-2xl p-6 sm:p-8 border border-[#A259FF]/30 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#A259FF] to-[#872ff7] rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#A259FF]">
                  Presentation Template
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  Each team is required to submit their pitch (PPT) in this PPT
                  Template format
                </p>
                <a
                  href="/PitchNova Ppt.pptx"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#A259FF] to-[#872ff7] text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#872ff7] hover:to-[#A259FF]"
                  download
                >
                  <Download className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-bounce" />
                  Download PPT
                </a>
              </div>
            </div>

            {/* WhatsApp Community */}
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-green-500/30 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-green-400">
                  WhatsApp Community
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  Join our WhatsApp group for real-time updates, announcements,
                  and community support.
                </p>
                <a
                  href="https://chat.whatsapp.com/CH66jx4BHlVFoXFUEkQTl1?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-emerald-500 hover:to-green-500"
                >
                  <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-pulse" />
                  Join WhatsApp
                </a>
              </div>
            </div>

            {/* Instagram Page */}
            <div className="group bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl p-6 sm:p-8 border border-pink-500/30 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 sm:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-pink-400">
                  Follow Us on Instagram
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  Stay updated with behind-the-scenes content, winner
                  announcements, and event highlights.
                </p>
                <a
                  href="https://instagram.com/apv_ecell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-rose-500 hover:to-pink-500"
                >
                  <svg
                    className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-spin"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow @apv_ecell
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#A259FF]/10 via-[#872ff7]/10 to-[#ff6b9d]/10 rounded-3xl p-12 border border-[#A259FF]/20 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Pitch Your Idea?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of innovators and entrepreneurs. Your startup
              journey begins here.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="bg-gradient-to-r from-[#A259FF]/10 via-[#872ff7]/10 to-[#ff6b9d]/10 rounded-3xl p-12 border border-[#A259FF]/20 backdrop-blur-md">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Event Concluded
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Thank you for participating in Pitchnova 2025! We appreciate your enthusiasm and innovative ideas.
                </p>
                <div className="flex items-center justify-center gap-3 text-yellow-300">
                  <Trophy className="w-6 h-6" />
                  <span>Winners will be announced soon!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-20">
        <Footer />
      </div>

  <style>{`
    @keyframes gradient-x {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes spin-slow {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 4s ease infinite;
    }

        /* Custom breakpoint for very small screens */
        @media (min-width: 480px) {
          .xs\:flex-row {
            flex-direction: row;
          }
          .xs\:items-center {
            align-items: center;
          }
          .xs\:w-auto {
            width: auto;
          }
          .xs\:inline {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
};

export default PitchnovaPage;
