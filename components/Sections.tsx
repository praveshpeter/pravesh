export function Features() {
  const items = [
    { title: "Clean, modern UI", desc: "Rounded corners, soft shadows, and balanced spacing." },
    { title: "Responsive by default", desc: "Looks great on all devices." },
    { title: "Easy to customize", desc: "Edit a few config values to rebrand in minutes." },
    { title: "Accessible", desc: "Semantic structure and focus states." },
    { title: "Fast", desc: "Lightweight motion and minimal deps." },
    { title: "SEO Ready", desc: "Proper headings and metadata included." },
  ];
  return (
    <section id="features" className="py-20 border-t bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Everything you need to ship</h2>
        <p className="mt-2 text-pixel-muted max-w-prose">Pre-built sections, clean layout, and simple theming so you focus on content, not scaffolding.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(f => (
            <div key={f.title} className="card">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-pixel-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { name: "Starter", price: "₹0", features: ["1 page", "Email support", "Community access"] },
    { name: "Pro", price: "₹499/mo", popular: true, features: ["All sections", "Priority support", "Custom blocks"] },
    { name: "Business", price: "₹1,999/mo", features: ["Unlimited pages", "Dedicated support", "Onboarding help"] },
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Simple pricing</h2>
        <p className="mt-2 text-pixel-muted max-w-prose">Transparent plans that scale with you. Change or cancel anytime.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div key={tier.name} className={`p-6 rounded-2xl border bg-white shadow-sm flex flex-col ${tier.popular ? "ring-2 ring-pixel-primary" : ""}`}>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                {tier.name}
                {tier.popular && <span className="text-xs px-2 py-0.5 rounded-full bg-pixel-primary text-white">Popular</span>}
              </h3>
              <div className="mt-3 text-3xl font-extrabold">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-pixel-muted">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2">• {f}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-xl border px-4 py-2">Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    { q: "Can I deploy this to Vercel?", a: "Yes. Import the repo to Vercel; no custom server required." },
    { q: "How does the contact form work?", a: "It posts to Web3Forms. Add your key in .env.local." },
    { q: "Is it mobile-friendly?", a: "Yes, fully responsive." },
    { q: "Can you customize it for me?", a: "Yes—share your content, logo, and any new sections." },
  ];
  return (
    <section id="faq" className="py-20 border-t bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(item => (
            <div key={item.q} className="card">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm text-pixel-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
