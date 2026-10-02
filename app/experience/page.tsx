import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

export default function ExperiencePage() {
  return (
    <main className="page">
      <PageTitle
        eyebrow="Experience"
        title="Internship work shaped around contribution, not claims."
        description="I have focused on roles where I can own concrete parts of the system and push useful work across the stack."
      />

      <Reveal as="article" className="role" amount={0.15}>
        <aside className="role__when">
          <p className="meta">June 2026 to July 2026</p>
          <p className="meta">AI Development Intern</p>
        </aside>
        <div className="role__body">
          <h2>Infivion Technologies</h2>
          <p className="lead-copy">
            Contributed to Sentira AI, a conversational wellness companion app,
            with work spanning applied NLP, multilingual UX, and product-facing
            interface decisions.
          </p>
          <div className="columns">
            <div>
              <h3>What I worked on</h3>
              <ul className="plain-list">
                <li>
                  Designed a specialized NLP pipeline using DistilBERT for
                  emotion classification across six modes.
                </li>
                <li>
                  Worked with DistilGPT-2 and GPT-2 Small for response
                  generation in the conversation flow.
                </li>
                <li>Integrated multilingual support into the experience.</li>
              </ul>
            </div>
            <div>
              <h3>How I contributed</h3>
              <ul className="plain-list">
                <li>
                  Built a mood-based color palette system grounded in color
                  psychology.
                </li>
                <li>
                  Worked across Angular, Tailwind CSS, Node.js, Express.js, and
                  MongoDB.
                </li>
                <li>
                  Focused on role-based contribution only. This was a company
                  product, so I do not present it as personal ownership.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
