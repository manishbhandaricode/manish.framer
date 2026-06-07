"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

/* ── data ── */
const skills = [
  "Business Analysis", "Market Research", "Content Strategy",
  "Product Testing", "User Stories", "Beta Testing",
  "Competitive Analysis", "Financial Analysis", "Pitch Decks",
  "Data Storytelling", "Strategic Audits", "Dashboard Design",
  "Wealthtech", "Healthcare Tech", "Brand Marketing",
];

const services = [
  {
    icon: "📊",
    title: "Business Analysis",
    desc: "Delivering deep market insights, competitive analysis, and strategic frameworks that help brands make informed decisions.",
    tags: ["Market Research", "Strategy", "Reports"],
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Building content flywheels that scale brand authority and turn one-off posts into self-sustaining engines for organic growth.",
    tags: ["Blogs", "Brand Voice", "Content Strategy"],
  },
  {
    icon: "🧪",
    title: "Product Testing",
    desc: "Rigorous beta-testing, UX friction mapping, and user story development to ensure seamless product debuts.",
    tags: ["Beta Testing", "UX Review", "User Stories"],
  },
];

const projects = [
  {
    badge: "Report",
    year: "2025",
    industry: "Finance",
    client: "Perccent",
    title: "Unlocking India's Untapped Investor Segments",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects/unlocking-india's-untapped-investor-segments",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report",
    year: "2025",
    industry: "Wealthtech",
    client: "Perccent",
    title: "Dezerv: The 8x AUM Growth Story",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years.",
    href: "/projects/dezerv",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Pitch Deck",
    year: "2025",
    industry: "HRaaS",
    client: "Crystal Peak",
    title: "Crystal Peak Pitch Deck",
    desc: "Strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions.",
    href: "/projects/crystal-peak",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
];

const blogs = [
  {
    category: "Content & Brand Marketing",
    date: "Mar 30, 2025",
    title: "The Content Flywheel: Scaling Brand Authority",
    desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth and trust.",
    href: "/blogs/the-content-flywheel",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
  },
  {
    category: "Business Analysis & Strategy",
    date: "Apr 22, 2025",
    title: "The Strategic Audit: Maximizing Business Efficiency",
    desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand's core workflows.",
    href: "/blogs/the-strategic-audit",
    img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png",
  },
  {
    category: "Product Management",
    date: "Apr 27, 2025",
    title: "How to Scale Quality with Beta Testing",
    desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
    href: "/blogs/how-to-scale-quality-with-beta-testing",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
  },
];

/* ── badge pill ── */
function Badge({ label, color = "accent" }: { label: string; color?: "accent" | "green" | "red" }) {
  const colorMap = {
    accent: "bg-accent/10 text-accent border border-accent/20",
    green:  "bg-green/10 text-green border border-green/20",
    red:    "bg-red/10 text-red border border-red/20",
  };
  return (
    <span className={`badge ${colorMap[color]}`}>{label}</span>
  );
}

/* ── project card ── */
function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <Link href={p.href}>
      <motion.article
        whileHover={{ y: -8, borderColor: "var(--accent)" }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="card-hover bg-card border border-border rounded-[24px] overflow-hidden flex flex-col h-full"
      >
        {/* image */}
        <div className="w-full aspect-[16/9] overflow-hidden">
          <motion.img
            src={p.img}
            alt={p.title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </div>
        {/* content */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge label={p.badge} />
            <span className="font-inter text-[12px] text-muted">{p.year} · {p.industry} · {p.client}</span>
          </div>
          <h3 className="font-antonio font-bold text-[20px] leading-[1.2] text-text">{p.title}</h3>
          <p className="font-inter text-[14px] text-muted leading-relaxed">{p.desc}</p>
          <div className="mt-auto pt-4 flex items-center gap-1 font-antonio font-bold text-[13px] uppercase tracking-[1px] text-accent">
            View Project <span className="text-[16px]">→</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

/* ── blog card ── */
function BlogCard({ b }: { b: typeof blogs[0] }) {
  return (
    <Link href={b.href}>
      <motion.article
        whileHover={{ y: -8, borderColor: "var(--accent)" }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="card-hover bg-card border border-border rounded-[24px] overflow-hidden flex flex-col h-full"
      >
        <div className="w-full aspect-[16/9] overflow-hidden">
          <motion.img
            src={b.img}
            alt={b.title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge label={b.category} />
            <span className="font-inter text-[12px] text-muted">{b.date}</span>
          </div>
          <h3 className="font-antonio font-bold text-[20px] leading-[1.2] text-text">{b.title}</h3>
          <p className="font-inter text-[14px] text-muted leading-relaxed">{b.desc}</p>
          <div className="mt-auto pt-4 flex items-center gap-1 font-antonio font-bold text-[13px] uppercase tracking-[1px] text-accent">
            Read Post <span className="text-[16px]">→</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

/* ── page ── */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24">

        {/* ══ HERO ══ */}
        <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 flex flex-col md:flex-row items-center gap-12">
          {/* text column */}
          <div className="flex-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="font-inter text-[13px] text-muted">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="font-antonio font-bold text-[52px] md:text-[72px] leading-[0.95] uppercase tracking-[-1px] text-text"
            >
              Transforming<br />
              Ideas into<br />
              <span className="text-accent">Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-inter text-[16px] text-muted leading-relaxed max-w-[480px]"
            >
              Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(208,255,113,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-accent text-dark font-antonio font-bold uppercase tracking-[1.5px] text-[13px] px-7 py-3.5 rounded-full transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: "var(--accent)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-transparent border border-border text-text font-antonio font-bold uppercase tracking-[1.5px] text-[13px] px-7 py-3.5 rounded-full transition-all"
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* avatar / photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="flex-shrink-0 w-full md:w-[380px] aspect-[3/4] rounded-[32px] overflow-hidden border border-border"
          >
            <img
              src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png"
              alt="Manish Bhandari"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* ══ SKILLS MARQUEE ══ */}
        <div className="border-y border-border py-4 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-6 w-max"
          >
            {[...skills, ...skills].map((s, i) => (
              <div key={i} className="flex items-center gap-6 shrink-0">
                <span className="font-antonio font-bold text-[14px] uppercase tracking-[2px] text-muted whitespace-nowrap">
                  {s}
                </span>
                <span className="text-accent text-[18px]">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ SERVICES ══ */}
        <section id="services" className="max-w-[1200px] mx-auto px-6 py-20">
          <Reveal>
            <div className="flex flex-col gap-2 mb-12">
              <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
                What I Do
              </span>
              <h2 className="font-antonio font-bold text-[40px] md:text-[52px] uppercase leading-[1] text-text">
                Services
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className="card-hover bg-card border border-border rounded-[24px] p-7 flex flex-col gap-4 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-[22px]">
                    {s.icon}
                  </div>
                  <h3 className="font-antonio font-bold text-[22px] uppercase text-text">{s.title}</h3>
                  <p className="font-inter text-[14px] text-muted leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-3">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="badge bg-border/30 text-muted border border-border/50 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══ FEATURED PROJECTS ══ */}
        <section className="max-w-[1200px] mx-auto px-6 py-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div className="flex flex-col gap-2">
                <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
                  Selected Work
                </span>
                <h2 className="font-antonio font-bold text-[40px] md:text-[52px] uppercase leading-[1] text-text">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-1 font-antonio font-bold uppercase text-[13px] tracking-[1.5px] text-accent hover:gap-2 transition-all duration-200"
              >
                View All <span>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex md:hidden justify-center mt-8">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-border text-text font-antonio font-bold uppercase tracking-[1.5px] text-[13px] px-7 py-3.5 rounded-full"
                >
                  View All Projects →
                </motion.button>
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ══ LATEST BLOGS ══ */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div className="flex flex-col gap-2">
                <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
                  Insights & Writing
                </span>
                <h2 className="font-antonio font-bold text-[40px] md:text-[52px] uppercase leading-[1] text-text">
                  Latest Blogs
                </h2>
              </div>
              <Link
                href="/blogs"
                className="hidden md:flex items-center gap-1 font-antonio font-bold uppercase text-[13px] tracking-[1.5px] text-accent hover:gap-2 transition-all duration-200"
              >
                View All <span>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <BlogCard b={b} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══ NEWSLETTER CTA ══ */}
        <Reveal>
          <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
            <div className="bg-card border border-border rounded-[32px] p-10 md:p-16 flex flex-col items-center gap-6">
              <h3 className="font-antonio font-bold text-[32px] md:text-[42px] uppercase leading-[1.1] text-text">
                Like what you see?<br />
                <span className="text-accent">There&apos;s more.</span>
              </h3>
              <p className="font-inter text-[15px] text-muted max-w-[480px] leading-relaxed">
                Get monthly inspiration, blog updates, and creative process notes — handcrafted for fellow creators.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[420px]">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-bg border border-border text-text font-inter text-[14px] px-5 py-3.5 rounded-full outline-none focus:border-accent transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-accent text-dark font-antonio font-bold uppercase tracking-[1.5px] text-[13px] px-7 py-3.5 rounded-full whitespace-nowrap"
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
