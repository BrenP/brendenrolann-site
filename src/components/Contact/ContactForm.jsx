import React, { useState } from 'react';
export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mkgqgvkr', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
      setMessage('');
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      width: '100%',
      maxWidth: '340px',
      background: '#181818',
      padding: '1.2rem',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    }}>
      <label style={{ color: '#3382c3', fontWeight: 500 }}>Name
  <input name="name" type="text" required style={{ width: '90%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #3382c3', marginTop: '0.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
      </label>
      <label style={{ color: '#3382c3', fontWeight: 500 }}>Email
  <input name="email" type="email" required style={{ width: '90%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #3382c3', marginTop: '0.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
      </label>
      <label style={{ color: '#3382c3', fontWeight: 500 }}>Message
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{ width: '90%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #3382c3', marginTop: '0.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', resize: 'vertical' }}
        />
      </label>
      <button type="submit" style={{
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
      }}>Send</button>
      {status && <div style={{ color: '#3382c3', marginTop: '1rem', textAlign: 'center' }}>{status}</div>}
    </form>
  );
}
