import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";

const inter   = Inter({ subsets: ["latin"], variable: "--font-inter",   display: "swap" });
const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio", display: "swap" });

export const metadata: Metadata = {
  title: "Manish Bhandari",
  description: "Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.",
  icons: { icon: "https://framerusercontent.com/images/y4UrveU7PL1IGXvxSqpTUqHbnFc.png" },
  openGraph: {
    title: "Manish Bhandari",
    description: "Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.",
    images: ["https://framerusercontent.com/images/GspYNIgS18FLAOKeAmvpDd6KO4.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${antonio.variable}`} style={{ background: "#111112" }}>
        {children}
      </body>
    </html>
  );
}
