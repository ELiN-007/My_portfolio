import React, { useState, useEffect, useCallback } from 'react';
import { StarIcon } from '../common/Icons';
import { PortfolioData, TestimonialItem } from '../../types/portfolio';

interface TestimonialsProps {
  isDark: boolean;
  testimonials: PortfolioData['testimonials'];
}

const TestimonialCard: React.FC<{ item: TestimonialItem; isDark: boolean }> = ({ item, isDark }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: isDark ? '#1e293b' : '#ffffff',
    borderRadius: '20px',
    padding: '40px 36px 32px',
    border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
    maxWidth: '720px',
    margin: '0 auto',
    position: 'relative',
    boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.08)',
  };

  const quoteMarkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    left: '32px',
    fontSize: '5rem',
    lineHeight: 1,
    color: '#6366f1',
    opacity: 0.25,
    fontFamily: 'Georgia, serif',
    userSelect: 'none',
  };

  const quoteTextStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    lineHeight: 1.75,
    color: isDark ? '#cbd5e1' : '#475569',
    marginTop: '24px',
    marginBottom: '24px',
    fontStyle: 'italic',
  };

  const starsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '4px',
    marginBottom: '24px',
    color: '#f59e0b',
  };

  const avatarRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const avatarStyle: React.CSSProperties = {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.1rem',
    flexShrink: 0,
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1rem',
    color: isDark ? '#f1f5f9' : '#1e293b',
    margin: 0,
  };

  const roleStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: isDark ? '#94a3b8' : '#64748b',
    margin: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={quoteMarkStyle}>"</div>
      <p style={quoteTextStyle}>{item.quote}</p>
      <div style={starsRowStyle}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <StarIcon key={i} size={18} />
        ))}
      </div>
      <div style={avatarRowStyle}>
        <div style={avatarStyle}>{item.avatarText}</div>
        <div>
          <p style={nameStyle}>{item.name}</p>
          <p style={roleStyle}>{item.role} @ {item.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ isDark, testimonials }) => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const sectionStyle: React.CSSProperties = {
    padding: '80px 24px',
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '860px',
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
    maxWidth: '460px',
    margin: '0 auto',
  };

  const carouselWrapStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
  };

  const slidesStyle: React.CSSProperties = {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
    transform: `translateX(-${current * 100}%)`,
  };

  const slideStyle: React.CSSProperties = {
    minWidth: '100%',
    padding: '8px 0 16px',
  };

  const navRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '32px',
  };

  const navBtnStyle = (disabled?: boolean): React.CSSProperties => ({
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: `2px solid ${isDark ? '#334155' : '#e2e8f0'}`,
    backgroundColor: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#94a3b8' : '#64748b',
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    transition: 'border-color 0.2s, color 0.2s',
  });

  const dotsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  };

  const dotStyle = (active: boolean): React.CSSProperties => ({
    width: active ? '24px' : '8px',
    height: '8px',
    borderRadius: '999px',
    backgroundColor: active ? '#6366f1' : (isDark ? '#334155' : '#cbd5e1'),
    transition: 'width 0.3s, background-color 0.3s',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
  });

  if (total === 0) return null;

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={tagStyle}>Testimonials</span>
          <h2 style={h2Style}>What Clients Say</h2>
          <p style={subtitleStyle}>
            Trusted by professionals across industries.
          </p>
        </div>

        <div style={carouselWrapStyle}>
          <div style={slidesStyle}>
            {testimonials.map((item) => (
              <div key={item.id} style={slideStyle}>
                <TestimonialCard item={item} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        <div style={navRowStyle}>
          <button style={navBtnStyle()} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div style={dotsStyle}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                style={dotStyle(i === current)}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button style={navBtnStyle()} onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
