import type { MetadataRoute } from "next";
import { appPrivacyPolicies } from "@/lib/app-privacy";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/about", "/contact", "/privacy", "/terms"];

  const privacyRoutes = appPrivacyPolicies.map((policy) => `/privacy/${policy.slug}`);

  const pages = [...staticRoutes, ...privacyRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...pages, ...productPages];
}
