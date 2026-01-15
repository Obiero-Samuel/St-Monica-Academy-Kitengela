import React from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const resources = [
    { id: 1, title: 'Library Catalog', link: '#', description: 'Browse books and digital resources.' },
    { id: 2, title: 'Online Learning Portal', link: '#', description: 'Access assignments and e-learning.' },
    { id: 3, title: 'School Policies', link: '#', description: 'Read our school rules and guidelines.' },
    { id: 4, title: 'Parent Handbook', link: '#', description: 'Information for parents and guardians.' },
];

const Resources = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>School Resources</h1>
            <ul style={{ marginTop: '2rem', fontSize: '1.1rem', listStyle: 'none', padding: 0 }} aria-label="Resources list">
                {resources.map(res => (
                    <li key={res.id} style={{ marginBottom: '2rem', background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1rem' }} tabIndex={0} aria-label={res.title}>
                        <h2 style={{ color: 'var(--interactive-blue)' }}>{res.title}</h2>
                        <div>{res.description}</div>
                        <a href={res.link} style={{ color: 'var(--interactive-purple)', fontWeight: 'bold', marginTop: '0.5rem', display: 'inline-block' }} aria-label={`View ${res.title}`}>View Resource</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;
