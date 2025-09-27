import React, { useState, useEffect } from 'react';
import StarBackground from '../StarBackground'; // Adjust the path as necessary

export default function Home() {
  const [downloadEnabled, setDownloadEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDownloadEnabled(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSeeMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = (e) => {
    if (!downloadEnabled) {
      e.preventDefault();
    }
  };

  return (
    <>
      <StarBackground count={60} />
      <section style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxSizing: 'border-box',
        background: 'transparent',
        color: '#f4f4f4',
        paddingTop: '10rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Video section */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <video
            src="/assets/output-alpha.webm"
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: '480px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.18)' }}
          />
        </div>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 550,
          marginBottom: '1rem',
          color: '#f4f4f4',
          textAlign: 'center',
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginTop: '2.5rem',
        }}>
          Hello, my name is{' '}
          <span style={{ color: '#3382c3' }}>Brenden Rolann</span>
        </h2>
        <h3 style={{ color: '#f4f4f4', fontSize: '1.5rem', fontWeight: 400, margin: 0 }}>
          I am a Full-Stack Developer
        </h3>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
          <button
            onClick={handleSeeMore}
            style={{
              background: '#3382c3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s',
            }}
          >
            See more
          </button>
          <a
            href="https://www.dropbox.com/scl/fi/irpt2jvnfq5nthhbmh0fj/resume_brenden_rolann.pdf?rlkey=eqer2ri0pemjc6sgdykzz0bad&st=pw2pt3z7&dl=1"
            download
            onClick={handleDownloadClick}
            style={{
              background: downloadEnabled ? '#181818' : '#222',
              color: downloadEnabled ? '#3382c3' : '#888',
              border: '2px solid #3382c3',
              borderRadius: '6px',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: downloadEnabled ? 'pointer' : 'not-allowed',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.2s',
              opacity: downloadEnabled ? 1 : 0.6,
            }}
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
}
