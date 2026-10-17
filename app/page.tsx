import { AddressLink } from "@/components/address-link";
import { Hero } from "@/components/hero";
import { PartyStory } from "@/components/party-story";
import { RsvpForm } from "@/components/rsvp-form";
import { SiteHeader } from "@/components/site-header";

const ticker = ["♥", "SKATE", "★", "LAUGH", "♥", "MAKE MAGIC", "★", "KENZ IS 7"] as const;

function SkateTicker() {
  const row = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-y-4 border-rink bg-sun py-3" aria-hidden>
      <div className="lap-track">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className={copy === 1 ? "lap-set lap-clone font-heading text-lg font-bold tracking-wide" : "lap-set font-heading text-lg font-bold tracking-wide"}
          >
            {row.map((bit, index) => (
              <span key={`${copy}-${index}`} className="px-3">
                {bit}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#rsvp"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-rink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to RSVP
      </a>
      <SiteHeader />
      <main id="top">
        <Hero />
        <SkateTicker />
        <PartyStory />
        <section id="rsvp" className="scroll-mt-28 relative overflow-hidden bg-sun/45 px-4 py-16 sm:px-6 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="drift absolute top-8 left-[8%] text-3xl text-rink" style={{ animationDuration: "6s" }}>
              ♥
            </span>
            <span
              className="float-bob absolute right-[10%] bottom-10 text-4xl text-mango"
              style={{ animationDuration: "3.4s" }}
            >
              ★
            </span>
            <span
              className="sparkle absolute top-1/3 right-[6%] text-2xl text-rink"
              style={{ animationDelay: "0.6s" }}
            >
              ✦
            </span>
          </div>
          <div className="relative mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Save a skate
              </h2>
              <p className="mt-3 text-lg">
                Tell Kenz you&apos;re coming, or tell her you tried. Replies stay in a file on the
                computer hosting this invite. No email, no account, no surprise newsletter.
              </p>
              <p className="mt-3 text-lg">
                Grown-ups: if you need a reminder before Saturday, ask the person who sent you here.
                The rink does not read this form.
              </p>
            </div>
            <div className="reveal">
              <RsvpForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink px-4 py-10 text-cream sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-2xl font-bold">Kenz is 7. The floor is shiny.</p>
            <p className="mt-1 max-w-md text-cream/80">Falls are part of the choreography.</p>
          </div>
          <AddressLink className="text-sun decoration-sun hover:text-white" />
        </div>
      </footer>
    </>
  );
}
