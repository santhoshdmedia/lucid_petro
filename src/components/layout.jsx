import { useState } from "react";
import logo from "../assets/lucidLogo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Navigation items data
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About" },
    { path: "/gallery", label: "Gallery" },
    {
      label: "Products",
      subItems: [
        { path: "/products/automotive-grease", label: "Automotive Grease" },
        { path: "/products/engine-oil", label: "Engine Oil" },
        { path: "/products/gear-oil", label: "Gear Oil" },
        { path: "/products/grease-bucket", label: "Grease Bucket" },
        { path: "/products/lubricating-grease", label: "Lubricating Grease" },
      ],
    },
    { path: "/contact", label: "Contact us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  // Check if current path matches or starts with the nav item path
  const isActive = (path) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#034a9a] text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center focus:outline-none focus:ring-2 focus:ring-[#BDD9D7] rounded"
            aria-label="Home"
            onClick={closeAllDropdowns}
          >
            <img
              src={logo}
              alt="Lucid Petro Chemical Company Logo"
              className="size-20 lg:size-24 xl:size-26 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  
                >
                  <button
                    className={`flex items-center px-4 py-2 text-lg font-medium text-white hover:text-[#BDD9D7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BDD9D7] rounded focus:border-none ${
                      isActive("/products") ? "text-[#BDD9D7]" : ""
                    }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${item.label}`}
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    id={`dropdown-${item.label}`}
                    className={`absolute left-0 top-[5rem] mt-2 w-56 origin-top-left rounded-md bg-[#034a9a] shadow-lg   transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`menu-button-${item.label}`}
                     onMouseLeave={closeAllDropdowns}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-white hover:bg-[#003a36] transition-colors focus:bg-[#003a36] focus:outline-none ${
                            isActive(subItem.path) ? "bg-[#003a36]" : ""
                          }`}
                          role="menuitem"
                          onClick={closeAllDropdowns}
                         
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-lg font-medium text-white hover:text-[#BDD9D7] transition-colors group focus:outline-none ${
                    isActive(item.path) ? "text-[#BDD9D7]" : ""
                  }`}
                  onClick={closeAllDropdowns}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#BDD9D7] transition-all duration-300 ${
                      isActive(item.path) ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  ></span>
                </Link>
              )
            )}

            {/* Contact Button with Animation */}
            <a
              href="tel:+917402623998"
              className="lg:ml-30 md:ml-0  ml-20 px-6 py-3 bg-[#BDD9D7] text-[#034a9a] font-medium rounded-full transition-all duration-300
                        hover:bg-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white
                        active:scale-95 flex gap-4 items-center justify-center "
            >
            <FaPhoneAlt className="text-xl" /> <span>    +91 74026 23998</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#BDD9D7] hover:bg-[#004a46] focus:outline-none focus:ring-2 focus:ring-[#BDD9D7]"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden transition-all duration-300 ease-in-out"
            aria-hidden={!isMenuOpen}
          >
            <div className="pt-2 pb-4 space-y-1 rounded-lg mt-2">
              {navItems.map((item) =>
                item.subItems ? (
                  <div key={item.label} className="py-1">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-white focus:outline-none"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-1 space-y-1 pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block py-2 px-4 text-white hover:bg-[#003a36] transition-colors rounded focus:bg-[#003a36] focus:outline-none ${
                              isActive(subItem.path) ? "bg-[#003a36]" : ""
                            }`}
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-lg font-medium text-white hover:bg-[#003a36] transition-colors rounded focus:bg-[#003a36] focus:outline-none ${
                      isActive(item.path) ? "bg-[#003a36]" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile Contact Button */}
            </div>
              <a
                href="tel:+917402623998"
                className=" mx-4 mt-2 px-6 py-3 bg-[#BDD9D7] text-[#034a9a] font-medium text-center rounded-full transition-all duration-300
                          hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center "
                onClick={closeMenu}
              >
               <FaPhoneAlt className="text-xl" /> <span> +91 74026 23998</span>
              </a>
          </div>
        )}
      </nav>
    </header>
  );
};



