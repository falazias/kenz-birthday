import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const links = [
  ["#details", "Details"],
  ["#plan", "Plan"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-rink bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="party-press flex items-center gap-2 font-heading text-lg font-bold">
          <span className="grid size-9 place-items-center rounded-full bg-rink text-base text-white">
            7
          </span>
          Kenz
        </a>
        <nav aria-label="Invitation" className="flex items-center gap-1 sm:gap-3">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="party-press hidden rounded-full px-3 py-2 text-sm font-bold hover:bg-sun sm:inline-flex"
            >
              {label}
            </a>
          ))}
          <a
            href="#rsvp"
            className={cn(
              buttonVariants({ size: "sm" }),
              "party-press h-9 rounded-full px-3 font-heading",
            )}
          >
            RSVP
          </a>
        </nav>
      </div>
      <nav aria-label="Invitation sections" className="flex gap-2 overflow-x-auto px-4 pb-3 sm:hidden">
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="party-press shrink-0 rounded-full bg-sun px-3 py-1.5 text-sm font-bold"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
