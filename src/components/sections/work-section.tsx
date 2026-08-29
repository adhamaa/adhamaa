import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { GitHubIcon } from "@/components/site/icons";
import { projects, type Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  active: "border-brand/40 text-brand",
  shipped: "border-border text-muted-foreground",
  archived: "border-border/60 text-muted-foreground/60",
};

export function WorkSection() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected work"
      description="A short list, kept honest. Each one links to the source or the running thing."
    >
      <ul className="border-t border-border/70">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.id}
            delay={index * 80}
            className="group border-b border-border/70"
          >
            <div className="grid gap-6 py-8 transition-colors md:grid-cols-[5rem_1fr_11rem] md:gap-10 md:group-hover:bg-muted/30">
              <div className="flex items-center gap-3 font-mono text-xs md:flex-col md:items-start md:gap-1">
                <span className="text-brand">{project.id}</span>
                <span className="text-muted-foreground/60">{project.year}</span>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-brand sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
                  {project.role}
                </p>
                <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border/80 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row items-start gap-4 md:flex-col md:items-end md:gap-3">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]",
                    statusStyles[project.status]
                  )}
                >
                  {project.status}
                </span>

                {project.live ? (
                  project.live.startsWith("/") ? (
                    <Link
                      href={project.live}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      visit
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      visit
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    source
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 font-mono text-xs text-muted-foreground">
        More on{" "}
        <a
          href="https://github.com/adhamaa"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-foreground"
        >
          github.com/adhamaa
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </p>
    </Section>
  );
}
