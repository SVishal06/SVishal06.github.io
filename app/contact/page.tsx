import { ContactForm } from "@/components/contact-form";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <main className="page stack">
      <PageTitle
        eyebrow="Contact"
        title="If the work fits, let’s talk."
        description="Best for internships, freelance work, hackathon teams, or technical writing opportunities."
      />

      <section className="contact-grid">
        <Reveal as="div" className="contact-card" amount={0.18}>
          <h2>Direct links</h2>
          <div className="contact-list">
            <div className="contact-item">
              <span className="meta">Email</span>
              <a href="mailto:vishals040906@gmail.com">vishals040906@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="meta">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/vishal-s-272b86330/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vishal-s-272b86330
              </a>
            </div>
            <div className="contact-item">
              <span className="meta">GitHub</span>
              <a href="https://github.com/SVishal06" target="_blank" rel="noreferrer">
                github.com/SVishal06
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="contact-card" amount={0.18}>
          <h2>Send a note</h2>
          <p className="form-note">
            This form opens a prefilled email draft locally so it stays simple
            and does not require a backend service yet.
          </p>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}