export const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal justify-between  p-[4rem] px-[2rem] lg:px-[10rem] bg-[#034a9a] text-[#BDD9D7]">
        <div className="flex flex-col items-start justify-center ">
          <div className="flex items-center justify-between  gap-4">
            <img
              src={logo}
              alt="Lucid Petro Chemical Company Logo"
              className="size-22   "
            />
            <h1 className=" font-semibold text-white text-xl">
              Lucid Petro Chemical
            </h1>
          </div>
          <div className="flex flex-col items-start mt-6 gap-3 text-white text-base">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              +91 74026 23998
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              lucidpetrochemical@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-xl mt-1" />
              Kottathur, Thuraiyur, Tiruchirappalli-621004
            </p>
          </div>
        </div>
        <nav className="flex flex-col justify-center space-x-4 text-lg">
          <h3 className="font-semibold text-xl text-white">Products</h3>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/products/automotive-grease"}
          >
            Automotive grease
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/products/engine-oil"}
          >
            Engine Oil
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/products/gear-oil"}
          >
            Gear Oil
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/products/grease-bucket"}
          >
            Grease Bucket
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/products/lubricating-grease"}
          >
            Lubricating Grease
          </Link>
        </nav>
        <nav className="flex flex-col justify-center space-x-4 text-lg">
          <h3 className="font-semibold text-xl text-white">Quick Links</h3>
          <Link className="hover:text-[#BDD9D7] text-white text-lg" to={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/about-us"}
          >
            About us
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/contact"}
          >
            Contact us
          </Link>
          <Link
            className="hover:text-[#BDD9D7] text-white text-lg"
            to={"/gallery"}
          >
            Gallery
          </Link>
        </nav>
      </footer>
      <div className="bg-[#1482aa] text-[#ffffff] py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Lucid Industries Ltd. All rights
          reserved. Developed by <a href="https://www.dmedia.in/" target="_blank" className="cursor-pointer">Dmedia</a>
        </p>
      </div>
    </>
  );
};

import { useLocation } from "react-router-dom";

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const hideBreadcrumbsRoutes = ["/", "/products"];
  if (hideBreadcrumbsRoutes.includes(location.pathname)) {
    return null;
  }
  const breadcrumbItems = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;
    const isLast = index === pathParts.length - 1;

    return (
      <li key={part}>
        {isLast ? (
          <span className="text-white font-bold">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </span>
        ) : (
          <Link to={path} className="text-white font-bold">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="text-sm breadcrumbs py-5">
      <ul>
        <li>
          <Link to="/" className="text-white  font-bold ">
            Home
          </Link>
        </li>
        {breadcrumbItems}
      </ul>
    </div>
  );
}

import { useEffect } from "react";
import { motion } from "framer-motion";

export const LucidLoader = ({ nav, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [nav, duration]);

  if (progress >= 100) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#034a9a]"
      role="status"
      aria-label="Loading"
    >
      {/* Animated Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-white">
          <span className="text-[#bdd9d7]">LUCID</span> OILS & Grease
        </h1>
        <p className="text-white/80 mt-2">Lucidi Petro Chemical</p>
      </motion.div>

      {/* Oil Droplets Animation */}
      <div className="relative h-32 w-32 mb-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#bdd9d7] rounded-full"
            style={{
              width: `${10 + i * 5}px`,
              height: `${10 + i * 5}px`,
              left: `${i * 25}px`,
              bottom: 0,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full bg-[#bdd9d7] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Percentage Indicator */}
      <span className="text-white text-sm font-medium">
        {Math.floor(progress)}%
      </span>

      {/* Loading Message */}
      <p className="text-white/80 mt-4 text-sm">
        Loading {nav || "content"}...
      </p>
    </div>
  );
};
