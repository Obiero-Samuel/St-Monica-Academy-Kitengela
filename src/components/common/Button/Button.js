import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.08, boxShadow: '0 0 16px var(--interactive-blue)' }}
        whileTap={{ scale: 0.96 }}
        className="animated-btn"
        onClick={onClick}
        {...props}
    >
        {children}
    </motion.button>
);

export default Button;
