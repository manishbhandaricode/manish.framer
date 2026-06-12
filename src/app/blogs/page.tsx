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

function Tag({ text }: { text: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      border: "1px solid rgba(255,255,255,0.25)", borderRadius: 99,
      padding: "4px 14px",
      fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400,
      color: "rgba(255,255,255,0.75)",
    }}>{text}</span>
  );
}

/* Featured blog: full-width 1120px × 649px, lime accent */
const featuredBlog = {
  badge: "Product Management", date: "Apr 27, 2025", mostViewed: true,
  title: "HOW TO SCALE QUALITY WITH BETA TESTING",
  desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
  href: "/blogs/how-to-scale-quality-with-beta-testing",
  img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
};

/* Grid blogs: 2-col 540px each, gap 80px row 40px col */
const gridBlogs = [
  { badge: "Content & Brand Marketing", date: "Mar 30, 2025", title: "THE CONTENT FLYWHEEL: SCALING BRAND AUTHORITY", desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth and trust.", href: "/blogs/the-content-flywheel", img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png" },
  { badge: "Business Analysis & Strategy", date: "Apr 22, 2025", title: "THE STRATEGIC AUDIT: MAXIMIZING BUSINESS EFFICIENCY", desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand's core workflows.", href: "/blogs/the-strategic-audit", img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png" },
  { badge: "Business Analysis & Strategy", date: "Apr 30, 2025", title: "COMPETITIVE ANALYSIS FOR THE MODERN STARTUP", desc: "Map the market landscape to identify competitor weaknesses and carve out your brand's unique edge.", href: "/blogs/competitive-analysis", img: "/images/lwzpnzdk6KYdLO6WwJnKqEu8U.png" },
  { badge: "Community & Product Growth", date: "May 2, 2025", title: "FROM BETA USERS TO BRAND AMBASSADORS", desc: "Leverage the power of \"building in public\" to turn early product testers into a self-sustaining marketing community.", href: "/blogs/from-beta-users", img: "/images/w62D2elwRl3kxN0uECK3T9rjOXY.png" },
];

export default function BlogsPage() {
  return (
    <>
      <Header />
      <style>{`
        html, body { background: #1a1a1b !important; }
        @media(max-width: 900px) {
          .blogs-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      <main style={{ background: "#1a1a1b", paddingTop: 100 }}>
        <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 40px 120px" }}>

          {/* H1 — "INSIGHTS & STRATEGY" 120px */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px", textTransform: "uppercase", color: "#fff", margin: "0 0 20px" }}>
              Insights &<br />Strategy
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 700, margin: "0 0 56px" }}>
              From data-driven insights to market-ready products, these articles offer strategies to help you optimize your business, validate new ideas, and scale high-impact marketing across your digital landscape.
            </p>
          </motion.div>

          {/* FEATURED BLOG — full width 1120px, lime accent bg */}
          <Reveal>
            <Link href={featuredBlog.href} style={{ textDecoration: "none", display: "block", marginBottom: 80 }}>
              <motion.div whileHover={{ scale: 1.006 }} transition={{ duration: 0.3 }}
                style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}>
                {/* Lime accent background */}
                <div style={{ background: "#d0ff71", borderRadius: 20, padding: 4 }}>
                  <div style={{ borderRadius: 16, overflow: "hidden", position: "relative" }}>
                    {/* Cover image */}
                    <div style={{ width: "100%", height: 440, overflow: "hidden", position: "relative" }}>
                      <img src={featuredBlog.img} alt={featuredBlog.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      {/* Overlays */}
                      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 10 }}>
                        <span style={{ background: "#d0ff71", color: "#000", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 99 }}>
                          MOST VIEWED
                        </span>
                        <span style={{ background: "rgba(0,0,0,0.6)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "Inter, sans-serif", fontSize: 12, padding: "5px 14px", borderRadius: 99 }}>
                          {featuredBlog.badge}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ background: "#1a1a1b", padding: "28px 32px 32px" }}>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 8px" }}>{featuredBlog.date}</p>
                      <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 40, textTransform: "uppercase", lineHeight: 1.2, color: "#fff", margin: "0 0 12px" }}>
                        {featuredBlog.title}
                      </h2>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>
                        {featuredBlog.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </Reveal>

          {/* GRID BLOGS — 2 columns, 540px each, gap 80px row / 40px col */}
          <div className="blogs-grid" style={{ display: "grid", gridTemplateColumns: "540px 540px", gap: "80px 40px" }}>
            {gridBlogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={b.href} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                    style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {/* Image top */}
                    <div style={{ width: "100%", height: 280, overflow: "hidden", borderRadius: 12, marginBottom: 20 }}>
                      <motion.img src={b.img} alt={b.title}
                        whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    {/* Text below */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <Tag text={b.badge} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{b.date}</span>
                      <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: 0 }}>
                        {b.title}
                      </h3>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                        {b.desc}
                      </p>
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
