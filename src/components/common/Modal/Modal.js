import React from 'react';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.55)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} onClick={onClose}>
      <div style={{
        background: '#fff',
        borderRadius: '1.2rem',
        boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18)',
        padding: '1.5rem',
        maxWidth: '90vw',
        maxHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(59,130,246,0.9)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '2.2rem',
          height: '2.2rem',
          fontSize: '1.3rem',
          cursor: 'pointer',
        }} aria-label="Close enlarged image">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
