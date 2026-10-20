"use client";
import Image from "next/image";

export default function CallButton() {
  // Your phone number with the country code (91 for India)
  const phoneNumber = "+918331838383";

  return (
    <a 
      href={`tel:${phoneNumber}`}
      aria-label="Call Us" 
      // Changed bg to a dark premium grey, added a subtle gold border
      className="fixed bottom-28 right-6 z-50 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#1E1E1E] border border-[#C5A46D]/30 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#2A2A2A]"
    >
      <Image 
        src="/images/call.png" 
        alt="Call" 
        width={48} 
        height={48} 
        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
      />
    </a>
  );
}