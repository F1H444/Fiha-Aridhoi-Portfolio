import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernNavbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import LenisProvider from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
    // Tambahkan suppressHydrationWarning di html atau body 
    // untuk mencegah error akibat browser extensions
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <PreloaderProvider>
            <Preloader />
            <LenisProvider>
              <CustomCursor />
              <ModernNavbar />
              {children}
            </LenisProvider>
          </PreloaderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}