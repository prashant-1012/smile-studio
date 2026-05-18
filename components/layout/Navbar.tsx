"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass shadow-sm py-3" : "py-5 bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-primary">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2C9.5 2 7 6 7 10C7 14 8.5 16 8.5 19C8.5 22 10.5 26 14 26C17.5 26 19.5 22 19.5 19C19.5 16 21 14 21 10C21 6 18.5 2 14 2Z"
                  fill="currentColor"
                  fillOpacity="0.15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 13C11 13 12.5 14.5 14 14.5C15.5 14.5 17 13 17 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Smile Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            )}
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 ml-1">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        style={{ background: "rgba(0,0,0,0.4)" }}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 glass shadow-2xl lg:hidden transition-transform duration-300 ease-in-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
          <span className="font-display text-lg font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg text-muted-foreground hover:text-primary"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-4 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-primary/8 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-8">
          <Button asChild className="w-full bg-primary text-primary-foreground">
            <Link href="/book" onClick={() => setOpen(false)}>
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
