import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernNavbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIHA ARIDHOI | PORTFOLIO",
  description: "Website Portfolio BY FIHA ARIDHOI",
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
        <LanguageProvider>
          <PreloaderProvider>
            <Preloader />
            <SmoothScroll />
            <ModernNavbar />
            {children}
          </PreloaderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
