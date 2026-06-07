"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-transparent backdrop-blur-md border-b border-border-dark">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-surface-light border border-border-dark overflow-hidden flex items-center justify-center">
            {/* Fallback avatar if no image */}
            <span className="font-heading font-bold text-lg text-brand-primary group-hover:text-brand-secondary transition-colors">MB</span>
          </div>
          <span className="font-heading text-xl font-bold tracking-wider hidden sm:block">MANISH BHANDARI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm uppercase tracking-widest hover:text-brand-primary transition-colors ${
                pathname === link.path ? "text-brand-primary" : "text-text-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-surface-dark border-b border-border-dark flex flex-col py-4 px-6 gap-4 shadow-xl"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg uppercase tracking-widest font-heading ${
                pathname === link.path ? "text-brand-primary" : "text-text-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
