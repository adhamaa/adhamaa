import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "A sandbox for the UI primitives this site is built from — headless tables, sorting, filtering and pagination.",
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
