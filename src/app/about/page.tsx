import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { profile, socials } from "@/data/profile";
import { stack } from "@/data/stack";
import { Reveal } from "@/components/site/reveal";
import { iconMap } from "@/components/site/icons";

const facts = [
  { key: "name", value: profile.name },
  { key: "role", value: profile.role },
  { key: "based", value: `${profile.location} (${profile.timezone})` },
  { key: "focus", value: profile.focus },
  { key: "status", value: profile.availableLabel },
];

const offTheClock = [
  "Memorising and revising the Qur'an.",
  "Gaming — the competitive kind, and the long story kind.",
  "Reading other people's source code to steal the good ideas.",
];

export default function About() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem]"
      />

      <div className="container py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <span className="label">
            <span className="text-brand">//</span> about
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Assalamualaykum — I&apos;m Adham
            <span className="text-brand">.</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div className="order-2 space-y-16 lg:order-1">
            <Reveal className="space-y-6">
              {profile.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-pretty text-base leading-[1.8] text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className="space-y-6">
              <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-tight">
                <span className="font-mono text-xs text-brand">01</span>
                What I actually do
              </h2>
              <p className="text-pretty leading-[1.8] text-muted-foreground">
                Most of my work sits between design and infrastructure: turning
                a Figma file into a component library that survives contact with
                real data, wiring it to an API without leaking loading states
                everywhere, and keeping the bundle small enough that the whole
                thing still opens fast on a mid-range phone.
              </p>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border/80 bg-border/60 sm:grid-cols-2">
                {stack.map((group) => (
                  <div key={group.id} className="bg-background p-5">
                    <div className="mb-3 flex items-baseline justify-between">
                      <h3 className="text-sm font-medium">{group.title}</h3>
                      <span className="font-mono text-[11px] text-brand">
                        {group.id}
                      </span>
                    </div>
                    <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="space-y-6">
              <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-tight">
                <span className="font-mono text-xs text-brand">02</span>
                Currently
              </h2>
              <ul className="space-y-3">
                {profile.now.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[11px] h-px w-4 shrink-0 bg-brand/50" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="space-y-6">
              <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-tight">
                <span className="font-mono text-xs text-brand">03</span>
                Off the clock
              </h2>
              <ul className="space-y-3">
                {offTheClock.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[11px] h-px w-4 shrink-0 bg-brand/50" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border/80 p-6">
                <p className="mr-auto text-sm text-muted-foreground">
                  Want the short version, or the code?
                </p>
                <Link
                  href="/#work"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm transition-colors hover:border-brand/50 hover:bg-muted/50"
                >
                  See the work
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Say hello
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Meta rail */}
          <Reveal delay={80} className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <dl className="overflow-hidden rounded-lg border border-border/80">
                {facts.map((fact) => (
                  <div
                    key={fact.key}
                    className="flex items-baseline justify-between gap-4 border-b border-border/70 px-4 py-3 last:border-b-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
                      {fact.key}
                    </dt>
                    <dd className="text-right text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target={social.icon === "mail" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/80 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        <span className="sr-only">{social.name}</span>
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
