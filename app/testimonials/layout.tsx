import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read verified patient reviews for Smile Studio, Bangalore. 4.9★ average rating across teeth whitening, implants, root canal, braces, and more.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
