import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(),
  applicationName: siteConfig.name,
  keywords: [
    "Corvyx",
    "mobile apps",
    "PDF Pocket",
    "OneSnap",
    "OneCut",
    "photo editor",
    "video editor",
    "PDF tools",
    "AI apps",
  ],
  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1724" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrument.variable} h-full`}>
      <body className="site-bg flex min-h-full flex-col antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
