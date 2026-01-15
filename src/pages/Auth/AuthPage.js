import React, { useState } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import LoginForm from '../../components/auth/LoginForm';
import { toast } from 'react-toastify';

export default function AuthPage() {
    const [mode, setMode] = useState('login');
    const [user, setUser] = useState(null);

    const handleAuth = (data) => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            toast.success('Login successful!');
        } else {
            toast.error('Authentication failed.');
        }
    };

    if (user) {
        return (
            <div style={{ maxWidth: 400, margin: '2rem auto', background: 'var(--glass-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                <h2>Welcome, {user.username}!</h2>
                <p>You are now logged in.</p>
                <button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); setUser(null); }} style={{ marginTop: 20, padding: 10, borderRadius: 6, background: 'var(--interactive-pink)', color: '#fff', border: 'none', fontWeight: 'bold' }}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: 30 }}>
                <button onClick={() => setMode('login')} style={{ marginRight: 10, padding: 10, borderRadius: 6, background: mode === 'login' ? 'var(--interactive-blue)' : '#eee', color: mode === 'login' ? '#fff' : '#222', border: 'none', fontWeight: 'bold' }}>Login</button>
                <button onClick={() => setMode('register')} style={{ padding: 10, borderRadius: 6, background: mode === 'register' ? 'var(--interactive-blue)' : '#eee', color: mode === 'register' ? '#fff' : '#222', border: 'none', fontWeight: 'bold' }}>Register</button>
            </div>
            {mode === 'login' ? <LoginForm onSuccess={handleAuth} /> : <RegisterForm onSuccess={handleAuth} />}
        </div>
    );
}
