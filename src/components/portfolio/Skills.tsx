import React, { useState } from 'react';
import { PortfolioData, SkillItem } from '../../types/portfolio';
import { DynamicIcon } from '../common/Icons';
import { StarIcon } from '../common/Icons';

interface SkillsProps {
  isDark: boolean;
  skills: PortfolioData['skills'];
}

type FilterCategory = 'All' | SkillItem['category'];

const FILTERS: FilterCategory[] = ['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'Tools & Design'];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Frontend:        { bg: '#6366f120', text: '#6366f1' },
  Backend:         { bg: '#06b6d420', text: '#06b6d4' },
  'Cloud & DevOps':{ bg: '#10b98120', text: '#10b981' },
  'Tools & Design':{ bg: '#f59e0b20', text: '#f59e0b' },
};

const Skills: React.FC<SkillsProps> = ({ isDark, skills }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const bg = isDark ? '#0f172a' : '#f8fafc';
  const cardBg = isDark ? '#1e293b' : '#ffffff';
  const textPrimary = isDark ? '#f1f5f9' : '#0f172a';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const accent = '#6366f1';
  const accentCyan = '#06b6d4';
  const borderColor = isDark ? '#334155' : '#e2e8f0';
  const tabActiveBg = `linear-gradient(135deg, ${accent}, ${accentCyan})`;
  const tabInactiveBg = isDark ? '#1e293b' : '#ffffff';
  const tabInactiveBorder = borderColor;

  const filtered = activeFilter === 'All'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
      style={{
        background: bg,
        padding: '100px 24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Inject keyframes for progress bar animation */}
      <style>{`
        @keyframes skillCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: `${accent}18`,
              border: `1px solid ${accent}44`,
              borderRadius: 999,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <StarIcon size={13} />
            <span style={{ fontSize: 13, color: accent, fontWeight: 600 }}>Technical Skills</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              margin: '0 0 12px 0',
              lineHeight: 1.15,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            <span style={{ color: textPrimary }}>My </span>
            <span
              style={{
                background: `linear-gradient(90deg, ${accent}, ${accentCyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Skills
            </span>
          </h2>
          <p style={{ color: textSecondary, fontSize: 15, maxWidth: 520, margin: '0 auto' }}>
            Technologies and tools from my studies and practical experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 48,
          }}
        >
          {FILTERS.map((f) => {
            const isActive = f === activeFilter;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 999,
                  border: isActive ? 'none' : `1px solid ${tabInactiveBorder}`,
                  background: isActive ? tabActiveBg : tabInactiveBg,
                  color: isActive ? '#ffffff' : textSecondary,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? `0 4px 14px ${accent}44` : 'none',
                  outline: 'none',
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Skill cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {filtered.map((skill, idx) => {
            const catColor = CATEGORY_COLORS[skill.category] ?? { bg: `${accent}20`, text: accent };
            return (
              <div
                key={skill.name}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: 16,
                  padding: '22px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `skillCardIn 0.35s ease both`,
                  animationDelay: `${idx * 40}ms`,
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = isDark
                    ? '0 12px 32px rgba(99,102,241,0.2)'
                    : '0 12px 32px rgba(99,102,241,0.12)';
                  el.style.borderColor = `${accent}66`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  el.style.borderColor = borderColor;
                }}
              >
                {/* Icon + name row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: catColor.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: catColor.text,
                      flexShrink: 0,
                    }}
                  >
                    <DynamicIcon name={skill.icon} size={22} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: textPrimary,
                        lineHeight: 1.3,
                      }}
                    >
                      {skill.name}
                    </div>
                    {/* Category badge */}
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: 4,
                        padding: '2px 10px',
                        borderRadius: 999,
                        background: catColor.bg,
                        color: catColor.text,
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
