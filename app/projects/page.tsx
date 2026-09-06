import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { blenderProject, c6Venture, featuredProject, remoteSensingProject } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main className="page stack">
      <PageTitle
        eyebrow="Projects"
        title="A mix of business software, applied geospatial work, and creative experiments."
        description="The strongest thread across these projects is problem framing. I care about constraints, delivery, and whether the end result is actually usable."
      />

      <Reveal as="section" className="section" amount={0.16}>
        <ProjectCard project={featuredProject} featured />
      </Reveal>

      <section className="grid-2 section">
        <Reveal as="div" amount={0.18}>
          <ProjectCard project={remoteSensingProject} />
        </Reveal>
        <Reveal as="div" amount={0.18}>
          <ProjectCard project={blenderProject} />
        </Reveal>
      </section>

      <Reveal as="section" className="section venture-section" amount={0.18}>
        <div className="section-heading">
          <span className="badge">In progress</span>
          <h2>Ventures</h2>
          <p>
            Early ideas I am validating through research, conversations, and pitch work—not finished products.
          </p>
        </div>
        <article className="card venture-card">
          <div className="stack">
            <span className="meta">{c6Venture.status}</span>
            <h3>{c6Venture.title}</h3>
            <p className="item-copy">{c6Venture.summary}</p>
          </div>
          <span className="venture-note">No public repository yet</span>
        </article>
      </Reveal>

      <Reveal as="section" className="section card" amount={0.18}>
        <div className="section-heading">
          <span className="badge">Notes</span>
          <h2>What I optimize for</h2>
          <p>
            I like projects where the technical choices are tied to a real use
            case. That can be uptime on free-tier hosting, tenant separation for
            a business workflow, or a report that turns satellite data into
            something readable.
          </p>
        </div>
        <div className="card-actions">
          <Link href="/writing" className="ghost-link">
            Read the build notes
          </Link>
          <Link href="/contact" className="button">
            Start a conversation
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
