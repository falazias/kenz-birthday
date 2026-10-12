"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { usePrefersReducedMotion } from "@/components/use-reduced-motion";
import { type RsvpField, validateRsvp } from "@/lib/rsvp";
import { cn } from "cn";

type Status = "idle" | "loading" | "success" | "error";

const confetti = [
  { left: "8%", delay: "0s", color: "bg-rink", round: false },
  { left: "18%", delay: "0.08s", color: "bg-sun", round: true },
  { left: "30%", delay: "0.16s", color: "bg-mango", round: false },
  { left: "42%", delay: "0.04s", color: "bg-rink", round: true },
  { left: "55%", delay: "0.2s", color: "bg-sun", round: false },
  { left: "66%", delay: "0.12s", color: "bg-mango", round: true },
  { left: "76%", delay: "0.22s", color: "bg-rink", round: false },
  { left: "88%", delay: "0.06s", color: "bg-sun", round: true },
];

export function RsvpForm() {
  const reduced = usePrefersReducedMotion();
  const [name, setName] = useState("");
  const [coming, setComing] = useState<"yes" | "no">("yes");
  const [partySize, setPartySize] = useState("1");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [field, setField] = useState<RsvpField | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  function resetError() {
    if (status === "error") {
      setStatus("idle");
      setMessage(null);
      setField(null);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      name,
      attending: coming === "yes",
      partySize: coming === "yes" ? Number(partySize) : 0,
      note,
    };
    const parsed = validateRsvp(payload);
    if (!parsed.ok) {
      setStatus("error");
      setMessage(parsed.error);
      setField(parsed.field);
      if (parsed.field === "name") {
        document.getElementById("guest-name")?.focus();
      }
      if (parsed.field === "partySize") {
        document.getElementById("party-size")?.focus();
      }
      return;
    }

    setStatus("loading");
    setMessage(null);
    setField(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.value),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string; field?: RsvpField }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setMessage(
          data?.error ??
            "The clipboard slipped under the rink. Nothing was saved. Give it another push.",
        );
        setField(data?.field ?? null);
        return;
      }

      setSaved(data.message ?? "You're on the list.");
      setStatus("success");
    } catch {
      setStatus("error");
      setField(null);
      setMessage(
        "The clipboard slipped under the rink. Nothing was saved. Give it another push.",
      );
    }
  }

  function addAnother() {
    setStatus("idle");
    setSaved(null);
    setMessage(null);
    setField(null);
    setName("");
    setNote("");
    document.getElementById("guest-name")?.focus();
  }

  return (
    <Card className="relative bg-card shadow-[6px_6px_0_#e23b2c]">
      {status === "success" && saved ? (
        <CardContent className="relative flex flex-col gap-4 py-2">
          {!reduced && (
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 overflow-hidden">
              {confetti.map((bit) => (
                <span
                  key={bit.left}
                  className={cn("confetti", bit.color, bit.round && "rounded-full")}
                  style={{ left: bit.left, animationDelay: bit.delay }}
                />
              ))}
            </div>
          )}
          <p className="font-heading text-sm font-bold tracking-wide text-rink uppercase">
            Saved on this computer
          </p>
          <h3 className="font-heading text-3xl font-bold">The list heard you.</h3>
          <p role="status" data-testid="rsvp-success" className="text-lg">
            {saved}
          </p>
          <Button
            type="button"
            variant="secondary"
            className="party-press h-11 w-full rounded-full font-heading sm:w-auto"
            onClick={addAnother}
          >
            Add another guest
          </Button>
        </CardContent>
      ) : (
        <CardContent>
          <form
            id="rsvp-form"
            data-testid="rsvp-form"
            onSubmit={onSubmit}
            aria-busy={status === "loading"}
            className="flex flex-col gap-4"
            noValidate
          >
            {status === "idle" && name.trim().length === 0 ? (
              <p className="rounded-2xl border-2 border-dashed border-mango bg-sun/50 px-3 py-3 text-sm font-semibold">
                No reply from this browser yet. The cheer section stays empty until a name lands
                here.
              </p>
            ) : null}

            {status === "loading" ? (
              <p role="status" className="font-heading font-bold text-rink">
                Hold the rail. Saving your spot…
              </p>
            ) : null}

            {status === "error" && message ? (
              <p
                id="rsvp-error"
                role="alert"
                data-testid="rsvp-error"
                className="rounded-2xl bg-rink/10 px-3 py-3 text-sm font-bold text-rink"
              >
                {message}
              </p>
            ) : null}

            <div className="flex flex-col gap-2">
              <Label htmlFor="guest-name">Your name</Label>
              <Input
                id="guest-name"
                name="name"
                autoComplete="name"
                value={name}
                maxLength={80}
                disabled={status === "loading"}
                aria-invalid={field === "name"}
                aria-describedby={status === "error" ? "rsvp-error" : undefined}
                placeholder="The name we should yell"
                className="h-11 rounded-xl bg-white px-3 text-base md:text-base"
                onChange={(event) => {
                  setName(event.target.value);
                  resetError();
                }}
              />
            </div>

            <fieldset className="flex flex-col gap-2" disabled={status === "loading"}>
              <legend className="mb-1 text-sm font-medium">Can you come?</legend>
              <RadioGroup
                value={coming}
                onValueChange={(value) => {
                  setComing(value as "yes" | "no");
                  resetError();
                }}
                className="grid gap-2 sm:grid-cols-2"
                aria-label="Can you come?"
              >
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-2xl border-2 bg-white p-3",
                    coming === "yes" ? "border-rink bg-sun/60" : "border-border",
                  )}
                >
                  <RadioGroupItem value="yes" className="mt-1" />
                  <span>
                    <span className="block font-heading text-base font-bold">I&apos;ll be there</span>
                    <span className="block text-sm text-muted-foreground">Skates on. Save me a lane.</span>
                  </span>
                </label>
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-2xl border-2 bg-white p-3",
                    coming === "no" ? "border-rink bg-sun/60" : "border-border",
                  )}
                >
                  <RadioGroupItem value="no" className="mt-1" />
                  <span>
                    <span className="block font-heading text-base font-bold">Can&apos;t make it</span>
                    <span className="block text-sm text-muted-foreground">I&apos;ll cheer from afar.</span>
                  </span>
                </label>
              </RadioGroup>
            </fieldset>

            {coming === "yes" ? (
              <div className="flex flex-col gap-2">
                <Label htmlFor="party-size">How many people, counting you?</Label>
                <Input
                  id="party-size"
                  name="partySize"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={20}
                  value={partySize}
                  disabled={status === "loading"}
                  aria-invalid={field === "partySize"}
                  className="h-11 max-w-32 rounded-xl bg-white px-3 text-base md:text-base"
                  onChange={(event) => {
                    setPartySize(event.target.value);
                    resetError();
                  }}
                />
              </div>
            ) : (
              <p className="text-sm font-semibold">
                No headcount needed. Kenz still wants your name on the card.
              </p>
            )}

            <div className="flex flex-col gap-2">
              <Label htmlFor="note">Note, if you have one</Label>
              <Textarea
                id="note"
                name="note"
                value={note}
                maxLength={500}
                disabled={status === "loading"}
                placeholder="Allergies, tiny siblings, or a warning that Fern will be raced."
                className="min-h-24 rounded-xl bg-white px-3 text-base md:text-base"
                onChange={(event) => {
                  setNote(event.target.value);
                  resetError();
                }}
              />
            </div>

            <Button
              type="submit"
              data-testid="rsvp-submit"
              disabled={status === "loading"}
              className="party-press h-12 rounded-full px-6 text-base font-heading"
            >
              {status === "loading" ? "Rolling that in…" : status === "error" ? "Try again" : "Send my RSVP"}
            </Button>
          </form>
        </CardContent>
      )}
    </Card>
  );
}
