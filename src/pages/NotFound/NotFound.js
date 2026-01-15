import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            background: "var(--glass-bg)",
            borderRadius: "1rem",
            boxShadow: "var(--shadow-md)",
            margin: "2rem auto",
            maxWidth: 500,
            padding: "2rem"
        }}
    >
        <h1 style={{ fontSize: "3rem", color: "var(--interactive-pink)" }}>404</h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
            Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" style={{ background: "var(--interactive-blue)", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none", fontWeight: "bold" }}>
            Go Home
        </Link>
    </motion.div>
);

export default NotFound;
