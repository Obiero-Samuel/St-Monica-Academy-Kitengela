import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import GlobalToast from '../common/GlobalToast/GlobalToast';
import './Layout.css';

const Layout = ({ children, theme, toggleTheme }) => (
    <div className="main-layout">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <GlobalToast />
        <main className="main-content">{children}</main>
        <Footer />
    </div>
);

export default Layout;
