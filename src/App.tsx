import { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Experience from './components/portfolio/Experience';
import Services from './components/portfolio/Services';
import Testimonials from './components/portfolio/Testimonials';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const darkVars = `
    :root {
      --bg-primary: #0f0f1a;
      --bg-secondary: #141428;
      --bg-card: #1a1a2e;
      --text-primary: #f0f0ff;
      --text-secondary: #9999bb;
      --text-muted: #6666aa;
      --accent-primary: #6366f1;
      --accent-secondary: #06b6d4;
      --border-color: #2a2a4a;
      --shadow: rgba(0,0,0,0.5);
    }
  `;

  const lightVars = `
    :root {
      --bg-primary: #f8f9ff;
      --bg-secondary: #eef0ff;
      --bg-card: #ffffff;
      --text-primary: #1a1a2e;
      --text-secondary: #4a4a6a;
      --text-muted: #8888aa;
      --accent-primary: #4f46e5;
      --accent-secondary: #0891b2;
      --border-color: #d4d4f0;
      --shadow: rgba(99,102,241,0.1);
    }
  `;

  return (
    <>
      <style>{isDark ? darkVars : lightVars}</style>
      <div
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          minHeight: '100vh',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        <Navbar isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
        <Hero isDark={isDark} data={portfolioData.personal} stats={portfolioData.stats} />
        <About isDark={isDark} data={portfolioData.personal} />
        <Skills isDark={isDark} skills={portfolioData.skills} />
        {portfolioData.projects.length > 0 && (
          <Projects isDark={isDark} projects={portfolioData.projects} />
        )}
        <Experience isDark={isDark} experiences={portfolioData.experiences} />
        {portfolioData.services.length > 0 && (
          <Services isDark={isDark} services={portfolioData.services} />
        )}
        {portfolioData.testimonials.length > 0 && (
          <Testimonials isDark={isDark} testimonials={portfolioData.testimonials} />
        )}
        <Contact isDark={isDark} data={portfolioData.personal} />
        <Footer isDark={isDark} social={portfolioData.personal.social} />
      </div>
    </>
  );
}

export default App;
