import Card from "./Card";

export default function ProjectCard() {
  return (
    <Card className="card-glass p-6 flex flex-col items-center justify-center">
      <div>
        <h2 className="font-bold text-lg mb-1 text-primary pixel-font">
          Minha Jornada
        </h2>
        <p className="text-sm text-foreground opacity-80 mb-4">
          Minha jornada começou na ETEC, onde tive a base técnica em
          Desenvolvimento de Sistemas. De lá pra cá...
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="cursor-pointer px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/80 transition">
          Ler mais
        </button>
        <span className="text-xs text-muted-foreground">Jun 2025</span>
      </div>
    </Card>
  );
}
