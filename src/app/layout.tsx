import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "grid place-items-center")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="container m-4 px-10 w-full h-auto fixed top-0 flex items-center justify-end">
            <ModeToggle />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
