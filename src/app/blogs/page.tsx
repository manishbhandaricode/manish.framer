"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const blogs = [
  {
    category: "Content & Brand Marketing",
    date: "Mar 30, 2025",
    title: "The Content Flywheel: Scaling Brand Authority",
    desc: "Discover how a unified content strategy turns one-off posts into a self-sustaining engine for organic growth and trust.",
    href: "/blogs/the-content-flywheel",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
    readTime: "5 min read",
  },
  {
    category: "Business Analysis & Strategy",
    date: "Apr 22, 2025",
    title: "The Strategic Audit: Maximizing Business Efficiency",
    desc: "Learn how to identify operational bottlenecks and leverage data-driven insights to streamline your brand's core workflows.",
    href: "/blogs/the-strategic-audit",
    img: "/images/k6ZrTq3gELjvgT07LsIHjYqPc.png",
    readTime: "7 min read",
  },
  {
    category: "Product Management",
    date: "Apr 27, 2025",
    title: "How to Scale Quality with Beta Testing",
    desc: "Master the art of pre-launch validation to eliminate UX friction and ensure a seamless product debut.",
    href: "/blogs/how-to-scale-quality-with-beta-testing",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
    readTime: "6 min read",
  },
  {
    category: "Business Analysis & Strategy",
    date: "Apr 30, 2025",
    title: "Competitive Analysis for the Modern Startup",
    desc: "Map the market landscape to identify competitor weaknesses and carve out your brand's unique edge.",
    href: "/blogs/competitive-analysis-for-the-modern-startup",
    img: "/images/lwzpnzdk6KYdLO6WwJnKqEu8U.png",
    readTime: "8 min read",
  },
  {
    category: "Community & Product Growth",
    date: "May 2, 2025",
    title: "From Beta Users to Brand Ambassadors",
    desc: "Leverage the power of 'building in public' to turn early product testers into a self-sustaining marketing community.",
    href: "/blogs/from-beta-users-to-brand-ambassadors",
    img: "/images/w62D2elwRl3kxN0uECK3T9rjOXY.png",
    readTime: "6 min read",
  },
];

const categoryColor = (cat: string) => {
  const map: Record<string, string> = {
    "Content & Brand Marketing":    "bg-accent/10 text-accent border border-accent/20",
    "Business Analysis & Strategy": "bg-indigo/10 text-indigo border border-indigo/20",
    "Product Management":           "bg-green/10 text-green border border-green/20",
    "Community & Product Growth":   "bg-red/10 text-red border border-red/20",
  };
  return map[cat] ?? "bg-accent/10 text-accent border border-accent/20";
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 max-w-[1200px] mx-auto px-6">

        <Reveal>
          <div className="flex flex-col gap-4 mb-16">
            <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
              Insights & Writing
            </span>
            <h1 className="font-antonio font-bold text-[52px] md:text-[72px] uppercase leading-[0.95] text-text">
              Blogs
            </h1>
            <p className="font-inter text-[16px] text-muted leading-relaxed max-w-[520px] mt-2">
              Thoughts on business strategy, content creation, product management, and market analysis.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <Link href={b.href}>
                <motion.article
                  whileHover={{ y: -8, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className="card-hover bg-card border border-border rounded-[24px] overflow-hidden flex flex-col h-full"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={b.img} alt={b.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`badge ${categoryColor(b.category)}`}>{b.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-muted font-inter">
                      <span>{b.date}</span>
                      <span>·</span>
                      <span>{b.readTime}</span>
                    </div>
                    <h2 className="font-antonio font-bold text-[20px] leading-[1.2] text-text">{b.title}</h2>
                    <p className="font-inter text-[14px] text-muted leading-relaxed">{b.desc}</p>
                    <div className="mt-auto pt-4 flex items-center gap-1 font-antonio font-bold text-[13px] uppercase tracking-[1px] text-accent">
                      Read Post <span className="text-[16px]">→</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Newsletter section */}
        <Reveal>
          <div className="mt-24 bg-card border border-border rounded-[32px] p-10 md:p-16 flex flex-col items-center gap-6 text-center">
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
        </Reveal>

      </main>
      <Footer />
    </>
  );
}
