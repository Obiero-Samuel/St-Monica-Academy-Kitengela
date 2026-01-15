import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/main.css';

export default function GlassCardWithParticles() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-bg)' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: 'transparent' } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
                        modes: { repulse: { distance: 100, duration: 0.4 } },
                    },
                    particles: {
                        color: { value: '#6c63ff' },
                        links: { enable: true, color: '#6c63ff', distance: 150, opacity: 0.3, width: 1 },
                        move: { enable: true, speed: 2, outModes: { default: 'bounce' } },
                        number: { value: 50, density: { enable: true, area: 800 } },
                        opacity: { value: 0.5 },
                        shape: { type: 'circle' },
                        size: { value: { min: 2, max: 5 } },
                    },
                    detectRetina: true,
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div className="glass-card" style={{ padding: '2rem 3rem', maxWidth: 400, textAlign: 'center' }}>
                    <h2>Glassmorphism Card</h2>
                    <p>This card uses glassmorphism and a particle background for a modern, creative look.</p>
                </div>
            </div>
        </div>
    );
}
