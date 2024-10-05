// Layout.js
import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './LoginPage';
import Contact from './ContactPage';

const Layout = ({ children }) => {

    const location = useLocation();
    const showRegister = location.pathname === '/'
    return (
        <>
            <Header showRegister={showRegister} />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default Layout;
