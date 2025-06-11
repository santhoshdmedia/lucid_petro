// src/App.js
import './App.css';
import React from 'react';
import { Navbar, Footer } from './components/layout';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AppBreadcrumbs } from './components/layout';
import routes from './Routes';
import { IoLogoWhatsapp } from "react-icons/io5";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <Router>
     
      <Navbar />
      {/* <AppBreadcrumbs /> */}
      <AppRoutes />
      <div className="fixed bottom-15 right-15 z-50 shadow-lg rounded-full bg-[#25D366] p-3">
        <a href="https://wa.me/6379775070" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className="text-[2.5rem] text-white  transition-colors" />
        </a>
      </div>
      <Footer />
    </Router>
  );
}

export default App;