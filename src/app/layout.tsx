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

export const metadata: Metadata = {
  title: "Tyson vs Mayweather - Spring 2026 Exhibition Fight",
  description: "Official fan site for the historic Mike Tyson vs Floyd Mayweather exhibition match. Get the latest news, fight updates, and exclusive content about the Spring 2026 boxing event.",
  keywords: "Mike Tyson, Floyd Mayweather, boxing, exhibition fight, 2026, spring boxing match",
  openGraph: {
    title: "Tyson vs Mayweather - Spring 2026",
    description: "Two legends. One ring. History in the making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
