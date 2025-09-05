import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tyson-vs-mayweather.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tyson vs Mayweather 2026 - Exhibition Fight | Official Fan Hub",
    template: "%s | Tyson vs Mayweather 2026"
  },
  description: "Get the latest news, betting odds, and exclusive updates on the Mike Tyson vs Floyd Mayweather exhibition fight scheduled for Spring 2026. Two boxing legends, one historic event.",
  keywords: [
    "Mike Tyson",
    "Floyd Mayweather",
    "boxing exhibition 2026",
    "Tyson vs Mayweather fight",
    "spring 2026 boxing match",
    "boxing legends fight",
    "Tyson Mayweather news",
    "exhibition boxing match",
    "heavyweight vs welterweight",
    "boxing betting odds",
    "fight predictions 2026",
    "CSI Sports boxing",
    "boxing pay per view 2026"
  ],
  authors: [{ name: "Tyson vs Mayweather Fight Hub" }],
  creator: "Tyson vs Mayweather Fight Hub",
  publisher: "Tyson vs Mayweather Fight Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tyson vs Mayweather 2026 - Historic Boxing Exhibition",
    description: "Mike Tyson vs Floyd Mayweather Spring 2026. Get exclusive news, betting odds, fighter stats, and live updates for the most anticipated boxing exhibition of the decade.",
    siteName: "Tyson vs Mayweather Fight Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mike Tyson vs Floyd Mayweather 2026 Exhibition Fight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyson vs Mayweather 2026 - Exhibition Fight",
    description: "Spring 2026: Two boxing legends, one ring. Get the latest updates on Mike Tyson vs Floyd Mayweather.",
    images: ["/twitter-image.jpg"],
    creator: "@boxing",
  },
  alternates: {
    canonical: siteUrl,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}