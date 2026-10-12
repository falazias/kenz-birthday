import Image from "next/image";
import { cn } from "cn";

export const creatures = {
  fern: {
    src: "/creatures/fern-skate.png",
    width: 766,
    height: 732,
    alt: "Fern, a fluffy brown fox-like creature in red quad skates and a yellow scarf, mid-stride",
  },
  miso: {
    src: "/creatures/miso-skate.png",
    width: 604,
    height: 781,
    alt: "Miso, a small pink cat-like creature in orange quad skates and a red bow tie, skating with arms wide",
  },
  button: {
    src: "/creatures/button-skate.png",
    width: 706,
    height: 789,
    alt: "Button, a yellow mouse-like creature with red cheeks and red quad skates, waving while skating",
  },
  fernPeek: {
    src: "/creatures/fern-peek.png",
    width: 505,
    height: 497,
    alt: "Fern the fox peeking over the edge in a yellow scarf",
  },
  misoBounce: {
    src: "/creatures/miso-bounce.png",
    width: 558,
    height: 758,
    alt: "Miso the pink cat bouncing in orange roller skates with both arms up",
  },
  buttonPeek: {
    src: "/creatures/button-peek.png",
    width: 489,
    height: 859,
    alt: "Button the yellow mouse peeking in from the side on a red skate",
  },
} as const;

export type CreatureName = keyof typeof creatures;

export function Creature({
  name,
  alt,
  className,
  priority = false,
}: {
  name: CreatureName;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const art = creatures[name];
  return (
    <Image
      src={art.src}
      alt={alt ?? art.alt}
      width={art.width}
      height={art.height}
      priority={priority}
      className={cn("pointer-events-none h-auto select-none", className)}
    />
  );
}
