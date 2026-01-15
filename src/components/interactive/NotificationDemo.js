import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export default function NotificationDemo() {
    useEffect(() => {
        const socket = io(SOCKET_URL);
        socket.on('notification', (msg) => toast.info(msg));
        return () => socket.disconnect();
    }, []);

    return <ToastContainer position="top-right" autoClose={3000} />;
}
