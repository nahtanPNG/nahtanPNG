"use client";

import Image from "next/image";
import { useState } from "react";
import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";

export default function AboutPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const aboutRef = useFadeInOnScroll();
  const destaqueRef = useFadeInOnScroll();

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 mt-20">
      <div
        className="flex flex-col md:flex-row align-center justify-between w-full gap-5 md:mt-8 fade-in-section"
        ref={aboutRef}
      >
        <Image
          src="/favicon.svg"
          alt="Avatar"
          width={500}
          height={500}
          className="rounded-md w-[420px] h-auto object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold mt-8 mb-4 pixel-font">Sobre mim</h1>
          <section className="flex-col gap-4 flex text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus fringilla eros. Phasellus at sollicitudin libero. Etiam
              sit amet est non elit rutrum viverra eget sit amet magna. Donec
              bibendum faucibus metus vitae consectetur.
            </p>
            <p>
              Pellentesque tincidunt interdum nibh at semper. Fusce pulvinar,
              nulla non elementum sagittis, ante nibh lacinia arcu, at egestas
              enim tortor quis arcu. Donec non efficitur quam, nec malesuada
              nulla. Sed et lacus eget ipsum placerat iaculis.
            </p>
            <p>
              Duis tincidunt sem vel felis viverra suscipit. Praesent iaculis
              fringilla ex sed porttitor. Vestibulum pellentesque egestas magna
              eu pulvinar. Proin rutrum ante neque, pharetra dapibus velit
              porttitor at.
            </p>
          </section>
        </div>
      </div>
      <div className="mt-8 fade-in-section" ref={destaqueRef}>
        <h1 className="text-3xl font-semibold mb-2 mt-8 pixel-font">
          Destaques
        </h1>
        <p className="text-muted-foreground mb-2 max-w-4xl">
          Experiências especiais que vivenciei na minha vida.
        </p>
        <div className="flex flex-col gap-8 items-start">
          <div className="w-full mb-4 md:mb-0 mt-8">
            <h2 className="text-lg font-bold mb-2">Desafio Liga Jovem</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus fringilla eros. Phasellus at sollicitudin libero. Etiam
              sit amet est non elit rutrum viverra eget sit amet magna. Donec
              bibendum faucibus metus vitae consectetur.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[220px] ">
            {[
              {
                src: "/equipe.jpg",
                alt: "Imagem da equipe",
                className: "col-span-2",
              },
              {
                src: "/apresentacao-local.jpg",
                alt: "Local da apresentação na fatec sebrae",
              },
              {
                src: "/sebrae.jpg",
                alt: "Logo do SEBRAE",
                className: "row-span-2",
              },
              {
                src: "/pulseiras.jpeg",
                alt: "Pulseiras",
              },
              {
                src: "/apresentacao.jpg",
                alt: "Imagem de pessoas apresentando um slide",
                className: "col-span-2",
              },
            ].map((img, idx) => (
              <div
                key={img.src}
                className={`transition-all duration-300 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-white/10 ${img.className ?? ""} ${
                  hovered === idx
                    ? "scale-110 z-20"
                    : hovered !== null
                      ? "blur-sm opacity-60"
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
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
