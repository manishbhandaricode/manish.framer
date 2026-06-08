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

const featured = [
  { badge: "Report", title: "UNLOCKING INDIA'S UNTAPPED INVESTOR SEGMENTS", desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.", href: "#", img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png" },
  { badge: "Report", title: "DEZERV: THE 8X AUM GROWTH STORY", desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years, highlighting its transparent fee model, AI-driven portfolio engine, and strategic investments in technology and client experience.", href: "#", img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png" },
  { badge: "Research", title: "MUTUAL FUND GOALS AND INVESTOR ALIGNMENT", desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement and simplify investment decisions.", href: "#", img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png" },
  { badge: "Pitch Deck", title: "CRYSTAL PEAK PITCH DECK", desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions.", href: "#", img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png" },
];

const more = [
  { badge: "Report", title: "KUVERA: ANALYSIS OF STRATEGIC GROWTH, MARKET POSITION, AND FINANCIAL PERFORMANCE", desc: "A detailed research report analyzing Kuvera's growth trajectory, strategic acquisition rationale, market positioning in the competitive wealthtech space.", img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png" },
  { badge: "User Stories", title: "USER STORIES DEVELOPMENT FOR ENHANCED WEALTHTECH PRODUCT DESIGN", desc: "Created detailed user stories to capture functional requirements and improve client interactions in wealthtech platforms.", img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png" },
  { badge: "Dashboard", title: "LEGAL COMPLIANCE FRAMEWORK IN HOSPITAL MANAGEMENT DASHBOARD", desc: "This dashboard is specifically designed for hospital management teams to understand and monitor legal compliance requirements within a Hospital Management System (HMS).", img: "/images/tvqGTWAzICR8R2aDEJVFu2RYhYM.png" },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <style>{`body{background:#1a1a1b;} @media(max-width:768px){.more-grid{grid-template-columns:1fr!important;}}`}</style>
      <main style={{ background: "#1a1a1b", paddingTop: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 120px" }}>

          {/* H1 */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px", textTransform: "uppercase", color: "#fff", margin: "0 0 24px" }}>
              Featured Projects
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 720, margin: "0 0 60px" }}>
              Showcasing a selection of my work, including research, reports, and user stories that highlight my approach to analysis, communication, and problem-solving.
            </p>
          </motion.div>

          {/* Featured — single column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 80 }}>
            {featured.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={p.href} style={{ textDecoration: "none" }}>
                  <motion.div whileHover={{ scale: 1.006 }} transition={{ duration: 0.3 }}
                    style={{ background: "#1e1e1f", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                      <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", top: 20, left: 20 }}>
                        <span style={{ background: "#d0ff71", color: "#000", fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, padding: "5px 14px", borderRadius: 999 }}>{p.badge}</span>
                      </div>
                    </div>
                    <div style={{ padding: "32px 40px 36px" }}>
                      <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 32, textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: "0 0 14px" }}>{p.title}</h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* More Projects — 2-column grid */}
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 60, textTransform: "uppercase", color: "#fff", margin: "0 0 40px" }}>More Projects</h2>
          </Reveal>
          <div className="more-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
            {more.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                  style={{ background: "#1e1e1f", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: 16, left: 16 }}>
                      <span style={{ background: "#d0ff71", color: "#000", fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999 }}>{p.badge}</span>
                    </div>
                  </div>
                  <div style={{ padding: "24px 28px 28px", flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", lineHeight: 1.3, color: "#fff", margin: "0 0 12px" }}>{p.title}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
