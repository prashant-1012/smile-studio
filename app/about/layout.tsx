import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smile Studio's story, founding philosophy, core values, certifications, and the journey from a 2-chair clinic to Bangalore's most trusted dental practice.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
