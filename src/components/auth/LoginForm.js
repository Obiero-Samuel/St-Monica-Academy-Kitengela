import React, { useState } from 'react';

export default function LoginForm({ onSuccess }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            onSuccess && onSuccess(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', background: 'var(--glass-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Login</h2>
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 6 }} />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 6 }} />
            <button type="submit" disabled={loading} style={{ width: '100%', padding: 10, borderRadius: 6, background: 'var(--interactive-blue)', color: '#fff', fontWeight: 'bold', border: 'none' }}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        </form>
    );
}
