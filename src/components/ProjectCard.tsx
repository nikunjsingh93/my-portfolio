import { projects } from "../content";
import Arrow from "./Arrow";
import { asset } from "../utils/assets";
export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article
      className={`project ${project.className}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <a
        className="project-visual"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} ${project.id === "grain" ? "on Google Play" : "on GitHub"} (opens in new tab)`}
      >
        <span className="visual-index" aria-hidden="true">
          {project.number} / SELECTED WORK
        </span>
        <img
          src={asset(project.image)}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          width={project.id === "mochu" || project.id === "grain" ? 480 : 1200}
          height={project.id === "mochu" || project.id === "grain" ? 960 : 700}
        />
        <span className="visual-action" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="project-heading">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
        </div>
        <span className="project-number" aria-hidden="true">
          {project.number}
        </span>
      </div>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          {project.action}
          <Arrow />
        </a>
        <span className="project-signal">{project.signal}</span>
      </div>
      <div className="case-study">
        <p className="eyebrow">THE SHORT CASE STUDY</p>
        <dl>
          <div>
            <dt>Challenge</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Shipped</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        {project.secondary && (
          <a
            href={project.secondary}
            className="small-link"
            target="_blank"
            rel="noreferrer"
          >
            {project.secondaryLabel} ↗
          </a>
        )}
      </div>
    </article>
  );
}
