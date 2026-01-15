import React from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const mockImages = [
    { id: 1, src: '/src/assets/images/school1.jpg', alt: 'School Building' },
    { id: 2, src: '/src/assets/images/event1.jpg', alt: 'Science Fair' },
    { id: 3, src: '/src/assets/images/art1.jpg', alt: 'Art Exhibition' },
];

const Gallery = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 900, margin: '2rem auto' }}>
            <h1>School Gallery</h1>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' }} aria-label="Gallery images">
                {mockImages.map(img => (
                    <div key={img.id} style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1rem', minWidth: 220 }} tabIndex={0} aria-label={img.alt}>
                        <img src={img.src} alt={img.alt} style={{ width: '200px', height: '140px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                        <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{img.alt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
