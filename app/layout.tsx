import type { Metadata } from "next";
import "./globals.css";

import config from '@/config.json'
import type { Viewport } from 'next'

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
      <body>
        {children}
      </body>
    </html>
  );
}
