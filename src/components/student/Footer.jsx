import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="mx-auto mt-15 px-10 md:px-30 bg-gray-800 text-white/80 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-between gap-10 border-b border-white/30 pb-10 text-semibold">
        <div className="flex flex-col items-start gap-3">
          <img src={assets.logo_dark} alt="logo" />
          <p>
            In India, we operate from Bangalore, and serves courses on global
            level, our headquarters located in florida.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start lg:items-center gap-3">
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-semibold text-white">Company</h2>
            <ul className="flex flex-col text-sm gap-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-start gap-3">
          <h2 className="font-semibold text-white">
            Subscibe to our news letter
          </h2>
          <p className="text-white/80">
            The latest news, articles,and resources sent to your inbow weekly.
          </p>
          <div className="flex">
            <input
              className="min-w-0 w-full border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 
            outline-none rounded px-2 text-sm sm:text-lg"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-blue-600 p-2 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="pt-5 text-center text-xs md:text-sm text-white/50">
        Copyright 2025 &copy; LearnBest. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
