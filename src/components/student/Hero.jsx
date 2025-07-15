import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="hero-section py-20 text-center bg-gradient-to-b from-cyan-100/70">
      <div className="container mx-auto flex flex-col items-center gap-7  px-10">
        <h1 className="relative text-2xl md:text-3xl font-medium text-gray-800 max-w-3xl">
          Empower your future with the courses desgined by geeks to provide you
          the <span className="text-blue-500">best value possible</span>
          <img
            className="md:block absolute -bottom-7 right-0"
            src={assets.sketch}
            alt="sketch"
          />
        </h1>
        <p className="md:block  font-light text-lg md:text-xl text-gray-500 max-w-2xl ">
          We bring together world class instructors ,interactive content and a
          supportive community to help you achieve your professional goals.
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
