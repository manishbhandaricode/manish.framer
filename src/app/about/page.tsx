"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const skills = [
  { name: "Business Analysis", level: 95 },
  { name: "Market Research", level: 90 },
  { name: "Content Strategy", level: 88 },
  { name: "Product Testing", level: 85 },
  { name: "Competitive Analysis", level: 90 },
  { name: "Financial Analysis", level: 80 },
  { name: "User Stories", level: 87 },
  { name: "Beta Testing", level: 85 },
];

const tools = [
  "Excel", "Power BI", "Notion", "Figma", "Ahrefs", "Google Analytics",
  "JIRA", "Confluence", "Miro", "Canva", "HubSpot", "Semrush",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 max-w-[1200px] mx-auto px-6">

        {/* ── BIO HERO ── */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
          <Reveal className="flex-shrink-0 w-full md:w-[320px]">
            <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden border border-border">
              <img
                src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png"
                alt="Manish Bhandari"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="flex-1 flex flex-col gap-6 justify-center">
            <Reveal>
              <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
                About Me
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-antonio font-bold text-[48px] md:text-[64px] uppercase leading-[0.95] text-text">
                Manish<br />Bhandari
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-inter text-[16px] text-muted leading-relaxed">
                I&apos;m a business analyst and content creator passionate about helping brands make informed decisions through data-driven insights.
                With expertise spanning market research, competitive analysis, and strategic content, I bridge the gap between raw data and actionable strategy.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-inter text-[16px] text-muted leading-relaxed">
                Whether it&apos;s crafting a detailed industry report, developing user stories for a product launch, or auditing a brand&apos;s digital presence,
                I bring a methodical approach to every project — combining analytical rigor with creative thinking.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="font-inter text-[13px] text-muted">Available for work</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── SKILLS ── */}
        <Reveal>
          <div className="flex flex-col gap-2 mb-10">
            <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">Expertise</span>
            <h2 className="font-antonio font-bold text-[36px] md:text-[48px] uppercase leading-[1] text-text">Skills</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {skills.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-antonio font-bold uppercase text-[14px] tracking-[1px] text-text">{s.name}</span>
                  <span className="font-inter text-[12px] text-muted">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── TOOLS ── */}
        <Reveal>
          <div className="flex flex-col gap-2 mb-10">
            <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">Toolkit</span>
            <h2 className="font-antonio font-bold text-[36px] md:text-[48px] uppercase leading-[1] text-text">Tools I Use</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-24">
          {tools.map((t, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <motion.span
                whileHover={{ scale: 1.08, borderColor: "var(--accent)", color: "var(--accent)" }}
                className="badge bg-card border border-border text-muted font-inter text-[13px] px-4 py-2 cursor-default transition-colors"
              >
                {t}
              </motion.span>
            </Reveal>
          ))}
        </div>

        {/* ── CONTACT FORM ── */}
        <div id="contact">
          <Reveal>
            <div className="flex flex-col gap-2 mb-10">
              <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">Get In Touch</span>
              <h2 className="font-antonio font-bold text-[36px] md:text-[48px] uppercase leading-[1] text-text">Contact</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div className="flex flex-col gap-6">
                <p className="font-inter text-[16px] text-muted leading-relaxed">
                  Have a project in mind? Let&apos;s talk about it. I&apos;m open to freelance work, consulting, and full-time opportunities.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:manish.bhandari3717@gmail.com" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[16px]">✉</span>
                    <span className="font-inter text-[15px] text-muted group-hover:text-accent transition-colors duration-200">
                      manish.bhandari3717@gmail.com
                    </span>
                  </a>
                  <a href="tel:+919835685697" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[16px]">☎</span>
                    <span className="font-inter text-[15px] text-muted group-hover:text-accent transition-colors duration-200">
                      +91 9835685697
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-card border border-border text-text font-inter text-[14px] px-5 py-4 rounded-[16px] outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-card border border-border text-text font-inter text-[14px] px-5 py-4 rounded-[16px] outline-none focus:border-accent transition-colors"
                />
                <select
                  className="w-full bg-card border border-border text-muted font-inter text-[14px] px-5 py-4 rounded-[16px] outline-none focus:border-accent transition-colors"
                >
                  <option value="">Service Type</option>
                  <option>Business Analysis</option>
                  <option>Content Strategy</option>
                  <option>Product Testing</option>
                  <option>Research Report</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-card border border-border text-text font-inter text-[14px] px-5 py-4 rounded-[16px] outline-none focus:border-accent transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(208,255,113,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-accent text-dark font-antonio font-bold uppercase tracking-[1.5px] text-[14px] px-8 py-4 rounded-full w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
