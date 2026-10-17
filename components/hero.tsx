import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const floats = [
  { className: "top-10 left-[6%] text-rink", delay: "0s", duration: "6.5s", glyph: "♥", size: "text-4xl" },
  { className: "top-28 right-[7%] text-mango", delay: "0.8s", duration: "7.5s", glyph: "★", size: "text-3xl" },
  { className: "bottom-28 left-[10%] text-sun", delay: "1.4s", duration: "8s", glyph: "★", size: "text-2xl" },
  { className: "top-1/3 right-[4%] text-rink", delay: "0.3s", duration: "5.5s", glyph: "♥", size: "text-2xl" },
  { className: "bottom-16 right-[12%] text-mango", delay: "1.1s", duration: "9s", glyph: "♥", size: "text-5xl" },
  { className: "top-16 left-[18%] text-rink/80", delay: "1.8s", duration: "6s", glyph: "★", size: "text-xl" },
] as const;

const balloons = [
  { left: "8%", delay: "0s", color: "bg-rink", duration: "13s" },
  { left: "18%", delay: "3s", color: "bg-sun", duration: "16s" },
  { left: "78%", delay: "1.5s", color: "bg-mango", duration: "15s" },
  { left: "88%", delay: "5s", color: "bg-[#7ad0ff]", duration: "18s" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-6 pb-4 sm:px-6 sm:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#fff7c2_0%,#ffe08a_42%,#ffd0ea_100%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {balloons.map((balloon) => (
          <span
            key={balloon.left}
            className={cn("balloon-rise absolute bottom-0 size-8 rounded-full", balloon.color)}
            style={{
              left: balloon.left,
              animationDelay: balloon.delay,
              animationDuration: balloon.duration,
            }}
          />
        ))}
        {floats.map((bit) => (
          <span
            key={`${bit.glyph}-${bit.className}`}
            className={cn("drift absolute font-bold", bit.size, bit.className)}
            style={{ animationDelay: bit.delay, animationDuration: bit.duration }}
          >
            {bit.glyph}
          </span>
        ))}
      </div>
      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <div className="poster-float w-full">
          <Image
            src="/kenz-poster.jpg"
            alt="You're invited. Kenz is turning 7. A fox in a yellow hoodie, a pink cat in a red skating dress, and a yellow skater in a red hoodie with pointy ears and a jagged tail roller skate together at Ringer's Roller Rink, Seaport Village, San Diego, Saturday, November 21, from 1 to 3 pm."
            width={768}
            height={1168}
            priority
            className="h-auto w-full rounded-[1.75rem] shadow-[0_24px_60px_rgba(70,20,60,0.28)]"
          />
        </div>
        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
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
            href="#details"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "party-press h-12 rounded-full px-6 text-base font-heading",
            )}
          >
            The details
          </a>
        </div>
      </div>
    </section>
  );
}
