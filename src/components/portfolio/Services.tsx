import React, { useState } from 'react';
import { DynamicIcon, CheckCheckIcon } from '../common/Icons';
import { PortfolioData, ServiceItem } from '../../types/portfolio';

interface ServicesProps {
  isDark: boolean;
  services: PortfolioData['services'];
}

const ServiceCard: React.FC<{ service: ServiceItem; isDark: boolean }> = ({ service, isDark }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    borderRadius: '16px',
    padding: '2px',
    background: hovered
      ? 'linear-gradient(135deg, #6366f1, #06b6d4, #6366f1)'
      : isDark ? '#1e293b' : '#e2e8f0',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    boxShadow: hovered
      ? '0 0 24px 4px rgba(99,102,241,0.4)'
      : '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'default',
  };

  const innerStyle: React.CSSProperties = {
    borderRadius: '14px',
    padding: '28px',
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const iconWrapStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: 700,
    margin: 0,
    color: isDark ? '#f1f5f9' : '#1e293b',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '0.92rem',
    color: isDark ? '#94a3b8' : '#475569',
    margin: 0,
    lineHeight: 1.6,
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: 'auto',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.88rem',
    color: isDark ? '#cbd5e1' : '#334155',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={innerStyle}>
        <div style={iconWrapStyle}>
          <DynamicIcon name={service.icon} size={28} />
        </div>
        <h3 style={titleStyle}>{service.title}</h3>
        <p style={descStyle}>{service.description}</p>
        <ul style={listStyle}>
          {service.deliverables.map((item, idx) => (
            <li key={idx} style={listItemStyle}>
              <span style={{ color: '#6366f1', flexShrink: 0 }}>
                <CheckCheckIcon size={16} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ isDark, services }) => {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 24px',
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
    minHeight: '100vh',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '56px',
  };

  const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.15))',
    color: '#6366f1',
    fontSize: '0.82rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  };

  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: 800,
    margin: '0 0 16px 0',
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: isDark ? '#94a3b8' : '#64748b',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: 1.6,
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  };

  // Responsive: inject a <style> for 1-col on mobile
  const responsiveStyle = `
    @media (max-width: 640px) {
      .services-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="services" style={sectionStyle}>
      <style>{responsiveStyle}</style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={tagStyle}>Services</span>
          <h2 style={h2Style}>What I Offer</h2>
          <p style={subtitleStyle}>
            Tailored solutions built with modern technologies to bring your vision to life.
          </p>
        </div>
        <div className="services-grid" style={gridStyle}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
