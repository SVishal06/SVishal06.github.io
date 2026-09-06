import { CSSProperties } from "react";
import { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`card project-card${featured ? " featured" : ""}`}>
      <div className="stack">
        <span className="badge">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="item-copy">{project.summary}</p>
      </div>

      {project.visual ? (
        <div
          className="visual-placeholder visual-placeholder--wip"
          style={{ "--project-visual": `url(${project.visualSrc})` } as CSSProperties}
          role="img"
          aria-label={project.visualAlt}
        />
      ) : null}

      <ul className="project-points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="card-actions">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="button">
            Open project
          </a>
        ) : null}
        {project.codeLink ? (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="ghost-link"
            aria-label={`View code for ${project.title}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.5-1.3-1.25-1.64-1.25-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.53-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.73 10.73 0 0 1 5.65 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.26-5.14 5.55.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z"
              />
            </svg>
            View Code
          </a>
        ) : null}
        {project.secondaryLink ? (
          <a
            href={project.secondaryLink.href}
            target="_blank"
            rel="noreferrer"
            className="ghost-link"
          >
            {project.secondaryLink.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}
