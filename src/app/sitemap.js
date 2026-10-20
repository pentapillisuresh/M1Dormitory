import { BUSINESS } from "@/lib/constants";

export const dynamic = "force-static";

export async function GET() {
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

  const urls = routes
    .map(
      (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}