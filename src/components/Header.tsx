"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",    label: "Blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "center",
          padding: "18px 24px", pointerEvents: "none",
        }}
      >
        {/* Pill nav */}
        <div style={{
          display: "flex", alignItems: "center", gap: 0,
          background: "rgba(30,30,30,0.92)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 999, padding: "6px 6px 6px 6px",
          pointerEvents: "auto",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}>
          {/* MB Logo circle */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginRight: 16,
            }}>
              <span style={{
                fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 13,
                color: "#ffffff", letterSpacing: "0.05em",
              }}>MB</span>
            </div>
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4, marginRight: 8 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ color: "#d0ff71" }}
                  style={{
                    fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: 14,
                    color: "rgba(255,255,255,0.85)", padding: "6px 14px",
                    borderRadius: 999, display: "block",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Contact button */}
          <Link href="/about#contact" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: "#ffffff", color: "#111111",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 14,
                padding: "8px 20px", borderRadius: 999, cursor: "pointer",
              }}
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 72, left: 16, right: 16, zIndex: 90,
          background: "rgba(20,20,20,0.96)", backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20,
          padding: 24, display: "flex", flexDirection: "column", gap: 16,
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-inter)", fontSize: 18, color: "#fff", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
