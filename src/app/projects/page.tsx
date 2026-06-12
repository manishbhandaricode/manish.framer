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

/* Featured: 1120×350px, white bg, row layout (image left, text right), radius 20px */
const featured = [
  { badge: "Report", title: "UNLOCKING INDIA'S UNTAPPED INVESTOR SEGMENTS", desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.", href: "#", img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png" },
  { badge: "Report", title: "DEZERV: THE 8X AUM GROWTH STORY", desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years, highlighting its transparent fee model, AI-driven portfolio engine, and strategic investments in technology and client experience.", href: "#", img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png" },
  { badge: "Research", title: "MUTUAL FUND GOALS AND INVESTOR ALIGNMENT", desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement and simplify investment decisions, resulting in improved investor education and higher subscription rates.", href: "#", img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png" },
  { badge: "Pitch Deck", title: "CRYSTAL PEAK PITCH DECK", desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions. It outlines a framework for achieving 30% faster hiring and 85% role-fit alignment using real-time KPI tracking.", href: "#", img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png" },
];

/* More Projects: 540px wide, no bg, no border-radius, column layout (image top, text below) */
const more = [
  { badge: "Report", title: "KUVERA: ANALYSIS OF STRATEGIC GROWTH, MARKET POSITION, AND FINANCIAL PERFORMANCE", desc: "A detailed research report analyzing Kuvera's growth trajectory, strategic acquisition rationale, market positioning, and future challenges, with actionable recommendations for sustained success in India's wealthtech ecosystem.", img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png" },
  { badge: "User Stories", title: "USER STORIES DEVELOPMENT FOR ENHANCED WEALTHTECH PRODUCT DESIGN", desc: "Created detailed user stories to capture functional requirements and improve client interactions, driving clarity and seamless feature implementation.", img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png" },
  { badge: "Dashboard", title: "LEGAL COMPLIANCE FRAMEWORK IN HOSPITAL MANAGEMENT DASHBOARD", desc: "This dashboard is specifically designed for hospital management teams to understand and monitor legal compliance requirements within a Hospital Management System (HMS). It focuses only on laws, regulations, and statutory obligations—not full hospital operations—helping ensure hospitals stay legally secure and audit-ready.", img: "/images/tvqGTWAzICR8R2aDEJVFu2RYhYM.png" },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <style>{`
        html, body { background: #1a1a1b !important; }
        @media(max-width: 900px) {
          .feat-card { flex-direction: column !important; height: auto !important; }
          .feat-img { width: 100% !important; height: 200px !important; }
          .more-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      <main style={{ background: "#1a1a1b", paddingTop: 100 }}>
        <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 40px 120px" }}>

          {/* H1 — 120px Antonio */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px", textTransform: "uppercase", color: "#fff", margin: "0 0 20px" }}>
              Featured<br />Projects
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 700, margin: "0 0 56px" }}>
              Showcasing a selection of my work, including research, reports, and user stories that highlight my approach to analysis, communication, and problem-solving.
            </p>
          </motion.div>

          {/* Featured — single column, 1120×350px, white bg, ROW layout */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 80 }}>
            {featured.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link href={p.href} style={{ textDecoration: "none" }}>
                  <motion.div
                    className="feat-card"
                    whileHover={{ scale: 1.008 }} transition={{ duration: 0.3 }}
                    style={{
                      display: "flex", flexDirection: "row",
                      height: 350, borderRadius: 20, overflow: "hidden",
                      background: "#ffffff",
                    }}
                  >
                    {/* Left: image */}
                    <div className="feat-img" style={{ width: 500, flexShrink: 0, overflow: "hidden", position: "relative" }}>
                      <img src={p.img} alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    {/* Right: text */}
                    <div style={{ flex: 1, padding: "36px 40px", display: "flex", flexDirection: "column", gap: 14, background: "#ffffff" }}>
                      <span style={{ background: "#d0ff71", color: "#000", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 99, alignSelf: "flex-start" }}>
                        {p.badge}
                      </span>
                      <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", lineHeight: 1.2, color: "#111", margin: 0 }}>
                        {p.title}
                      </h2>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 300, color: "#555", lineHeight: 1.7, margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* MORE PROJECTS — H2 60px, 2-col grid 540px each, gap 80px 40px */}
          <Reveal>
            <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 48px" }}>
              More Projects
            </h2>
          </Reveal>

          {/* 2-col grid: 540px × 540px, gap: 80px row 40px col — transparent cards, no border-radius */}
          <div className="more-grid" style={{ display: "grid", gridTemplateColumns: "540px 540px", gap: "80px 40px" }}>
            {more.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {/* Image top — 540×200px */}
                  <div style={{ width: "100%", height: 200, overflow: "hidden", borderRadius: 12 }}>
                    <img src={p.img} alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  {/* Text below */}
                  <div style={{ padding: "20px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
                    <span style={{ background: "#d0ff71", color: "#000", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 99, alignSelf: "flex-start" }}>
                      {p.badge}
                    </span>
                    <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 22, textTransform: "uppercase", lineHeight: 1.3, color: "#fff", margin: 0 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
