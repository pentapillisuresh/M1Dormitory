import PageHero from "@/components/ui/PageHero";
import GallerySection from "@/components/home/GallerySection";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata = {
  title: "Gallery",
  description:
    "Browse a visual preview of accommodation interiors and replace illustrative images with real AC Dormitory photos.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at the spaces."
        description="This gallery currently uses illustrative stock photos. Replace each image with a matching, accurate photo of the actual property."
      />
      <GallerySection preview={false} />
      <BookingCTA />
    </>
  );
}