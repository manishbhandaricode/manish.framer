"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",    label: "Blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "center",
          padding: "20px 24px", pointerEvents: "none",
        }}
      >
        {/* Nav pill — exact: 508px × 56px, radius 28px, rgba(15,15,15,0.9) */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: 0,
          background: "rgba(15, 15, 15, 0.9)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: 28,
          padding: "8px 10px",
          width: 508, height: 56,
          pointerEvents: "auto",
          boxSizing: "border-box",
          justifyContent: "space-between",
        }}>
          {/* LEFT: Circular portrait avatar — 40×40px */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              overflow: "hidden", flexShrink: 0,
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <img
                src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png"
                alt="Portfolio Creator Avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
              />
            </div>
          </Link>

          {/* CENTER: Nav links — 12px sans-serif */}
          <nav style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ color: "#d0ff71" }}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400, fontSize: 12,
                    color: pathname === l.href ? "#d0ff71" : "rgba(255,255,255,0.85)",
                    padding: "6px 14px", display: "block",
                    transition: "color 0.2s", whiteSpace: "nowrap",
                  }}
                >
                  {l.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* RIGHT: Contact button — white, 118×40px, radius 99px, padding 3px 30px 4px */}
          <Link href="/about#contact" style={{ textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: "#ffffff", color: "#111111",
                fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 12,
                borderRadius: 99, padding: "3px 30px 4px",
                width: 118, height: 40,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxSizing: "border-box",
              }}
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{
            position: "fixed", top: 80, left: 16, right: 16, zIndex: 90,
            background: "rgba(15,15,15,0.97)", backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20,
            padding: 24, display: "flex", flexDirection: "column", gap: 20,
          }}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#fff", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Responsive: hide wide nav on mobile */}
      <style>{`
        @media(max-width: 560px) {
          /* shrink nav pill */
        }
      `}</style>
    </>
  );
}
