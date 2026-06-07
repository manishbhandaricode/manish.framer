"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PenTool } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      id: "the-content-flywheel",
      title: "The Content Flywheel: Scaling Brand Authority",
      category: "Content & Brand Marketing",
      date: "Mar 30, 2025"
    },
    {
      id: "how-to-scale-quality-with-beta-testing",
      title: "How to Scale Quality with Beta Testing",
      category: "Product Management",
      date: "Apr 27, 2025"
    },
    {
      id: "the-strategic-audit",
      title: "The Strategic Audit: Maximizing Business Efficiency",
      category: "Business Analysis & Strategy",
      date: "Apr 22, 2025"
    },
    {
      id: "competitive-analysis-for-the-modern-startup",
      title: "Competitive Analysis for the Modern Startup",
      category: "Business Analysis & Strategy",
      date: "Apr 30, 2025"
    },
    {
      id: "from-beta-users-to-brand-ambassadors",
      title: "From Beta Users to Brand Ambassadors",
      category: "Community & Product Growth",
      date: "May 2, 2025"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold uppercase mb-12 text-center"
        >
          All Insights
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/blogs/${blog.id}`} className="group block h-full">
                <div className="aspect-video bg-[#0f0f0f] border border-border-dark rounded-t-xl overflow-hidden relative flex items-center justify-center">
                  <PenTool className="text-text-subtle group-hover:text-brand-primary transition-colors w-12 h-12" />
                </div>
                <div className="p-6 border border-t-0 border-border-dark bg-surface-light rounded-b-xl h-full flex flex-col">
                  <p className="text-xs text-brand-primary mb-2 uppercase tracking-widest">{blog.category}</p>
                  <h3 className="text-xl font-heading uppercase mb-2 group-hover:text-brand-primary transition-colors leading-snug">{blog.title}</h3>
                  <p className="text-xs text-text-muted uppercase tracking-widest mt-auto pt-4">{blog.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
