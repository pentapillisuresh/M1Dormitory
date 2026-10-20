import { Snowflake, BedDouble, ShieldCheck, Wifi, Bath, PlugZap, Droplets, Clock } from "lucide-react";

export const facilities = [
  { title: "Air-conditioned stay", description: "Comfort-focused rooms with AC.", icon: Snowflake, enabled: true },
  { title: "Comfortable bedding", description: "A restful place to recharge.", icon: BedDouble, enabled: true },
  { title: "Security", description: "Ask our team about current security arrangements.", icon: ShieldCheck, enabled: true },
  { title: "Wi-Fi", description: "Confirm availability and terms before booking.", icon: Wifi, enabled: false },
  { title: "Bathroom access", description: "Bathroom arrangements explained on enquiry.", icon: Bath, enabled: true },
  { title: "Charging points", description: "Ask about charging access for your bed.", icon: PlugZap, enabled: true },
  { title: "Drinking water", description: "Confirm the current drinking-water setup.", icon: Droplets, enabled: false },
  { title: "Flexible arrival", description: "Check-in timing can be discussed in advance.", icon: Clock, enabled: true }
];
