import GuidedTourDemo from '../../components/interactive/GuidedTourDemo';
import badge from '../../assets/images/image.png';
import headteacher from '../../assets/images/DSC_0193 (1).JPG';
import childrenStudying from '../../assets/images/DSC_0213 (1).JPG';
import React, { useState } from 'react';
import usePresence from '../../utils/usePresence';

import Modal from '../../components/common/Modal/Modal';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState(null);
    const onlineUsers = usePresence();
    const mapIframeStyle = {
        border: 0,
        borderRadius: '1rem',
        maxWidth: '400px',
        width: '100%',
        minHeight: '180px',
        boxShadow: '0 2px 16px 0 rgba(59,130,246,0.18)'
    };
    return (
        <div>
            <GuidedTourDemo />
            {/* Top Section: Badge, Headline, Headteacher */}
            <section style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 240px',
                alignItems: 'center',
                gap: '0',
                margin: '2.5rem 0 1.5rem 0',
                padding: '1.2rem 1.5rem',
                background: 'rgba(255,255,255,0.92)',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)',
                width: '100vw',
                minWidth: '100vw',
                minHeight: '180px',
                position: 'relative',
                left: '50%',
                right: '50%',
                transform: 'translateX(-50%)',
            }}>
                {/* Left: Badge */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '120px' }}>
                    <img src={badge} alt="St Monica Academy Badge" style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '1rem',
                        boxShadow: '0 2px 12px 0 rgba(59,130,246,0.18)',
                        background: '#fff',
                        border: '2px solid #3b82f6',
                    }} />
                </div>
                {/* Center: Headline and Description */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', minWidth: '220px' }}>
                    <h2 style={{
                        fontSize: '1.7rem',
                        fontWeight: 700,
                        color: '#3b82f6',
                        margin: 0,
                        letterSpacing: '1.2px',
                        fontFamily: 'Segoe UI, Arial, sans-serif',
                        textShadow: '0 2px 8px #fbbf24, 0 1px 0 #222',
                    }}>
                        Welcome to St Monica Academy Kitengela
                    </h2>
                    <p style={{
                        fontSize: '1.18rem',
                        color: '#222',
                        margin: '1rem 0 0 0',
                        fontWeight: 500,
                        lineHeight: 1.6,
                        maxWidth: '600px',
                    }}>
                        At St Monica Academy Kitengela, we nurture excellence in every child—academically, physically, and spiritually. Our vibrant Catholic environment, dedicated staff, and holistic programs empower students to become leaders of character, faith, and achievement.
                    </p>
                </div>
                {/* Right: Headteacher Welcome Card, aligned right */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.98)',
                        borderRadius: '1.2rem',
                        boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)',
                        padding: '1.2rem 1.5rem',
                        minWidth: '200px',
                        maxWidth: '240px',
                        border: '1.5px solid #3b82f6',
                        position: 'absolute',
                        right: 0,
                        top: '110%',
                        transform: 'translateY(-80%)',
                        zIndex: 20,
                        zIndex: 10,
                        cursor: 'pointer',
                        transition: 'box-shadow 0.2s',
                    }}
                    onClick={() => { setModalImg(headteacher); setModalOpen(true); }}
                    title="Click to enlarge headteacher photo"
                    tabIndex={0}
                    role="button"
                    aria-label="Enlarge headteacher photo"
                >
                    <img src={headteacher} alt="Headteacher" style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        marginBottom: '0.9rem',
                        border: '3px solid #fbbf24',
                        boxShadow: '0 4px 16px 0 rgba(59,130,246,0.13)',
                        background: '#fff',
                        transition: 'transform 0.2s',
                    }} />
                    <div style={{ textAlign: 'center' }}>
                        <strong style={{ color: '#3b82f6', fontSize: '1.08rem' }}>Headteacher</strong>
                        <p style={{ fontSize: '1.08rem', color: '#222', margin: '0.5rem 0 0 0', fontStyle: 'italic', fontWeight: 500 }}>
                            "A very warm welcome to St Monica Academy Kitengela! Here, every child is valued and inspired to achieve their best. I invite you to explore our caring, faith-filled community where learning, growth, and joy go hand in hand."
                        </p>
                        <span style={{ fontSize: '0.97rem', color: '#666' }}>James Mburu</span>
                    </div>
                </div>
            </section>
            {/* Learning in Action Section */}
            <section style={{
                margin: '2.5rem 0 0 0',
                padding: 0,
                background: 'none',
                borderRadius: '1.2rem',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '1.5rem',
                position: 'relative',
                minHeight: '420px',
            }} aria-label="Learning in Action">
                <div
                    style={{
                        width: '100%',
                        maxWidth: '420px',
                        borderRadius: '1.2rem',
                        overflow: 'hidden',
                        boxShadow: '0 6px 32px 0 rgba(60,60,60,0.13), 0 1.5px 6px 0 rgba(59,130,246,0.10)',
                        position: 'relative',
                        cursor: 'pointer',
                        zIndex: 10,
                        marginBottom: '1.2rem',
                    }}
                    onClick={() => { setModalImg(childrenStudying); setModalOpen(true); }}
                    title="Click to enlarge students photo"
                    tabIndex={0}
                    role="button"
                    aria-label="Enlarge students photo"
                >
                    <img src={childrenStudying} alt="Children Studying" style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        filter: 'brightness(0.97) saturate(1.08)',
                        borderRadius: '1.2rem',
                        boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
                        transition: 'transform 0.2s',
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(0deg, rgba(59,130,246,0.18) 60%, rgba(255,255,255,0.01) 100%)',
                        color: '#fff',
                        padding: '1.1rem 1rem 0.7rem 1rem',
                        borderBottomLeftRadius: '1.2rem',
                        borderBottomRightRadius: '1.2rem',
                        fontWeight: 600,
                        fontSize: '1.13rem',
                        textShadow: '0 2px 8px #222',
                        letterSpacing: '0.5px',
                    }}>
                        Learning in Action: Inspiring Young Minds
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <h3 style={{ color: '#3b82f6', fontWeight: 700, fontSize: '1.18rem', marginBottom: '0.7rem' }}>A Place to Grow &amp; Thrive</h3>
                    <p style={{ fontSize: '1.08rem', color: '#222', lineHeight: 1.6, margin: 0 }}>
                        Our students are at the heart of everything we do. Through engaging lessons, collaborative projects, and a nurturing environment, we empower every child to discover their unique gifts and reach their full potential.
                    </p>
                </div>
            </section>
            <section style={{ margin: '2.5rem 0 0 0', padding: '0', background: 'none', borderRadius: '1.2rem', boxShadow: 'none' }} aria-label="St Monica Catholic Church Map Only">
                <div style={{
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.97)',
                    borderRadius: '1.2rem',
                    boxShadow: '0 6px 32px 0 rgba(60,60,60,0.18), 0 1.5px 6px 0 rgba(59,130,246,0.10)',
                    maxWidth: '420px',
                    padding: '1rem',
                    border: '2px solid #3b82f6',
                }} aria-label="St Monica Catholic Church Map">
                    <h2 style={{ marginBottom: '0.7rem', color: '#3b82f6', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '1px' }}>St Monica Catholic Church Kitengela Location</h2>
                    <iframe
                        title="St Monica Academy Kitengela Map"
                        src="https://www.google.com/maps?q=St+Monica+Academy+Kitengela,+Kajiado,+Kenya&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '1rem', marginTop: '0.7rem' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {modalImg && (
                    <img src={modalImg} alt="Enlarged" style={{
                        maxWidth: '80vw',
                        maxHeight: '80vh',
                        borderRadius: '1.2rem',
                        boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18)',
                        objectFit: 'contain',
                    }} />
                )}
            </Modal>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }} aria-label="Online users">
                <strong>Online Users:</strong> {onlineUsers.length}
                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    {onlineUsers.map((username, idx) => {
                        // Remove all leading non-alphanumeric Unicode characters (including dots, bullets, emoji, whitespace)
                        let cleanName = String(username).replace(/^[^\p{L}\p{N}]+/u, '').trim();
                        // If still starts with a symbol or is empty, use a fallback
                        if (!cleanName || /^[^\p{L}\p{N}]/u.test(cleanName)) {
                            cleanName = `User${idx + 1}`;
                        }
                        return (
                            <span key={cleanName + idx} style={{ marginRight: '1rem', color: 'var(--interactive-blue)' }} tabIndex={0} aria-label={`Online user ${cleanName}`}>{cleanName}</span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
