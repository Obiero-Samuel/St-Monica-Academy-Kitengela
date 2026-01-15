import React, { useEffect, useState } from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const mockNews = [
    { id: 1, headline: 'St Monica Wins Regional Science Competition!', date: '2026-01-10', summary: 'Our students took home the trophy at the annual science contest.' },
    { id: 2, headline: 'New Sports Facilities Opened', date: '2026-01-05', summary: 'The school now boasts a modern gym and football field.' },
    { id: 3, headline: 'Art Students Exhibit at City Gallery', date: '2026-01-02', summary: 'Talented students displayed their work at a prestigious event.' },
];

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNews(mockNews);
            setLoading(false);
        }, 900);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>School News</h1>
            <ul style={{ marginTop: '2rem', fontSize: '1.1rem', listStyle: 'none', padding: 0 }} aria-label="News list">
                {news.map(n => (
                    <li key={n.id} style={{ marginBottom: '2rem', background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1rem' }} tabIndex={0} aria-label={n.headline}>
                        <h2 style={{ color: 'var(--interactive-blue)' }}>{n.headline}</h2>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{n.date}</div>
                        <div>{n.summary}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
