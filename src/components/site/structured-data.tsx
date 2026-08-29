import { profile, socials } from "@/data/profile";

/** Person schema so search engines and AI crawlers get the facts right. */
export function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.handle,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description: profile.tagline,
    address: { "@type": "PostalAddress", addressCountry: profile.location },
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Web accessibility",
      "Web performance",
    ],
    sameAs: socials
      .filter((social) => social.icon !== "mail")
      .map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
