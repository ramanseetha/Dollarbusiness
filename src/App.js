import './App.css';
import React, { useState } from "react";
import HeroWithMarquee from './components/HeroWithMarquee';
// import LeadingBoldly from './components/LeadingBoldly';
import TrustSection from './components/TrustSection';
import FeaturedIn from './components/FeaturedIn';
import PlatformSection from './components/PlatformSection';
import DataStrategySection from './components/DataStrategySection';
import Testimonials from './components/Testimonials';
import BusinessInsightsSection from './components/BusinessInsightsSection';
import MobileAppSection from './components/MobileAppSection';
import TestimonialsCTA from './components/TestimonialsCTA';
import ExperienceCentreSection from './components/ExperienceCentreSection';
import TestimonialsSection from './components/TestimonialsSection';
import ExImPower from './components/ExImPower';
import GlobalPartners from './components/GlobalPartners';
import FaqsSection from './components/FaqsSection';
import FooterCTA from './components/FooterCTA';
import PopupModal from './components/pop';


function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    

  return (
    <>
  <HeroWithMarquee openPopup={() => setIsPopupOpen(true)}/>
  {/* <LeadingBoldly openPopup={() => setIsPopupOpen(true)} /> */}
  <TrustSection openPopup={() => setIsPopupOpen(true)} />
  <FeaturedIn  />
  <PlatformSection openPopup={() => setIsPopupOpen(true)} />
  <DataStrategySection openPopup={() => setIsPopupOpen(true)} />
  <Testimonials openPopup={() => setIsPopupOpen(true)} />
  <BusinessInsightsSection openPopup={() => setIsPopupOpen(true)} />
  <MobileAppSection openPopup={() => setIsPopupOpen(true)} />
  <TestimonialsCTA openPopup={() => setIsPopupOpen(true)} />
  <ExperienceCentreSection openPopup={() => setIsPopupOpen(true)} />
  <TestimonialsSection openPopup={() => setIsPopupOpen(true)}/>
  <ExImPower openPopup={() => setIsPopupOpen(true)} />
  <GlobalPartners openPopup={() => setIsPopupOpen(true)} />
  <FaqsSection />
  <FooterCTA openPopup={() => setIsPopupOpen(true)}/>
  <PopupModal show={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

export default App;
