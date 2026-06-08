"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

/* ── Scroll Reveal ── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

/* ── Services Accordion ── */
const services = [
  {
    num: "1.", title: "BUSINESS ANALYSIS",
    desc: "Gather and analyze business requirements to align with stakeholder goals. Model processes and workflows. Prepare detailed documentation and business cases. Facilitate communication between technical teams and business stakeholders.",
  },
  {
    num: "2.", title: "PRODUCT TESTING",
    desc: "Define product vision and strategy. Lead cross-functional teams. Prioritize features and manage product roadmaps. Analyze user feedback and market trends.",
  },
  {
    num: "3.", title: "CONTENT STRATEGY",
    desc: "Responsive website design. Landing page design and optimization. Webflow development and customization. Website maintenance and updates.",
  },
  {
    num: "4.", title: "CONTENT REASEARCH",
    desc: "Brand strategy and identity development. Visual style guide creation. Typography and color scheme selection. Brand storytelling and messaging.",
  },
];

function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {services.map((s, i) => (
        <div key={i}>
          <div
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 0", cursor: "pointer",
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.15)" : undefined,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-antonio)", fontWeight: 400, fontSize: 32, color: "#d0ff71", lineHeight: 1 }}>
                {s.num}
              </span>
              <span style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 28, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                {s.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ color: "#fff", fontSize: 20, flexShrink: 0 }}
            >
              ↑
            </motion.span>
          </div>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.7,
              paddingBottom: 20, margin: 0,
            }}>
              {s.desc}
            </p>
          </motion.div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.15)" }} />
        </div>
      ))}
    </div>
  );
}

