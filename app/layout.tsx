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

};
<meta name="google-site-verification" content="_BxN-o63Dnkf6J_nePzoJikU0G-6Fls3VtqtnpIfVQA" />

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
