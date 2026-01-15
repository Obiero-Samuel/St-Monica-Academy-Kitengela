import React, { useEffect, useState } from 'react';

const mockTeachers = [
    { id: 1, name: 'Mrs. Jane Doe', subject: 'Mathematics', bio: 'Passionate about numbers and creative problem solving.' },
    { id: 2, name: 'Mr. John Smith', subject: 'Science', bio: 'Loves experiments and inspiring curiosity.' },
    { id: 3, name: 'Ms. Emily Brown', subject: 'Art', bio: 'Encourages self-expression and creativity.' },
];

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // TODO: Replace with backend fetch
        setTeachers(mockTeachers);
    }, []);

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>Meet Our Teachers</h1>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                {teachers.map(teacher => (
                    <div key={teacher.id} style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1.5rem', minWidth: 220, flex: '1 1 220px' }}>
                        <h2 style={{ color: 'var(--interactive-purple)' }}>{teacher.name}</h2>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{teacher.subject}</div>
                        <div>{teacher.bio}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
