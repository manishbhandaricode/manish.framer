"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "unlocking-indias-untapped-investor-segments",
      title: "Unlocking India’s Untapped Investor Segments",
      metadata: "Finance • 2025 • Perccent",
    },
    {
      id: "dezerv",
      title: "Dezerv: The 8x AUM Growth Story",
      metadata: "Wealthtech • 2025 • Perccent",
    },
    {
      id: "mutual-fund-goals-and-investor-alignment",
      title: "Mutual Fund Goals and Investor Alignment",
      metadata: "Wealthtech • 2025",
    },
    {
      id: "crystal-peak",
      title: "Crystal Peak Pitch Deck",
      metadata: "HRaaS • 2025 • Crystal Peak",
    },
    {
      id: "kuvera-analysis",
      title: "Kuvera: Analysis of Strategic Growth",
      metadata: "Wealth Tech • 2025 • Perccent",
    },
    {
      id: "user-stories",
      title: "User Stories Development for Enhanced Wealthtech Product Design",
      metadata: "Wealth Tech • 2024 • Perccent",
    },
    {
      id: "hospital-management-system",
      title: "Legal Compliance Framework in Hospital Management Dashboard",
      metadata: "Healthcare • 2025 • Apollo Hospital",
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
          All Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/projects/${proj.id}`} className="group block h-full">
                <div className="aspect-video bg-[#0f0f0f] border border-border-dark rounded-t-xl overflow-hidden relative flex items-center justify-center">
                  <FolderGit2 className="text-text-subtle group-hover:text-brand-primary transition-colors w-12 h-12" />
                </div>
                <div className="p-6 border border-t-0 border-border-dark bg-surface-light rounded-b-xl h-full flex flex-col">
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-widest">{proj.metadata}</p>
                  <h3 className="text-xl font-heading uppercase group-hover:text-brand-primary transition-colors leading-snug">{proj.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
