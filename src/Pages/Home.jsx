import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Extensions from "../Components/Extensions";
import Questions from "../Components/Questions";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <Hero />
        <Features />
        <Extensions />
        <Questions />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
