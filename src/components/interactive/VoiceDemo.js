import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceDemo() {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Your browser does not support speech recognition.</span>;
    }

    return (
        <div style={{ margin: '2rem auto', maxWidth: 600, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Voice Interaction Demo</h2>
            <button
                onClick={SpeechRecognition.startListening}
                style={{ marginRight: '1rem', padding: '0.5rem 1.5rem', borderRadius: '1rem', background: 'var(--interactive-blue)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
                Start Listening
            </button>
            <button
                onClick={SpeechRecognition.stopListening}
                style={{ marginRight: '1rem', padding: '0.5rem 1.5rem', borderRadius: '1rem', background: 'var(--interactive-purple)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
                Stop
            </button>
            <button
                onClick={resetTranscript}
                style={{ padding: '0.5rem 1.5rem', borderRadius: '1rem', background: 'var(--interactive-pink)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
                Reset
            </button>
            <div style={{ marginTop: '1rem', fontSize: '1.1rem', background: '#fff', color: '#222', padding: '1rem', borderRadius: '0.5rem', minHeight: '3rem' }}>
                <strong>Transcript:</strong> {transcript}
            </div>
            <div style={{ marginTop: '0.5rem', color: listening ? 'green' : 'red' }}>
                {listening ? 'Listening...' : 'Not listening'}
            </div>
        </div>
    );
}
