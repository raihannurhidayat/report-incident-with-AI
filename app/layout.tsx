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
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500">
          <div className="fixed inset-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(56,189,248,0.03), transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(43,165,223,0.05), transparent_70%)]" />
          </div>

          {/* navbar */}
          <Navbar />
          <main className="pt-16">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
