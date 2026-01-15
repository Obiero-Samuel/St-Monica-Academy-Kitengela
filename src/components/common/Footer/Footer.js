import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="main-footer" role="contentinfo">
        <span tabIndex="0">© {new Date().getFullYear()} InteractiveSite. All rights reserved.</span>
    </footer>
);

export default Footer;
