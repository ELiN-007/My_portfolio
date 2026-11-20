import React from 'react';
import {
  MailIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  PhoneIcon,
} from '../common/Icons';
import { PortfolioData } from '../../types/portfolio';

interface ContactProps {
  isDark: boolean;
  data: PortfolioData['personal'];
}

const Contact: React.FC<ContactProps> = ({ isDark, data }) => {
  const bg = isDark ? '#0f172a' : '#f8fafc';
  const cardBg = isDark ? '#1e293b' : '#ffffff';
  const textPrimary = isDark ? '#f1f5f9' : '#1e293b';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const borderColor = isDark ? '#334155' : '#e2e8f0';

  /* ---- Styles ---- */
  const sectionStyle: React.CSSProperties = {
    padding: '80px 24px',
    backgroundColor: bg,
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
    color: textSecondary,
    maxWidth: '480px',
    margin: '0 auto',
    lineHeight: 1.6,
  };

  const columnsStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '720px',
    margin: '0 auto',
    alignItems: 'start',
  };

  const leftStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const leftHeadingStyle: React.CSSProperties = {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: textPrimary,
    margin: 0,
  };

  const leftParaStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: textSecondary,
    lineHeight: 1.7,
    margin: 0,
  };

  const infoCardsWrapStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const infoCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '14px 18px',
    borderRadius: '12px',
    backgroundColor: cardBg,
    border: `1px solid ${borderColor}`,
  };

  const infoIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0,
  };

  const infoLabelStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: textSecondary,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    fontWeight: 600,
  };

  const infoValueStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: textPrimary,
    margin: 0,
    fontWeight: 500,
  };

  const socialRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
  };

  const socialLinkStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: `2px solid ${borderColor}`,
    backgroundColor: cardBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: textSecondary,
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.82rem',
    fontWeight: 600,
    color: textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={tagStyle}>Contact</span>
          <h2 style={h2Style}>Let's Work Together</h2>
          <p style={subtitleStyle}>
            Reach out by email or phone, or connect with me on social media.
          </p>
        </div>

        <div className="contact-columns" style={columnsStyle}>
          {/* Left column */}
          <div style={leftStyle}>
            <h3 style={leftHeadingStyle}>Get In Touch</h3>
            <p style={leftParaStyle}>{data.availability}.</p>

            <div style={infoCardsWrapStyle}>
              <div style={infoCardStyle}>
                <div style={infoIconStyle}><MailIcon size={18} /></div>
                <div>
                  <p style={infoLabelStyle}>Email</p>
                  <p style={infoValueStyle}>{data.social.email}</p>
                </div>
              </div>
              {data.phone && (
                <div style={infoCardStyle}>
                  <div style={infoIconStyle}><PhoneIcon size={18} /></div>
                  <div>
                    <p style={infoLabelStyle}>Phone</p>
                    <p style={infoValueStyle}>{data.phone}</p>
                  </div>
                </div>
              )}
              <div style={infoCardStyle}>
                <div style={infoIconStyle}><MapPinIcon size={18} /></div>
                <div>
                  <p style={infoLabelStyle}>Location</p>
                  <p style={infoValueStyle}>{data.location}</p>
                </div>
              </div>
              <div style={infoCardStyle}>
                <div style={infoIconStyle}>
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p style={infoLabelStyle}>Availability</p>
                  <p style={infoValueStyle}>{data.availability}</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{ ...labelStyle, marginBottom: '12px' }}>Find me on</p>
              <div style={socialRowStyle}>
                {data.social.github && (
                  <a href={data.social.github} target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="GitHub">
                    <GitHubIcon size={20} />
                  </a>
                )}
                {data.social.linkedin && (
                  <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="LinkedIn">
                    <LinkedInIcon size={20} />
                  </a>
                )}
                {data.social.facebook && (
                  <a href={data.social.facebook} target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Facebook">
                    <FacebookIcon size={20} />
                  </a>
                )}
                {data.social.twitter && (
                  <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Twitter">
                    <TwitterIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
