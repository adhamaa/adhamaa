/**
 * Single source of truth for everything personal on this site.
 * Edit this file first — the pages read from it.
 */

export const profile = {
  name: "Adham Akmal Azmi",
  shortName: "Adham AA",
  handle: "adhamaa",
  // VERIFY: role/location/status are the only "claims" on the site — tune them.
  role: "Frontend Engineer",
  focus: "React · Next.js · TypeScript",
  location: "Malaysia",
  timezone: "GMT+8",
  available: true,
  availableLabel: "Open to new work",
  email: "adhamaa92@gmail.com",
  siteUrl: "https://adhamaa.github.io",
  tagline:
    "I build fast, accessible interfaces for the web — typed end to end, tested where it counts, and shipped continuously.",
  bio: [
    "I'm a web engineer who likes the boring parts: predictable state, honest types, small components that stay small. Most of my time goes into React and Next.js apps — design systems, data-heavy dashboards, and the glue that makes them feel instant.",
    "Outside of product work I read source code for fun, keep a running list of things I don't understand yet, and try to leave every codebase I touch a little easier for the next person.",
  ],
  now: [
    "Digging into data scraping and API design.",
    "Contributing to open source — especially Islamic open source projects.",
    "Sharpening TypeScript, accessibility, and rendering performance.",
  ],
  principles: [
    {
      title: "Types are documentation",
      body: "If the compiler can catch it, a reviewer shouldn't have to. Model the domain first, wire the UI second.",
    },
    {
      title: "Ship small, ship often",
      body: "Short-lived branches, reversible changes, and a deploy pipeline boring enough to trust on a Friday.",
    },
    {
      title: "Accessible by default",
      body: "Semantic HTML, real focus states, and keyboard paths that work — not an audit item bolted on at the end.",
    },
    {
      title: "Measure before optimising",
      body: "Bundle budgets, Core Web Vitals, and a profiler beat opinions about what feels slow.",
    },
  ],
} as const;

export type SocialLink = {
  name: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "instagram" | "mail";
};

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@adhamaa",
    href: "https://github.com/adhamaa",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "adham-akmal-azmi",
    href: "https://www.linkedin.com/in/adham-akmal-azmi-421a7b134/",
    icon: "linkedin",
  },
  {
    name: "X",
    handle: "@adhamakmal",
    href: "https://twitter.com/adhamakmal",
    icon: "x",
  },
  {
    name: "Instagram",
    handle: "@adhamaa",
    href: "https://instagram.com/adhamaa",
    icon: "instagram",
  },
  {
    name: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/table" },
] as const;

export const sectionLinks = [
  { label: "Stack", href: "/#stack" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;
