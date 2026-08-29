export type Project = {
  /** Two-digit index shown in the work list. */
  id: string;
  name: string;
  /** One line: what it is, for whom. */
  kicker: string;
  /** The problem it solves. */
  problem: string;
  /** What I built and owned. */
  build: string;
  role: string;
  year: string;
  stack: string[];
  /** Two or three things worth pointing at in an interview. */
  highlights: string[];
  repo?: string;
  live?: string;
  status: "shipped" | "active" | "archived";
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Sharah CMpro",
    kicker: "Accounting platform with HR built in — an independent product of mine",
    problem:
      "Finance and people data lived in separate tools, so the same employee, the same month and the same ringgit had to be entered twice — and reconciled by hand whenever the two disagreed.",
    build:
      "A single admin console where accounting and HR share one database and one permission model. I designed the schema, wrote the API, built every screen, and shipped it to the edge — solo, end to end.",
    role: "Solo — schema, API, UI, deploy",
    year: "2026 — present",
    stack: ["Vite", "React", "TypeScript", "Hono", "Cloudflare", "Neon Postgres"],
    highlights: [
      "Serverless Postgres on Neon behind a Hono API running on Cloudflare Workers — no servers to patch, cold starts measured in milliseconds",
      "Role-based access so finance, HR and management each see exactly their slice of the same records",
      "Data-dense tables built to stay fast and readable at real production row counts",
    ],
    live: "https://admin.sharah.my/",
    status: "active",
  },
  {
    id: "02",
    name: "Homeopathy Radionic App",
    kicker: "Case-management app for homeopathic practitioners",
    problem:
      "Consultations were being tracked on paper, which made a patient's history hard to retrieve, hard to compare across visits, and impossible to reason about systematically when deciding on a remedy.",
    build:
      "An app that carries a practitioner from intake to outcome: open a case for a patient, work through the consultation, and produce the resulting remedy set — with the whole history kept queryable for the next visit.",
    role: "Solo — schema, API, UI, deploy",
    year: "2026 — present",
    stack: ["Next.js", "React", "TypeScript", "Hono", "Cloudflare", "Neon Postgres"],
    highlights: [
      "A multi-step consultation flow modelled as explicit state, so a half-finished case is always resumable",
      "Domain modelling done first — patients, cases, findings and remedies as real types rather than loose JSON",
      "Built for clinic hardware: fast on mid-range devices and usable one-handed between patients",
    ],
    live: "https://homeopathy-radionic-app.qahwah.my/",
    status: "active",
  },
  {
    id: "03",
    name: "QHP Certificate Registry",
    kicker: "Certificate issuing and verification — an Excel system of mine, rebuilt as a web app",
    problem:
      "I originally built this as a spreadsheet during my freelance years — I designed the logo, the certificate template and the issuing logic behind it. It worked, but a spreadsheet cannot be verified by a third party, cannot be shared safely, and needed manual work every time a certificate was reissued.",
    build:
      "The same system rebuilt as a real product: a registry that generates certificates from programme records and keeps every issued one as a lookup-able entry, so verification is a query rather than a phone call. Same logic I designed in Excel, now with a schema, an API and an audit trail behind it.",
    role: "Solo — logic, brand, schema, API, UI, deploy",
    year: "2026 (from a 2020 original)",
    stack: ["Vite", "React", "TypeScript", "Hono", "Cloudflare", "Neon Postgres"],
    highlights: [
      "Carried my own domain logic across a full platform migration — spreadsheet to Postgres — without losing the rules that made the original work",
      "Certificate template and logo are mine too, so the generated output matches the brand exactly",
      "Generation and registry share one source of truth, so an issued certificate can always be traced back to its record",
    ],
    live: "https://qhp-web.qahwah.my/",
    status: "active",
  },
  {
    id: "04",
    name: "adhamaa.github.io",
    kicker: "This site",
    problem:
      "A portfolio that loads slowly or says nothing concrete is worse than no portfolio at all.",
    build:
      "A statically exported Next.js build with a typed content layer, dark-first design tokens and a ⌘K command palette. Ships zero client JavaScript on the pages that don't need any.",
    role: "Design + build",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "GitHub Pages"],
    highlights: [
      "Fully static export — no server, no runtime cost, deployed by GitHub Actions on push",
    ],
    repo: "https://github.com/adhamaa/adhamaa",
    live: "https://adhamaa.github.io",
    status: "active",
  },
];
