import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export default function LiveCollabDemo() {
    const [text, setText] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const s = io(SOCKET_URL);
        setSocket(s);
        s.on('doc:update', (doc) => setText(doc.text));
        return () => s.disconnect();
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
        if (socket) socket.emit('doc:edit', e.target.value);
    };

    return (
        <div style={{ margin: '2rem auto', maxWidth: 600, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Live Collaboration Demo</h2>
            <textarea
                value={text}
                onChange={handleChange}
                rows={6}
                style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', fontSize: '1rem', border: '1px solid var(--glass-border)' }}
                placeholder="Type here and see changes in real time across all users..."
            />
        </div>
    );
}
