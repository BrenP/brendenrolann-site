import React, { useEffect, useState } from 'react';
import './Toolbar.css';

export default function Toolbar() {
  const [visible, setVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'contact'];
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
      let found = 'home';
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // initialize
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="toolbar-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#181818ff',
        color: '#f4f4f4',
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '56px',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        borderRadius: '28px',
        padding: '0 2rem',
        width: 'auto',
        minWidth: 'max-content',
      }}
    >
      {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((section) => {
        const id = section.toLowerCase();
        const isActive = currentSection === id;
        return (
          <button
            key={section}
            onClick={() => scrollToSection(id)}
            style={{
              background: 'none',
              border: 'none',
              color: isActive ? '#3382c3' : '#f4f4f4',
              fontSize: '1rem',
              fontWeight: isActive ? 700 : 500,
              margin: '0 1.5rem',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
          >
            {section}
          </button>
        );
      })}
    </nav>
  );
}
