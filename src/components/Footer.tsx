import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left: branding + available */}
        <div className="flex flex-col gap-3">
          <span className="font-antonio font-bold uppercase text-[20px] tracking-[1px] text-text">
            Manish Bhandari
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="font-inter text-[13px] text-muted">Available for work</span>
          </div>
        </div>

        {/* Center: nav */}
        <nav className="flex flex-wrap gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/blogs", label: "Blogs" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-antonio font-bold uppercase text-[13px] tracking-[1.5px] text-muted hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: contact */}
        <div className="flex flex-col gap-2">
          <a
            href="mailto:manish.bhandari3717@gmail.com"
            className="font-inter text-[13px] text-muted hover:text-accent transition-colors duration-200"
          >
            manish.bhandari3717@gmail.com
          </a>
          <a
            href="tel:+919835685697"
            className="font-inter text-[13px] text-muted hover:text-accent transition-colors duration-200"
          >
            +91 9835685697
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-inter text-[12px] text-muted">
          © Copyright 2025. All Rights Reserved by Manish Bhandari
        </p>
        <p className="font-inter text-[12px] text-muted">
          Created by Manish Bhandari
        </p>
      </div>
    </footer>
  );
}
