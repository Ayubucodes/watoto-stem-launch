import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/logo.svg";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/what-we-do" as const, label: "What We Do" },
  { to: "/impact" as const, label: "Our Impact" },
  // { to: "/get-involved" as const, label: "Get Involved" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
              <img
                src={logoUrl}
                alt="Watoto STEM"
                className="h-8 w-8"
              />
            </div>
            <span className="text-lg font-bold text-foreground">
              Watoto <span className="text-gradient-purple">STEM</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary rounded-lg"
                activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary bg-primary/5 rounded-lg" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/get-involved">
              <Button size="sm" className="cursor-pointer">Get Involved</Button>
            </Link>
          </div>

          <button
            className="flex items-center justify-center md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background md:hidden animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                activeProps={{ className: "px-4 py-3 text-sm font-medium text-primary bg-primary/5 rounded-lg" }}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/get-involved" onClick={() => setMobileOpen(false)} className="mt-2">
              <Button className="w-full" size="sm">Get Involved</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
