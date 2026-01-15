import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export default function RealTimeChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const socket = io(SOCKET_URL);
        socket.on('chart:update', setData);
        return () => socket.disconnect();
    }, []);

    return (
        <div style={{ margin: '2rem auto', maxWidth: 600, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Real-Time Chart Demo</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
