"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/projects",label: "Projects" },
  { href: "/blogs",   label: "Blogs" },
];

function FlipLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href}>
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        whileHover="hover"
        initial="rest"
        animate="rest"
        style={{ perspective: 800 }}
      >
        {/* front face */}
        <motion.span
          variants={{ rest: { y: 0 }, hover: { y: "-110%" } }}
          transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className={`block font-antonio font-bold uppercase text-[13px] tracking-[1.5px] leading-none
            ${active ? "text-accent" : "text-text"}`}
        >
          {label}
        </motion.span>
        {/* back face */}
        <motion.span
          variants={{ rest: { y: "110%" }, hover: { y: 0 } }}
          transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 block font-antonio font-bold uppercase text-[13px] tracking-[1.5px] leading-none text-accent"
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none"
      >
        <div
          className={`nav-glass pointer-events-auto flex items-center justify-between gap-8 px-5 py-3 w-full max-w-[900px] transition-all duration-300
            ${scrolled ? "shadow-lg" : ""}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-antonio font-bold text-[15px] uppercase tracking-[1.5px] text-text whitespace-nowrap">
              Manish Bhandari
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <FlipLink key={l.href} {...l} active={pathname === l.href} />
            ))}
          </nav>

          {/* Available badge */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="font-inter text-[12px] text-muted">Available for work</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-text transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-text transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-text transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 nav-glass rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`font-antonio font-bold uppercase text-[18px] tracking-[2px] ${
                  pathname === l.href ? "text-accent" : "text-text"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="font-inter text-[12px] text-muted">Available for work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
