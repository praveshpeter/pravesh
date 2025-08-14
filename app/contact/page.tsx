import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold">Tell us about your project</h1>
      <p className="mt-2 text-pixel-muted">Drop a message and we’ll get back within 24 hours.</p>
      <ContactForm />
    </section>
  );
}
