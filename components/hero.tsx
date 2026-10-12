"use client";

import { type PointerEvent, useRef, useState } from "react";
import { AddressLink } from "@/components/address-link";
import { Creature, type CreatureName } from "@/components/creature";
import { usePrefersReducedMotion } from "@/components/use-reduced-motion";
import { buttonVariants } from "@/components/ui/button";
import { AREA, VENUE, when } from "@/lib/party";
import { cn } from "cn";

const lines: Record<string, string> = {
  rest: "Move your pointer. They lean with you.",
  fern: "Fern called the first lap. She will also call the second.",
  miso: "Miso is skating backwards on purpose. Do not correct her.",
  button: "Button's cheeks are red because the floor is shiny. Obviously.",
};

const spots: {
  name: Extract<CreatureName, "fern" | "miso" | "button">;
  className: string;
  shift: number;
  priority?: boolean;
}[] = [
  { name: "miso", className: "bottom-[22%] right-[2%] z-10 w-[42%]", shift: 22 },
  { name: "fern", className: "bottom-[8%] left-0 z-20 w-[54%]", shift: 14, priority: true },
  { name: "button", className: "bottom-[2%] left-[34%] z-30 w-[38%]", shift: 8 },
];

export function Hero() {
  const rinkRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hot, setHot] = useState<string | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = rinkRef.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }

  function clearPointer() {
    setOffset({ x: 0, y: 0 });
    setPressed(null);
  }

  const caption = reduced
    ? "They're holding a pose so the floor can rest."
    : lines[hot ?? "rest"] ?? lines.rest;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="drift absolute top-16 left-[6%] size-16 rounded-full bg-rink/80" />
        <span
          className="drift absolute top-28 right-[8%] size-10 rounded-full bg-mango"
          style={{ animationDelay: "0.8s" }}
        />
        <span
          className="drift absolute bottom-16 left-[18%] size-8 rotate-12 rounded-md bg-sun"
          style={{ animationDelay: "1.4s" }}
        />
        <span className="pointer-events-none absolute -right-6 top-6 font-heading text-[8rem] leading-none font-bold text-rink/10 sm:text-[12rem]">
          7
        </span>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-4 px-4 pt-8 pb-8 sm:gap-8 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="rise font-heading text-sm font-bold tracking-wide text-rink uppercase">
            You&apos;re invited
          </p>
          <h1
            className="rise mt-2 font-heading text-4xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Kenz is turning 7.
            <span className="mt-1 block text-rink">The rink is hers.</span>
          </h1>
          <p
            className="rise mt-4 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            {when.date}, from {when.hours}. We&apos;re taking over {VENUE} at {AREA}. Falling is
            allowed. Bragging about it is encouraged.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div
            ref={rinkRef}
            onPointerMove={onMove}
            onPointerLeave={clearPointer}
            onPointerCancel={clearPointer}
            className="relative mx-auto h-[18rem] w-full max-w-lg sm:h-[24rem] lg:h-[26rem]"
          >
            <div className="rink-oval" aria-hidden />
            {spots.map((spot) => {
              const scale = pressed === spot.name ? 0.9 : hot === spot.name ? 1.07 : 1;
              const rot = hot === spot.name ? -6 : 0;
              const x = reduced ? 0 : offset.x * spot.shift;
              const y = reduced ? 0 : offset.y * spot.shift * 0.45;
              return (
                <button
                  key={spot.name}
                  type="button"
                  className={cn("creature-follow absolute border-0 bg-transparent p-0", spot.className)}
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`,
                  }}
                  aria-label={
                    spot.name === "fern"
                      ? "Fern the fox"
                      : spot.name === "miso"
                        ? "Miso the cat"
                        : "Button the mouse"
                  }
                  onPointerEnter={() => setHot(spot.name)}
                  onPointerLeave={() => setHot((current) => (current === spot.name ? null : current))}
                  onFocus={() => setHot(spot.name)}
                  onBlur={() => setHot((current) => (current === spot.name ? null : current))}
                  onPointerDown={() => setPressed(spot.name)}
                  onPointerUp={() => setPressed(null)}
                >
                  <div className="skater-bob">
                    <Creature name={spot.name} priority={spot.priority} className="w-full" />
                  </div>
                </button>
              );
            })}
          </div>
          <p className="mx-auto mt-2 min-h-12 max-w-md text-center font-heading text-lg" aria-live="polite">
            {caption}
          </p>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="rise flex flex-wrap gap-2 lg:mt-2" style={{ animationDelay: "0.22s" }}>
            {["Two hours", "Cake in the middle", "Bay breeze included"].map((chip) => (
              <li key={chip} className="rounded-full bg-sun px-3 py-1 text-sm font-bold">
                {chip}
              </li>
            ))}
          </ul>
          <div
            className="rise mt-5 rounded-3xl border-2 border-rink bg-white/80 p-4"
            style={{ animationDelay: "0.28s" }}
          >
            <p className="font-heading text-xl font-bold">{VENUE}</p>
            <p className="text-sm font-semibold text-muted-foreground">{AREA}</p>
            <div className="mt-2">
              <AddressLink />
            </div>
          </div>
          <div className="rise mt-6 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.34s" }}>
            <a
              href="#rsvp"
              className={cn(
                buttonVariants({ size: "lg" }),
                "party-press h-12 rounded-full px-6 text-base font-heading",
              )}
            >
              Save me a skate
            </a>
            <a
              href="#plan"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "party-press h-12 rounded-full px-6 text-base font-heading",
              )}
            >
              See the plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
