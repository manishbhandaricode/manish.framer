"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TerminalSquare } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stack = ["Framer", "Jira", "Google Docs", "Notion", "Canva", "HotJar", "Monday.com"];
  
  const process = [
    { step: "01", title: "Research & Strategy", desc: "Stakeholder analysis and market research." },
    { step: "02", title: "BRDs & User Stories", desc: "Drafting requirements and content outlines." },
    { step: "03", title: "Feedback & Refinement", desc: "Collaborating on revisions." },
    { step: "04", title: "Testing Workflows", desc: "Testing user stories and content performance." },
    { step: "05", title: "Launch & Delivery", desc: "Rolling out solutions and tracking metrics." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center max-w-4xl">
        <motion.h1 {...fadeIn} className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
          Bridging Business Strategy <br/> & Creative Execution
        </motion.h1>
        <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-lg text-text-muted leading-relaxed">
          As a multidisciplinary freelancer and former Business Analyst Intern at Perccent, I specialize in analyzing workflows, defining product visions, and creating compelling content strategies that drive brand growth.
        </motion.p>
      </section>

      {/* Tech Stack */}
      <section className="bg-surface-dark py-20 border-y border-border-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-heading uppercase mb-12 text-center">Tech Stack & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {stack.map((item, idx) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-6 py-3 bg-[#0f0f0f] border border-border-dark rounded-full flex items-center gap-2"
              >
                <TerminalSquare size={16} className="text-brand-primary" />
                <span className="font-heading tracking-wider uppercase text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading uppercase mb-12 text-center">Analyze With Strategy & Impact</h2>
          <div className="space-y-6">
            {process.map((p, idx) => (
              <motion.div 
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 p-6 border border-border-dark bg-surface-light rounded-xl"
              >
                <span className="text-4xl font-heading text-brand-primary opacity-50">{p.step}</span>
                <div>
                  <h3 className="text-xl font-heading uppercase mb-2">{p.title}</h3>
                  <p className="text-text-muted">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate Form */}
      <section className="bg-surface-dark py-20 border-t border-border-dark" id="collaborate">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <h2 className="text-3xl font-heading uppercase mb-4">Let's Collaborate</h2>
          <p className="text-text-muted mb-8">Fill out the form below to discuss your next project.</p>
          
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-[#0f0f0f] border border-border-dark p-4 rounded focus:border-brand-primary outline-none transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-[#0f0f0f] border border-border-dark p-4 rounded focus:border-brand-primary outline-none transition-colors" />
            </div>
            <select className="w-full bg-[#0f0f0f] border border-border-dark p-4 rounded focus:border-brand-primary outline-none transition-colors text-text-muted">
              <option value="">Select Service Needed</option>
              <option value="business_analysis">Business Analysis</option>
              <option value="content_strategy">Content Strategy</option>
              <option value="research_reports">Research Reports</option>
              <option value="user_stories">User Stories & BRDs</option>
            </select>
            <textarea placeholder="Message" rows={4} className="w-full bg-[#0f0f0f] border border-border-dark p-4 rounded focus:border-brand-primary outline-none transition-colors"></textarea>
            <button className="w-full py-4 bg-brand-primary text-background font-heading uppercase font-bold tracking-widest rounded hover:bg-brand-secondary transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
