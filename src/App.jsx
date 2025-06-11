// src/App.js
import './App.css';
import React from 'react';
import { Navbar,Footer } from './components/layout';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AppBreadcrumbs } from './components/layout';
import routes from './Routes';

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
      <Footer />
    </Router>
  );
}

export default App;