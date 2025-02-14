import type { Metadata } from "next";
import config from '@/config.json'
import type { Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inconsolata, Poppins } from 'next/font/google'
import { PreloadResources } from "@/components/PreloadResources/PreloadResources";

import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '700']
})

export const viewport: Viewport = {
  themeColor: '#ef6361',
}

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: config.title,
  description: config.description,
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} ${poppins.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <PreloadResources />
      </body>
    </html>
  );
}
