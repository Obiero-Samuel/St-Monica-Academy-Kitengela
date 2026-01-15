import React, { useState, useEffect } from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const mockEvents = [
    { id: 1, title: 'Science Fair', date: '2026-02-10', description: 'Showcase your science projects and win prizes!' },
    { id: 2, title: 'Sports Day', date: '2026-03-05', description: 'Compete in athletics and team games.' },
    { id: 3, title: 'Art Exhibition', date: '2026-04-15', description: 'Display your creative artwork.' },
];

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEvents(mockEvents);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>School Events</h1>
            <ul style={{ marginTop: '2rem', fontSize: '1.1rem', listStyle: 'none', padding: 0 }} aria-label="Events list">
                {events.map(event => (
                    <li key={event.id} style={{ marginBottom: '2rem', background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1rem' }} tabIndex={0} aria-label={event.title}>
                        <h2 style={{ color: 'var(--interactive-blue)' }}>{event.title}</h2>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{event.date}</div>
                        <div>{event.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
