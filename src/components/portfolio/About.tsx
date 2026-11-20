import React from 'react';
import { PortfolioData } from '../../types/portfolio';
import {
  MapPinIcon,
  BriefcaseIcon,
  CheckIcon,
  DownloadIcon,
  SparklesIcon,
  GraduationCapIcon,
} from '../common/Icons';

interface AboutProps {
  isDark: boolean;
  data: PortfolioData['personal'];
}

const About: React.FC<AboutProps> = ({ isDark, data }) => {
  const bg = isDark ? '#0f172a' : '#f8fafc';
  const cardBg = isDark ? '#1e293b' : '#ffffff';
  const textPrimary = isDark ? '#f1f5f9' : '#0f172a';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const accent = '#6366f1';
  const accentCyan = '#06b6d4';
  const borderColor = isDark ? '#334155' : '#e2e8f0';
  const gradientText = `linear-gradient(90deg, ${accent}, ${accentCyan})`;

  const highlightCards = [
    {
      icon: <MapPinIcon size={18} />,
      label: 'Location',
      value: data.location,
      color: '#6366f1',
    },
    {
      icon: <GraduationCapIcon size={18} />,
      label: 'Education',
      value: 'Computer Science Student',
      color: '#06b6d4',
    },
    {
      icon: <BriefcaseIcon size={18} />,
      label: 'Career Goal',
      value: 'Seeking Internship',
      color: '#10b981',
    },
  ];

  const whatIBring = [
    'HTML, CSS, and JavaScript',
    'Node.js, Express.js, Python, and MySQL',
    'Linux and Microsoft Azure fundamentals',
    'Inventory tracking and stock reconciliation',
    'Order coordination and customer service',
    'Organized, accurate, and collaborative',
  ];

  return (
    <section
      id="about"
      style={{
        background: bg,
        padding: '100px 24px',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Profile photo */}
            <div
              style={{
                width: 240,
                height: 240,
                borderRadius: '50%',
                position: 'relative',
                boxShadow: `0 0 60px ${accent}44`,
                flexShrink: 0,
                padding: 5,
                background: `linear-gradient(135deg, ${accent} 0%, ${accentCyan} 100%)`,
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}ya-fa-elin.png`}
                alt={`${data.name} profile`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                }}
              />

              {/* Ring decoration */}
              <div
                style={{
                  position: 'absolute',
                  inset: -8,
                  borderRadius: '50%',
                  border: `2px solid ${accent}66`,
                  pointerEvents: 'none',
                }}
              />
            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div>
            {/* Section header */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: `${accent}18`,
                  border: `1px solid ${accent}44`,
                  borderRadius: 999,
                  padding: '6px 16px',
                  marginBottom: 14,
                }}
              >
                <SparklesIcon size={14} />
                <span style={{ fontSize: 13, color: accent, fontWeight: 600 }}>Internship Candidate</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 800,
                  margin: 0,
                  lineHeight: 1.15,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                <span style={{ color: textPrimary }}>Computer Science Student </span>
                <span
                  style={{
                    background: gradientText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Seeking an Internship
                </span>
              </h2>
            </div>

            {/* Bio paragraphs */}
            {data.bioLong.map((para, i) => (
              <p
                key={i}
                style={{
                  color: textSecondary,
                  fontSize: 15,
                  lineHeight: 1.75,
                  margin: '0 0 16px 0',
                }}
              >
                {para}
              </p>
            ))}

            {/* Highlight cards row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
                margin: '24px 0',
              }}
            >
              {highlightCards.map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 12,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${card.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color,
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: textSecondary, marginBottom: 2 }}>{card.label}</div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: textPrimary,
                        lineHeight: 1.3,
                      }}
                    >
                      {card.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What I bring list */}
            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderColor}`,
                borderRadius: 14,
                padding: '20px 24px',
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: textPrimary,
                  marginBottom: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                What I Bring
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
                {whatIBring.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: textSecondary,
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: `${accent}20`,
                        color: accent,
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon size={11} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume button */}
            <a
              href={data.resumeUrl}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: `linear-gradient(135deg, ${accent}, ${accentCyan})`,
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: `0 4px 20px ${accent}55`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 28px ${accent}77`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 20px ${accent}55`;
              }}
            >
              <DownloadIcon size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
