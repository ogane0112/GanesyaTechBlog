import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ガネーシャテックブログ",
  description: "技術に関する事を発信しています！",
  verification: {
    google: '_BxN-o63Dnkf6J_nePzoJikU0G-6Fls3VtqtnpIfVQA',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  openGraph: {
    images:"/opengraph-image.png",
    title: "ガネーシャテックブログ",
    description:"技術に関する事を発信しています！",
    url:"https://ganesya-tech-blog.vercel.app/",
    siteName:"ガネーシャテックブログ",
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ガネーシャテックブログ",
    description:"https://ganesya-tech-blog.vercel.app/",
    site: '@ganesya0112',
    creator: '@ganesya0112',
  },
  alternates: {
    canonical: "https://ganesya-tech-blog.vercel.app/",
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
      </body>
    </html>
  );
}
