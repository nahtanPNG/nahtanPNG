"use client";

import Image from "next/image";
import { useState } from "react";
import { useFadeInOnScroll } from "@/app/utils/useFadeInOnScroll";
import { MedalIcon } from "@phosphor-icons/react";
import Card from "@/app/components/Card";

export default function HighlightsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const destaqueRef = useFadeInOnScroll();

  return (
    <section className="fade-in-section py-12" ref={destaqueRef}>
      <h1 className="text-3xl font-bold mt-8 mb-2 pixel-font">
        Destaques & experiências
      </h1>
      <p className="text-muted-foreground mb-8">
        Algumas experiências especiais que marcaram minha jornada profissional e
        pessoal.
      </p>
      <div className="space-y-8">
        <Card className="card-glass rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <span className="text-2xl">
                <MedalIcon />
              </span>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-primary">
                Desafio Liga Jovem - SEBRAE
              </h3>

              <p className="text-sm text-muted-foreground">
                Participei de uma competição de empreendedorismo onde
                desenvolvemos uma solução inovadora para o mercado de
                transportes escolares. Foi uma experiência incrível trabalhar em
                equipe, aplicar conhecimentos de desenvolvimento e apresentar
                para uma banca de especialistas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[200px]">
            {[
              {
                src: "/equipe.jpg",
                alt: "Equipe do projeto",
                className: "col-span-2",
              },
              {
                src: "/apresentacao-local.jpg",
                alt: "Local da apresentação na FATEC SEBRAE",
              },
              {
                src: "/sebrae.jpg",
                alt: "Logo do SEBRAE",
                className: "row-span-2",
              },
              {
                src: "/pulseiras.jpeg",
                alt: "Pulseiras do evento",
              },
              {
                src: "/apresentacao.jpg",
                alt: "Momento da apresentação",
                className: "col-span-2",
              },
            ].map((img, idx) => (
              <div
                key={img.src}
                className={`group relative transition-all duration-500 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-gradient-to-br from-gray-800/20 to-gray-700/20 border border-gray-600/20 ${img.className ?? ""} ${
                  hovered === idx
                    ? "scale-[1.05] z-20 shadow-2xl shadow-[#66538d]/20"
                    : hovered !== null
                      ? "blur-sm opacity-50 scale-95"
                      : ""
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
