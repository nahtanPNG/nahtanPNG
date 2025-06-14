"use client";

import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  const heroRef = useFadeInOnScroll();
  const formRef = useFadeInOnScroll();

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 mt-20">
      <section className="mb-16 fade-in-section" ref={heroRef}>
        <h1 className="text-4xl font-bold mb-4 pixel-font">Vamos conversar!</h1>
        <p className="text-base text-muted-foreground">
          Tem um projeto em mente? Quer discutir uma oportunidade ou apenas
          trocar uma ideia sobre tecnologia? Ficarei feliz em conversar com
          você.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="fade-in-section col-span-2" ref={formRef}>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
