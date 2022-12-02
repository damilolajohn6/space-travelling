import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" text="Reach out to us" />
      <Forms />
      <Footer />
    </div>
  );
};

export default Contact;
