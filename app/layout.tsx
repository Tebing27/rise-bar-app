import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rise and Care - Aplikasi Pemantau Gula Darah Modern",
  description: "Rise and Care adalah aplikasi pemantau gula darah modern yang membantu Anda mengelola kesehatan dengan mudah dan akurat. Dilengkapi dengan fitur analisis data, pengingat, dan pemantauan real-time.",
  keywords: "Pemantau gula darah, aplikasi kesehatan, diabetes, monitoring kesehatan, RiseBar, gula darah, healthcare app",
  authors: [{ name: "Rise and Care Team" }],
  creator: "Rise and Care",
  publisher: "Rise and Care",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rise-bar-app.vercel.app/",
    siteName: "Rise and Care",
    title: Rise and Care - Aplikasi Pemantau Gula Darah Modern",
    description: "Pantau kesehatan Anda dengan mudah menggunakan Rise and Care. Aplikasi modern untuk monitoring gula darah dengan fitur lengkap.",
    images: [
      {
        url: "/images/logoo.png",
        width: 1200,
        height: 630,
        alt: "Rise and Care App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise and Care - Aplikasi Pemantau Gula Darah Modern",
    description: "Pantau kesehatan Anda dengan mudah menggunakan Rise and Care. Aplikasi modern untuk monitoring gula darah.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
      </body>
    </html>
      </ClerkProvider>
  );
}