/* ── Featured Projects data ── */
const featuredProjects = [
  {
    badge: "Report",
    title: "UNLOCKING INDIA'S UNTAPPED INVESTOR SEGMENTS",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects/unlocking-india",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report",
    title: "DEZERV: THE 8X AUM GROWTH STORY",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years, highlighting its transparent fee model, AI-driven portfolio engine, and strategic investments in technology and client experience.",
    href: "/projects/dezerv",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Research",
    title: "MUTUAL FUND GOALS AND INVESTOR ALIGNMENT",
    desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement and simplify investment decisions.",
    href: "/projects/shopease-redesign-sprint",
    img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png",
  },
  {
    badge: "Pitch Deck",
    title: "CRYSTAL PEAK PITCH DECK",
    desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions.",
    href: "/projects/crystal-peak",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
];

/* ── Blog data ── */
const blogs = [
  {
    category: "Content & Brand Marketing", date: "Mar 30, 2025",
    title: "THE CONTENT FLYWHEEL: SCALING BRAND AUTHORITY",
    desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth and trust.",
    href: "/blogs/the-content-flywheel",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
  },
  {
    category: "Product Management", date: "Apr 27, 2025",
    title: "HOW TO SCALE QUALITY WITH BETA TESTING",
    desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
    href: "/blogs/how-to-scale-quality-with-beta-testing",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
  },
];

/* ══════════════════════════════════════════════
   HOMEPAGE
══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Header />

      <style>{`
        body { background: #1a1a1b; }
        @media(max-width: 768px) {
          .hero-split { flex-direction: column !important; text-align: center; }
          .hero-word { font-size: 18vw !important; letter-spacing: -1px !important; }
          .hero-photo-wrap { width: 260px !important; margin: 0 auto; }
          .hero-right { align-items: center !important; }
          .two-col { flex-direction: column !important; }
          .project-card-inner { flex-direction: column !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .footer-row { flex-direction: column !important; align-items: flex-start !important; padding: 32px 24px !important; }
        }
      `}</style>

      {/* Available dot — top-left */}
      <div style={{
        position: "fixed", top: 22, left: 22, zIndex: 200,
        width: 10, height: 10, borderRadius: "50%",
        background: "#0bde66", boxShadow: "0 0 8px #0bde66",
        animation: "none",
      }} />

      <main style={{ background: "#1a1a1b", position: "relative" }}>

        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
            BUSINESS [PHOTO] FINANCE
        ═══════════════════════════════════════════ */}
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 60px 60px", position: "relative" }}>
          <div className="hero-split" style={{ width: "100%", maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* LEFT: BUSINESS */}
            <div style={{ flex: 1 }}>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.55)", marginBottom: 4, margin: 0 }}>
                Manish Bhandari
              </motion.p>
              <motion.h1 className="hero-word"
                initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700,
                  fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px",
                  textTransform: "uppercase", color: "#ffffff", margin: 0,
                }}>
                Business
              </motion.h1>
            </div>

            {/* CENTER: Photo card */}
            <motion.div className="hero-photo-wrap"
              initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ flexShrink: 0, width: 347, position: "relative", zIndex: 10, margin: "0 -20px" }}>
              <div style={{
                width: "100%", height: 486, borderRadius: 28,
                background: "#2a2828",
                overflow: "hidden", position: "relative",
                boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <img src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" alt="Manish Bhandari"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                {/* Wave button */}
                <motion.div whileHover={{ scale: 1.12, rotate: 15 }} whileTap={{ scale: 0.92 }}
                  style={{
                    position: "absolute", bottom: -24, left: -24,
                    width: 72, height: 72, borderRadius: "50%",
                    background: "#d0ff71", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 30, cursor: "pointer",
                    boxShadow: "0 8px 32px rgba(208,255,113,0.45)", zIndex: 20,
                  }}>
                  ✋
                </motion.div>
                {/* Mode toggle */}
                <div style={{
                  position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)",
                  background: "rgba(20,20,20,0.95)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999, padding: "5px 10px", display: "flex", alignItems: "center", zIndex: 20,
                }}>
                  <div style={{ width: 40, height: 22, borderRadius: 999, background: "#333", border: "1px solid #444", position: "relative", cursor: "pointer" }}>
                    <div style={{ position: "absolute", top: 3, left: 3, width: 14, height: 14, borderRadius: "50%", background: "#666" }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: FINANCE */}
            <div className="hero-right" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <motion.h1 className="hero-word"
                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700,
                  fontSize: 120, lineHeight: "132px", letterSpacing: "-3.6px",
                  textTransform: "uppercase", color: "#ffffff", margin: 0, textAlign: "right",
                }}>
                Finance
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{
                  fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300,
                  color: "rgba(255,255,255,0.65)", lineHeight: 1.65,
                  textAlign: "right", maxWidth: 260, margin: "16px 0 0", 
                }}>
                Business Analyst & Content<br />Strategist With A Flexible Approach
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — WHAT I CAN DO FOR YOU
        ═══════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 60px" }}>
          <div className="two-col" style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
            {/* Left: heading + body + accordion */}
            <div style={{ flex: 1 }}>
              <Reveal>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 28px" }}>
                  What I Can Do<br />For You
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 40px" }}>
                  I bridge the gap between business strategy and creative execution. I provide Business Analysis and Product Testing to ensure your foundation is solid, followed by high-impact Content Strategy and Marketing for LinkedIn and Instagram. From research to promotion, I build digital systems that turn brand stories into measurable growth.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ServiceAccordion />
              </Reveal>
            </div>
            {/* Right: 3D MB monogram */}
            <Reveal delay={0.15}>
              <div style={{ flexShrink: 0, width: 280, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 80 }}>
                <div style={{
                  width: 240, height: 240, borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #3a3a3a, #0a0a0a)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.8), inset 4px 4px 12px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 72, color: "rgba(255,255,255,0.9)", letterSpacing: "-2px", textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                    MB
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — ABOUT ME
        ═══════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 100px" }}>
          <div className="two-col" style={{ display: "flex", gap: 80, alignItems: "center" }}>
            {/* Left: text */}
            <div style={{ flex: 1 }}>
              <Reveal>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 28px" }}>
                  About Me
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: "0 0 32px" }}>
                  I&apos;m a multidisciplinary freelancer combining business analysis, product testing, and content strategy to help brands build smarter and grow faster. My work focuses on translating complex data into clear strategies that drive measurable results — from stakeholder-aligned requirement documents to high-impact LinkedIn and Instagram content.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  <a href="tel:+919835685697" style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>Call Today :</strong> +91 9835685697
                  </a>
                  <a href="mailto:manish.bhandari3717@gmail.com" style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>Email :</strong> manish.bhandari3717@gmail.com
                  </a>
                </div>
                {/* Social icons */}
                <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
                  {[
                    { href: "https://x.com/home", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                    { href: "https://www.instagram.com/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                    { href: "https://www.linkedin.com/in/manish-b-22aba534a/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#d0ff71")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                      {s.icon}
                    </a>
                  ))}
                </div>
                {/* MY STORY button */}
                <Link href="/about" style={{ textDecoration: "none", display: "inline-block" }}>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    style={{
                      display: "inline-flex", alignItems: "center",
                      border: "1px solid #d0ff71", borderRadius: 999,
                      padding: "12px 32px",
                      fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 16,
                      textTransform: "uppercase", letterSpacing: "0.12em",
                      color: "#d0ff71", cursor: "pointer",
                    }}>
                    My Story
                  </motion.div>
                </Link>
              </Reveal>
            </div>
            {/* Right: photo */}
            <Reveal delay={0.1}>
              <div style={{ flexShrink: 0, width: 380 }}>
                <div style={{
                  width: "100%", aspectRatio: "3/4",
                  borderRadius: 24, overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}>
                  <img src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" alt="Manish Bhandari"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — FEATURED PROJECTS
            Single column, each card ~1120px × 747px
        ═══════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 100px" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 20px" }}>
              Featured Projects
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 52px", maxWidth: 720 }}>
              These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
            </p>
          </Reveal>

          {/* Single-column stacked project cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {featuredProjects.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div
                    whileHover={{ scale: 1.007 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "#1e1e1f", borderRadius: 20, overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Cover image — 16:9 */}
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                      <img src={p.img} alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      {/* Badge overlay */}
                      <div style={{ position: "absolute", top: 20, left: 20 }}>
                        <span style={{
                          background: "#d0ff71", color: "#000",
                          fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600,
                          padding: "5px 14px", borderRadius: 999,
                        }}>{p.badge}</span>
                      </div>
                    </div>
                    {/* Content below image */}
                    <div style={{ padding: "32px 40px 36px" }}>
                      <h3 style={{
                        fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 32,
                        textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: "0 0 16px",
                      }}>{p.title}</h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Browse all CTA */}
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.04, background: "#d0ff71", color: "#000" }} whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    border: "1px solid #d0ff71", borderRadius: 999,
                    padding: "14px 40px",
                    fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 16,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#d0ff71", cursor: "pointer",
                  }}>
                  Browse All Projects
                </motion.div>
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — BLOGS (2-column grid)
        ═══════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 100px" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 20px" }}>
              Blogs
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 52px", maxWidth: 720 }}>
              From data-driven insights to market-ready products, these articles offer strategies to help you optimize your business, validate new ideas, and scale high-impact marketing across your digital landscape.
            </p>
          </Reveal>

          {/* 2-column blog grid */}
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
            {blogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href={b.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <motion.div
                    whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                    style={{
                      background: "#1e1e1f", borderRadius: 20, overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.07)",
                      display: "flex", flexDirection: "column", height: "100%",
                    }}
                  >
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                      <img src={b.img} alt={b.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                      <span style={{
                        background: "transparent", color: "#d0ff71",
                        border: "1px solid rgba(208,255,113,0.4)",
                        borderRadius: 999, padding: "4px 12px", alignSelf: "flex-start",
                        fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 400,
                      }}>{b.category}</span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{b.date}</span>
                      <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 24, textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: 0 }}>
                        {b.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0, flex: 1 }}>
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Browse All Insights CTA */}
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
              <Link href="/blogs" style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.04, background: "#d0ff71", color: "#000" }} whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    border: "1px solid #d0ff71", borderRadius: 999,
                    padding: "14px 40px",
                    fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 16,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#d0ff71", cursor: "pointer",
                  }}>
                  Browse All Insights
                </motion.div>
              </Link>
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
