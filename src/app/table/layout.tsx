import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table",
  description: "Table page",
};

export default function TableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
