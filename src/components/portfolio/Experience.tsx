import React, { useState } from 'react';
import { BriefcaseIcon, GraduationCapIcon } from '../common/Icons';
import type { PortfolioData } from '../../types/portfolio';

type Tab = 'work' | 'education';

interface ExperienceProps {
  isDark: boolean;
  experiences: PortfolioData['experiences'];
}

const Experience: React.FC<ExperienceProps> = ({ isDark, experiences }) => {
  const [activeTab, setActiveTab] = useState<Tab>('work');

  const bg = isDark ? '#0f172a' : '#f8fafc';
  const cardBg = isDark ? '#1e293b' : '#ffffff';
  const textPrimary = isDark ? '#f1f5f9' : '#0f172a';
  const textSecondary = isDark ? '#94a3b8' : '#475569';
  const borderColor = isDark ? '#334155' : '#e2e8f0';
  const tagBg = isDark ? '#0f172a' : '#f1f5f9';
  const tagText = isDark ? '#94a3b8' : '#475569';
  const tabBorder = isDark ? '#334155' : '#e2e8f0';
  const tabActiveBg = isDark ? '#1e293b' : '#ffffff';

  const workDotColor = '#6366f1';
  const eduDotColor = '#06b6d4';

  const filtered = experiences.filter(e => e.type === activeTab);

  return (
    <section
      id="experience"
      style={{
        padding: '80px 24px',
        background: bg,
        minHeight: '100vh',
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          My Journey
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: textPrimary, margin: 0 }}>
          Experience &{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Education
          </span>
        </h2>
        <p style={{ color: textSecondary, marginTop: '16px', fontSize: '17px', maxWidth: '540px', margin: '16px auto 0' }}>
          A timeline of my professional career and academic background.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'flex',
          background: isDark ? '#0f172a' : '#f1f5f9',
          border: `1.5px solid ${tabBorder}`,
          borderRadius: '12px',
          padding: '4px',
          gap: '4px',
        }}>
          {(['work', 'education'] as Tab[]).map(tab => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '9px',
                  border: 'none',
                  background: active ? tabActiveBg : 'transparent',
                  color: active ? textPrimary : textSecondary,
                  fontWeight: active ? 700 : 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: active ? (isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.08)') : 'none',
                  outline: 'none',
                }}
              >
                {tab === 'work' ? (
                  <BriefcaseIcon size={16} />
                ) : (
                  <GraduationCapIcon size={16} />
                )}
                {tab === 'work' ? 'Work Experience' : 'Education'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {filtered.map((entry, idx) => {
          const isLast = idx === filtered.length - 1;
          const dotColor = entry.type === 'work' ? workDotColor : eduDotColor;

          return (
            <div
              key={entry.id}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: isLast ? 0 : '32px',
              }}
            >
              {/* Left: dot + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '40px' }}>
                {/* Icon dot */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${dotColor}, ${entry.type === 'work' ? '#818cf8' : '#22d3ee'})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 0 0 4px ${isDark ? '#0f172a' : '#f8fafc'}, 0 0 0 6px ${dotColor}30`,
                  color: '#fff',
                  zIndex: 1,
                }}>
                  {entry.type === 'work' ? (
                    <BriefcaseIcon size={18} />
                  ) : (
                    <GraduationCapIcon size={18} />
                  )}
                </div>

                {/* Vertical line */}
                {!isLast && (
                  <div style={{
                    flex: 1,
                    width: '2px',
                    marginTop: '8px',
                    background: `linear-gradient(to bottom, ${dotColor}60, ${borderColor})`,
                    borderRadius: '1px',
                  }} />
                )}
              </div>

              {/* Right: card */}
              <div
                style={{
                  flex: 1,
                  background: cardBg,
                  borderRadius: '14px',
                  border: `1.5px solid ${borderColor}`,
                  padding: '22px 24px',
                  boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.05)',
                  marginBottom: isLast ? '0' : '0',
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  <div>
                    <h3 style={{ margin: 0, color: textPrimary, fontSize: '17px', fontWeight: 700 }}>
                      {entry.role}
                    </h3>
                    <p style={{ margin: '4px 0 0', color: dotColor, fontWeight: 600, fontSize: '14px' }}>
                      {entry.company}
                    </p>
                    <p style={{ margin: '2px 0 0', color: textSecondary, fontSize: '13px' }}>
                      {entry.location}
                    </p>
                  </div>
                  {/* Period badge */}
                  <span style={{
                    background: isDark ? '#0f172a' : '#f1f5f9',
                    color: textSecondary,
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    border: `1px solid ${borderColor}`,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {entry.period}
                  </span>
                </div>

                {/* Description bullets */}
                {entry.description.length > 0 && (
                  <ul style={{ margin: '12px 0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {entry.description.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ color: textSecondary, fontSize: '14px', lineHeight: 1.6 }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technology tags */}
                {entry.technologies.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                    {entry.technologies.map(tech => (
                      <span
                        key={tech}
                        style={{
                          background: tagBg,
                          color: tagText,
                          fontSize: '12px',
                          fontWeight: 500,
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          border: `1px solid ${borderColor}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: textSecondary, padding: '60px 0', fontSize: '15px' }}>
            No entries found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
