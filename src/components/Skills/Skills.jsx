import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section" style={{
      minHeight: '80vh',
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
      }}>SKILLS</h2>
      <div className="skills-grid">
        {/* Top row: Vue, PostgreSQL, GitLab */}
        <div className="skill-icon">
          <img src="/assets/vuejs-ar21.svg" alt="Vue.js" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/postgresql-ar21.svg" alt="PostgreSQL" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/gitlab-ar21.svg" alt="GitLab" style={{ height: '64px' }} />
        </div>
        {/* Second row: Azure, .NET, RabbitMQ */}
        <div className="skill-icon">
          <img src="/assets/microsoft_azure-ar21.svg" alt="Azure" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/dotnet-ar21.svg" alt=".NET" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/rabbitmq-ar21.svg" alt="RabbitMQ" style={{ height: '64px' }} />
        </div>
        {/* Last row: Jira, Java, TypeScript */}
        <div className="skill-icon">
          <img src="/assets/atlassian_jira-ar21.svg" alt="Jira" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/java-ar21.svg" alt="Java" style={{ height: '64px' }} />
        </div>
        <div className="skill-icon">
          <img src="/assets/typescriptlang-ar21.svg" alt="TypeScript" style={{ height: '64px' }} />
        </div>
  </div>
    </section>
  );
}
