import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure an absolute, protocol-included base and strip trailing slashes
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://cityscout-three.vercel.app").replace(/\/+$/, "");

  // Use a const tuple and return items typed as the exact Sitemap item type
  const routes = ["", "/compare", "/snapshot", "/wizard", "/about", "/contact"] as const;

  return routes.map((p): MetadataRoute.Sitemap[number] => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}
