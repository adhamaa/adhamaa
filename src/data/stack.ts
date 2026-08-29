export type StackGroup = {
  /** Two-digit index rendered next to the group title. */
  id: string;
  title: string;
  note: string;
  items: string[];
};

/** Seeded from the tools listed in the repo README — prune what you no longer use. */
export const stack: StackGroup[] = [
  {
    id: "01",
    title: "Core",
    note: "what I reach for daily",
    items: ["TypeScript", "JavaScript (ES2023)", "React", "Next.js", "Node.js"],
  },
  {
    id: "02",
    title: "Interface",
    note: "design systems & markup",
    items: [
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Sass",
      "HTML5",
      "CSS3",
      "Framer-style motion",
    ],
  },
  {
    id: "03",
    title: "Data",
    note: "moving bytes around",
    items: ["GraphQL", "REST", "SQL", "MySQL", "MongoDB", "Zod", "React Query"],
  },
  {
    id: "04",
    title: "Craft",
    note: "how the work gets shipped",
    items: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "ESLint",
      "Vitest",
      "Playwright",
      "VS Code",
    ],
  },
];

/** Rendered in the hero ticker. */
export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Radix UI",
  "GitHub Actions",
  "Accessibility",
  "Web Performance",
];
