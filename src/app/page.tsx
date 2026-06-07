"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Reveal helper ── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}>
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
    badge: "Report", year: "2025", industry: "Finance", client: "Perccent", duration: "6 weeks",
    title: "Unlocking India's Untapped Investor Segments",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects/unlocking-india",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report", year: "2025", industry: "Wealthtech", client: "Perccent", duration: "3 weeks",
    title: "Dezerv: The 8x AUM Growth Story",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years.",
    href: "/projects/dezerv",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Research", year: "2025", industry: "E-commerce", client: "ShopEase", duration: "3 weeks",
    title: "Mutual Fund Goals and Investor Alignment",
    desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement.",
    href: "/projects/shopease-redesign-sprint",
    img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png",
  },
  {
    badge: "Pitch Deck", year: "2025", industry: "HRaaS", client: "Crystal Peak", duration: "2 weeks",
    title: "Crystal Peak Pitch Deck",
    desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment.",
    href: "/projects/crystal-peak",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
];

const blogs = [
  {
    category: "Content & Brand Marketing", date: "Mar 30, 2025",
    title: "The Content Flywheel: Scaling Brand Authority",
    desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth.",
    href: "/blogs/the-content-flywheel",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
  },
  {
    category: "Business Analysis & Strategy", date: "Apr 22, 2025",
    title: "The Strategic Audit: Maximizing Business Efficiency",
    desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand.",
    href: "/blogs/the-strategic-audit",
    img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png",
  },
  {
    category: "Product Management", date: "Apr 27, 2025",
    title: "How to Scale Quality with Beta Testing",
    desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
    href: "/blogs/how-to-scale-quality-with-beta-testing",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
  },
];

/* ── Badge ── */
function Badge({ text }: { text: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
      fontFamily: "var(--font-inter)",
      background: "color-mix(in srgb, var(--token-accent) 12%, transparent)",
      color: "var(--token-accent)",
      border: "1px solid color-mix(in srgb, var(--token-accent) 25%, transparent)",
    }}>{text}</span>
  );
}

/* ── Project card ── */
function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <Link href={p.href} style={{ display: "block", height: "100%" }}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "var(--token-card)", border: "1px solid var(--token-border)",
          borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column",
          height: "100%", cursor: "pointer",
        }}
      >
        {/* image — 16:9 ratio */}
        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <motion.img src={p.img} alt={p.title}
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        {/* content */}
        <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Badge text={p.badge} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "var(--token-muted)" }}>
              {p.year} · {p.industry} · {p.client}
            </span>
          </div>
          <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 19, lineHeight: 1.25, color: "var(--token-text)", textTransform: "uppercase", letterSpacing: "0.01em" }}>
            {p.title}
          </h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "var(--token-muted)", lineHeight: 1.65, flex: 1 }}>
            {p.desc}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--token-accent)", marginTop: 4 }}>
            View Project <span style={{ fontSize: 15 }}>→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ── Blog card ── */
function BlogCard({ b }: { b: typeof blogs[0] }) {
  return (
    <Link href={b.href} style={{ display: "block", height: "100%" }}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "var(--token-card)", border: "1px solid var(--token-border)",
          borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column",
          height: "100%", cursor: "pointer",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <motion.img src={b.img} alt={b.title}
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          <Badge text={b.category} />
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "var(--token-muted)" }}>{b.date}</span>
          <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 19, lineHeight: 1.25, color: "var(--token-text)", textTransform: "uppercase", letterSpacing: "0.01em" }}>
            {b.title}
          </h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "var(--token-muted)", lineHeight: 1.65, flex: 1 }}>
            {b.desc}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--token-accent)", marginTop: 4 }}>
            Read Post <span style={{ fontSize: 15 }}>→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────── PAGE ─────── */
