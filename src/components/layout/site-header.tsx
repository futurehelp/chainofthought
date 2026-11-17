"use client";

import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-logo" href="#top" aria-label="Chain of Thought home">
          <Image src="/images/logo-light.svg" alt="Chain of Thought" width={150} height={23} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href="#newsletter">Get the newsletter <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
            <a className="header-cta" href="#newsletter" onClick={() => setOpen(false)}>Get the newsletter <ArrowUpRight size={15} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
