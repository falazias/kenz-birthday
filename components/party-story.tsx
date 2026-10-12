import { AddressLink, MapsButton } from "@/components/address-link";
import { Creature } from "@/components/creature";
import { TiltCard } from "@/components/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AREA, crew, plan, VENUE, when } from "@/lib/party";
import { cn } from "cn";

export function PartyStory() {
  return (
    <>
      <section id="details" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                The facts, no small print
              </h2>
              <p className="mt-2 max-w-xl text-lg">
                Write this on the fridge. The fox already did, in frosting.
              </p>
            </div>
            <div className="peek-bob w-24 shrink-0 md:hidden">
              <Creature name="fernPeek" alt="" className="w-full" />
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:mt-24 md:grid-cols-3">
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

            <div className="reveal group relative" style={{ animationRange: "entry 8% entry 42%" }}>
              <div className="pointer-events-none absolute -top-20 left-4 hidden w-36 md:block">
                <div className="peek-bob">
                  <div className="transition-transform duration-200 group-hover:-translate-y-3 group-hover:scale-105">
                    <Creature name="fernPeek" alt="" className="w-full" />
                  </div>
                </div>
              </div>
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
                    <p>
                      Shaded outdoor rink, water on one side, birthday noise on the other.
                    </p>
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
                      can ask for a skate mate. Button promises not to comment.
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      <section id="crew" className="scroll-mt-28 bg-mango/15 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-2xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Meet the floor committee
            </h2>
            <p className="mt-2 text-lg">
              Three regulars got here early and will not be moved. Hover them. They notice.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {crew.map((member, index) => (
              <div key={member.id} className="reveal" style={{ animationRange: `entry ${index * 6}% entry ${36 + index * 6}%` }}>
                <TiltCard>
                  <Card className={cn("h-full bg-card", member.shadow)}>
                    <CardContent className="flex h-full flex-col gap-3">
                      <div className={cn("flex h-56 items-end justify-center overflow-hidden rounded-3xl", member.wash)}>
                        <div className="skater-bob" style={{ animationDelay: `${index * 0.15}s` }}>
                          <div className="transition-transform duration-200 hover:-translate-y-2 hover:scale-110 hover:-rotate-6">
                            <Creature
                              name={member.image}
                              className="h-52 w-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="font-heading text-sm font-bold tracking-wide text-rink uppercase">
                        {member.role}
                      </p>
                      <h3 className="font-heading text-3xl font-bold">{member.name}</h3>
                      <p>{member.bio}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_16rem]">
          <div>
            <div className="reveal">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                The afternoon, loosely
              </h2>
              <p className="mt-2 max-w-xl text-lg">
                A plan the floor is allowed to edit. Cake stays where it is.
              </p>
            </div>
            <ol className="mt-8 space-y-5 border-l-4 border-rink pl-6">
              {plan.map((item) => (
                <li key={item.time} className="reveal relative">
                  <span className="absolute top-1 -left-[1.95rem] size-4 rounded-full border-4 border-sun bg-rink" />
                  <p className="font-heading text-lg font-bold text-rink">{item.time}</p>
                  <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                  <p className="mt-1 max-w-xl">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal mx-auto w-52 text-center">
            <div className="float-bob">
              <button
                type="button"
                className="party-press border-0 bg-transparent p-0"
                aria-label="Miso bouncing on skates"
              >
                <span className="block transition-transform duration-200 hover:scale-110 hover:rotate-6">
                  <Creature name="misoBounce" className="w-full" />
                </span>
              </button>
            </div>
            <p className="mt-2 font-heading text-lg">Miso is early. Miso is airborne.</p>
          </div>
        </div>
      </section>
    </>
  );
}
