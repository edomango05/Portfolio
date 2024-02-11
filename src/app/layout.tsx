import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient.ts';
import "./globals.css";
import ObfuscatedText from "@/components/ObfuscatedText";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edo.io",
  description: "About me and my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {children}
        <BootstrapClient />
        <ObfuscatedText />
      </body>
    </html>
  );
}
