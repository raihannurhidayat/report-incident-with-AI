import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./Provider";
import { Geist_Mono, JetBrains_Mono } from "next/font/google";

const fontSans = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SafeReport - Anonymous Crime Reporting App",
  description: "Generated Crime Reporting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {" "}
      {/* Tambahkan class dark jika perlu */}
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-black text-white`}
      >
        {/* BACKGROUND LAYER - Tetap di sini agar tidak hancur saat scroll */}
        <div className="fixed inset-0 -z-10 min-h-screen overflow-hidden">
          {/* Warna dasar gelap */}
          <div className="absolute inset-0 bg-slate-950" />

          {/* Cahaya Biru Tengah (Layer 1) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_10%)]" />

          {/* Cahaya Biru Luar (Layer 2) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,165,223,0.1),transparent_20%)]" />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-8">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
