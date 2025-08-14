"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus({ ok: false, msg: "Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local" });
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", key);
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
        form.reset();
      } else {
        setStatus({ ok: false, msg: json.message || "Something went wrong." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required className="w-full rounded-xl border px-4 py-3" placeholder="Your name" />
        <input name="email" required className="w-full rounded-xl border px-4 py-3" placeholder="Email address" type="email" />
      </div>
      <input name="subject" className="w-full rounded-xl border px-4 py-3" placeholder="Subject" />
      <textarea name="message" required className="w-full rounded-xl border px-4 py-3 min-h-[140px]" placeholder="Tell us a little about what you want to build…" />
      <button type="submit" disabled={submitting} className="rounded-2xl px-5 py-3 bg-pixel-primary disabled:opacity-70 text-white w-fit inline-flex items-center gap-2">
        {submitting ? "Sending…" : "Send message"} <ArrowRight className="h-4 w-4" />
      </button>
      {status && <p className={`text-sm ${status.ok ? "text-green-600" : "text-rose-600"}`} role="status">{status.msg}</p>}
    </form>
  );
}
