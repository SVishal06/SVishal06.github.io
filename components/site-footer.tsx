const links = [
  { label: "GitHub", href: "https://github.com/SVishal06" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-s-272b86330/" },
  { label: "Hashnode", href: "https://vishalbuild.hashnode.dev" },
  { label: "Email", href: "mailto:vishals040906@gmail.com" }
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__identity">
          S Vishal. Full-stack apps, applied AI, and technical writing.
        </p>
        <ul className="footer__links" aria-label="Social and contact links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