export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--token-bg)", minHeight: "100vh" }}>

        {/* ══════════════════════════════════
            HERO  — full viewport height
        ══════════════════════════════════ */}
        <section style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          maxWidth: 1200, margin: "0 auto", padding: "120px 40px 80px",
          gap: 60,
        }}>
          {/* LEFT: text */}
          <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: 28 }}>
            {/* available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0bde66", display: "inline-block", boxShadow: "0 0 6px #0bde66" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "var(--token-muted)", fontWeight: 400 }}>
                Available for work
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "var(--font-antonio)", fontWeight: 700,
                fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 0.9,
                textTransform: "uppercase", letterSpacing: "-1px",
                color: "var(--token-text)", margin: 0,
              }}
            >
              Transforming<br />
              Ideas into<br />
              <span style={{ color: "var(--token-accent)" }}>Impact.</span>
            </motion.h1>

            {/* bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "var(--token-muted)", lineHeight: 1.7, maxWidth: 440, margin: 0 }}
            >
              Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 28px color-mix(in srgb, var(--token-accent) 40%, transparent)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    background: "var(--token-accent)", color: "var(--token-bg)",
                    fontFamily: "var(--font-antonio)", fontWeight: 700,
                    fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "14px 28px", borderRadius: 999, border: "none", cursor: "pointer",
                  }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: "var(--token-accent)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    background: "transparent",
                    color: "var(--token-text)",
                    fontFamily: "var(--font-antonio)", fontWeight: 700,
                    fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "14px 28px", borderRadius: 999,
                    border: "1px solid var(--token-border)", cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: portrait — 3:4 ratio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              flex: "0 0 360px", aspectRatio: "3/4",
              borderRadius: 28, overflow: "hidden",
              border: "1px solid var(--token-border)",
            }}
          >
            <img
              src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png"
              alt="Manish Bhandari"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        </section>

        {/* ══════════════════════════════════
            SKILLS MARQUEE TICKER
        ══════════════════════════════════ */}
        <div style={{ borderTop: "1px solid var(--token-border)", borderBottom: "1px solid var(--token-border)", overflow: "hidden", padding: "16px 0" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", gap: 0, width: "max-content" }}
          >
            {[...skills, ...skills].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
                <span style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13,
                  textTransform: "uppercase", letterSpacing: "0.18em",
                  color: "var(--token-muted)", whiteSpace: "nowrap", padding: "0 24px",
                }}>
                  {s}
                </span>
                <span style={{ color: "var(--token-accent)", fontSize: 16, flexShrink: 0 }}>✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            FEATURED PROJECTS
        ══════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--token-accent)" }}>
                  Selected Work
                </span>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 56px)", textTransform: "uppercase", lineHeight: 1, color: "var(--token-text)", margin: 0 }}>
                  Featured Projects
                </h2>
              </div>
              <Link href="/projects" style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--token-accent)", textDecoration: "none" }}>
                View All →
              </Link>
            </div>
          </Reveal>

          {/* 2-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════
            LATEST BLOGS
        ══════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0px 40px 100px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--token-accent)" }}>
                  Insights & Writing
                </span>
                <h2 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 56px)", textTransform: "uppercase", lineHeight: 1, color: "var(--token-text)", margin: 0 }}>
                  Latest Blogs
                </h2>
              </div>
              <Link href="/blogs" style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--token-accent)", textDecoration: "none" }}>
                View All →
              </Link>
            </div>
          </Reveal>

          {/* 3-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {blogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <BlogCard b={b} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════
            NEWSLETTER CTA
        ══════════════════════════════════ */}
        <Reveal>
          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 120px" }}>
            <div style={{
              background: "var(--token-card)", border: "1px solid var(--token-border)",
              borderRadius: 28, padding: "72px 80px", display: "flex", flexDirection: "column",
              alignItems: "center", gap: 24, textAlign: "center",
            }}>
              <h3 style={{ fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)", textTransform: "uppercase", lineHeight: 1.1, color: "var(--token-text)", margin: 0 }}>
                Like what you see?<br />
                <span style={{ color: "var(--token-accent)" }}>There&apos;s more.</span>
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "var(--token-muted)", maxWidth: 440, lineHeight: 1.7, margin: 0 }}>
                Get monthly inspiration, blog updates, and creative process notes — handcrafted for fellow creators.
              </p>
              <form style={{ display: "flex", gap: 12, width: "100%", maxWidth: 400 }} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="your@email.com"
                  style={{
                    flex: 1, background: "var(--token-bg)", border: "1px solid var(--token-border)",
                    color: "var(--token-text)", fontFamily: "var(--font-inter)", fontSize: 14,
                    padding: "13px 20px", borderRadius: 999, outline: "none",
                  }}
                />
                <motion.button type="submit"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  style={{
                    background: "var(--token-accent)", color: "var(--token-bg)",
                    fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "13px 24px", borderRadius: 999, border: "none", cursor: "pointer", whiteSpace: "nowrap",
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
