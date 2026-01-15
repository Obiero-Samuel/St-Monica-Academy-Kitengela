import React from 'react';

const About = () => (
    <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
        <h1>About St Monica School</h1>
        <p>
            Welcome to St Monica School! We are dedicated to nurturing creative, curious, and compassionate students. Our mission is to provide a modern, interactive, and inclusive learning environment that prepares students for success in a rapidly changing world.
        </p>
        <ul style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
            <li>Innovative teaching methods</li>
            <li>Real-time collaboration and gamified learning</li>
            <li>Support for arts, sports, and STEM</li>
            <li>Community events and clubs</li>
            <li>Personalized student dashboards</li>
        </ul>
        <div style={{ marginTop: '2rem', fontWeight: 'bold', color: 'var(--interactive-blue)' }}>
            "Empowering every student to shine!"
        </div>
    </div>
);

export default About;
