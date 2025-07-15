import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <section className="companies-section py-5">
      <div className="container mx-auto px-3 text-xl text-gray-500 text-center">
        <p>Trusted by learners from:</p>
        <div className="flex flex-wrap items-center justify-center mt-8 gap-x-12 gap-y-6 ">
          <img src={assets.microsoft_logo} alt="microsoft-logo" />
          <img src={assets.accenture_logo} alt="accenture-logo" />
          <img src={assets.adobe_logo} alt="adobe-logo" />
          <img src={assets.paypal_logo} alt="paypal-logo" />
          <img src={assets.walmart_logo} alt="walmart-logo" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
