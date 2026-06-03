import { Link, useLocation } from "react-router-dom";
import { MapPinned, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Active Link Function
  const activeLink = (path) =>
    location.pathname === path
      ? "text-yellow-400"
      : location.pathname === "/"
        ? "text-white hover:text-yellow-400"
        : "text-white hover:text-yellow-400";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-6 md:pt-10">

      <div className="flex items-center justify-between">

{/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/675016b17f87305f89931031_carrent.svg"
            alt="Carent Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:block bg-[#111111] px-10 py-4 rounded-3xl shadow-xl">
          <ul className="flex items-center gap-10 text-lg font-medium">

            <li>
              <Link
                to="/"
                className={`${activeLink("/")} transition duration-300`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`${activeLink("/about")} transition duration-300`}
              >
                About
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer transition duration-300 ${location.pathname !== "/"
                    ? "text-white hover:text-yellow-400"
                    : "text-white hover:text-yellow-400"
                  }`}
              >
                <span>Pages</span>
                <ChevronDown size={18} />
              </div>

              <div
                className={`absolute top-14 left-0 w-64 bg-[#1a1a1a] rounded-2xl p-4 shadow-2xl transition-all duration-300 ${showDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="flex flex-col gap-4 text-lg text-white">

                  <Link to="/" className="hover:text-yellow-400 transition">
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="hover:text-yellow-400 transition"
                  >
                    About
                  </Link>

                  <Link
                    to="/cars"
                    className="hover:text-yellow-400 transition"
                  >
                    Cars
                  </Link>

                  <Link
                    to="/blogs"
                    className="hover:text-yellow-400 transition"
                  >
                    Blogs
                  </Link>

                  <Link
                    to="/contact"
                    className="hover:text-yellow-400 transition"
                  >
                    Contacts
                  </Link>

                  <Link
                    to="/faqs"
                    className="hover:text-yellow-400 transition"
                  >
                    FAQs
                  </Link>

                  <Link
                    to="/terms"
                    className="hover:text-yellow-400 transition"
                  >
                    Terms & Conditions
                  </Link>

                  <Link
                    to="/privacy"
                    className="hover:text-yellow-400 transition"
                  >
                    Privacy Policy
                  </Link>

                </div>
              </div>
            </li>

            <li>
              <Link
                to="/cars"
                className={`${activeLink("/cars")} transition duration-300`}
              >
                Cars
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`${activeLink("/contact")} transition duration-300`}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        <button
          className={`lg:hidden ${location.pathname === "/"
              ? "text-white"
              : "text-black"
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[700px] mt-6" : "max-h-0"
          }`}
      >
        <div className="bg-[#111111] rounded-3xl p-6 text-white shadow-2xl">

          <div className="flex flex-col gap-6 text-lg">

            <Link to="/" className="text-yellow-400">
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between cursor-pointer hover:text-yellow-400 transition"
              >
                <span>Pages</span>
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${showDropdown ? "rotate-180" : ""
                    }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${showDropdown ? "max-h-96 mt-4" : "max-h-0"
                  }`}
              >
                <div className="flex flex-col gap-4 pl-4 text-base text-gray-300">

                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/cars">Cars</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/contact">Contacts</Link>
                  <Link to="/faqs">FAQs</Link>
                  <Link to="/terms">Terms & Conditions</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>

                </div>
              </div>
            </div>

            <Link
              to="/cars"
              className="hover:text-yellow-400 transition"
            >
              Cars
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;