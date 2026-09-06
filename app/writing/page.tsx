import { PageTitle } from "@/components/page-title";
import { HashnodePostPreviews } from "@/components/hashnode-post-previews";
import { Reveal } from "@/components/reveal";

export default function WritingPage() {
  return (
    <main className="page stack">
      <PageTitle
        eyebrow="Writing"
        title="I publish project notes and technical breakdowns on Hashnode."
        description="This site points to the writing rather than mirroring it. The blog is where I expand on process, tradeoffs, and lessons from actual builds."
      />

      <Reveal as="section" className="writing-card" amount={0.18}>
        <span className="badge">Vishal Builds</span>
        <h2>Technical writing tied to projects, not filler content.</h2>
        <p>
          My blog includes the first write-up on the FMCG distribution system
          and will continue to track the projects that deserve a longer
          explanation than a portfolio card can hold.
        </p>
        <HashnodePostPreviews />
      </Reveal>
    </main>
  );
}
