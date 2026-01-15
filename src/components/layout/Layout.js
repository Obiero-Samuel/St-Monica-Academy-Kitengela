import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import GlobalToast from '../common/GlobalToast/GlobalToast';
import './Layout.css';

const Layout = ({ children }) => (
    <div className="main-layout">
        <Header />
        <GlobalToast />
        <main className="main-content">{children}</main>
        <Footer />
    </div>
);

export default Layout;
