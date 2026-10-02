import { ContactForm } from "@/components/contact-form";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <main className="page">
      <PageTitle
        eyebrow="Contact"
        title="If the work fits, let’s talk."
        description="Best for internships, freelance work, hackathon teams, or technical writing opportunities."
      />

      <section className="contact-grid">
        <Reveal as="div" className="contact-links" amount={0.18}>
          <h2>Direct links</h2>
          <dl className="contact-list">
            <div className="contact-item">
              <dt>Email</dt>
              <dd>
                <a href="mailto:vishals040906@gmail.com">vishals040906@gmail.com</a>
              </dd>
            </div>
            <div className="contact-item">
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/vishal-s-272b86330/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/vishal-s-272b86330
                </a>
              </dd>
            </div>
            <div className="contact-item">
              <dt>GitHub</dt>
              <dd>
                <a href="https://github.com/SVishal06" target="_blank" rel="noreferrer">
                  github.com/SVishal06
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal as="div" className="contact-formwrap" amount={0.18}>
          <h2>Send a note</h2>
          <p className="form-note">
            Send a message directly from the site, or use one of the direct links alongside it.
          </p>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
