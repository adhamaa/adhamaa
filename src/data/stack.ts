export type StackGroup = {
  /** Two-digit index rendered next to the group title. */
  id: string;
  title: string;
  note: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    id: "01",
    title: "Frontend",
    note: "what users actually touch",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Redux · Context",
    ],
  },
  {
    id: "02",
    title: "Backend",
    note: "the services behind it",
    items: [
      "Node.js",
      "Hono",
      "Express",
      "GraphQL",
      "REST",
      "Python",
      "Flask",
      "Django",
    ],
  },
  {
    id: "03",
    title: "Data",
    note: "schemas and storage",
    items: [
      "PostgreSQL",
      "Neon (serverless PG)",
      "MongoDB",
      "SQL",
      "Zod",
      "Schema design",
    ],
  },
  {
    id: "04",
    title: "Platform",
    note: "how it ships and stays up",
    items: [
      "Cloudflare Workers",
      "Docker",
      "Linux",
      "GitHub Actions",
      "PM2",
      "Git",
      "Postman",
      "Figma",
    ],
  },
];

/** Rendered in the hero ticker. */
export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Hono",
  "Node.js",
  "Express",
  "GraphQL",
  "Python",
  "Flask",
  "PostgreSQL",
  "Neon",
  "Cloudflare Workers",
  "Docker",
  "Tailwind CSS",
];
