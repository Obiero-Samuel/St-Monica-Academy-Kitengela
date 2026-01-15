import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export default function usePresence() {
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        const socket = io(SOCKET_URL);
        // Try to get username from localStorage (set on login/register)
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            socket.emit('user:online', user.username);
        }
        socket.on('presence:update', setOnlineUsers);
        return () => socket.disconnect();
    }, []);

    return onlineUsers;
}
