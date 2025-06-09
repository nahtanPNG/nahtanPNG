import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import Card from "./Card";

export default function ProjectContactCard() {
  return (
    <Card className="card-glass col-span-1 md:col-span-1 p-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-lg mb-2 text-primary pixel-font">
        Tem um projeto interessante em mente? 👋
      </h2>
      <p className="text-sm text-foreground opacity-80 mb-4">
        Tem um projeto em mente? Precisa tirar uma ideia do papel ou quer trocar
        uma ideia sobre tecnologia? Vamos conversar!
      </p>
      <div className="flex gap-3 items-center">
        <a
          href="mailto:nathan.ferreiira.dev@gmail.com"
          className="flex gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition"
        >
          <PaperPlaneTiltIcon size={20} /> Contate-me
        </a>
      </div>
    </Card>
  );
}
