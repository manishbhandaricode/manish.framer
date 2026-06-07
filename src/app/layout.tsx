import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manish Bhandari | Business Analyst & Content Strategist",
  description: "Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${antonio.variable} h-full antialiased bg-[#0f0f0f] text-[#ededed]`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
