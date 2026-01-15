import React, { useState } from 'react';
import Spinner from '../../components/common/Spinner/Spinner';

const Admissions = () => {
    const [form, setForm] = useState({ name: '', email: '', grade: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: Integrate with backend endpoint
    };

    if (loading) return <Spinner />;

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 600, margin: '2rem auto' }}>
            <h1>Admissions</h1>
            <p>Apply to join St Monica School! Fill out the form below and our admissions team will contact you.</p>
            {submitted ? (
                <div style={{ color: 'var(--interactive-green)', fontWeight: 'bold', marginTop: '2rem' }}>
                    Thank you for your application! We'll be in touch soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-label="Admissions form">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Student Name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} aria-label="Student Name" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Parent Email" required type="email" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} aria-label="Parent Email" />
                    <input name="grade" value={form.grade} onChange={handleChange} placeholder="Grade Applying For" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} aria-label="Grade Applying For" />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Why do you want to join?" required rows={4} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} aria-label="Why do you want to join?" />
                    <button type="submit" style={{ background: 'var(--interactive-blue)', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} aria-label="Submit Application">Submit Application</button>
                </form>
            )}
        </div>
    );
};

export default Admissions;
