import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Smile Studio in Koramangala, Bangalore. Call +91 98400 12345, email hello@smilestudio.in, or send us a message — we respond within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
