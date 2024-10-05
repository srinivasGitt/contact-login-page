// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import "@fontsource/inter";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans";
import "@fontsource/nunito";
import Header from './components/Header';
import Layout from './components/Layout';


function App() {

  return (
    <Router>
      <Layout />
    </Router>
    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
