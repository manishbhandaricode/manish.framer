"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    badge: "Report", year: "2025", industry: "Finance", client: "Perccent", duration: "6 weeks",
    title: "Unlocking India's Untapped Investor Segments",
    desc: "In-depth analysis of Minor and NRI participation, barriers, and strategic opportunities to drive inclusive market growth.",
    href: "/projects/unlocking-india's-untapped-investor-segments",
    img: "/images/nDHCjPrlqtG6mOmj2oiCsjD8Y.png",
  },
  {
    badge: "Report", year: "2025", industry: "Wealthtech", client: "Perccent", duration: "3 weeks",
    title: "Dezerv: The 8x AUM Growth Story",
    desc: "Comprehensive analysis of Dezerv's rapid AUM growth from ₹1,265 cr to over ₹10,000 cr in two years, highlighting its transparent fee model, AI-driven portfolio engine, and strategic investments.",
    href: "/projects/dezerv",
    img: "/images/oFEHRfUjlxL61HaDFkrYEau1ekM.png",
  },
  {
    badge: "Research", year: "2025", industry: "E-commerce", client: "ShopEase", duration: "3 weeks",
    title: "Mutual Fund Goals and Investor Alignment",
    desc: "Research focused on aligning mutual fund categories with investor financial goals to enhance engagement and simplify investment decisions.",
    href: "/projects/shopease-redesign-sprint",
    img: "/images/oRsdrqp2gE6sSLBWIb9RzABkPVg.png",
  },
  {
    badge: "Pitch Deck", year: "2025", industry: "HR-as-a-Service (HRaaS)", client: "Crystal Peak", duration: "2 weeks",
    title: "Crystal Peak Pitch Deck",
    desc: "A strategic HR proposal focused on bridging the gap between business vision and precision recruitment through data-driven talent solutions. It outlines a framework for achieving 30% faster hiring and 85% role-fit alignment using real-time KPI tracking.",
    href: "/projects/crystal-peak",
    img: "/images/tp7x5VoKKEmYx7s57KofuIMJddE.png",
  },
  {
    badge: "Report", year: "2025", industry: "Wealth tech", client: "Perccent", duration: "4 weeks",
    title: "Kuvera: Analysis of Strategic Growth, Market Position, and Financial Performance",
    desc: "Deep-dive analysis of Kuvera's strategic positioning, market dynamics, and financial performance in the competitive wealthtech landscape.",
    href: "/projects/kuvera-analysis",
    img: "/images/iQwuEVadqLZLDnwjblKI9Kro8Ss.png",
  },
  {
    badge: "User Stories", year: "2024", industry: "Wealth Tech", client: "Perccent", duration: "2 weeks",
    title: "User Stories Development for Enhanced Wealthtech Product Design",
    desc: "Developing comprehensive user stories to align product design with investor needs and enhance the overall wealthtech user experience.",
    href: "/projects/user-stories",
    img: "/images/tZsUTzJDASlMX3KgH1WIKykXNXs.png",
  },
  {
    badge: "Dashboard", year: "2025", industry: "Healthcare", client: "Apollo Hospital", duration: "5 weeks",
    title: "Legal Compliance Framework in Hospital Management Dashboard",
    desc: "Designing a comprehensive legal compliance framework dashboard to streamline regulatory adherence for hospital management systems.",
    href: "/projects/hospital-management-system",
    img: "/images/tvqGTWAzICR8R2aDEJVFu2RYhYM.png",
  },
];

const badgeColor = (badge: string) => {
  const map: Record<string, string> = {
    "Report": "bg-indigo/10 text-indigo border border-indigo/20",
    "Research": "bg-green/10 text-green border border-green/20",
    "Pitch Deck": "bg-red/10 text-red border border-red/20",
    "User Stories": "bg-accent/10 text-accent border border-accent/20",
    "Dashboard": "bg-amber-400/10 text-amber-400 border border-amber-400/20",
  };
  return map[badge] ?? "bg-accent/10 text-accent border border-accent/20";
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 max-w-[1200px] mx-auto px-6">

        <Reveal>
          <div className="flex flex-col gap-4 mb-16">
            <span className="font-antonio font-bold uppercase text-[13px] tracking-[3px] text-accent">
              Portfolio
            </span>
            <h1 className="font-antonio font-bold text-[52px] md:text-[72px] uppercase leading-[0.95] text-text">
              Featured Projects
            </h1>
            <p className="font-inter text-[16px] text-muted leading-relaxed max-w-[600px] mt-2">
              Showcasing a selection of my work, including research, reports, and user stories that highlight my approach to analysis, communication, and problem-solving.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <Link href={p.href}>
                <motion.article
                  whileHover={{ y: -8, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className="card-hover bg-card border border-border rounded-[24px] overflow-hidden flex flex-col h-full"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={p.img} alt={p.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`badge ${badgeColor(p.badge)}`}>{p.badge}</span>
                      <span className="font-inter text-[12px] text-muted">{p.year} · {p.industry} · {p.client} · {p.duration}</span>
                    </div>
                    <h2 className="font-antonio font-bold text-[22px] leading-[1.2] text-text">{p.title}</h2>
                    <p className="font-inter text-[14px] text-muted leading-relaxed">{p.desc}</p>
                    <div className="mt-auto pt-4 flex items-center gap-1 font-antonio font-bold text-[13px] uppercase tracking-[1px] text-accent">
                      View Project <span className="text-[16px]">→</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
