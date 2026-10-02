export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" }
] as const;

export const skillGroups = [
  { label: "Languages", skills: ["TypeScript", "Java"] },
  {
    label: "Frameworks",
    skills: ["Next.js", "Flutter", "Node.js", "Express.js", "Angular", "Tailwind CSS"]
  },
  { label: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Tools", skills: ["Figma", "Blender", "Google Earth Engine"] }
];

export type Project = {
  tag: string;
  title: string;
  summary: string;
  points: string[];
  link?: string;
  codeLink?: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
  visual?: boolean;
  visualSrc?: string;
  visualAlt?: string;
  visualCaption?: string;
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
  codeLink: "https://github.com/SVishal06/FMGCDT",
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
  title: "Katana Render in Blender",
  summary:
    "A cinematic katana render built in Blender and rendered with Cycles.",
  points: [
    "Modeled the blade, guard, and wrapped handle as a single studio scene.",
    "Iterated on lighting and compositing across many test renders to get the final look.",
    "Worked through the scene using a Blender MCP integration."
  ],
  visual: true,
  visualSrc: "/placeholders/katana-render.png",
  visualAlt: "Blender Cycles render of a katana with a polished curved blade and a wrapped handle, lit against a dark background",
  visualCaption: "Final render."
};

export const c6Venture = {
  title: "C6",
  summary:
    "A carbon-aware compute scheduler for small teams and research labs. C6 would delay non-urgent cloud jobs to lower-carbon grid windows using the Electricity Maps API.",
  status: "Pitch-deck stage, early-stage concept"
};
