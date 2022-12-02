import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/training";
import Navbar from "../components/Navbar";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING" text="Pre-flight & In-flight Training" />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
