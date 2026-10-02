import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

const competitions = [
  {
    title: "CIH'26, Coimbatore Innovation Hackathon 2026",
    detail: "Team PRAIXS, C6 pitch",
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
    <main className="page">
      <PageTitle
        eyebrow="Achievements"
        title="Learning in public, under real constraints."
        description="A record of competitions, pitches, and training that have shaped how I approach technical work."
      />

      <Reveal as="section" className="section" amount={0.12}>
        <h2 className="section-title">Ideas tested with a clock running.</h2>
        <ul className="entries">
          {competitions.map((competition) => (
            <li className="entry" key={competition.title}>
              <div className="entry__head">
                <h3>{competition.title}</h3>
                <p className="meta">{competition.detail}</p>
              </div>
              <div className="entry__body">
                <p className="lead-copy">{competition.result}</p>
                {competition.note ? <p className="meta">{competition.note}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="section" amount={0.16}>
        <h2 className="section-title">Completed training</h2>
        <ul className="entries">
          <li className="entry">
            <div className="entry__head">
              <h3>ISA Summer Training</h3>
              <p className="meta">Certification</p>
            </div>
            <div className="entry__body">
              <p className="lead-copy">
                India Space Academy summer training, with applied remote-sensing
                work in Google Earth Engine.
              </p>
            </div>
          </li>
        </ul>
      </Reveal>
    </main>
  );
}
