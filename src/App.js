import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';

import { saveUserPreference, getUserPreference } from './utils/personalization';
import AuthPage from './pages/Auth/AuthPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import Teachers from './pages/Teachers/Teachers';
import Students from './pages/Students/Students';
import Gallery from './pages/Gallery/Gallery';
import Admissions from './pages/Admissions/Admissions';
import Resources from './pages/Resources/Resources';
import Announcements from './pages/Announcements/Announcements';
import Clubs from './pages/Clubs/Clubs';
import News from './pages/News/News';
import NotFound from './pages/NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [darkMode, setDarkMode] = useState(() => getUserPreference('darkMode', false));

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.style.transition = 'background 0.5s cubic-bezier(.4,0,.2,1)';
        saveUserPreference('darkMode', darkMode);
    }, [darkMode]);

    return (
        <Router>
            <ErrorBoundary>
                <Layout>
                    <button
                        style={{
                            position: 'fixed',
                            top: 20,
                            right: 20,
                            zIndex: 10,
                            padding: '0.5rem 1rem',
                            borderRadius: '1rem',
                            border: 'none',
                            background: darkMode ? '#222' : '#fff',
                            color: darkMode ? '#fff' : '#222',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'background 0.3s, color 0.3s',
                        }}
                        onClick={() => setDarkMode((d) => !d)}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? '🌙 Dark' : '☀️ Light'}
                    </button>
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/teachers" element={<Teachers />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/admissions" element={<Admissions />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/announcements" element={<Announcements />} />
                            <Route path="/clubs" element={<Clubs />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/explore" element={<Explore />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/auth" element={<AuthPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </Layout>
            </ErrorBoundary>
        </Router>
    );
}

export default App;
