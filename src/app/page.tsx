"use client";

import { motion, AnimatePresence } from "framer-motion";
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

/* ── CTA Button (lime text, transparent bg, pill border) ── */
function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ background: "#d0ff71", color: "#000" }}
        transition={{ duration: 0.2 }}
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          border: "1px solid #d0ff71", borderRadius: 99,
          height: 48, padding: "0 32px",
          fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 26,
          textTransform: "uppercase", letterSpacing: "0.02em",
          color: "#d0ff71", cursor: "pointer",
          background: "transparent",
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

/* ── Tag badge (pill, border, rounded 99px) ── */
function Tag({ text }: { text: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: 99, padding: "4px 14px",
      fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 400,
      color: "rgba(255,255,255,0.75)",
    }}>{text}</span>
  );
}

/* ── Services Accordion ── */
const services = [
  {
    num: "1.", title: "BUSINESS ANALYSIS",
    desc: [
      "Gather and analyze business requirements to align with stakeholder goals.",
      "Model processes and workflows to identify opportunities for improvement.",
      "Prepare detailed documentation and business cases for informed decision-making.",
      "Facilitate communication between technical teams and business stakeholders to ensure project success.",
    ],
  },
  {
    num: "2.", title: "PRODUCT TESTING",
    desc: [
      "Define product vision and strategy aligned with market needs and business goals.",
      "Lead cross-functional teams to deliver product development and launches.",
      "Prioritize features and manage product roadmaps to maximize value.",
      "Analyze user feedback and market trends to continuously improve the product.",
    ],
  },
  {
    num: "3.", title: "CONTENT STRATEGY",
    desc: [
      "Responsive website design.",
      "Landing page design and optimization.",
      "Webflow development and customization.",
      "Website maintenance and updates.",
    ],
  },
  {
    num: "4.", title: "CONTENT REASEARCH",
    desc: [
      "Brand strategy and identity development.",
      "Visual style guide creation.",
      "Typography and color scheme selection.",
      "Brand storytelling and messaging.",
    ],
  },
];

function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {services.map((s, i) => (
        <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 0", gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 400, fontSize: 32, color: "#d0ff71" }}>
                {s.num}
              </span>
              <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 32, color: "#fff", textTransform: "uppercase", textAlign: "left" }}>
                {s.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ color: "#fff", fontSize: 18, flexShrink: 0 }}
            >
              ↑
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ paddingBottom: 24 }}>
                  {s.desc.map((d, j) => (
                    <p key={j} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 6px" }}>
                      {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {i === services.length - 1 && <div style={{ height: 1, background: "rgba(255,255,255,0.15)" }} />}
        </div>
      ))}
    </div>
  );
}

