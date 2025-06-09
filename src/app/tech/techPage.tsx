"use client";

import { TechCard } from "../components/TechCard";
import {
  backendList,
  databaseList,
  devopsList,
  frontendList,
} from "./techLists";
import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";

export default function TechnologiesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 mt-20 animate-fade-in">
      <h1 className="text-3xl font-bold mb-2 pixel-font">Tecnologias</h1>
      <p className="text-muted-foreground mb-8 max-w-4xl">
        Trabalho com um conjunto moderno de tecnologias que me permite
        desenvolver aplicações escaláveis, performáticas e bem estruturadas.
        Cada ferramenta é escolhida com foco em produtividade, qualidade de
        código e uma experiência de uso fluida e eficiente.
      </p>
      <h2 className="text-xl font-semibold mb-4 mt-8 pixel-font">Frontend</h2>
      <div
        ref={useFadeInOnScroll()}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-in-section"
      >
        {frontendList.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-8 pixel-font">Backend</h2>
      <div
        ref={useFadeInOnScroll()}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-in-section"
      >
        {backendList.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-8 pixel-font">
        Banco de Dados
      </h2>
      <div
        ref={useFadeInOnScroll()}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-in-section"
      >
        {databaseList.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-8 pixel-font">
        Devops / Infraestrutura
      </h2>
      <div
        ref={useFadeInOnScroll()}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-in-section"
      >
        {devopsList.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </main>
  );
}
