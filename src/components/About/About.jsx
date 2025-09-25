import React from 'react';

export default function About() {
  return (
    <section style={{
      minHeight: '80vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      background: '#000000ff',
      color: '#f4f4f4',
      marginBottom: '-15vh',
    }}>
      <h2 style={{
        color: '#3382c3',
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        letterSpacing: '0.1em',
        textAlign: 'center',
      }}>ABOUT</h2>
      <div style={{
        maxWidth: '700px',
        fontSize: '1.25rem',
        lineHeight: 1.7,
        color: '#f4f4f4',
        textAlign: 'center',
      }}>
  I am a software engineer based in the Dallas-Fort Worth area who stumbled into the retail tech world and developed a passion for building reliable, scalable systems.<br /><br />
        My experience includes <span style={{ color: '#3382c3', fontWeight: 500 }}>C#/.NET</span>, <span style={{ color: '#3382c3', fontWeight: 500 }}>PostgreSQL</span>, <span style={{ color: '#3382c3', fontWeight: 500 }}>TypeScript with Vue</span>, and cloud technologies—developing solutions for <span style={{ color: '#3382c3', fontWeight: 500 }}>AWS</span> & <span style={{ color: '#3382c3', fontWeight: 500 }}>Azure</span> that scale and perform reliably.<br /><br />
        Outside of work I enjoy time with my family, tackling DIY projects with my girlfriend, and relaxing with video games.
      </div>
    </section>
  );
}
