import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxPanel } from "@/components/parallax-panel";

export function IntroHero() {
  return (
    <section className="hero">
      <Reveal as="div" className="panel hero__copy" delay={0.08} y={28}>
        <div className="stack">
          <span className="eyebrow">Chennai | Full-stack and applied AI</span>
          <h1>S Vishal</h1>
          <p className="lead">
            Building full-stack products, NLP-driven systems, and the occasional
            beyond-code experiment in Blender.
          </p>
        </div>

        <div className="stack">
          <div className="hero__cta">
            <Link href="/contact" className="button">
              Contact
            </Link>
            <a href="/resume-placeholder.pdf" target="_blank" className="ghost-link">
              Resume
            </a>
          </div>
          <div className="inline-links">
            <Link href="/projects" className="ghost-link">
              Projects
            </Link>
            <Link href="/writing" className="ghost-link">
              Writing
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="hero__aside">
        <ParallaxPanel className="panel portrait-card" offset={32}>
          <div className="portrait" />
          <p className="body-copy">
            I like shipping software that has to hold up in real use, then
            writing clearly about the tradeoffs behind it.
          </p>
        </ParallaxPanel>

        <Reveal as="div" className="mini-grid" delay={0.18} y={22}>
          <div className="stat">
            <span className="meta">Current focus</span>
            <strong>Applied AI</strong>
          </div>
          <div className="stat">
            <span className="meta">College CGPA</span>
            <strong>8.29</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
