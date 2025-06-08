import Card from "./Card";

const experiences = [
  {
    company: "OSS Brasil",
    title: "Desenvolvedor full stack",
    period: "ago 2024 - Presente · São Paulo",
    description:
      "Desenvolvimento completo de aplicações web, do banco de dados à interface, focando em performance, arquitetura limpa e integração de APIs.",
  },
  {
    company: "OSS Brasil",
    title: "Desenvolvedor web front end",
    period: "jan 2024 - Presente · São Paulo",
    description:
      "Transformação de protótipos em sites funcionais, automação de processos e integração de ferramentas para clientes da Atuant.",
  },
];

export default function ContactCard() {
  return (
    <Card className="card-glass row-span-2 p-6 flex flex-col gap-6 items-start justify-start">
      <h2 className="font-bold text-lg mb-4 text-primary">
        Experiência Profissional
      </h2>
      <div className="flex flex-col gap-4 w-full">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-xl bg-[#151515] border border-zinc-800/80 p-4 shadow-inner flex flex-col gap-1 transition hover:scale-[1.025] hover:shadow-lg hover:border-[#66538D]"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground text-base">
                {exp.company}
              </span>
              <span className="text-xs text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <div className="font-medium text-primary text-sm">{exp.title}</div>
            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
