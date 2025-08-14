import Link from "next/link";
import { Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-pixel-muted">© {new Date().getFullYear()} PixelNest. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="https://github.com/" className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</Link>
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-pixel-primary" /> hello@pixelnest.com</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-pixel-primary" /> +91 98765 43210</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-pixel-primary" /> Your Town, India</span>
        </div>
      </div>
    </footer>
  );
}
