import React from 'react';

const badges = [
    { id: 1, label: 'Early Adopter', icon: '🚀' },
    { id: 2, label: 'Collaborator', icon: '🤝' },
    { id: 3, label: 'Explorer', icon: '🧭' },
];

export default function GamificationDemo() {
    return (
        <div style={{ margin: '2rem auto', maxWidth: 600, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Gamification Demo</h2>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
                {badges.map(badge => (
                    <div key={badge.id} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem' }}>{badge.icon}</div>
                        <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{badge.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
