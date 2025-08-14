"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/#features" className="text-sm hover:text-pixel-primary">Features</Link>
      <Link href="/#pricing" className="text-sm hover:text-pixel-primary">Pricing</Link>
      <Link href="/#faq" className="text-sm hover:text-pixel-primary">FAQ</Link>
      <Link href="/contact" className="text-sm hover:text-pixel-primary">Contact</Link>
      <Link href="/services" className="text-sm hover:text-pixel-primary">Services</Link>
      <Link href="/about" className="text-sm hover:text-pixel-primary">About</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-pixel-primary grid place-items-center text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg">PixelNest</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Link href="/contact" className="rounded-2xl px-4 py-2 bg-pixel-primary text-white text-sm shadow">
            Get Started
          </Link>
        </nav>

        <button className="md:hidden p-2 rounded-xl border" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container py-3 flex flex-col gap-3">
            <NavLinks />
            <Link href="/contact" onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 bg-pixel-primary text-white w-fit">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
