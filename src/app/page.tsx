"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Scroll Reveal ── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

/* ── Data ── */
const skills = [
  "Business Analysis", "Market Research", "Content Strategy",
  "Product Testing", "User Stories", "Beta Testing",
  "Competitive Analysis", "Financial Analysis", "Pitch Decks",
  "Data Storytelling", "Strategic Audits", "Wealthtech",
];

const projects = [
  {
    badge: "Report", year: "2025", industry: "Finance", client: "Perccent",
    title: "Unlocking India's Untapped Investor Segments",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report", year: "2025", industry: "Wealthtech", client: "Perccent",
    title: "Dezerv: The 8x AUM Growth Story",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years.",
    href: "/projects",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Pitch Deck", year: "2025", industry: "HRaaS", client: "Crystal Peak",
    title: "Crystal Peak Pitch Deck",
    desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment.",
    href: "/projects",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
];

const blogs = [
  {
    category: "Content & Brand Marketing", date: "Mar 30, 2025",
    title: "The Content Flywheel: Scaling Brand Authority",
    desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth.",
    href: "/blogs",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
  },
  {
    category: "Business Analysis & Strategy", date: "Apr 22, 2025",
    title: "The Strategic Audit: Maximizing Business Efficiency",
    desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand.",
    href: "/blogs",
    img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png",
  },
  {
    category: "Product Management", date: "Apr 27, 2025",
    title: "How to Scale Quality with Beta Testing",
    desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
    href: "/blogs",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
  },
];

/* ── Project Card ── */
function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <Link href={p.href} style={{ display: "block", height: "100%", textDecoration: "none" }}>
      <motion.div
        whileHover={{ y: -6, borderColor: "#d0ff71" }}
        transition={{ duration: 0.3 }}
        style={{
          background: "#1e1e1f", border: "1px solid #333",
          borderRadius: 20, overflow: "hidden",
          display: "flex", flexDirection: "column", height: "100%",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <motion.img src={p.img} alt={p.title}
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              background: "rgba(208,255,113,0.12)", color: "#d0ff71",
              border: "1px solid rgba(208,255,113,0.25)",
              borderRadius: 999, padding: "3px 10px",
              fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600,
            }}>{p.badge}</span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#777" }}>
              {p.year} · {p.industry} · {p.client}
            </span>
          </div>
          <h3 style={{
            fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 18,
            textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: 0,
          }}>{p.title}</h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#888", lineHeight: 1.65, flex: 1, margin: 0 }}>
            {p.desc}
          </p>
          <div style={{
            display: "flex", alignItems: "center", gap: 4, marginTop: 8,
            fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "#d0ff71",
          }}>View Project →</div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ── Blog Card ── */
function BlogCard({ b }: { b: typeof blogs[0] }) {
  return (
    <Link href={b.href} style={{ display: "block", height: "100%", textDecoration: "none" }}>
      <motion.div
        whileHover={{ y: -6, borderColor: "#d0ff71" }}
        transition={{ duration: 0.3 }}
        style={{
          background: "#1e1e1f", border: "1px solid #333",
          borderRadius: 20, overflow: "hidden",
          display: "flex", flexDirection: "column", height: "100%",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <motion.img src={b.img} alt={b.title}
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          <span style={{
            background: "rgba(208,255,113,0.12)", color: "#d0ff71",
            border: "1px solid rgba(208,255,113,0.25)",
            borderRadius: 999, padding: "3px 10px", alignSelf: "flex-start",
            fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 600,
          }}>{b.category}</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#777" }}>{b.date}</span>
          <h3 style={{
            fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 18,
            textTransform: "uppercase", lineHeight: 1.25, color: "#fff", margin: 0,
          }}>{b.title}</h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#888", lineHeight: 1.65, flex: 1, margin: 0 }}>
            {b.desc}
          </p>
          <div style={{
            display: "flex", alignItems: "center", gap: 4, marginTop: 8,
            fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "#d0ff71",
          }}>Read Post →</div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ══════════════════════════════════════════════
   HOMEPAGE
══════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        body { background: #111112; }

        /* noise texture overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        /* Available dot (top-left) */
        #avail-dot {
          position: fixed; top: 22px; left: 22px; z-index: 200;
          width: 10px; height: 10px; border-radius: 50%;
          background: #0bde66;
          box-shadow: 0 0 8px #0bde66;
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #0bde66; }
          50%       { opacity: 0.5; box-shadow: 0 0 3px #0bde66; }
        }

        @media(max-width: 768px) {
          .hero-word { font-size: 15vw !important; }
          .hero-grid { flex-direction: column !important; align-items: center !important; }
          .hero-photo { width: 240px !important; height: 320px !important; }
          .hero-left, .hero-right { text-align: center !important; flex: none !important; }
          .hero-right-content { align-items: center !important; }
          .grid-3col { grid-template-columns: 1fr !important; }
          .grid-2col { grid-template-columns: 1fr !important; }
        }
        @media(min-width: 769px) and (max-width: 1024px) {
          .hero-word { font-size: 10vw !important; }
          .grid-3col { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Available dot */}
      <div id="avail-dot" />

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ════════════════════════════════════════
            HERO — split layout: BUSINESS | PHOTO | FINANCE
        ════════════════════════════════════════ */}
        <section style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          padding: "100px 48px 60px", position: "relative",
        }}>
          <div className="hero-grid" style={{
            width: "100%", maxWidth: 1400, margin: "0 auto",
            display: "flex", alignItems: "center",
            gap: 0,
          }}>

            {/* LEFT — "BUSINESS" */}
            <div className="hero-left" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <motion.p
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 400,
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.6)", marginBottom: 8, margin: 0,
                }}
              >
                Manish Bhandari
              </motion.p>
              <motion.h1
                className="hero-word"
                initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700,
                  fontSize: "clamp(64px, 9vw, 140px)",
                  textTransform: "uppercase", lineHeight: 0.88,
                  color: "#ffffff", margin: 0, letterSpacing: "-2px",
                }}
              >
                Business
              </motion.h1>
            </div>

            {/* CENTER — Photo card */}
            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                flexShrink: 0,
                width: "clamp(240px, 22vw, 340px)",
                aspectRatio: "3/4",
                position: "relative",
                zIndex: 10,
                marginLeft: "clamp(-20px, -3vw, -40px)",
                marginRight: "clamp(-20px, -3vw, -40px)",
              }}
            >
              {/* Card frame */}
              <div style={{
                width: "100%", height: "100%",
                borderRadius: 28,
                background: "#2a2a2b",
                border: "2px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}>
                <img
                  src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png"
                  alt="Manish Bhandari"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />

                {/* Wave/Hi button — bottom left of photo */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    position: "absolute", bottom: -20, left: -20,
                    width: 56, height: 56, borderRadius: "50%",
                    background: "#d0ff71",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(208,255,113,0.4)",
                    zIndex: 20,
                  }}
                >
                  ✋
                </motion.div>

                {/* Dark mode toggle — bottom center */}
                <div style={{
                  position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                  background: "rgba(30,30,30,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999, padding: "4px 8px",
                  display: "flex", alignItems: "center", gap: 4,
                  zIndex: 20,
                }}>
                  <div style={{
                    width: 36, height: 20, borderRadius: 999,
                    background: "#333", position: "relative", cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}>
                    <div style={{
                      position: "absolute", top: 2, left: 2,
                      width: 14, height: 14, borderRadius: "50%",
                      background: "#666",
                    }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — "FINANCE" + subtitle */}
            <div className="hero-right" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <motion.h1
                className="hero-word"
                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700,
                  fontSize: "clamp(64px, 9vw, 140px)",
                  textTransform: "uppercase", lineHeight: 0.88,
                  color: "#ffffff", margin: 0, letterSpacing: "-2px", textAlign: "right",
                }}
              >
                Finance
              </motion.h1>
              <div className="hero-right-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: 20 }}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "clamp(13px, 1.2vw, 15px)",
                    color: "rgba(255,255,255,0.65)", lineHeight: 1.6,
                    textAlign: "right", maxWidth: 280, margin: 0,
                  }}
                >
                  Business Analyst & Content<br />Strategist With A Flexible Approach
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SKILLS MARQUEE TICKER
        ════════════════════════════════════════ */}
        <div style={{
          borderTop: "1px solid #2a2a2a",
          borderBottom: "1px solid #2a2a2a",
          overflow: "hidden", padding: "14px 0",
        }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", width: "max-content" }}
          >
            {[...skills, ...skills].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <span style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13,
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  color: "#555", whiteSpace: "nowrap", padding: "0 20px",
                }}>
                  {s}
                </span>
                <span style={{ color: "#d0ff71", fontSize: 14, flexShrink: 0 }}>✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ════════════════════════════════════════
            FEATURED PROJECTS
        ════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <p style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d0ff71", margin: "0 0 8px" }}>
                  Selected Work
                </p>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", lineHeight: 1, color: "#fff", margin: 0 }}>
                  Featured Projects
                </h2>
              </div>
              <Link href="/projects" style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d0ff71", textDecoration: "none" }}>
                View All →
              </Link>
            </div>
          </Reveal>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            LATEST BLOGS
        ════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 100px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <p style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d0ff71", margin: "0 0 8px" }}>
                  Insights & Writing
                </p>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", lineHeight: 1, color: "#fff", margin: 0 }}>
                  Latest Blogs
                </h2>
              </div>
              <Link href="/blogs" style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d0ff71", textDecoration: "none" }}>
                View All →
              </Link>
            </div>
          </Reveal>

          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {blogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <BlogCard b={b} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            NEWSLETTER CTA
        ════════════════════════════════════════ */}
        <Reveal>
          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 120px" }}>
            <div style={{
              background: "#1a1a1b", border: "1px solid #2a2a2a",
              borderRadius: 28, padding: "72px 80px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center",
            }}>
              <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)", textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: 0 }}>
                Like what you see?<br />
                <span style={{ color: "#d0ff71" }}>There&apos;s more.</span>
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#888", maxWidth: 440, lineHeight: 1.7, margin: 0 }}>
                Get monthly inspiration, blog updates, and creative process notes — handcrafted for fellow creators.
              </p>
              <form style={{ display: "flex", gap: 12, width: "100%", maxWidth: 400 }} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="your@email.com"
                  style={{
                    flex: 1, background: "#111112", border: "1px solid #333",
                    color: "#fff", fontFamily: "var(--font-inter)", fontSize: 14,
                    padding: "13px 20px", borderRadius: 999, outline: "none",
                  }}
                />
                <motion.button type="submit"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  style={{
                    background: "#d0ff71", color: "#111",
                    fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "13px 24px", borderRadius: 999, border: "none",
                    cursor: "pointer", whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </section>
        </Reveal>

      </main>
      <Footer />
    </>
  );
}
