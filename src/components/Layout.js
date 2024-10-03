// Layout.js
import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

    const location = useLocation();
    const showRegister = location.pathname === '/'
    return (
        <div>
            <Header showRegister={showRegister} />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
