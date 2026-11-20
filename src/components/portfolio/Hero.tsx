import React, { useState, useEffect, useRef } from 'react';
import { PortfolioData } from '../../types/portfolio';
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
} from '../common/Icons';

interface HeroProps {
  isDark: boolean;
  data: PortfolioData['personal'];
  stats: PortfolioData['stats'];
}

const Hero: React.FC<HeroProps> = ({ isDark, data, stats }) => {
  const skillChips = ['JavaScript', 'Node.js', 'Linux'];
  const resumeHref = data.resumeUrl || '#contact';
  const isExternalResume = /^https?:\/\//.test(resumeHref);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const currentRole = data.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    typingRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % data.roles.length);
        }
      }
    }, speed);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [displayText, isDeleting, roleIndex, data.roles]);

  /* ── Shared tokens ── */
  const accent = 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)';
  const textSecondary = isDark ? 'rgba(200,210,230,0.75)' : 'rgba(60,70,90,0.75)';

  /* ── Section wrapper ── */
  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '7rem 1.5rem 4rem',
    backgroundColor: 'var(--bg-primary)',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    alignItems: 'center',
  };

  /* ── Left column ── */
  const greetingStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: textSecondary,
    marginBottom: '0.5rem',
    animation: 'fadeSlideUp 0.6s ease both',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: 'clamp(2.4rem, 6vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    background: accent,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.75rem',
    animation: 'fadeSlideUp 0.6s 0.1s ease both',
  };

  const roleLineStyle: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '1.25rem',
    minHeight: '2rem',
    animation: 'fadeSlideUp 0.6s 0.2s ease both',
  };

  const cursorStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '2px',
    height: '1.2em',
    background: '#6366f1',
    marginLeft: '2px',
    verticalAlign: 'text-bottom',
    animation: 'blink 0.8s step-start infinite',
  };

  const bioStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: textSecondary,
    lineHeight: 1.75,
    maxWidth: '520px',
    marginBottom: '2rem',
    animation: 'fadeSlideUp 0.6s 0.3s ease both',
  };

  const ctaRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '2.5rem',
    animation: 'fadeSlideUp 0.6s 0.4s ease both',
  };

  const primaryBtnStyle: React.CSSProperties = {
    background: accent,
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '0.75rem 1.6rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
  };

  const outlineBtnStyle: React.CSSProperties = {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1.5px solid var(--border-color)',
    borderRadius: '10px',
    padding: '0.75rem 1.6rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'border-color 0.2s, background 0.2s',
  };

  /* Stats */
  const statsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    animation: 'fadeSlideUp 0.6s 0.5s ease both',
  };

  const statCardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    minWidth: '90px',
    flex: '1 1 90px',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 800,
    background: accent,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
    marginBottom: '0.2rem',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '0.72rem',
    color: textSecondary,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  };

  /* Social links */
  const socialRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.6rem',
    animation: 'fadeSlideUp 0.6s 0.6s ease both',
  };

  const socialLinkStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'transform 0.2s, border-color 0.2s, color 0.2s',
  };

  /* ── Right column / avatar ── */
  const rightColStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    animation: 'fadeIn 0.8s 0.3s ease both',
  };

  const avatarRingStyle: React.CSSProperties = {
    width: 'clamp(240px, 35vw, 360px)',
    height: 'clamp(240px, 35vw, 360px)',
    borderRadius: '50%',
    background: accent,
    padding: '4px',
    position: 'relative',
    animation: 'float 4s ease-in-out infinite',
    flexShrink: 0,
  };

  const avatarInnerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: isDark
      ? 'linear-gradient(145deg, #1e1e3a 0%, #0f1729 100%)'
      : 'linear-gradient(145deg, #e8eaf6 0%, #c5cae9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const avatarImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 10%',
  };

  const openBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10%',
    right: '-5%',
    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    color: '#fff',
    padding: '0.45rem 0.9rem',
    borderRadius: '20px',
    fontSize: '0.78rem',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 14px rgba(16,185,129,0.4)',
    animation: 'floatBadge 3s ease-in-out infinite',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  };

  const chipsWrapStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '5%',
    left: '-8%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const chipStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    padding: '0.35rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.78rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    animation: 'floatBadge 3.5s ease-in-out infinite',
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.3); opacity: 0.7; }
        }
        .hero-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99,102,241,0.45) !important;
        }
        .hero-outline-btn:hover {
          border-color: #6366f1 !important;
          background: rgba(99,102,241,0.08) !important;
        }
        .hero-social-link:hover {
          transform: translateY(-3px);
          border-color: #6366f1 !important;
          color: #6366f1 !important;
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <section id="home" style={sectionStyle}>
        {/* subtle bg blobs */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={containerStyle} className="hero-grid">
          {/* ── Left column ── */}
          <div>
            <p style={greetingStyle}>Hello, I'm 👋</p>

            <h1 style={nameStyle}>{data.name}</h1>

            <div style={roleLineStyle}>
              {displayText}
              <span style={cursorStyle} aria-hidden="true" />
            </div>

            <p style={bioStyle}>{data.bioShort}</p>

            {/* CTA buttons */}
            <div style={ctaRowStyle}>
              <a
                href="#contact"
                style={primaryBtnStyle}
                className="hero-primary-btn"
              >
                Contact Me
              </a>
              <a
                href={resumeHref}
                target={isExternalResume ? '_blank' : undefined}
                rel={isExternalResume ? 'noopener noreferrer' : undefined}
                style={outlineBtnStyle}
                className="hero-outline-btn"
              >
                View Resume
              </a>
            </div>

            {/* Stats */}
            <div style={statsRowStyle}>
              {stats.map((s) => (
                <div key={s.label} style={statCardStyle}>
                  <div style={statValueStyle}>{s.value}</div>
                  <div style={statLabelStyle}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={socialRowStyle}>
              {data.social.github && (
                <a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="hero-social-link"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={18} />
                </a>
              )}
              {data.social.linkedin && (
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="hero-social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
              )}
              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="hero-social-link"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              )}
              {data.social.twitter && (
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  className="hero-social-link"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={18} />
                </a>
              )}
              <a
                href={`mailto:${data.social.email}`}
                style={socialLinkStyle}
                className="hero-social-link"
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div style={rightColStyle}>
            {/* Avatar ring */}
            <div style={avatarRingStyle}>
              <div style={avatarInnerStyle}>
                <img
                  src={`${import.meta.env.BASE_URL}ya-fa-elin.png`}
                  alt={`${data.name} profile`}
                  style={avatarImageStyle}
                />
              </div>

              {/* Internship badge */}
              <div style={openBadgeStyle}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#fff',
                    display: 'inline-block',
                    animation: 'pulseGreen 1.4s ease-in-out infinite',
                  }}
                />
                Seeking Internship
              </div>

              {/* Floating skill chips */}
              <div style={chipsWrapStyle}>
                {skillChips.map((chip, i) => (
                  <div
                    key={chip}
                    style={{
                      ...chipStyle,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
