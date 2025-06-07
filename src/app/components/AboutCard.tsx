import Image from "next/image";

export default function AboutCard() {
  return (
    <div className="col-span-1 md:col-span-2 bg-card rounded-2xl p-15 flex flex-col justify-center items-start shadow-lg border border-gray-200 dark:border-zinc-700">
      <div className="flex items-center gap-4 mb-2">
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-2 border-primary dark:border-zinc-700 object-cover"
        />
        <div>
          <span className="font-semibold text-lg text-primary">
            Nathan Ferreira
          </span>
          <p className="text-sm text-muted-foreground">Software Developer</p>
        </div>
      </div>
      <p className="text-foreground opacity-90 mt-2">
        Olá! Sou Nathan, desenvolvedor de software apaixonado por tecnologia,
        música e aprender coisas novas. Gosto de criar soluções criativas e
        funcionais.
      </p>
    </div>
  );
}