/* ── Featured Projects ── */
const featuredProjects = [
  {
    badge: "Report",
    title: "UNLOCKING INDIA'S UNTAPPED INVESTOR SEGMENTS",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report",
    title: "DEZERV: THE 8X AUM GROWTH STORY",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years, highlighting its transparent fee model, AI-driven portfolio engine, and strategic investments in technology and client experience.",
    href: "/projects",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Research",
    title: "MUTUAL FUND GOALS AND INVESTOR ALIGNMENT",
    desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement and simplify investment decisions, resulting in improved investor education and higher subscription rates.",
    href: "/projects",
    img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png",
  },
  {
    badge: "Pitch Deck",
    title: "CRYSTAL PEAK PITCH DECK",
    desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions. It outlines a framework for achieving 30% faster hiring and 85% role-fit alignment using real-time KPI tracking.",
    href: "/projects",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
];

/* ── Homepage blogs (2 shown) ── */
const homeBlogs = [
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
        html, body { background: #1a1a1b !important; }
        * { box-sizing: border-box; }

        .hero-word {
          font-family: Antonio, sans-serif;
          font-weight: 700;
          font-size: 120px;
          line-height: 132px;
          letter-spacing: -3.6px;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        @media(max-width: 900px) {
          .hero-grid { flex-direction: column !important; align-items: center !important; text-align: center; }
          .hero-word { font-size: 18vw !important; line-height: 1 !important; }
          .hero-photo { width: 240px !important; height: 336px !important; }
          .about-grid { flex-direction: column !important; }
          .services-grid { flex-direction: column !important; }
          .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
          .blog-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Green availability dot — fixed top-left */}
      <div style={{ position: "fixed", top: 24, left: 24, zIndex: 200, width: 10, height: 10, borderRadius: "50%", background: "#0bde66", boxShadow: "0 0 8px #0bde66" }} />

      <main style={{ background: "#1a1a1b" }}>

        {/* ═══════════════════════════════════════
            HERO — BUSINESS [photo] FINANCE
        ═══════════════════════════════════════ */}
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 60px 80px" }}>
          <div className="hero-grid" style={{ width: "100%", maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 0 }}>

            {/* LEFT: name + BUSINESS */}
            <div style={{ flex: 1 }}>
              <motion.p
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>
                Manish Bhandari
              </motion.p>
              <motion.h1
                className="hero-word"
                initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Business
              </motion.h1>
            </div>

            {/* CENTER: Two overlapping portrait photos */}
            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                flexShrink: 0,
                position: "relative",
                width: 347, height: 486,
                margin: "0 -30px",
                zIndex: 10,
              }}
            >
              {/* Back image (340×476) — slightly behind */}
              <div style={{
                position: "absolute", top: 5, left: 3,
                width: 340, height: 476,
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
              }}>
                <img src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" alt="Manish Bhandari"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", filter: "brightness(0.6)" }} />
              </div>
              {/* Front image (347×486) — on top */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: 347, height: 486,
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              }}>
                <img src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" alt="Manish Bhandari"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />

                {/* Wave button */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 15 }} whileTap={{ scale: 0.9 }}
                  style={{
                    position: "absolute", bottom: -28, left: -28,
                    width: 72, height: 72, borderRadius: "50%",
                    background: "#d0ff71",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 30, cursor: "pointer",
                    boxShadow: "0 8px 32px rgba(208,255,113,0.4)", zIndex: 20,
                  }}
                >
                  ✋
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT: FINANCE + subtitle */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <motion.h1
                className="hero-word"
                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ textAlign: "right" }}
              >
                Finance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, textAlign: "right", maxWidth: 280, margin: "16px 0 0" }}
              >
                Business Analyst & Content Strategist With A Flexible Approach
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT I CAN DO FOR YOU
        ═══════════════════════════════════════ */}
        <section className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 60px" }}>
          <div className="services-grid" style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
            {/* Left: heading + body + accordion */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <Reveal>
                <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 24px" }}>
                  What I Can Do<br />For You
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 40px" }}>
                  I bridge the gap between business strategy and creative execution. I provide Business Analysis and Product Testing to ensure your foundation is solid, followed by high-impact Content Strategy and Marketing for LinkedIn and Instagram. From research to promotion, I build digital systems that turn brand stories into measurable growth.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ServiceAccordion />
              </Reveal>
            </div>
            {/* Right: Image */}
            <Reveal delay={0.15}>
              <div style={{ flexShrink: 0, width: 360 }}>
                <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", border: "2px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}>
                  <img src="/images/ebetiWQPcHPDtKIGda53B8Y1vg0.jpg" alt="Services"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ABOUT ME
        ═══════════════════════════════════════ */}
        <section className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px 100px" }}>
          <div className="about-grid" style={{ display: "flex", gap: 80, alignItems: "center" }}>
            {/* Left */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <Reveal>
                <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 24px" }}>
                  About Me
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: "0 0 28px" }}>
                  I am a multidisciplinary freelancer focused on bridging the gap between business strategy and creative execution. I help brands build a solid foundation through Business Analysis and Product Testing before scaling their presence with high-impact marketing. By championing cross-team collaboration, I ensure that product, business, and creative goals are perfectly aligned. I am a flexible partner for businesses that need both data-driven insights and compelling storytelling for LinkedIn and Instagram to drive growth.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                  <a href="tel:+919835685697" style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>Call Today :</strong> +91 9835685697
                  </a>
                  <a href="mailto:manish.bhandari3717@gmail.com" style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>Email :</strong> manish.bhandari3717@gmail.com
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                {/* Social icons */}
                <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
                  <a href="https://www.instagram.com/manish.biz" target="_blank" rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#d0ff71")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/manish-b-22aba534a/" target="_blank" rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#d0ff71")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                {/* MY STORY — 166×48px, lime outline pill, Antonio 26px */}
                <CTAButton href="/about">My Story</CTAButton>
              </Reveal>
            </div>
            {/* Right: portrait */}
            <Reveal delay={0.1}>
              <div style={{ flexShrink: 0, width: 360 }}>
                <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", border: "2px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}>
                  <img src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" alt="Manish Bhandari"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FEATURED PROJECTS — single column, 1120px wide cards
        ═══════════════════════════════════════ */}
        <section className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 100px" }}>
          <Reveal>
            <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 20px" }}>
              Featured Projects
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 48px", maxWidth: 700 }}>
              These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {featuredProjects.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div
                    whileHover={{ scale: 1.008 }} transition={{ duration: 0.3 }}
                    style={{ borderRadius: 20, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {/* Cover image */}
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
                      <motion.img src={p.img} alt={p.title}
                        whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", top: 20, left: 20 }}>
                        <span style={{ background: "#d0ff71", color: "#000", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 99 }}>
                          {p.badge}
                        </span>
                      </div>
                    </div>
                    {/* Card content */}
                    <div style={{ padding: "36px 40px 40px" }}>
                      <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 18px" }}>
                        {p.title}
                      </h2>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* BROWSE ALL PROJECTS — 280×48px */}
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
              <CTAButton href="/projects">Browse All Projects</CTAButton>
            </div>
          </Reveal>
        </section>

        {/* ═══════════════════════════════════════
            BLOGS — 2 cards on homepage
        ═══════════════════════════════════════ */}
        <section className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 100px" }}>
          <Reveal>
            <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: "78px", color: "#fff", margin: "0 0 20px" }}>
              Blogs
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 48px", maxWidth: 700 }}>
              From data-driven insights to market-ready products, these articles offer strategies to help you optimize your business, validate new ideas, and scale high-impact marketing across your digital landscape.
            </p>
          </Reveal>

          <div className="blog-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {homeBlogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href={b.href} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div
                    whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                    style={{ borderRadius: 20, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                      <motion.img src={b.img} alt={b.title}
                        whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                      <Tag text={b.category} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{b.date}</span>
                      <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 32, textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: 0 }}>
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

          {/* BROWSE ALL INSIGHTS — 273×48px */}
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
              <CTAButton href="/blogs">Browse All Insights</CTAButton>
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
