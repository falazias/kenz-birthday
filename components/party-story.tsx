import { AddressLink, MapsButton } from "@/components/address-link";
import { TiltCard } from "@/components/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AREA, plan, VENUE, when } from "@/lib/party";
import { cn } from "cn";

export function PartyStory() {
  return (
    <>
      <section id="details" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              The facts, no small print
            </h2>
            <p className="mt-2 max-w-xl text-lg">Write this on the fridge.</p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="reveal">
              <TiltCard>
                <Card className="h-full bg-card shadow-[5px_5px_0_#ffc83a]">
                  <CardContent className="flex h-full flex-col gap-3">
                    <p className="font-heading text-sm font-bold tracking-wide text-mango uppercase">
                      When
                    </p>
                    <h3 className="font-heading text-2xl font-bold">{when.date}</h3>
                    <p className="font-heading text-xl text-rink">
                      {when.hours}
                      <span className="mt-1 block text-base text-foreground">{when.zone}</span>
                    </p>
                    <p>
                      Two hours is a serious skating career for a seven-year-old. Arrive ready to
                      roll, not ready to sit.
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>

            <div className="reveal" style={{ animationRange: "entry 8% entry 42%" }}>
              <TiltCard>
                <Card className="relative z-10 h-full bg-card shadow-[5px_5px_0_#e23b2c]">
                  <CardContent className="flex h-full flex-col gap-3">
                    <p className="font-heading text-sm font-bold tracking-wide text-rink uppercase">
                      Where
                    </p>
                    <h3 className="font-heading text-2xl font-bold">{VENUE}</h3>
                    <p className="font-semibold">{AREA}</p>
                    <AddressLink />
                    <MapsButton
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "party-press mt-1 h-11 rounded-full px-4 font-heading",
                      )}
                    />
                    <p>Shaded outdoor rink, water on one side, birthday noise on the other.</p>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>

            <div className="reveal" style={{ animationRange: "entry 12% entry 46%" }}>
              <TiltCard>
                <Card className="h-full bg-card shadow-[5px_5px_0_#ff7a1a]">
                  <CardContent className="flex h-full flex-col gap-3">
                    <p className="font-heading text-sm font-bold tracking-wide text-mango uppercase">
                      Bring
                    </p>
                    <h3 className="font-heading text-2xl font-bold">Socks and a voice</h3>
                    <p>
                      Socks you can actually skate in, a layer for the bay breeze, and your loudest
                      indoor voice, which is now an outdoor voice.
                    </p>
                    <p>
                      The rink rents quad skates and pads if you don&apos;t own a pair. Tiny skaters
                      can ask for a skate mate.
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="scroll-mt-28 relative overflow-hidden bg-[#1b1464] px-4 py-16 text-cream sm:px-6 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[
            "top-8 left-[8%]",
            "top-16 right-[12%]",
            "top-1/3 left-[18%]",
            "bottom-16 right-[20%]",
            "bottom-10 left-[40%]",
            "top-1/2 right-[6%]",
          ].map((spot, index) => (
            <span
              key={spot}
              className={cn("twinkle absolute text-sun", spot, index % 2 ? "text-xl" : "text-sm")}
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              ★
            </span>
          ))}
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="reveal">
            <p className="font-heading text-sm font-bold tracking-wide text-sun uppercase">
              Skate · Laugh · Make magic
            </p>
            <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              The afternoon, loosely
            </h2>
            <p className="mt-2 max-w-xl text-lg text-cream/80">
              A plan the floor is allowed to edit. Cake stays where it is.
            </p>
          </div>
          <ol className="mt-8 space-y-5 border-l-4 border-sun pl-6">
            {plan.map((item) => (
              <li key={item.time} className="reveal relative">
                <span className="absolute top-1 -left-[1.95rem] size-4 rounded-full border-4 border-rink bg-sun" />
                <p className="font-heading text-lg font-bold text-sun">{item.time}</p>
                <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 max-w-xl text-cream/80">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
