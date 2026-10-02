import { CSSProperties } from "react";
import { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`project${featured ? " project--featured" : ""}`}>
      <div className="project__head">
        <p className="meta">{project.tag}</p>
        <h3>{project.title}</h3>
        <p className="lead-copy">{project.summary}</p>
      </div>

      <div className="project__body">
        {project.visual ? (
          <figure className="project__visual">
            <div
              className="project__image"
              style={{ "--project-visual": `url(${project.visualSrc})` } as CSSProperties}
              role="img"
              aria-label={project.visualAlt}
            />
            {project.visualCaption ? <figcaption className="caption">{project.visualCaption}</figcaption> : null}
          </figure>
        ) : null}

        <ul className="plain-list">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="project__links">
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
              className="text-link"
              aria-label={`View code for ${project.title}`}
            >
              View code
            </a>
          ) : null}
          {project.secondaryLink ? (
            <a
              href={project.secondaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {project.secondaryLink.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
