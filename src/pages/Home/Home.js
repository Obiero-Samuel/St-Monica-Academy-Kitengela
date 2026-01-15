import GuidedTourDemo from '../../components/interactive/GuidedTourDemo';
import NotificationDemo from '../../components/interactive/NotificationDemo';
import React from 'react';
import usePresence from '../../utils/usePresence';
import Spinner from '../../components/common/Spinner/Spinner';

const Home = () => {
    const onlineUsers = usePresence();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div>
            <GuidedTourDemo />
            <NotificationDemo />
            <h1>Welcome Home</h1>
            <p>This is the home page of your interactive website.</p>
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
