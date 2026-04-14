import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoUrl from "@/assets/logo.svg";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="gradient-purple-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                <img
                  src={logoUrl}
                  alt="Watoto STEM"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-lg font-bold">Watoto STEM</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Introducing children in Tanzania and Africa to science and technology through hands-on learning.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/what-we-do" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">What We Do</Link>
              <Link to="/impact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Our Impact</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@watotostem.org" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail size={16} /> partnerships@watotostemcharity.com
              </a>
              <a href="tel:+255700000000" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone size={16} /> +255 714 661 609
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} /> Dar es Salaam, Tanzania
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/70 mb-3">Stay updated on our initiatives.</p>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="hero-outline" size="sm" type="submit" className="cursor-pointer">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">© 2026 Watoto STEM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
