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

      {project.visual ? <div className="visual-placeholder" /> : null}

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
