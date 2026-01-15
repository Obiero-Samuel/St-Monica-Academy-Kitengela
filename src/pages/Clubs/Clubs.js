import React, { useEffect, useState } from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const mockClubs = [
    { id: 1, name: 'Science Club', description: 'Explore experiments and scientific wonders.' },
    { id: 2, name: 'Art Club', description: 'Express yourself through painting, drawing, and crafts.' },
    { id: 3, name: 'Sports Club', description: 'Join teams and compete in school tournaments.' },
    { id: 4, name: 'Music Club', description: 'Play instruments and perform at school events.' },
];

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setClubs(mockClubs);
            setLoading(false);
        }, 900);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>School Clubs</h1>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }} aria-label="Clubs list">
                {clubs.map(club => (
                    <div key={club.id} style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1.5rem', minWidth: 220, flex: '1 1 220px' }} tabIndex={0} aria-label={club.name}>
                        <h2 style={{ color: 'var(--interactive-purple)' }}>{club.name}</h2>
                        <div>{club.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clubs;
