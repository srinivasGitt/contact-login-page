// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import "@fontsource/inter";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans";
import "@fontsource/nunito";
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
