import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

const url = "https://www.ganesyatech.com/"

export const metadata: Metadata = {

  metadataBase:new URL(url),
  title: "ガネーシャテックブログ",
  description: "技術に関する事を発信しています！",

  verification: {
    google: 'FhlgtoB7lWygYhMXUaENJ_u9kblf83cDrrL9uG39MKE',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },

  openGraph: {

    title: "ガネーシャテックブログ",
    images:"/opengraph-image.png",
    description:"技術に関する事を発信しています！",
    url:url,
    siteName:"ガネーシャテックブログ",
    locale: 'ja_JP',
    type: 'website',

  },
  twitter: {

    card: 'summary_large_image',
    title: "ガネーシャテックブログ",
    description:url,
    site: '@ganesya0112',
    creator: '@ganesya0112',
    images:"/opengraph-image.png",

  },
  alternates: {

    canonical: url,

  },

};


export default function RootLayout({

  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className} >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
