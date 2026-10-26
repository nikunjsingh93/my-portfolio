import { links } from "../content";
import Arrow from "../components/Arrow";
export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section section-space"
      aria-labelledby="experience-title"
    >
      <div className="shell experience-layout">
        <div>
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2 id="experience-title">
            Considered design.
            <br />
            <em>Measured impact.</em>
          </h2>
          <p className="section-intro">
            The same care I bring to personal projects, applied to the
            complexity of enterprise software.
          </p>
          <a
            className="text-link"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Full experience on LinkedIn <Arrow />
          </a>
        </div>
        <div className="experience-detail">
          <p className="eyebrow">PROFESSIONAL WORK</p>
          <h3>
            Arrow Electronics <span>/ SiliconExpert</span>
          </h3>
          <p className="role">Senior Frontend Engineer</p>
          <p>
            Building Angular and React experiences with TypeScript, REST API
            integration, and a focus on making complex information easier to
            use.
          </p>
          <div className="impact-row">
            <strong>
              30<span>%</span>
            </strong>
            <div>
              <h4>Faster page loads</h4>
              <p>
                Built and launched an Angular-based Supply Chain module
                integrated with REST APIs.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <strong>
              20<span>%</span>
            </strong>
            <div>
              <h4>Higher user engagement</h4>
              <p>
                Redesigned Compliance / Reports information architecture and
                interactions.
              </p>
            </div>
          </div>
          <p className="metric-note">
            Impact figures reported in my résumé; internal measurement data is
            not public.
          </p>
        </div>
      </div>
    </section>
  );
}
