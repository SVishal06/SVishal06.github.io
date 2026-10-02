import Link from "next/link";
import { IntroHero } from "@/components/intro-hero";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="page">
      <IntroHero />

      <Reveal as="section" className="section about" amount={0.2}>
        <h2>Building software that has to work outside the demo.</h2>
        <div className="about__body">
          <p>
            I am a 3rd-year Computer Science and Engineering student at
            Rajalakshmi Engineering College in Chennai. I build full-stack
            apps, explore applied AI, and spend time on 3D modeling in Blender
            and technical writing.
          </p>
          <p>
            My work leans practical. I like systems with messy real-world
            constraints, whether that means tenant-aware access control, NLP
            model pipelines, or reports built from remote sensing data. I like
            shipping software that holds up in real use, then writing clearly
            about the tradeoffs behind it.
          </p>
          <dl className="facts">
            <div>
              <dt>Current focus</dt>
              <dd>Applied AI</dd>
            </div>
            <div>
              <dt>College CGPA</dt>
              <dd>8.27</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Chennai</dd>
            </div>
          </dl>
          <p className="inline-links">
            <Link href="/projects" className="text-link">
              View projects
            </Link>
            <Link href="/experience" className="text-link">
              See experience
            </Link>
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section" amount={0.16}>
        <h2 className="section-title">Tools I work with</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
