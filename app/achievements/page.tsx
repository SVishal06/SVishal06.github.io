import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

const competitions = [
  {
    title: "CIH'26 · Coimbatore Innovation Hackathon 2026",
    detail: "Team PRAIXS · C6 pitch",
    result: "Ranked 1st in the Top 50 after Round 1; finished 13th overall out of 1,200 teams.",
    note: "My first hackathon."
  },
  {
    title: "AICCI National Startup Summit",
    detail: "C6 pitch",
    result: "Placed Top 10."
  },
  {
    title: "XploitX-26 CTF",
    detail: "Capture the Flag competition",
    result: "Placed 23rd."
  }
];

export default function AchievementsPage() {
  return (
    <main className="page stack">
      <PageTitle
        eyebrow="Achievements"
        title="Learning in public, under real constraints."
        description="A record of competitions, pitches, and training that have shaped how I approach technical work."
      />

      <Reveal as="section" className="section" amount={0.16}>
        <div className="section-heading">
          <span className="badge">Hackathons &amp; competitions</span>
          <h2>Ideas tested with a clock running.</h2>
        </div>
        <div className="timeline">
          {competitions.map((competition) => (
            <article className="timeline-item" key={competition.title}>
              <div className="stack">
                <h2>{competition.title}</h2>
                <p className="meta">{competition.detail}</p>
              </div>
              <p className="item-copy">{competition.result}</p>
              {competition.note ? <p className="meta">{competition.note}</p> : null}
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" amount={0.16}>
        <div className="section-heading">
          <span className="badge">Certifications</span>
          <h2>Completed training</h2>
        </div>
        <article className="card achievement-certificate">
          <h3>ISA Summer Training</h3>
          <p className="item-copy">
            India Space Academy summer training, with applied remote-sensing work in Google Earth Engine.
          </p>
        </article>
      </Reveal>
    </main>
  );
}
