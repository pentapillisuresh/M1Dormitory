"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  // Your WhatsApp number with the country code (91 for India)
  const whatsappNumber = "918331838383";
  
  const message = "Hello, I would like to enquire about a stay at AC Dormitory in Visakhapatnam.";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Enquire on WhatsApp" 
      // Increased overall button size to h-16 w-16 on mobile, and h-20 w-20 on desktop
      className="whatsapp-float fixed bottom-6 right-6 z-50 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
    >
      <Image 
        src="/images/whatsapp.webp" 
        alt="WhatsApp" 
        width={48} 
        height={48} 
        // Increased the image size inside the button
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
      />
    </a>
  );
}