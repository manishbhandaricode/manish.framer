import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio" });

export const metadata: Metadata = {
  title: "Manish Bhandari",
  description: "Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${antonio.variable} font-inter bg-background text-foreground antialiased selection:bg-primary selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
