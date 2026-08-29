import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adham Akmal Azmi — frontend engineer working in React, Next.js and TypeScript. What I build, how I work, and what I'm learning right now.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
