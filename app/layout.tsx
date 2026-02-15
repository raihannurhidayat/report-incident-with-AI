import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./Provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${inter.className} antialiased`}>
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
