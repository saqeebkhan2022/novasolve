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
  title: "Nova Solve LLC - IT Services & Real Estate Solutions",
  description:
    "Nova Solve LLC bridges technology and real estate for a smarter future. Leading in IT Services and Real Estate Solutions.",
  keywords:
    "IT Services, Real Estate, Technology, Innovation, Business Solutions",
  generator: "v0.app",
  openGraph: {
    title: "Nova Solve LLC - IT Services & Real Estate Solutions",
    description: "Empowering Innovation & Real Estate Growth",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
