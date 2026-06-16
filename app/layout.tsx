import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Smile Studio — Premium Dental Care in Bangalore",
    template: "%s | Smile Studio",
  },
  description:
    "Smile Studio is a premium private dental clinic in Koramangala, Bangalore, led by Dr. Aanya Sharma. We offer teeth whitening, implants, braces, root canal, and more.",
  openGraph: {
    title: "Smile Studio — Premium Dental Care in Bangalore",
    description:
      "Smile Studio is a premium private dental clinic in Koramangala, Bangalore, led by Dr. Aanya Sharma. We offer teeth whitening, implants, braces, root canal, and more.",
    url: "https://smile-care-studio.vercel.app",
    siteName: "Smile Studio",
    images: [
      {
        url: "/smileOgImage.jpeg",
        width: 1200,
        height: 630,
        alt: "Smile Studio — Premium Dental Care in Bangalore",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Studio — Premium Dental Care in Bangalore",
    description:
      "Smile Studio is a premium private dental clinic in Koramangala, Bangalore, led by Dr. Aanya Sharma. We offer teeth whitening, implants, braces, root canal, and more.",
    images: ["/smileOgImage.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
