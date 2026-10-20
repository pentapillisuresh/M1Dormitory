
import { BUSINESS } from "@/lib/constants";

export default function robots() {
  const baseUrl = BUSINESS.siteUrl.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
