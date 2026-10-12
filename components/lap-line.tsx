import { Creature, type CreatureName } from "@/components/creature";

const skaters: { name: CreatureName; delay: string; duration: string }[] = [
  { name: "fern", delay: "0s", duration: "1.45s" },
  { name: "miso", delay: "0.18s", duration: "1.7s" },
  { name: "button", delay: "0.32s", duration: "1.35s" },
];

function SkateSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={hidden ? "lap-set lap-clone" : "lap-set"} aria-hidden={hidden || undefined}>
      {skaters.map((skater) => (
        <div
          key={skater.name}
          className="skater-bob"
          style={{ animationDelay: skater.delay, animationDuration: skater.duration }}
        >
          <div className="transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:-rotate-3">
            <Creature
              name={skater.name}
              alt={hidden ? "" : undefined}
              className="h-28 w-auto sm:h-36"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LapLine() {
  return (
    <div className="border-y-4 border-rink bg-sun">
      <p className="px-4 pt-3 text-center font-heading text-sm font-bold tracking-wide text-ink uppercase">
        Now entering the rink
      </p>
      <div className="lap overflow-hidden py-2">
        <div className="lap-track">
          <SkateSet />
          <SkateSet hidden />
        </div>
      </div>
    </div>
  );
}
