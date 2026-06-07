"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",    label: "Blogs" },
];

function FlipLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}>
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        style={{ position: "relative", overflow: "hidden", height: 18 }}
      >
        {/* Front */}
        <motion.span
          variants={{ rest: { y: 0 }, hover: { y: "-110%" } }}
          transition={{ duration: 0.26, ease: [0.33, 1, 0.68, 1] }}
          style={{
            display: "block",
            fontFamily: "var(--font-antonio)", fontWeight: 700,
            fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em",
            color: active ? "var(--token-accent)" : "var(--token-text)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </motion.span>
        {/* Back */}
        <motion.span
          variants={{ rest: { y: "110%" }, hover: { y: 0 } }}
          transition={{ duration: 0.26, ease: [0.33, 1, 0.68, 1] }}
          style={{
            position: "absolute", top: 0, left: 0,
            display: "block",
            fontFamily: "var(--font-antonio)", fontWeight: 700,
            fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em",
            color: "var(--token-accent)",
            whiteSpace: "nowrap",
          }}
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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "center", paddingTop: 20, paddingLeft: 16, paddingRight: 16,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 32, width: "100%", maxWidth: 900,
            background: "var(--token-nav-bg)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--token-border)",
            borderRadius: 999, padding: "12px 20px",
            pointerEvents: "auto",
            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "var(--font-antonio)", fontWeight: 700,
              fontSize: 15, textTransform: "uppercase", letterSpacing: "0.12em",
              color: "var(--token-text)", whiteSpace: "nowrap",
            }}>
              Manish Bhandari
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }} className="hidden-1g0zrk7">
            {links.map((l) => (
              <FlipLink key={l.href} {...l} active={pathname === l.href} />
            ))}
          </nav>

          {/* Available badge — desktop */}
          <div className="hidden-1g0zrk7" style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0bde66", flexShrink: 0, animation: "pulse 2s infinite", boxShadow: "0 0 6px #0bde66" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "var(--token-muted)" }}>
              Available for work
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
            className="hidden-72rtr7 hidden-15fhgrh"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2,
                  background: "var(--token-text)", borderRadius: 2,
                  transition: "all 0.2s",
                  transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                    menuOpen && i === 1 ? "scaleX(0)" :
                    menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }} />
              ))}
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 80, left: 16, right: 16, zIndex: 90,
              background: "var(--token-nav-bg)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--token-border)", borderRadius: 20,
              padding: 24, display: "flex", flexDirection: "column", gap: 20,
            }}
          >
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-antonio)", fontWeight: 700, fontSize: 20,
                  textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none",
                  color: pathname === l.href ? "var(--token-accent)" : "var(--token-text)",
                }}>
                {l.label}
              </Link>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0bde66" }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "var(--token-muted)" }}>Available for work</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media(max-width: 809.98px) {
          .hidden-72rtr7 { display: none !important; }
          .hidden-15fhgrh { display: none !important; }
        }
        @media(min-width: 810px) {
          .hidden-1g0zrk7 { display: flex !important; }
        }
      `}</style>
    </>
  );
}
