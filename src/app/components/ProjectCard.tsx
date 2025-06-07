export default function ProjectCard() {
  return (
    <div className="bg-card rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-gray-200 dark:border-zinc-700">
      <div>
        <h2 className="font-bold text-lg mb-1 text-primary">Como está indo?</h2>
        <p className="text-sm text-foreground opacity-80 mb-4">
          Um breve relato sobre minha jornada no desenvolvimento web, iniciada
          com paixão e curiosidade.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/80 transition">
          Ler mais
        </button>
        <span className="text-xs text-muted-foreground">Jun 2025</span>
      </div>
    </div>
  );
}
