import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dr. Aanya Sharma and the Smile Studio team — a prosthodontist, implant specialist, senior hygienist, and patient coordinator dedicated to your smile.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
