import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Landing.css";
import Aos from "aos";
import { useEffect } from "react";
import OperateFlow from "../components/OperateFlow";
import Features from "../components/Features";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease" });
  });

  return (
    <>
      <Hero />
      <Features />
      <OperateFlow />

      <Footer />
    </>
  );
};

export default Landing;
