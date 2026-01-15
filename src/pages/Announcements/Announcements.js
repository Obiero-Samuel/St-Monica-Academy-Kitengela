import React, { useEffect, useState } from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const mockAnnouncements = [
    { id: 1, title: 'School Closed on Friday', date: '2026-01-18', message: 'Due to maintenance, school will be closed.' },
    { id: 2, title: 'New Library Books', date: '2026-01-20', message: 'Check out the new arrivals in our library.' },
    { id: 3, title: 'Parent-Teacher Meeting', date: '2026-01-25', message: 'Join us for important updates and discussions.' },
];

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnnouncements(mockAnnouncements);
            setLoading(false);
        }, 900);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>Announcements</h1>
            <ul style={{ marginTop: '2rem', fontSize: '1.1rem', listStyle: 'none', padding: 0 }} aria-label="Announcements list">
                {announcements.map(a => (
                    <li key={a.id} style={{ marginBottom: '2rem', background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1rem' }} tabIndex={0} aria-label={a.title}>
                        <h2 style={{ color: 'var(--interactive-green)' }}>{a.title}</h2>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{a.date}</div>
                        <div>{a.message}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;
