"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, PenTool, Search, LayoutTemplate } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 lg:py-32 flex flex-col items-center text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-brand-primary overflow-hidden flex items-center justify-center bg-surface-light"
        >
          {/* Mock profile image */}
          <span className="font-heading text-4xl text-brand-primary">MB</span>
        </motion.div>
        
        <motion.div {...fadeIn} className="max-w-3xl space-y-4">
          <h2 className="text-brand-primary font-heading tracking-widest uppercase text-sm md:text-base">Hi, Manish Bhandari. Business Finance.</h2>
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase leading-tight">
            Business Analyst & Content Strategist With A Flexible Approach
          </h1>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-dark py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading uppercase text-center">What I Can Do For You</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-border-dark bg-[#0f0f0f] rounded-xl flex flex-col space-y-4"
            >
              <BarChart3 className="text-brand-primary w-10 h-10" />
              <h3 className="text-xl font-heading uppercase tracking-wide">1. Business Analysis</h3>
              <p className="text-text-muted">Gather & analyze business requirements, model workflows, prepare documentation, and facilitate team communication.</p>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-border-dark bg-[#0f0f0f] rounded-xl flex flex-col space-y-4"
            >
              <LayoutTemplate className="text-brand-primary w-10 h-10" />
              <h3 className="text-xl font-heading uppercase tracking-wide">2. Product Management</h3>
              <p className="text-text-muted">Define product vision, lead cross-functional teams, manage product roadmaps, and analyze user feedback.</p>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-border-dark bg-[#0f0f0f] rounded-xl flex flex-col space-y-4"
            >
              <PenTool className="text-brand-primary w-10 h-10" />
              <h3 className="text-xl font-heading uppercase tracking-wide">3. Content Strategy</h3>
              <p className="text-text-muted">Responsive website design, landing page optimization, Webflow development, website maintenance.</p>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-border-dark bg-[#0f0f0f] rounded-xl flex flex-col space-y-4"
            >
              <Search className="text-brand-primary w-10 h-10" />
              <h3 className="text-xl font-heading uppercase tracking-wide">4. Content Research</h3>
              <p className="text-text-muted">Brand strategy, visual style guides, typography/color selection, brand storytelling.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-heading uppercase">About Me</h2>
            <p className="text-text-muted text-lg leading-relaxed">
              I am a multidisciplinary freelancer helping brands bridge business strategy and creative execution. With expertise in analysis, product management, and content creation, I turn complex requirements into actionable insights and compelling narratives.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="px-8 py-3 bg-brand-primary text-background font-heading uppercase font-bold tracking-wider rounded hover:bg-brand-secondary transition-colors">
                My Story
              </Link>
              <a href="#contact" className="px-8 py-3 border border-border-dark font-heading uppercase font-bold tracking-wider rounded hover:border-brand-primary hover:text-brand-primary transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
             <div className="w-full max-w-md aspect-square bg-surface-light border border-border-dark rounded-2xl flex items-center justify-center">
                <span className="text-text-subtle font-heading text-2xl uppercase">Portrait</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-surface-dark py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-heading uppercase">Featured Projects</h2>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-brand-primary hover:text-brand-secondary uppercase font-heading tracking-wider">
              Browse All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <Link href="/projects/dezerv" className="group block">
              <div className="aspect-video bg-[#0f0f0f] border border-border-dark rounded-t-xl mb-0 overflow-hidden relative flex items-center justify-center">
                 <span className="text-brand-primary font-heading text-2xl">Dezerv</span>
              </div>
              <div className="p-6 border border-t-0 border-border-dark bg-surface-light rounded-b-xl">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-widest">Finance • 2025</p>
                <h3 className="text-xl font-heading uppercase group-hover:text-brand-primary transition-colors">Dezerv: The 8x AUM Growth Story</h3>
              </div>
            </Link>
            
            {/* Project Card 2 */}
            <Link href="/projects/kuvera-analysis" className="group block">
              <div className="aspect-video bg-[#0f0f0f] border border-border-dark rounded-t-xl mb-0 overflow-hidden relative flex items-center justify-center">
                 <span className="text-brand-primary font-heading text-2xl">Kuvera</span>
              </div>
              <div className="p-6 border border-t-0 border-border-dark bg-surface-light rounded-b-xl">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-widest">Wealth Tech • 2025</p>
                <h3 className="text-xl font-heading uppercase group-hover:text-brand-primary transition-colors">Kuvera: Analysis of Strategic Growth</h3>
              </div>
            </Link>

            {/* Project Card 3 */}
            <Link href="/projects/unlocking-indias-untapped-investor-segments" className="group block">
              <div className="aspect-video bg-[#0f0f0f] border border-border-dark rounded-t-xl mb-0 overflow-hidden relative flex items-center justify-center">
                 <span className="text-brand-primary font-heading text-2xl">Market Strategy</span>
              </div>
              <div className="p-6 border border-t-0 border-border-dark bg-surface-light rounded-b-xl">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-widest">Finance • 2025</p>
                <h3 className="text-xl font-heading uppercase group-hover:text-brand-primary transition-colors">Untapped Investor Segments</h3>
              </div>
            </Link>
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link href="/projects" className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary uppercase font-heading tracking-wider">
              Browse All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blogs Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-heading uppercase">Latest Insights</h2>
            <Link href="/blogs" className="hidden md:flex items-center gap-2 text-brand-primary hover:text-brand-secondary uppercase font-heading tracking-wider">
              Browse All Insights <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Blog Card 1 */}
             <Link href="/blogs/the-content-flywheel" className="group flex flex-col md:flex-row border border-border-dark bg-surface-light rounded-xl overflow-hidden hover:border-brand-primary transition-colors">
              <div className="md:w-1/3 aspect-video md:aspect-auto bg-[#0f0f0f] flex items-center justify-center">
                 <PenTool className="text-text-subtle group-hover:text-brand-primary transition-colors w-8 h-8" />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <p className="text-xs text-brand-primary mb-2 uppercase tracking-widest">Content Marketing</p>
                <h3 className="text-xl font-heading uppercase mb-2">The Content Flywheel: Scaling Brand Authority</h3>
                <p className="text-sm text-text-muted line-clamp-2">Learn how to repurpose core messaging across multiple channels to maximize touchpoints and drive leads.</p>
              </div>
            </Link>

            {/* Blog Card 2 */}
             <Link href="/blogs/the-strategic-audit" className="group flex flex-col md:flex-row border border-border-dark bg-surface-light rounded-xl overflow-hidden hover:border-brand-primary transition-colors">
              <div className="md:w-1/3 aspect-video md:aspect-auto bg-[#0f0f0f] flex items-center justify-center">
                 <BarChart3 className="text-text-subtle group-hover:text-brand-primary transition-colors w-8 h-8" />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <p className="text-xs text-brand-primary mb-2 uppercase tracking-widest">Strategy</p>
                <h3 className="text-xl font-heading uppercase mb-2">The Strategic Audit: Maximizing Efficiency</h3>
                <p className="text-sm text-text-muted line-clamp-2">Map workflows and perform gap analysis to eliminate low-impact operations and build scalable models.</p>
              </div>
            </Link>
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link href="/blogs" className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary uppercase font-heading tracking-wider">
              Browse All Insights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
