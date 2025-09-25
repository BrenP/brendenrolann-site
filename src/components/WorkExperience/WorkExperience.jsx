import React from 'react';

export default function WorkExperience() {
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
      marginBottom: '-10vh',
    }}>
      <h2 style={{
        color: '#3382c3',
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        letterSpacing: '0.1em',
        textAlign: 'center',
      }}>EXPERIENCE</h2>

      <div style={{ maxWidth: '700px', width: '100%' }}>
        {/* Software Engineer Lead */}
        <div style={{ marginBottom: '2.5rem', background: '#181818', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <h3 style={{ color: '#3382c3', fontSize: '1.25rem', margin: 0 }}>Software Engineer Lead, Dumac Business Systems</h3>
            <span style={{ color: '#f4f4f4', fontSize: '1rem', fontWeight: 400 }}>May 2023 – Sep 2025</span>
          </div>
          <ul style={{ marginTop: '1rem', marginBottom: 0, paddingLeft: '1.2rem', color: '#f4f4f4', fontSize: '1.05rem', lineHeight: 1.7 }}>
            <li>Accelerated developer onboarding by 50% through coding standards and structured mentorship, enabling new hires to deliver production code within 2 weeks</li>
            <li>Led backlog reduction from 1,000+ to ~200 by leading cross-team meetings with product managers, support, and developers to consolidate duplicates, introduce ticket templates, and clarify requirements</li>
            <li>Cut new ticket volume by ~40% by implementing Jira-to-Confluence automation and consolidating duplicates, streamlining support workflows and easing engineering workload</li>
            <li>Facilitated sprint planning sessions that bridged management expectations with developer capacity, improving clarity and predictability of deliverables</li>
          </ul>
        </div>

        {/* Software Engineer II */}
        <div style={{ marginBottom: '2.5rem', background: '#181818', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <h3 style={{ color: '#3382c3', fontSize: '1.25rem', margin: 0 }}>Software Engineer II, Dumac Business Systems</h3>
            <span style={{ color: '#f4f4f4', fontSize: '1rem', fontWeight: 400 }}>March 2019 – May 2023</span>
          </div>
          <ul style={{ marginTop: '1rem', marginBottom: 0, paddingLeft: '1.2rem', color: '#f4f4f4', fontSize: '1.05rem', lineHeight: 1.7 }}>
            <li>Delivered scalable .NET Core APIs for enterprise retail, designing REST endpoints and optimizing queries to support thousands of daily transactions with high reliability</li>
            <li>Accelerated feature development by adopting Vue.js with TypeScript, cutting new component build time from 100+ hours to under 40</li>
            <li>Optimized reporting by migrating to PostgreSQL and LINQ, cutting generation times by ~50% and enabling faster, more reliable analysis</li>
            <li>Enhanced reliability of enterprise systems by integrating RabbitMQ for async messaging, designing durable queues and error-handling to replace fragile sync jobs and ensure real-time data consistency</li>
            <li>Built GitLab CI/CD pipelines on AWS to standardize builds and artifacts, enabling faster deployments and reducing manual release effort</li>
          </ul>
        </div>

        {/* Education & Certifications */}
        <h4 style={{ color: '#3382c3', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.08em', textAlign: 'left' }}>Education & Certifications</h4>
  <div style={{ background: '#181818', borderRadius: '12px', padding: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', marginBottom: '0.5rem' }}>
          <div style={{ color: '#f4f4f4', fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.7rem' }}>Microsoft Azure Fundamentals (AZ-900) <span style={{ color: '#3382c3', fontWeight: 400, fontSize: '0.98rem' }}>Sep 2025</span></div>
          <div style={{ color: '#f4f4f4', fontSize: '1.05rem', fontWeight: 500 }}>Bachelor of Science in Software Engineering, The University of Texas at Dallas <span style={{ color: '#3382c3', fontWeight: 400, fontSize: '0.98rem' }}>Dec 2018</span></div>
        </div>
      </div>
    </section>
  );
}
