
import { BUSINESS } from "@/lib/constants";

export default function sitemap() {
  const routes = [
    "",
    "/about/",
    "/rooms/",
    "/facilities/",
    "/pricing/",
    "/gallery/",
    "/blog/",
    "/contact/",
    "/booking/",
  ];

  const baseUrl = BUSINESS.siteUrl.replace(/\/+$/, "");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
