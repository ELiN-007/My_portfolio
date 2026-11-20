import React, { useState, useEffect, useCallback } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '../common/Icons';

interface NavbarProps {
  isDark: boolean;
  onToggle: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: '100%',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled
      ? isDark
        ? 'rgba(10, 10, 20, 0.85)'
        : 'rgba(255, 255, 255, 0.85)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : 'none',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
  };

  const logoWrapStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
  };

  const monogramStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '-0.5px',
    flexShrink: 0,
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: '1.05rem',
    color: 'var(--text-primary)',
    letterSpacing: '0.01em',
  };

  const desktopNavStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  const navLinkStyle: React.CSSProperties = {
    padding: '0.4rem 0.75rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'color 0.2s, background 0.2s',
    opacity: 0.8,
  };

  const rightGroupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const toggleBtnStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '0.45rem',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s, border-color 0.2s',
  };

  const hireBtnStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.45rem 1.1rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const hamburgerBtnStyle: React.CSSProperties = {
    background: 'none',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '0.4rem',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: isDark ? 'rgba(10, 10, 20, 0.97)' : 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-color)',
    padding: '1rem 1.5rem 1.5rem',
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '0.25rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  };

  const mobileLinkStyle: React.CSSProperties = {
    padding: '0.65rem 1rem',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontWeight: 500,
    borderRadius: '8px',
    transition: 'background 0.2s',
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        {/* Logo */}
        <a href="#home" style={logoWrapStyle}>
          <div style={monogramStyle}>AR</div>
          <span style={nameStyle}>Ya Fa Elin</span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{ ...desktopNavStyle, display: 'none' }}
          className="navbar-desktop-links"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={navLinkStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                (e.currentTarget as HTMLAnchorElement).style.background =
                  isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right group */}
        <div style={rightGroupStyle}>
          {/* Theme toggle */}
          <button
            onClick={onToggle}
            style={toggleBtnStyle}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          {/* Hire Me — hidden on very small screens via media query below */}
          <a href="#contact" style={hireBtnStyle} className="navbar-hire-btn">
            Hire Me
          </a>

          {/* Hamburger — shown on mobile */}
          <button
            style={{ ...hamburgerBtnStyle, display: 'none' }}
            className="navbar-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div style={mobileMenuStyle}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            ...hireBtnStyle,
            marginTop: '0.5rem',
            justifyContent: 'center',
            borderRadius: '10px',
            padding: '0.65rem 1rem',
          }}
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>

      {/* Responsive overrides injected as a style tag */}
      <style>{`
        @media (min-width: 768px) {
          .navbar-desktop-links { display: flex !important; }
          .navbar-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .navbar-desktop-links { display: none !important; }
          .navbar-hamburger { display: flex !important; }
          .navbar-hire-btn { display: none !important; }
        }
        .navbar-desktop-links a:hover {
          opacity: 1 !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
