import Link from "next/link";
import { IntroHero } from "@/components/intro-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxPanel } from "@/components/parallax-panel";
import { skillGroups } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="page stack">
      <IntroHero />

      <Reveal as="section" className="section split" amount={0.22}>
        <div className="section-heading">
          <span className="badge">About</span>
          <h2>Building software that has to work outside the demo.</h2>
          <p>
            I am a 3rd-year Computer Science and Engineering student at
            Rajalakshmi Engineering College in Chennai with a CGPA of 8.29. I
            build full-stack apps, explore applied AI, and spend time on 3D
            modeling in Blender and technical writing.
          </p>
        </div>
        <ParallaxPanel className="card">
          <p className="body-copy">
            My work leans practical. I like systems with messy real-world
            constraints, whether that means tenant-aware access control, NLP
            model pipelines, or reports built from remote sensing data.
          </p>
          <div className="inline-links">
            <Link href="/projects" className="ghost-link">
              View projects
            </Link>
            <Link href="/experience" className="ghost-link">
              See experience
            </Link>
          </div>
        </ParallaxPanel>
      </Reveal>

      <Reveal as="section" className="section">
        <SectionHeading
          badge="Skills"
          title="Tools I work with"
          description="I use the stack that fits the problem, with most of my recent work centered on full-stack web apps, AI workflows, and a few creative tools outside code."
        />
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
