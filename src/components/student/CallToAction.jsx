import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <section className="call-to-action-section py-10">
      <div className="container mx-auto px-3 text-center flex flex-col gap-4 items-center">
        <div className="text-xl text-center max-w-5xl">
          <h1 className="text-xl md:text-3xl font-semibold  text-gray-800 ">
            Learn anything,anytime,anywhere
          </h1>
          <p className="text-gray-500 mt-3 text-lg md:text-xl">
            We believe that a learner should never stop learning, no matter what
            the situations are our courses are accessible to learner also in
            offline mode after download as well.
          </p>
        </div>
        <div className="font-medium flex gap-4 items-center justify-center">
          <button className="px-4 py-2 md:py-2   md:px-5 text-sm sm:text-lg rounded-md text-white bg-blue-600">
            Get started
          </button>
          <button className="flex items-center gap-2">
            Learn more <img src={assets.arrow_icon} alt="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
