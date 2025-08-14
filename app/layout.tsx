import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixelNest — Where Ideas Find Their Shape",
  description: "A modern, creative website template powered by Next.js and Tailwind CSS.",
  metadataBase: new URL("https://pixelnest.example.com"),
  openGraph: {
    title: "PixelNest",
    description: "Where Ideas Find Their Shape",
    url: "https://pixelnest.example.com",
    siteName: "PixelNest",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelNest",
    description: "Where Ideas Find Their Shape",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
