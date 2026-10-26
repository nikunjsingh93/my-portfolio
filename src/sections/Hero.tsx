import Arrow from "../components/Arrow";
import DecorativeAccent from "../components/DecorativeAccent";
import { asset } from "../utils/assets";
export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">
          <span className="status-dot" /> NIKUNJ SINGH · SENIOR FRONTEND
          ENGINEER
        </p>
        <h1 id="hero-title">
          Engineering
          <br />
          with a{" "}
          <em>
            point
            <br className="desktop-break" /> of view.
          </em>
        </h1>
        <p className="hero-description">
          I turn complex problems into thoughtful digital experiences. Frontend
          engineer by craft. Product builder by instinct.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <Arrow />
          </a>
          <a className="text-link" href="#experience">
            The experience <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="hero-caption">
          7+ years of building for the web. And beyond.
        </p>
      </div>
      <div className="hero-art">
        <div className="art-label">
          <span>IDEAS, MADE TANGIBLE.</span>
          <span>VOL. 01 / 2026</span>
        </div>
        <div className="editorial-frame">
          <img
            src={asset("glass-keep.webp")}
            alt="Glass Keep app interface showing colorful notes, checklists and image cards."
            width="1400"
            height="778"
            fetchPriority="high"
          />
          <div className="frame-caption">
            <span>GLASS KEEP</span>
            <span>A clearer space for your ideas.</span>
          </div>
        </div>
        <div className="art-stamp">
          <span>MADE WITH</span>
          <strong>intent.</strong>
        </div>
        <DecorativeAccent />
        <p className="art-footnote">
          <span className="little-line" /> CODE. CRAFT. CURIOSITY.
        </p>
      </div>
    </section>
  );
}
