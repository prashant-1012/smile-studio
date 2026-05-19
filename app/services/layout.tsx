import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all 10 dental treatments at Smile Studio — teeth whitening, implants, braces, root canal, cosmetic dentistry, and more in Koramangala, Bangalore.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
