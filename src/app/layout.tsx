import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import MottoImage from "@/components/MottoImage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOGKF Księżyno",
  description: "Traditional Okinawan Goju-ryu Karate-do Federation Księżyno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
      >
        <Header/>
          <MottoImage/>
            <div className="items-center justify-items-center min-h-screen site-bg-white m-0 p-0">
              {children}  
            </div>
        <Footer/>
      </body>
    </html>
  );
}
