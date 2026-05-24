import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-3 md:px-5 pb-5">
      <div className="bg-[#0d0d12] text-white rounded-[30px] px-6 md:px-12 py-12 md:py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Newsletter */}
          <div className="lg:col-span-2">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <LuMapPinned  className="text-yellow-400" size={34} />

              <h1 className="text-4xl font-light tracking-wide">
                Carent
              </h1>
            </div>

            {/* Newsletter */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-medium leading-snug">
                Subscribe to our newsletter
              </h2>

              {/* Input */}
              <div className="mt-6 flex flex-col sm:flex-row overflow-hidden rounded-2xl max-w-xl">
                
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#17171d] px-5 py-4 text-white outline-none"
                />

                <button className="bg-yellow-400 text-black lg:px-8 font-medium hover:bg-yellow-300 transition duration-300">
                  Subscribe!
                </button>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              Pages
            </h2>

            <ul className="space-y-5 text-gray-300 text-lg">
              <li className="text-yellow-400 cursor-pointer">Home</li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                About
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Cars
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Contact
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              Utility Pages
            </h2>

            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-lg text-gray-300">

              <p className="hover:text-yellow-400 transition cursor-pointer">
                Style Guide
              </p>

              <p className="hover:text-yellow-400 transition cursor-pointer">
                Coming Soon
              </p>

              <p className="hover:text-yellow-400 transition cursor-pointer">
                Instructions
              </p>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Text */}
          <p className="text-gray-300 text-center md:text-left text-base">
            Designed by{" "}
            <span className="text-yellow-400 cursor-pointer">
              Webestica
            </span>
            , Powered by{" "}
            <span className="text-yellow-400 cursor-pointer">
              Webflow
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-300">

            <FaFacebookF 
              size={22}
              className="hover:text-yellow-400 cursor-pointer transition"
            />

            <PiInstagramLogoFill 
              size={22}
              className="hover:text-yellow-400 cursor-pointer transition"
            />

            <FaLinkedin
              size={22}
              className="hover:text-yellow-400 cursor-pointer transition"
            />

            <FaSquareXTwitter 
              size={22}
              className="hover:text-yellow-400 cursor-pointer transition"
            />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;