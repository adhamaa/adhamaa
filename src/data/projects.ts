export type Project = {
  /** Two-digit index shown in the work list. */
  id: string;
  name: string;
  summary: string;
  /** Short "what I actually did" line. */
  role: string;
  year: string;
  stack: string[];
  repo?: string;
  live?: string;
  status: "shipped" | "active" | "archived";
};

/**
 * TODO(adham): replace/extend with the work you want to be judged on.
 * Only entries you're happy to have read closely belong here.
 */
export const projects: Project[] = [
  {
    id: "01",
    name: "adhamaa.github.io",
    summary:
      "This site. A statically exported Next.js App Router build with a typed content layer, dark-first design tokens, and a ⌘K command palette. Zero client JS on the pages that don't need it.",
    role: "Design + build",
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "GitHub Pages"],
    repo: "https://github.com/adhamaa/adhamaa",
    live: "https://adhamaa.github.io",
    status: "active",
  },
  {
    id: "02",
    name: "Component Lab",
    summary:
      "An in-repo playground for the primitives this site is built from — data tables with sorting, filtering and pagination, dialogs, forms and toasts — kept as a sandbox for testing interaction and accessibility details before they ship.",
    role: "Build",
    year: "2024",
    stack: ["React", "shadcn/ui", "Mantine React Table", "Zod"],
    live: "/table",
    status: "active",
  },
  {
    id: "03",
    name: "github-readme-stats",
    summary:
      "Fork of the dynamically generated GitHub stats cards, used to render the language and contribution panels on my profile README.",
    role: "Fork + config",
    year: "2021",
    stack: ["Node.js", "SVG", "Vercel"],
    repo: "https://github.com/adhamaa/github-readme-stats",
    status: "archived",
  },
];
