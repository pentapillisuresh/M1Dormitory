# AC Dormitory — Premium Next.js Website

A responsive, multi-page static website for an AC dormitory in Visakhapatnam, built with Next.js App Router, JSX, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements
- Node.js 20 or newer
- npm

## Install and run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production static export
```bash
npm run build
```
The static website is generated in the `out/` folder. Upload the contents of `out/` to static hosting that supports custom domains.

## Configure your real business details
Edit `src/lib/constants.js`:
- `whatsappNumber`: international digits only, e.g. `919876543210`, without `+`, spaces, or dashes.
- `phoneDisplay`, `phoneLink`, `address`, `mapUrl`, and `siteUrl`.
- Update the sample prices and facilities in `src/data/`.

The default WhatsApp number is intentionally a placeholder. Replace it before publishing. Booking form submission opens WhatsApp with a prefilled enquiry; the guest must press Send. It does not confirm room availability or reserve a bed automatically.

## Images
The starter uses Unsplash source image URLs for presentation. For production, download licensed photos of your actual rooms and replace the URLs in `src/data/` and `src/components/home/`. Avoid advertising facilities that your property does not offer.

## SEO
Page metadata is included for the main pages. `src/app/sitemap.js` and `src/app/robots.js` are static-export compatible. Replace the example domain in `src/lib/constants.js` with your real domain before launch.

## Notes
- No backend or database is required.
- `output: "export"` is enabled.
- Remote images use ordinary `<img>` tags to keep static export straightforward.
- Sample prices, address and facilities are illustrative and must be replaced with verified business information.
