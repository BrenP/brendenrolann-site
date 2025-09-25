import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      background: '#000000ff',
      color: '#f4f4f4',
    }}>
      <h2 style={{
        color: '#3382c3',
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        letterSpacing: '0.1em',
        textAlign: 'center',
      }}>CONTACT</h2>
      <ContactForm />
    </section>
  );
}
