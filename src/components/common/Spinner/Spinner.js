import React from "react";
import { motion } from "framer-motion";
import "./Spinner.css";

const Spinner = () => (
    <motion.div
        className="spinner"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-label="Loading"
        role="status"
        tabIndex={0}
    >
        <div className="spinner-circle" />
    </motion.div>
);

export default Spinner;
