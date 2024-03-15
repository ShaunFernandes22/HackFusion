import React from "react";
import Header from "../components/landing-page/Header";
import HeroSection from "../components/landing-page/HeroSection";
import FeatureSection from "../components/landing-page/FeatureSection";
import ContactSection from "../components/landing-page/ContactSection";
import Footer from "../components/landing-page/Footer";
import TestimonialSection from "../components/landing-page/TestimonialSection";
const Landing = () => {
  return (
    <div >
      <Header />
      <HeroSection />
      <FeatureSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
