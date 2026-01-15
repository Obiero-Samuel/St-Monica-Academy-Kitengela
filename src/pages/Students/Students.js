import React, { useEffect, useState } from 'react';

const mockStudents = [
    { id: 1, name: 'Alice', grade: 'Grade 6', achievement: 'Math Olympiad Winner' },
    { id: 2, name: 'Brian', grade: 'Grade 7', achievement: 'Science Fair Champion' },
    { id: 3, name: 'Chloe', grade: 'Grade 8', achievement: 'Art Exhibition Star' },
];

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // TODO: Replace with backend fetch
        setStudents(mockStudents);
    }, []);

    return (
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)', maxWidth: 800, margin: '2rem auto' }}>
            <h1>Our Star Students</h1>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                {students.map(student => (
                    <div key={student.id} style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)', padding: '1.5rem', minWidth: 220, flex: '1 1 220px' }}>
                        <h2 style={{ color: 'var(--interactive-pink)' }}>{student.name}</h2>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{student.grade}</div>
                        <div>{student.achievement}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Students;
