import { BUSINESS } from "@/lib/constants";

export default function sitemap() {
  const routes = ["", "/about/", "/rooms/", "/facilities/", "/pricing/", "/gallery/", "/blog/", "/contact/", "/booking/"];
  return routes.map((route) => ({ url: `${BUSINESS.siteUrl.replace(/\/$/, "")}${route}`, lastModified: new Date() }));
}
