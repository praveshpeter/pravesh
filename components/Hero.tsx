"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Launch modern websites faster with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pixel-primary to-pixel-accent">
              {" "}PixelNest
            </span>
          </motion.h1>
          <p className="mt-4 text-pixel-muted max-w-prose">
            Where Ideas Find Their Shape — A clean, responsive starter you can customize in minutes.
            Built with Next.js, Tailwind CSS, and tasteful micro‑interactions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">Get Started <ArrowRight className="h-4 w-4" /></Link>
            <a href="#pricing" className="btn-outline">See Pricing</a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-pixel-muted">
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-pixel-accent" />Responsive</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-pixel-accent" />SEO Ready</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-pixel-accent" />Fast to Edit</div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-sm overflow-hidden grid place-items-center">
            <svg viewBox="0 0 800 600" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract PixelNest visual">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#FF6FB5" />
                </linearGradient>
                <filter id="blur"><feGaussianBlur stdDeviation="60" /></filter>
              </defs>
              <g filter="url(#blur)" opacity="0.7">
                <circle cx="180" cy="180" r="160" fill="url(#g)" />
                <circle cx="520" cy="260" r="200" fill="url(#g)" />
                <circle cx="360" cy="420" r="160" fill="url(#g)" />
              </g>
              <g>
                {[...Array(9)].map((_, i) => (
                  <rect key={i} x={80 + i * 28} y={80 + (i % 3) * 28} width="22" height="22" rx="4" fill="#1F2937" opacity="0.06" />
                ))}
              </g>
            </svg>
          </div>
          <div className="absolute -z-10 blur-3xl opacity-50 -right-16 -top-16 h-44 w-44 rounded-full bg-pixel-accent" />
          <div className="absolute -z-10 blur-3xl opacity-50 -left-16 -bottom-16 h-44 w-44 rounded-full bg-pixel-primary" />
        </motion.div>
      </div>
    </section>
  );
}
