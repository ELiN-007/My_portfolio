import React from 'react';
import { GitHubIcon, LinkedInIcon, FacebookIcon, TwitterIcon, MailIcon, ChevronUpIcon } from '../common/Icons';
import { PortfolioData } from '../../types/portfolio';

interface FooterProps {
  isDark: boolean;
  social: PortfolioData['personal']['social'];
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC<FooterProps> = ({ isDark, social }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerStyle: React.CSSProperties = {
    width: '100%',
    background: isDark ? '#0a0a16' : '#f0f1ff',
    color: 'var(--text-secondary)',
    borderTop: '2px solid transparent',
    backgroundImage: isDark
      ? 'linear-gradient(#0a0a16, #0a0a16), linear-gradient(90deg, #6366f1, #06b6d4)'
      : 'linear-gradient(#f0f1ff, #f0f1ff), linear-gradient(90deg, #6366f1, #06b6d4)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    paddingTop: '2.5rem',
    paddingBottom: '1.5rem',
    marginTop: 0,
    position: 'relative',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  // Gradient top border hack using ::before-like div
  const gradientBorderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
  };

  const topRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: `1px solid var(--border-color)`,
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  };

  const logoMonogramStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.05em',
    flexShrink: 0,
  };

  const logoNameStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.25rem 1.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  };

  const socialLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
  };

  const socialButtonStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
    border: `1px solid var(--border-color)`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
    textDecoration: 'none',
  };

  const bottomRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
  };

  const backToTopStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.875rem',
    color: 'var(--accent-primary)',
    background: 'transparent',
    border: `1px solid var(--border-color)`,
    borderRadius: '8px',
    padding: '0.4rem 0.9rem',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'background 0.2s, color 0.2s',
  };

  return (
    <footer style={{ position: 'relative', background: isDark ? '#0a0a16' : '#f0f1ff' }}>
      <div style={gradientBorderStyle} />
      <div style={{ ...footerStyle, background: 'transparent' }}>
        <div style={innerStyle}>
          {/* Top row */}
          <div style={topRowStyle}>
            {/* Logo + name */}
            <a href="#home" style={logoStyle}>
              <div style={logoMonogramStyle}>YF</div>
              <span style={logoNameStyle}>Ya Fa Elin</span>
            </a>

            {/* Nav links */}
            <ul style={navLinksStyle}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={navLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div style={socialLinksStyle}>
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialButtonStyle}
                  aria-label="GitHub"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <GitHubIcon size={16} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialButtonStyle}
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <LinkedInIcon size={16} />
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialButtonStyle}
                  aria-label="Facebook"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialButtonStyle}
                  aria-label="Twitter"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <TwitterIcon size={16} />
                </a>
              )}
              <a
                href={`mailto:${social.email}`}
                style={socialButtonStyle}
                aria-label="Email"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6366f1';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(99,102,241,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                <MailIcon size={16} />
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div style={bottomRowStyle}>
            <p style={copyrightStyle}>
              © 2026 Ya Fa Elin
            </p>
            <button
              onClick={scrollToTop}
              style={backToTopStyle}
              aria-label="Back to top"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(99,102,241,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              <ChevronUpIcon size={15} />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
