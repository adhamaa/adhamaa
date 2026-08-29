import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: profile.siteUrl, lastModified, priority: 1 },
    { url: `${profile.siteUrl}/about`, lastModified, priority: 0.8 },
    { url: `${profile.siteUrl}/table`, lastModified, priority: 0.5 },
  ];
}
