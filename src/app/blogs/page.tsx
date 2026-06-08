"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

const featured = {
  badge: "Product Management", date: "Apr 27, 2025", mostViewed: true,
  title: "HOW TO SCALE QUALITY WITH BETA TESTING",
  desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
  href: "/blogs/how-to-scale-quality-with-beta-testing",
  img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
};

const blogs = [
  { badge: "Content & Brand Marketing", date: "Mar 30, 2025", title: "THE CONTENT FLYWHEEL: SCALING BRAND AUTHORITY", desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth and trust.", href: "/blogs/the-content-flywheel", img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png" },
  { badge: "Business Analysis & Strategy", date: "Apr 22, 2025", title: "THE STRATEGIC AUDIT: MAXIMIZING BUSINESS EFFICIENCY", desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand's core workflows.", href: "/blogs/the-strategic-audit", img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png" },
  { badge: "Business Analysis & Strategy", date: "Apr 30, 2025", title: "COMPETITIVE ANALYSIS FOR THE MODERN STARTUP", desc: "Map the market landscape to identify competitor weaknesses and carve out your brand's unique edge.", href: "/blogs/competitive-analysis-for-the-modern-startup", img: "/images/lwzpnzdk6KYdLO6WwJnKqEu8U.png" },
  { badge: "Community & Product Growth", date: "May 2, 2025", title: "FROM BETA USERS TO BRAND AMBASSADORS", desc: "Leverage the power of 'building in public' to turn early product testers into a self-sustaining marketing community.", href: "/blogs/from-beta-users-to-brand-ambassadors", img: "/images/w62D2elwRl3kxN0uECK3T9rjOXY.png" },
];

export default function BlogsPage() {
  return (
    <>
      <Header />
      <style>{`body{background:#1a1a1b;} @media(max-width:768px){.blog-grid{grid-template-columns:1fr!important;}}`}</style>
      <main style={{ background: "#1a1a1b", paddingTop: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 120px" }}>

          {/* H1 */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px", textTransform: "uppercase", color: "#fff", margin: "0 0 60px" }}>
              Insights &<br />Strategy
            </h1>
          </motion.div>

          {/* Featured blog — full width */}
          <Reveal>
            <Link href={featured.href} style={{ textDecoration: "none", display: "block", marginBottom: 40 }}>
              <motion.div whileHover={{ scale: 1.006 }} transition={{ duration: 0.3 }}
                style={{ background: "#1e1e1f", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                <div style={{ width: "100%", aspectRatio: "16/7", overflow: "hidden", position: "relative" }}>
                  <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 10 }}>
                    <span style={{ background: "#d0ff71", color: "#000", fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, padding: "5px 14px", borderRadius: 999 }}>
                      MOST VIEWED
                    </span>
                    <span style={{ background: "rgba(0,0,0,0.6)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 400, padding: "5px 14px", borderRadius: 999 }}>
                      {featured.badge}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "32px 40px 36px" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 10px" }}>{featured.date}</p>
                  <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 36, textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: "0 0 14px" }}>{featured.title}</h2>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>{featured.desc}</p>
                </div>
              </motion.div>
            </Link>
          </Reveal>

          {/* 2-col grid for remaining blogs */}
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40, marginBottom: 60 }}>
            {blogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <Link href={b.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                    style={{ background: "#1e1e1f", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                      <img src={b.img} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                      <span style={{ background: "transparent", color: "#d0ff71", border: "1px solid rgba(208,255,113,0.35)", borderRadius: 999, padding: "4px 12px", alignSelf: "flex-start", fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 400 }}>{b.badge}</span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{b.date}</span>
                      <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", lineHeight: 1.3, color: "#fff", margin: 0 }}>{b.title}</h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0, flex: 1 }}>{b.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
