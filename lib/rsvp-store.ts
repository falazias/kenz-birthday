import { randomUUID } from "crypto";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";
import { type RsvpInput, type RsvpRecord } from "@/lib/rsvp";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "rsvps.json");

let chain: Promise<unknown> = Promise.resolve();

type StoreFile = { rsvps: RsvpRecord[] };

async function readStore(): Promise<StoreFile> {
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<StoreFile>;
    if (!parsed || !Array.isArray(parsed.rsvps)) {
      throw new Error("RSVP file is not a list");
    }
    return { rsvps: parsed.rsvps };
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return { rsvps: [] };
    throw error;
  }
}

async function writeOne(input: RsvpInput): Promise<RsvpRecord> {
  await mkdir(dataDir, { recursive: true });
  const store = await readStore();
  const record: RsvpRecord = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  store.rsvps.push(record);
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
  await rename(tempPath, filePath);
  return record;
}

export function appendRsvp(input: RsvpInput) {
  const run = chain.then(() => writeOne(input));
  chain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}
