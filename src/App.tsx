import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { links, projects } from './content';

const Accent = lazy(() => import('./Accent'));
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↗'}</span>;

class DecorationBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function DecorativeAccent() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!motion.matches && window.innerWidth >= 768);
    update(); motion.addEventListener('change', update); window.addEventListener('resize', update);
    return () => { motion.removeEventListener('change', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="sculpture" aria-hidden="true"><span className="sculpture-fallback">✳</span>{enabled && <DecorationBoundary><Suspense fallback={null}><Accent /></Suspense></DecorationBoundary>}</div>;
}

function Project({ project }: { project: typeof projects[number] }) {
  return <article className={`project ${project.className}`} id={project.id} aria-labelledby={`${project.id}-title`}>
    <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} ${project.id === 'grain' ? 'on Google Play' : 'on GitHub'} (opens in new tab)`}>
      <span className="visual-index" aria-hidden="true">{project.number} / SELECTED WORK</span>
      <img src={asset(project.image)} alt={project.alt} loading="lazy" decoding="async" width={project.id === 'mochu' || project.id === 'grain' ? 480 : 1200} height={project.id === 'mochu' || project.id === 'grain' ? 960 : 700} />
      <span className="visual-action" aria-hidden="true">↗</span>
    </a>
    <div className="project-heading"><div><p className="eyebrow">{project.category}</p><h3 id={`${project.id}-title`}>{project.name}</h3></div><span className="project-number" aria-hidden="true">{project.number}</span></div>
    <p className="project-subtitle">{project.subtitle}</p>
    <p className="project-description">{project.description}</p>
    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    <div className="project-links"><a className="text-link" href={project.url} target="_blank" rel="noreferrer">{project.action}<Arrow /></a><span className="project-signal">{project.signal}</span></div>
    <div className="case-study"><p className="eyebrow">THE SHORT CASE STUDY</p><dl><div><dt>Challenge</dt><dd>{project.challenge}</dd></div><div><dt>Approach</dt><dd>{project.approach}</dd></div><div><dt>Shipped</dt><dd>{project.outcome}</dd></div></dl>{project.secondary && <a href={project.secondary} className="small-link" target="_blank" rel="noreferrer">{project.secondaryLabel} ↗</a>}</div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close);
  }, []);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header shell">
      <a className="wordmark" href="#" aria-label="Nikunj Singh, back to top">Nikunj Singh<span>.</span></a>
      <button className="menu-toggle" aria-controls="main-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
      <nav id="main-nav" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {['Work', 'Experience', 'About'].map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow hero-kicker"><span className="status-dot" /> NIKUNJ SINGH · SENIOR FRONTEND ENGINEER</p>
          <h1 id="hero-title">Engineering<br />with a <em>point<br className="desktop-break" /> of view.</em></h1>
          <p className="hero-description">I turn complex problems into thoughtful digital experiences. Frontend engineer by craft. Product builder by instinct.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href="#experience">The experience <span aria-hidden="true">↓</span></a></div>
          <p className="hero-caption">7+ years of building for the web. And beyond.</p>
        </div>
        <div className="hero-art"><div className="art-label"><span>IDEAS, MADE TANGIBLE.</span><span>VOL. 01 / 2026</span></div>
          <div className="editorial-frame"><img src={asset('glass-keep.webp')} alt="Glass Keep app interface showing colorful notes, checklists and image cards." width="1400" height="778" fetchPriority="high" /><div className="frame-caption"><span>GLASS KEEP</span><span>A clearer space for your ideas.</span></div></div>
          <div className="art-stamp"><span>MADE WITH</span><strong>intent.</strong></div><DecorativeAccent />
          <p className="art-footnote"><span className="little-line" /> CODE. CRAFT. CURIOSITY.</p>
        </div>
      </section>
      <div className="credentials shell"><p>Built for scale.<br /><span>Made for people.</span></p><div><strong>7+</strong><span>YEARS IN FRONTEND</span></div><div><strong>600+</strong><span>STARS ON GLASS KEEP</span></div><div><strong>50K+</strong><span>GRAIN DOWNLOADS</span></div></div>
      <section id="work" className="work-section shell section-space" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Things I’ve put<br />into the <em>world.</em></h2></div><p>A few projects at the intersection of<br className="desktop-break" /> engineering, utility and a little personality.</p></div>
        <div className="project-grid">{projects.map(project => <Project key={project.id} project={project} />)}</div>
        <div className="work-bottom"><p>Always making something.</p><a className="text-link" href={links.github} target="_blank" rel="noreferrer">More on GitHub <Arrow /></a></div>
      </section>
      <section id="experience" className="experience-section section-space" aria-labelledby="experience-title"><div className="shell experience-layout"><div><p className="eyebrow">02 / EXPERIENCE</p><h2 id="experience-title">Considered design.<br /><em>Measured impact.</em></h2><p className="section-intro">The same care I bring to personal projects, applied to the complexity of enterprise software.</p><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">Full experience on LinkedIn <Arrow /></a></div>
        <div className="experience-detail"><p className="eyebrow">PROFESSIONAL WORK</p><h3>Arrow Electronics <span>/ SiliconExpert</span></h3><p className="role">Senior Frontend Engineer</p><p>Building Angular and React experiences with TypeScript, REST API integration, and a focus on making complex information easier to use.</p><div className="impact-row"><strong>30<span>%</span></strong><div><h4>Faster page loads</h4><p>Built and launched an Angular-based Supply Chain module integrated with REST APIs.</p></div></div><div className="impact-row"><strong>20<span>%</span></strong><div><h4>Higher user engagement</h4><p>Redesigned Compliance / Reports information architecture and interactions.</p></div></div><p className="metric-note">Impact figures reported in my résumé; internal measurement data is not public.</p></div>
      </div></section>
      <section id="about" className="about-section shell section-space" aria-labelledby="about-title"><div className="about-title"><p className="eyebrow">03 / A LITTLE ABOUT ME</p><h2 id="about-title">An engineer’s mind.<br /><em>A maker’s eye.</em></h2><div className="about-note" aria-hidden="true"><span>function meets feeling.</span><svg viewBox="0 0 180 55" fill="none"><path d="M5 12C40 45 114 49 165 13m-18-1 22-5-5 24" stroke="currentColor" strokeWidth="1.5" /></svg></div></div><div className="about-copy"><p className="about-lead">Hi, I’m Nikunj. I care about how things work—and how they feel to use.</p><p>For 7+ years, I’ve worked with Angular, React and TypeScript to turn complicated requirements into clear, usable interfaces. Outside enterprise work, I build and ship my own products: a calmer notes app, a film-inspired camera, and tools that keep personal data close to home.</p><p>Photography shows up in the way I think about software, too: pay attention to the details, find the right frame, and leave out what doesn’t help.</p><div className="education"><span className="eyebrow">EDUCATION</span><h3>MS, Information Systems</h3><p>Northeastern University</p></div><div className="skills"><span className="eyebrow">MY EVERYDAY TOOLKIT</span><p>React <span>·</span> Angular <span>·</span> TypeScript <span>·</span> JavaScript<br />Tailwind CSS <span>·</span> REST APIs <span>·</span> Node.js <span>·</span> Git</p></div></div></section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell"><p className="eyebrow">04 / LET’S CONNECT</p><div className="contact-heading"><h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2><a className="contact-circle" href="mailto:nikunj.singh@live.com" aria-label="Email Nikunj Singh">↗</a></div><div className="contact-bottom"><p>Have a role, a project, or a good idea?<br />I’d love to hear about it.</p><div><a href="mailto:nikunj.singh@live.com">nikunj.singh@live.com ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>{links.resume && <a href={`${import.meta.env.BASE_URL}${links.resume}`} download>Résumé ↓</a>}</div></div></div></section>
    </main>
    <footer className="shell site-footer"><a className="wordmark" href="#" aria-label="Back to top">Nikunj Singh<span>.</span></a><p>Thoughtfully built. Always evolving.</p><a href="#">Back to top ↑</a><span>© {new Date().getFullYear()} Nikunj Singh</span></footer>
  </>;
}




