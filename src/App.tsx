import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import EventsPage from "./pages/EventsPage";
import Team from "./components/Team";
// import Highlights from './components/Highlights';
// import CTA from './components/CTA';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AutoScrollToTop from "./components/AutoScrollToTop";
// import Apvcouncil from "./pages/Apvcouncil";
import RegistrationPage from "./pages/RegistrationPage";
import PitchnovaPage from "./pages/PitchnovaPage";
import ContactPage from "./pages/ContactPage";
import Agnelabout from "./components/Agnelabout";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
// import ContactCard from "./components/contactcard";
// import ContactCard2 from "./components/1ContactCard";
import WebsitesSlider from "./components/WebsitesSlider";
import Incubatoin from "./components/incubation";
import PitchnovaHighlight from "./components/PitchnovaHighlight";

function Home() {
  return (
    <>
      <Hero />
      <PitchnovaHighlight />
      <Agnelabout />
      <VisionMission />
      <Team />
      <About />
      <WebsitesSlider />
      <Incubatoin />
    </>
  );
}
// function Home() {
//   return (
//     <>
//       <Apvcouncil />
//     </>
//   );
// }

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
        <Navigation />
        <ScrollToTop />
        <AutoScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/pitch" element={<EventsPage />} />
          <Route path="/events/register" element={<RegistrationPage />} />
          <Route path="/events/pitchnova" element={<PitchnovaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
