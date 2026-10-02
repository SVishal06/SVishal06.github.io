import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { blenderProject, c6Venture, featuredProject, remoteSensingProject } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main className="page">
      <PageTitle
        eyebrow="Projects"
        title="A mix of business software, applied geospatial work, and creative experiments."
        description="The strongest thread across these projects is problem framing. I care about constraints, delivery, and whether the end result is actually usable."
      />

      <Reveal as="section" className="project-list" amount={0.1}>
        <ProjectCard project={featuredProject} featured />
        <ProjectCard project={remoteSensingProject} />
        <ProjectCard project={blenderProject} />
      </Reveal>

      <Reveal as="section" className="section venture" amount={0.18}>
        <h2 className="section-title">Ventures</h2>
        <div className="venture__body">
          <p className="lead-copy">
            Early ideas I am validating through research, conversations, and
            pitch work. These are not finished products.
          </p>
          <div className="venture__item">
            <p className="meta">{c6Venture.status}</p>
            <h3>{c6Venture.title}</h3>
            <p>{c6Venture.summary}</p>
            <p className="meta">No public repository yet</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section about" amount={0.18}>
        <h2>What I optimize for</h2>
        <div className="about__body">
          <p>
            I like projects where the technical choices are tied to a real use
            case. That can be uptime on free-tier hosting, tenant separation for
            a business workflow, or a report that turns satellite data into
            something readable.
          </p>
          <p>
            <Link href="/contact" className="button">
              Contact
            </Link>
          </p>
        </div>
      </Reveal>
    </main>
  );
}
