import { useState } from "react";
import { useNavigate } from "react-router-dom";
import A from "../../public/assets/A.png";
import agentLogo from "../../public/assets/Agent-logo.png";
import Omiage from "../../public/assets/omiage.png";
import TimeToken from "../../public/assets/time-token.png";
import Token2 from "../../public/assets/token2.png";
import Token3 from "../../public/assets/token3.png";
import { FaBell, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className="flex justify-center text-white py-8 shadow-md">
      <div className="container mx-10 flex justify-between items-center relative">
        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo : logo pour petits écrans et grand logo pour grands écrans */}
        <button onClick={() => navigate("/")}>
        <img
          src={A}
          alt="logo"
          className="h-8 w-auto lg:hidden" // Logo pour mobile (disparaît sur grands écrans)
        />
        <img
          src={agentLogo} // Le logo grand format
          alt="logo"
          className="hidden lg:block h-10 w-auto" // Logo pour grands écrans (disparaît sur mobile)
        />
        </button>

        {/* Mobile Drawer Navigation */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-2/3 h-full bg-slate-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4 relative">
            {/* Close Button - Top Right */}
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="flex flex-col space-y-4 mt-8">
              <li>
                <a href="#home" className="hover:text-gray-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center hover:text-gray-400"
                >
                  <img
                    src={TimeToken}
                    alt="Currency1"
                    className="w-4 h-4 mr-1"
                  />
                  Currency1
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center hover:text-gray-400"
                >
                  <img
                    src={Token2}
                    alt="Currency2"
                    className="w-4 h-4 mr-1"
                  />
                  Currency2
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center hover:text-gray-400"
                >
                  <img
                    src={Token3}
                    alt="Currency3"
                    className="w-4 h-4 mr-1"
                  />
                  Currency3
                </a>
              </li>
            </ul>

            {/* Premium Button in Drawer */}
            <div className="mt-6">
              <button className="bg-amber-400 px-4 py-2 rounded-full hover:bg-amber-200">
                <p className="text-slate-950 text-sm font-extrabold">PREMIUM</p>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:flex-row lg:space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-400">
              News
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-gray-400 focus:outline-none"
            >
              Dashboard
              <FaChevronDown
                className={`ml-1 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-slate-900 text-white shadow-lg rounded-lg w-48 z-50">
                <li>
                  <a href="#service1" className="block px-4 py-2 hover:bg-slate-700">
                    Service 1
                  </a>
                </li>
                <li>
                  <a href="#service2" className="block px-4 py-2 hover:bg-slate-700">
                    Service 2
                  </a>
                </li>
                <li>
                  <a href="#service3" className="block px-4 py-2 hover:bg-slate-700">
                    Service 3
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Currency Section - Visible only on desktop */}
        <div className="flex items-center lg:space-x-4">
          <div className="relative hidden lg:block">
            <span className="absolute -top-2 left-4 bg-slate-950 px-1 text-slate-50 text-sm font-extrabold">
              Boss Fighters
            </span>

            <div className="border border-gray-400 rounded-full px-4 py-2 text-sm">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#about"
                    className="flex items-center hover:text-gray-400"
                  >
                    <img
                      src={TimeToken}
                      alt=""
                      className="w-4 h-4 mr-1"
                    />
                    Currency1
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center hover:text-gray-400"
                  >
                    <img
                      src={Token2}
                      alt=""
                      className="w-4 h-4 mr-1"
                    />
                    Currency2
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center hover:text-gray-400"
                  >
                    <img
                      src={Token3}
                      alt=""
                      className="w-4 h-4 mr-1"
                    />
                    Currency3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Button - Desktop only */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <button className="bg-amber-400 hover:bg-amber-200 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-2 rounded-full">
              <p className="text-slate-950 text-sm font-extrabold">PREMIUM</p>
            </button>
          </div>

          {/* Notification Icon - Desktop only */}
          <FaBell className="hidden lg:inline-block text-white w-5 h-5 ml-4 transform hover:scale-125 transition-transform duration-300 ease-in-out" />

          {/* Profile Button */}
          <div className=" lg:flex lg:items-center">
              <a href="/profile">
            <button className="flex justify-center items-center space-x-2 p-2 hover:bg-zinc-700 rounded-full">
              <p className="hidden lg:block text-white text-sm">Omiage</p>
              <img
                src={Omiage}
                alt="profile"
                className="w-8 h-8"
              />
            </button>
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
