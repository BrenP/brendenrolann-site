
import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Toolbar />
      <div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><WorkExperience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
