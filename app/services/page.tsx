export default function Services() {
  const services = [
    { title: "Web Design", desc: "Clean, responsive websites that convert." },
    { title: "Branding", desc: "Logos, color systems, and styleguides." },
    { title: "Landing Pages", desc: "High-converting pages for your next launch." },
  ];
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-pixel-muted mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
