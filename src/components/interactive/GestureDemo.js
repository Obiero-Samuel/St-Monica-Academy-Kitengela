import React, { useRef } from 'react';
import { useGesture } from '@use-gesture/react';

export default function GestureDemo() {
    const boxRef = useRef();
    const [{ x, y }, set] = React.useState({ x: 0, y: 0 });

    useGesture(
        {
            onDrag: ({ offset: [dx, dy] }) => set({ x: dx, y: dy }),
            onPinch: ({ offset: [d] }) => boxRef.current.style.transform = `scale(${1 + d / 200})`,
        },
        {
            target: boxRef,
            eventOptions: { passive: false },
        }
    );

    return (
        <div style={{ margin: '2rem auto', maxWidth: 600, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Gesture Demo</h2>
            <div
                ref={boxRef}
                style={{
                    width: 120,
                    height: 120,
                    background: 'var(--interactive-purple)',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow-glow)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    touchAction: 'none',
                    position: 'relative',
                    left: x,
                    top: y,
                    userSelect: 'none',
                }}
            >
                Drag or Pinch Me
            </div>
        </div>
    );
}
