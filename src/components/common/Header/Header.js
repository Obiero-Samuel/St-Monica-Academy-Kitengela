import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className="main-header" role="banner">
            <div className="logo" aria-label="Site Logo">
                <span role="img" aria-label="graduation cap" style={{ marginRight: '0.5rem', fontSize: '2.2rem', filter: 'drop-shadow(0 2px 6px #3b82f6)' }}>🎓</span>
                St Monica Academy Kitengela
            </div>
            <nav aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/teachers">Teachers</Link>
                <Link to="/students">Students</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/admissions">Admissions</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/announcements">Announcements</Link>
                <Link to="/clubs">Clubs</Link>
                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                    marginLeft: 20,
                    padding: '0.5rem 1rem',
                    borderRadius: '1rem',
                    border: 'none',
                    background: theme === 'dark' ? '#222' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#222',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'background 0.3s, color 0.3s',
                }}
            >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </header>
    );
};

export default Header;
