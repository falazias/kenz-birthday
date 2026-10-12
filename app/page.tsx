import { AddressLink } from "@/components/address-link";
import { Hero } from "@/components/hero";
import { LapLine } from "@/components/lap-line";
import { PartyStory } from "@/components/party-story";
import { RsvpForm } from "@/components/rsvp-form";
import { SiteHeader } from "@/components/site-header";
import { Creature } from "@/components/creature";

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
        <LapLine />
        <PartyStory />
        <section id="rsvp" className="scroll-mt-28 relative bg-sun/45 px-4 py-16 sm:px-6 sm:py-24">
          <button
            type="button"
            className="party-press absolute top-16 left-0 hidden border-0 bg-transparent p-0 lg:block"
            aria-label="Button the mouse peeking in from the side"
          >
            <span className="peek-bob block w-40">
              <span className="block transition-transform duration-200 hover:scale-105 hover:-rotate-3">
                <Creature name="buttonPeek" alt="" className="w-full" />
              </span>
            </span>
          </button>
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:pl-24">
            <div className="reveal">
              <div className="mb-4 flex items-end gap-3 lg:hidden">
                <div className="skater-bob w-28">
                  <Creature name="button" alt="" className="w-full" />
                </div>
                <p className="font-heading text-lg">Button is checking the list.</p>
              </div>
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
            <p className="mt-1 max-w-md text-cream/80">
              Fern, Miso, and Button are already lapping the welcome mat. Falls are part of the
              choreography.
            </p>
          </div>
          <AddressLink className="text-sun decoration-sun hover:text-white" />
        </div>
      </footer>
    </>
  );
}
