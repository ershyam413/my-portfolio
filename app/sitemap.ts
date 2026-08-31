import type { MetadataRoute } from "next";
import { allWork } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://shyammahato.dev";
  return [
    { url: origin, lastModified: new Date() },
    ...allWork.map((project) => ({
      url: `${origin}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
