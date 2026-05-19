import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a dental appointment at Smile Studio, Koramangala, Bangalore. Choose your service, pick a date and time, and confirm in under 2 minutes.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
