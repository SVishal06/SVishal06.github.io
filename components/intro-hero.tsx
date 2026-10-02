import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParallaxPanel } from "@/components/parallax-panel";

export function IntroHero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <Reveal as="p" className="eyebrow" delay={0.04}>
          Chennai | Full-stack and applied AI
        </Reveal>
        <Reveal as="h1" delay={0.1} y={22}>
          S Vishal
        </Reveal>
        <Reveal as="p" className="hero__lead" delay={0.18}>
          Building full-stack products, NLP-driven systems, and the occasional
          beyond-code experiment in Blender.
        </Reveal>
        <Reveal as="div" className="hero__cta" delay={0.26}>
          <Link href="/contact" className="button">
            Contact
          </Link>
          <a href="/resume.pdf" target="_blank" className="button button--quiet">
            Resume
          </a>
        </Reveal>
      </div>

      <Reveal as="div" className="hero__visual" delay={0.14} y={0}>
        <ParallaxPanel className="hero__frame" offset={18}>
          <img
            src="/placeholders/hero-visual.png"
            alt="Blender render of a TIE fighter style spacecraft against a star field"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </ParallaxPanel>
        <p className="caption">Blender study.</p>
      </Reveal>
    </section>
  );
}
