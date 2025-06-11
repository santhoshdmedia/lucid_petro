import { useState } from 'react';
import logo from '../assets/lucidLogo.png';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';





export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation items data with dropdown support
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { 
      label: 'Products',
      subItems: [
        { path: '/products/automotive-grease', label: 'Automotive Grease' },
        { path: '/products/engine-oil', label: 'Engine Oil' },
        { path: '/products/gear-oil', label: 'Gear Oil' },
        { path: '/products/grease-bucket', label: 'Grease Bucket' },
        { path: '/products/lubricating-grease', label: 'Lubricating Grease' },
      ]
    },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#005f5a] text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Lucid Petro Chemical Company Logo"
              className="size-26 w-auto"
             
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center px-4 py-2 text-lg font-medium text-white hover:text-[#BDD9D7] transition-colors">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-23 mt-0 w-56 origin-top-left rounded bg-[#004a46] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-6 py-3 text-white hover:bg-[#003a36] transition-colors "
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group px-4 py-2 text-lg font-medium"
                >
                  <span className="text-white hover:text-[#BDD9D7] transition-colors">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#BDD9D7] w-0 group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#BDD9D7] hover:bg-[#004a46] focus:outline-none focus:ring-2 focus:ring-[#BDD9D7]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}
          aria-hidden={!isMenuOpen}
        >
          <div className="pt-2 pb-4 space-y-1 rounded-lg mt-2">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="px-4 py-3">
                  <div className="text-lg font-medium text-white">{item.label}</div>
                  <div className="mt-2 space-y-2 pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block py-2 text-white hover:bg-[#003a36] transition-colors rounded px-2"
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 text-lg font-medium text-white hover:bg-[#003a36] transition-colors rounded"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal justify-between  p-[4rem] px-[2rem] lg:px-[10rem] bg-[#005f5a] text-[#BDD9D7]">
        <div className='flex flex-col items-start justify-center '>
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
              +91 12345 67890
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              info@lucidpetrochemical.com
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-xl mt-1" />
              Thuraiyur, Srirangam, Tiruchirappalli-621004
              
            </p>
          </div>
         
        </div>
        <nav className='flex flex-col justify-center space-x-4 text-lg'>
          <h3 className="font-semibold text-xl text-white">Products</h3>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/products/automotive-grease'}>Automotive grease</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/products/engine-oil'}>Engine Oil</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/products/gear-oil'}>Gear Oil</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/products/grease-bucket'}>Grease Bucket</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/products/lubricating-grease'}>Lubricating Grease</Link>
        </nav>
        <nav className='flex flex-col justify-center space-x-4 text-lg'>
          <h3 className="font-semibold text-xl text-white">Quick Links</h3>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/'}>Home</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/about-us'}>About us</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/contact'}>Contact us</Link>
          <Link className='hover:text-[#BDD9D7] text-white text-lg' to={'/gallery'}>Gallery</Link>
        </nav>
        

        

      </footer>
      <div className="bg-[#003a38] text-[#BDD9D7] py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Lucid Industries Ltd. All rights reserved. Developed by Dmedia Trichy
        </p>
      </div>
    </>
  )
}

import { useLocation } from 'react-router-dom';

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
const hideBreadcrumbsRoutes = ['/', '/products'];
if (hideBreadcrumbsRoutes.includes(location.pathname)) {
  return null;
}
  const breadcrumbItems = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join('/')}`;
    const isLast = index === pathParts.length - 1;
    
    return (
      <li key={part}>
        {isLast ? (
          <span className="text-gray-500">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </span>
        ) : (
          <Link to={path} className="text-[#005f5a] hover:text-[#003a36]">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="text-sm breadcrumbs p-4">
      <ul>
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        {breadcrumbItems}
      </ul>
    </div>
  );
}




