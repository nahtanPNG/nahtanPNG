import Image from "next/image";

export default function MusicCard() {
  return (
    <div className="bg-card rounded-2xl p-0 overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-zinc-700">
      <Image
        src="/file.svg"
        alt="Album"
        width={400}
        height={128}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex flex-col">
        <span className="font-bold text-foreground">I Wonder</span>
        <span className="text-xs text-muted-foreground mb-2">
          Benji Blue Bills, BNYX®
        </span>
        <span className="text-xs text-muted-foreground">
          Offline. Last Played
        </span>
      </div>
    </div>
  );
}
