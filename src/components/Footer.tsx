import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-surface-dark border-t border-border-dark py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-xl uppercase tracking-wider text-brand-primary">Manish Bhandari</h3>
            <p className="text-text-muted text-sm">
              Business analyst, content creator, and product tester delivering actionable insights for brands seeking growth.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Contact</h4>
            <a href="mailto:manish.bhandari3717@gmail.com" className="flex items-center gap-2 text-text-muted hover:text-brand-primary transition-colors text-sm">
              <Mail size={16} />
              manish.bhandari3717@gmail.com
            </a>
            <a href="tel:+919835685697" className="flex items-center gap-2 text-text-muted hover:text-brand-primary transition-colors text-sm">
              <Phone size={16} />
              +91 9835685697
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                X (Twitter)
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-text-muted hover:text-brand-primary transition-colors text-sm">About</Link>
              <Link href="/projects" className="text-text-muted hover:text-brand-primary transition-colors text-sm">Projects</Link>
              <Link href="/blogs" className="text-text-muted hover:text-brand-primary transition-colors text-sm">Blogs</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-dark text-xs text-text-subtle gap-4">
          <p>© Copyright 2025. All Rights Reserved by Manish Bhandari</p>
          <p>
            Created by <a href="https://x.com/ShenDuncan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Manish Bhandari</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
