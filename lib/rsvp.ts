export type RsvpInput = {
  name: string;
  attending: boolean;
  partySize: number;
  note: string;
};

export type RsvpRecord = RsvpInput & {
  id: string;
  createdAt: string;
};

export type RsvpField = "name" | "attending" | "partySize" | "note";

export type ValidationResult =
  | { ok: true; value: RsvpInput }
  | { ok: false; error: string; field: RsvpField };

const NAME_MAX = 80;
const NOTE_MAX = 500;
const PARTY_MAX = 20;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").replace(/\s+/g, " ").trim();
}

export function validateRsvp(body: unknown): ValidationResult {
  if (!isRecord(body)) {
    return {
      ok: false,
      field: "name",
      error: "That note arrived crumpled. Try sending it again.",
    };
  }

  if (typeof body.name !== "string" || cleanText(body.name).length === 0) {
    return {
      ok: false,
      field: "name",
      error: "We need a name so the skate counter knows who to cheer for.",
    };
  }

  const name = cleanText(body.name);
  if (name.length > NAME_MAX) {
    return {
      ok: false,
      field: "name",
      error: "That name is a whole lap too long. Keep it under 80 characters.",
    };
  }

  if (typeof body.attending !== "boolean") {
    return {
      ok: false,
      field: "attending",
      error: "Tell us if you're coming or cheering from the couch.",
    };
  }

  const note = typeof body.note === "string" ? cleanText(body.note) : "";
  if (note.length > NOTE_MAX) {
    return {
      ok: false,
      field: "note",
      error: "That note is a novel. Keep it under 500 characters so it fits in the cubby.",
    };
  }

  if (!body.attending) {
    return { ok: true, value: { name, attending: false, partySize: 0, note } };
  }

  const partySize = body.partySize;
  if (typeof partySize !== "number" || !Number.isInteger(partySize)) {
    return {
      ok: false,
      field: "partySize",
      error: "How many people should we count? A whole number is perfect.",
    };
  }

  if (partySize < 1) {
    return {
      ok: false,
      field: "partySize",
      error: "How many skates should we cheer for? One is a perfectly good answer.",
    };
  }

  if (partySize > PARTY_MAX) {
    return {
      ok: false,
      field: "partySize",
      error: "That's a whole rink. Keep this reply to 20 people.",
    };
  }

  return { ok: true, value: { name, attending: true, partySize, note } };
}

export function confirmationMessage(rsvp: RsvpInput) {
  if (!rsvp.attending) {
    return `We'll miss your skates, ${rsvp.name}. Kenz will hear you cheered from the sidelines, which still counts as a lap in this house.`;
  }

  const count =
    rsvp.partySize === 1 ? "One skate is on the list" : `${rsvp.partySize} people are on the list`;

  return `You're on the floor, ${rsvp.name}. ${count}. A lane is saved.`;
}
