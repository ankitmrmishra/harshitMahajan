import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harshit Mahajan - Generalist in Growth, Business, and Startups",
    template: "%s | Harshit Mahajan",
  },
  description:
    "Harshit Mahajan is a generalist with interests in Growth, Business, and Startups. Currently building Podcast circle and CoFounds, with experience in scaling India's biggest student communities.",
  keywords: [
    "Harshit Mahajan",
    "growth",
    "business",
    "startups",
    "community building",
    "Podcast circle",
    "CoFounds",
  ],
  authors: [{ name: "Harshit Mahajan" }],
  creator: "Harshit Mahajan",
  publisher: "Harshit Mahajan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harshit-eta.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Harshit Mahajan - Generalist in Growth, Business, and Startups",
    description:
      "Discover Harshit Mahajan's journey in growth, business, and startups. Learn about his experiences in building India's biggest student communities and current projects.",
    url: "https://harshit-eta.vercel.app/",
    siteName: "Harshit Mahajan",
    images: [
      {
        url: "https://harshit-eta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harshit Mahajan - Generalist and Entrepreneur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Mahajan - Generalist in Growth, Business, and Startups",
    description:
      "Discover Harshit Mahajan's journey in growth, business, and startups. Learn about his experiences in building India's biggest student communities and current projects.",
    images: ["https://harshit-eta.vercel.app/og-image.png"],
    creator: "@HarshitMahajan_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
