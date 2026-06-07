"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FlipLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative block overflow-hidden font-antonio font-bold uppercase text-[15px] tracking-[1px] leading-[1]"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <motion.div
        variants={{
          initial: { y: 0, rotateX: 0 },
          hover: { y: "-100%", rotateX: 90 },
        } as any}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <Link href={href}>{children}</Link>
      </motion.div>
      <motion.div
        variants={{
          initial: { y: "100%", rotateX: -90, position: "absolute", top: 0, left: 0 },
          hover: { y: 0, rotateX: 0, position: "absolute", top: 0, left: 0 },
        } as any}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center text-primary"
      >
        <Link href={href}>{children}</Link>
      </motion.div>
    </motion.div>
  );
};

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-[1200px] mx-auto mix-blend-exclusion"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="font-antonio font-bold uppercase tracking-wider text-[15px]">Manish Bhandari</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 bg-cardBorder/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
        <FlipLink href="/">Home</FlipLink>
        <FlipLink href="/about">About</FlipLink>
        <FlipLink href="/projects">Projects</FlipLink>
        <FlipLink href="/blogs">Blogs</FlipLink>
      </nav>

      <div className="flex items-center gap-6">
        <a href="#contact" className="font-inter text-sm text-textMuted hover:text-white transition-colors duration-300">
          Contact
        </a>
      </div>
    </motion.header>
  );
}
