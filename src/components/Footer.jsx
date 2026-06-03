import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
return ( 
<footer className="px-3 md:px-5 pb-5">
   <div className="bg-[#0d0d12] text-white rounded-[30px] px-6 md:px-12 py-12 md:py-16">


    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-12 lg:gap-20">

      {/* Logo + Newsletter */}
      <div>
        <img
          src="/675016b17f87305f89931031_carrent.svg"
          alt="Carent Car Rental Services Logo"
          className="h-12 w-auto"
        />

        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            Subscribe to our newsletter
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row overflow-hidden rounded-2xl max-w-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#17171d] px-5 py-4 text-white outline-none"
            />

            <button className="bg-yellow-400 text-black px-6 py-4 font-medium hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Pages */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Pages
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/cars" className="hover:text-yellow-400 transition">
              Cars
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/blogs" className="hover:text-yellow-400 transition">
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      {/* Utility Pages */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Utility Pages
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>
            <Link to="/faqs" className="hover:text-yellow-400 transition">
              FAQs
            </Link>
          </li>

          <li>
            <Link to="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </li>

          <li>
            <Link to="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-10"></div>

    {/* Bottom Section */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

      <p className="text-gray-400 text-center lg:text-left">
        © {new Date().getFullYear()} Carent. All Rights Reserved.
      </p>

      <div className="flex items-center gap-5 text-gray-300">
        <FaFacebookF
          size={20}
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