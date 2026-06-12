"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

function Reveal({ children, delay = 0, width = "100%" }: { children: React.ReactNode; delay?: number; width?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

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
    num: "4.", title: "CONTENT RESEARCH",
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
    <div style={{ width: "100%" }}>
      {services.map((s, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", borderTop: i === 0 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "24px 0", gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 400, fontSize: 32, color: "#fff" }}>
                {s.num}
              </span>
              <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 32, color: "#fff", textTransform: "uppercase", textAlign: "left", letterSpacing: "1px" }}>
                {s.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ color: "#fff", fontSize: 20, flexShrink: 0, fontWeight: 300 }}
            >
              ^
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
                    <p key={j} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 8px" }}>
                      {d}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const toolsData = [
  {
    name: "Framer",
    desc: "Interactive prototyping for business dashboards and client presentations with responsive design.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12 0h12v12h-12zM0 12h12v12h-12zM0 0h12v12h-12z"/></svg>
    ),
    iconBg: "#111"
  },
  {
    name: "Jira",
    desc: "Agile tracking for user story management, sprint planning, and delivery timelines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#2684FF"><path d="M11.53 12.064A4.75 4.75 0 0 0 11.53 5.35l-5.32 5.32a4.75 4.75 0 0 0 0 6.714l5.32 5.32a4.75 4.75 0 0 0 6.714 0l1.242-1.242-7.956-7.956z"/><path d="M19.486 12.064a4.75 4.75 0 0 0 0-6.714l-5.32-5.32a4.75 4.75 0 0 0-6.714 0l1.242 1.242 7.956 7.956-7.956 7.956 1.242 1.242a4.75 4.75 0 0 0 6.714 0l2.836-2.836z"/></svg>
    ),
    iconBg: "#fff"
  },
  {
    name: "Google Docs",
    desc: "Real-time collaboration for business reports, user stories, and stakeholder documentation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4"><path d="M14.59 0H4.99C3.89 0 3.01.9 3.01 2L3 22c0 1.1.89 2 1.99 2H18.99c1.1 0 2-.9 2-2V6.41l-6.4-6.4zM11 16H7v-2h4v2zm4-4H7v-2h8v2zm0-4H7V6h8v2z"/></svg>
    ),
    iconBg: "#111"
  },
  {
    name: "Notion",
    desc: "All-in-one workspace for project management, requirements tracking, and team knowledge bases.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M4.5 4.5v15h15v-15h-15zm3 12v-9h2.25l3.75 5.25v-5.25h2.25v9h-2.25l-3.75-5.25v5.25h-2.25z"/></svg>
    ),
    iconBg: "#111"
  },
  {
    name: "Canva",
    desc: "Professional visuals for financial reports, infographics, and stakeholder presentations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#00C4CC"><circle cx="12" cy="12" r="10"/></svg>
    ),
    iconBg: "#111"
  }
];

const pills = ["Excel", "Power BI", "Notion", "Figma", "Ahrefs", "Google Analytics", "JIRA", "Confluence", "Miro", "Canva", "HubSpot", "Semrush"];

