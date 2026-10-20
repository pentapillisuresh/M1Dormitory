import { BUSINESS } from "@/lib/constants";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BUSINESS.siteUrl.replace(/\/$/, "")}/sitemap.xml`
  };
}
