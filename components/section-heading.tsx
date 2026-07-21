type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionHeading({
  badge,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="badge">{badge}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

