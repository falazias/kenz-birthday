import { confirmationMessage, validateRsvp } from "@/lib/rsvp";
import { appendRsvp } from "@/lib/rsvp-store";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        error: "That note arrived crumpled. Try sending it again.",
        field: "name",
      },
      { status: 400 },
    );
  }

  const parsed = validateRsvp(body);
  if (!parsed.ok) {
    return Response.json(
      { error: parsed.error, field: parsed.field },
      { status: 400 },
    );
  }

  try {
    await appendRsvp(parsed.value);
  } catch {
    return Response.json(
      {
        error:
          "The clipboard slipped under the rink. Nothing was saved. Give it another push.",
      },
      { status: 500 },
    );
  }

  return Response.json({
    ok: true,
    message: confirmationMessage(parsed.value),
    attending: parsed.value.attending,
    name: parsed.value.name,
  });
}
