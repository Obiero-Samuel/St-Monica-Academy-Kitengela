import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: Integrate with backend endpoint
    };

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 600, margin: '2rem auto' }}>
            <h1>Contact Us</h1>
            {submitted ? (
                <div style={{ color: 'var(--interactive-green)', fontWeight: 'bold', marginTop: '2rem' }}>
                    Thank you for reaching out! We'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required type="email" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={5} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }} />
                    <button type="submit" style={{ background: 'var(--interactive-blue)', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
