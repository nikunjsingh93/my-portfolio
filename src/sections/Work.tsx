import { links, projects } from "../content";
import Arrow from "../components/Arrow";
import ProjectCard from "../components/ProjectCard";
export default function Work() {
  return (
    <section
      id="work"
      className="work-section shell section-space"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Things I’ve put
            <br />
            into the <em>world.</em>
          </h2>
        </div>
        <p>
          A few projects at the intersection of
          <br className="desktop-break" /> engineering, utility and a little
          personality.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="work-bottom">
        <p>Always making something.</p>
        <a
          className="text-link"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub <Arrow />
        </a>
      </div>
    </section>
  );
}