export default function AboutPage() {
  return (
    <>
      <Header />
      <style>{`
        html, body { background: #1a1a1b !important; }
        .grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: flex-start; }
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .process-card { border-radius: 16px; padding: 40px; display: flex; flex-direction: column; }
        .card-img { border-radius: 16px; overflow: hidden; }
        .form-input { 
          width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.3); 
          color: #fff; font-family: Inter, sans-serif; font-size: 14px; padding: 16px 24px; 
          border-radius: 12px; outline: none; margin-bottom: 16px;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.4); }
        .form-input:focus { border-color: #d0ff71; }
        
        @media(max-width: 900px) {
          .grid-2col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .img-responsive { width: 100% !important; height: auto !important; aspect-ratio: 4/5 !important; }
        }
      `}</style>

      <main style={{ background: "#1a1a1b", paddingTop: 140, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* 1. DISCOVER MY JOURNEY */}
          <section style={{ marginBottom: 160 }}>
            <div className="grid-2col">
              <div>
                <Reveal>
                  <h1 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 24px" }}>
                    DISCOVER MY<br/>JOURNEY IN BUSINESS<br/>& BRAND GROWTH
                  </h1>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 0 60px" }}>
                    My path has been defined by a passion for building solid foundations through business analysis and product testing, then scaling them with high-impact marketing—turning raw data into compelling brand stories that drive real growth.
                  </p>
                </Reveal>

                {/* Experience List */}
                <Reveal delay={0.1}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", color: "#fff" }}>
                        BUSINESS ANALYST INTERN
                      </span>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700, color: "#d0ff71" }}>Perccent</span><br/>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>May-July</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", color: "#fff" }}>
                        MARKETING & PRODUCT
                      </span>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700, color: "#d0ff71" }}>Zephyrus Studio</span><br/>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>May-Present</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              {/* Image Right */}
              <Reveal delay={0.2}>
                <div className="img-responsive" style={{ width: "100%", height: 600, borderRadius: 24, overflow: "hidden" }}>
                  <img src="/images/wbdUHLZPIW6e12ihD9TwlbLnY.jpg" alt="Journey" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 2. WHAT I CAN DO FOR YOU */}
          <section style={{ marginBottom: 160 }}>
            <div className="grid-2col">
              <div>
                <Reveal>
                  <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 24px" }}>
                    WHAT I CAN DO FOR<br/>YOU
                  </h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 0 40px" }}>
                    I bridge the gap between business strategy and creative execution. I provide Business Analysis and Product Testing to ensure your foundation is solid, followed by high-impact Content Strategy and Marketing for LinkedIn and Instagram. From research to promotion, I build digital systems that turn brand stories into measurable growth.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ServiceAccordion />
                </Reveal>
              </div>

              {/* Image Right */}
              <Reveal delay={0.2}>
                <div className="img-responsive" style={{ width: "100%", height: 700, borderRadius: 24, overflow: "hidden" }}>
                  <img src="/images/ebetiWQPcHPDtKIGda53B8Y1vg0.jpg" alt="Services" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 3. TOOLS & ICONS */}
          <section style={{ marginBottom: 160 }}>
            <div className="grid-2col">
              <div>
                <Reveal>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 0 40px" }}>
                    complex business logic and seamless user experience. Whether it&apos;s documenting granular user stories in Google Docs or visualizing financial insights in Canva, my workflow is engineered for clarity, precision, and professional delivery.
                  </p>
                </Reveal>
                
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {toolsData.map((t, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <div style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: t.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {t.icon}
                        </div>
                        <div>
                          <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", margin: "0 0 6px" }}>{t.name}</h3>
                          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Image Right & Available for work pill */}
              <Reveal delay={0.2}>
                <div style={{ position: "relative" }}>
                  {/* Floating Pill */}
                  <div style={{ position: "absolute", top: -60, left: 0, display: "flex", alignItems: "center", gap: 12, background: "rgba(20,20,20,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 99, padding: "8px 20px 8px 8px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "Antonio, sans-serif", fontSize: 14, color: "#fff" }}>MB</span>
                    </div>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#fff" }}>Available for work</span>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0bde66", marginLeft: 4 }} />
                  </div>
                  
                  <div className="img-responsive" style={{ width: "100%", height: 750, borderRadius: 24, overflow: "hidden" }}>
                    <img src="/images/84k4opEZkRUXxrhv1XFFNjK72yg.png" alt="Process Machine" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 4. PROCESS: ANALYZE WITH STRATEGY & IMPACT */}
          <section style={{ marginBottom: 160 }}>
            <Reveal>
              <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 16px" }}>
                ANALYZE WITH STRATEGY & IMPACT
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.6)", margin: "0 0 60px", maxWidth: 600 }}>
                Business analysis and content processes that deliver stakeholder alignment and measurable results
              </p>
            </Reveal>

            <div className="process-grid">
              {/* Row 1 */}
              <Reveal delay={0}>
                <div className="process-card" style={{ background: "#fff", height: 380 }}>
                  <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, color: "#111", marginBottom: "auto" }}>01.</span>
                  <div>
                    <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 24, color: "#111", margin: "0 0 12px" }}>RESEARCH & STRATEGY</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.6, margin: 0 }}>Conduct stakeholder analysis, market research, and content strategy planning to identify business needs and set clear objectives.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card-img" style={{ height: 380, background: "#fff" }}>
                  <img src="/images/7lqlNqxfvnKC15ukLtEVYM.jpg" alt="Illustration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="process-card" style={{ background: "#d0ff71", height: 380 }}>
                  <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, color: "#111", marginBottom: "auto" }}>02.</span>
                  <div>
                    <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 24, color: "#111", margin: "0 0 12px" }}>BRDS & USER STORIES</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#444", lineHeight: 1.6, margin: 0 }}>Create Business Requirement Documents (BRDs), user stories, and content outlines that solve real problems.</p>
                  </div>
                </div>
              </Reveal>

              {/* Row 2 */}
              <Reveal delay={0.1}>
                <div className="card-img" style={{ height: 380, gridColumn: "span 1" }}>
                  <img src="/images/dRWTyHsAUUlpgDKbN9xLILvx7kU.jpg" alt="Cityscape" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
              <Reveal delay={0.2} width="100%">
                <div className="process-card" style={{ background: "#2a2a2a", height: 380, gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, color: "#fff", marginBottom: "auto" }}>03.</span>
                  <div>
                    <h3 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", margin: "0 0 12px" }}>FEEDBACK & REFINEMENT</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, maxWidth: 600 }}>Collaborate with stakeholders for feedback, refine requirements and content to ensure business logic and seamless user experience.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 5. TOOLS I USE (Pills) */}
          <section style={{ marginBottom: 160 }}>
            <Reveal>
              <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "2px", color: "#fff", display: "block", marginBottom: 8 }}>TOOLKIT</span>
              <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 40px" }}>
                TOOLS I USE
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {pills.map((p, i) => (
                  <div key={i} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "10px 24px", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, borderRadius: 4 }}>
                    {p}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* 6. CONTACT */}
          <section>
            <div className="grid-2col">
              <Reveal>
                <div>
                  <span style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "2px", color: "#fff", display: "block", marginBottom: 8 }}>GET IN TOUCH</span>
                  <h2 style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700, fontSize: 60, textTransform: "uppercase", lineHeight: 1.1, color: "#fff", margin: "0 0 40px" }}>
                    CONTACT
                  </h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 0 40px", maxWidth: 400 }}>
                    Have a project in mind? Let&apos;s talk about it. I&apos;m open to freelance work, consulting, and full-time opportunities.
                  </p>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#fff" }}>manish.bhandari3717@gmail.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#fff" }}>+91 9835685697</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Your Email" className="form-input" />
                  <select className="form-input" style={{ appearance: "none" }} defaultValue="">
                    <option value="" disabled hidden>Service Type</option>
                    <option value="business">Business Analysis</option>
                    <option value="content">Content Strategy</option>
                    <option value="testing">Product Testing</option>
                  </select>
                  <textarea rows={4} placeholder="Tell me about your project..." className="form-input" style={{ resize: "none" }}></textarea>
                </form>
              </Reveal>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
