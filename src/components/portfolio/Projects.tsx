import React, { useState } from 'react';
import { ExternalLinkIcon, GitHubIcon } from '../common/Icons';
import type { PortfolioData, ProjectItem } from '../../types/portfolio';

type FilterCategory = 'All' | ProjectItem['category'];

const FILTERS: FilterCategory[] = ['All', 'Full Stack', 'Frontend', 'AI & Tools', 'Mobile & Cloud'];

interface ProjectsProps {
  isDark: boolean;
  projects: PortfolioData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ isDark, projects }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const bg = isDark ? '#0f172a' : '#f8fafc';
  const cardBg = isDark ? '#1e293b' : '#ffffff';
  const textPrimary = isDark ? '#f1f5f9' : '#0f172a';
  const textSecondary = isDark ? '#94a3b8' : '#475569';
  const borderColor = isDark ? '#334155' : '#e2e8f0';
  const tagBg = isDark ? '#0f172a' : '#f1f5f9';
  const tagText = isDark ? '#94a3b8' : '#475569';
  const filterBtnBg = isDark ? '#1e293b' : '#f1f5f9';
  const filterBtnBorder = isDark ? '#334155' : '#e2e8f0';

  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const filtered = activeFilter === 'All' ? sorted : sorted.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        padding: '80px 24px',
        background: bg,
        minHeight: '100vh',
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          My Work
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: textPrimary, margin: 0 }}>
          Featured{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Projects
          </span>
        </h2>
        <p style={{ color: textSecondary, marginTop: '16px', fontSize: '17px', maxWidth: '540px', margin: '16px auto 0' }}>
          A selection of real-world applications built with modern technologies.
        </p>
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '48px' }}>
        {FILTERS.map(f => {
          const active = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: `1.5px solid ${active ? '#6366f1' : filterBtnBorder}`,
                background: active ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : filterBtnBg,
                color: active ? '#fff' : textSecondary,
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filtered.map(project => {
          const hovered = hoveredId === project.id;
          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: cardBg,
                borderRadius: '16px',
                border: `1.5px solid ${borderColor}`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered
                  ? isDark
                    ? '0 20px 40px rgba(0,0,0,0.5)'
                    : '0 20px 40px rgba(99,102,241,0.15)'
                  : isDark
                  ? '0 2px 8px rgba(0,0,0,0.3)'
                  : '0 2px 8px rgba(0,0,0,0.06)',
                gridColumn: project.featured ? 'span 1' : undefined,
              }}
            >
              {/* Banner */}
              <div
                style={{
                  background: project.imageGradient,
                  padding: project.featured ? '36px 24px' : '28px 24px',
                  position: 'relative',
                  minHeight: project.featured ? '140px' : '110px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                {/* Badges top-right */}
                <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {project.featured && (
                    <span style={{
                      background: 'rgba(255,255,255,0.25)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      letterSpacing: '0.05em',
                    }}>
                      ★ Featured
                    </span>
                  )}
                  {project.badge && (
                    <span style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    }}>
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Category badge */}
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(0,0,0,0.25)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  marginBottom: '8px',
                  width: 'fit-content',
                }}>
                  {project.category}
                </span>

                {/* Title */}
                <h3 style={{ margin: 0, color: '#fff', fontSize: project.featured ? '22px' : '18px', fontWeight: 700, lineHeight: 1.3 }}>
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p style={{ margin: 0, color: textSecondary, fontSize: '14px', lineHeight: 1.65 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
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
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              {(project.liveUrl || project.githubUrl) && (
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '14px 22px',
                  borderTop: `1px solid ${borderColor}`,
                }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                        color: '#fff',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        flex: 1,
                        justifyContent: 'center',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      <ExternalLinkIcon size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: `1.5px solid ${borderColor}`,
                        background: 'transparent',
                        color: textPrimary,
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        flex: 1,
                        justifyContent: 'center',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <GitHubIcon size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
