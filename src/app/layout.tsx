import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import MottoImage from "@/components/MottoImage";
import Logo from "@/components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Białostocki Klub Karate Goju-ryu - Dojo \"Hasu\"",
  description: "Białostocki Klub Karate Goju-ryu - Dojo \"Hasu\"! Dołącz do nas i ćwicz tradycyjne karate prosto z Okinawy!",
  keywords: "karate nowe miasto, karate księżyno, karate białystok, goju-ryu białystok, tradycyjne karate białystok, karate juchnowiec kościelny, sztuki walki białystok, sztuki walki horodniany",
  robots: "index, follow"
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
        <Logo/>
        <Header/>
          <MottoImage/>
          <div className="items-center justify-items-center min-h-screen site-bg-white m-0 p-0 text-lg">
            {children}  
          </div>
          <MottoImage label={null} />
        <Footer/>
      </body>
    </html>
  );
}
