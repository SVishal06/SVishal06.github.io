export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" }
] as const;

export const skills = [
  "TypeScript",
  "Next.js",
  "Flutter",
  "Java",
  "Node.js",
  "Express.js",
  "Angular",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Figma",
  "Blender",
  "Google Earth Engine"
];

export type Project = {
  tag: string;
  title: string;
  summary: string;
  points: string[];
  link?: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
  visual?: boolean;
};

export const featuredProject: Project = {
  tag: "Featured project",
  title: "FMCG Distribution Unit Management System",
  summary:
    "Full-stack platform built for a real distribution business with business-specific rules around collections, tenant access, and long-running uptime constraints.",
  points: [
    "Built dynamic payment spillover logic to handle ledger flow across pending dues.",
    "Added multi-tenant RBAC so separate business roles could operate in the same system with clear boundaries.",
    "Supported CSV bulk upload for faster day-to-day operational entry.",
    "Used a keep-alive cron setup to protect uptime on free-tier hosting."
  ],
  link: "https://fmcg-app-ten.vercel.app",
  secondaryLink: {
    label: "Read build notes",
    href: "https://vishalbuild.hashnode.dev"
  }
};

export const remoteSensingProject: Project = {
  tag: "Remote sensing",
  title: "India Space Academy Summer Training Program 2026",
  summary:
    "Two geospatial analysis projects delivered as formatted reports using satellite-derived indicators and Google Earth Engine workflows.",
  points: [
    "Mapped drought severity using VCI, or Vegetation Condition Index.",
    "Analyzed urban heat island effects using LST, or Land Surface Temperature.",
    "Focused on readable output and structured reporting, not only map generation."
  ]
};

export const blenderProject: Project = {
  tag: "Beyond code",
  title: "Blender 3D Work",
  summary:
    "Cinematic render studies in Cycles, including a katana model explored through iterative lighting, material tuning, and compositing choices.",
  points: [
    "Presented as a creative track alongside software work.",
    "Placeholder render assets are wired in and ready to be replaced with final images.",
    "Built with a process mindset similar to software iteration."
  ],
  visual: true
};

