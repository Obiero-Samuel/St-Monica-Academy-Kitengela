import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="main-header" role="banner">
            <div className="logo" aria-label="Site Logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span role="img" aria-label="graduation cap" style={{ marginRight: '0.5rem', fontSize: '2.2rem', filter: 'drop-shadow(0 2px 6px #3b82f6)' }}>🎓</span>
                    St Monica Academy Kitengela
                </span>
                <span className="motto" style={{
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    fontFamily: 'Segoe Script, Brush Script MT, cursive',
                    color: '#fbbf24',
                    letterSpacing: '1.5px',
                    marginTop: '-0.2rem',
                    textShadow: '0 1px 8px #3b82f6, 0 1px 0 #222',
                    background: 'linear-gradient(90deg, #fbbf24 0%, #3b82f6 60%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Shrine of Knowledge
                </span>
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
                onClick={toggleTheme}
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
