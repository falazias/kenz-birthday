export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ringer%27s%20Roller%20Rink%2C%20821%20West%20Harbor%20Drive%2C%20San%20Diego%2C%20CA%2092101";

export const VENUE = "Ringer's Roller Rink";
export const AREA = "Seaport Village, San Diego";
export const STREET = "821 West Harbor Drive, San Diego, CA 92101";

export const when = {
  date: "Saturday, November 21, 2026",
  hours: "1:00–3:00 pm",
  zone: "Pacific time",
} as const;

export const plan = [
  {
    time: "1:00",
    title: "Lace-up",
    body: "Skate check-in. Laces are a group project, and Fern will supervise whether you asked or not.",
  },
  {
    time: "1:20",
    title: "Warm-up laps",
    body: "Holding the rail is a respected sport. Falling counts as choreography.",
  },
  {
    time: "1:45",
    title: "Cake and candles",
    body: "One song loud enough to reach the bay, then frosting. Button has already chosen a corner slice.",
  },
  {
    time: "2:15",
    title: "Free skate",
    body: "Fern will try to race you. Let her win exactly once. She will still bring it up.",
  },
  {
    time: "2:45",
    title: "Last song",
    body: "One more lap, then hugs by the cubbies. Miso exits backwards. Obviously.",
  },
] as const;

export const crew = [
  {
    id: "fern",
    name: "Fern",
    role: "Fluffy brown fox",
    image: "fern",
    wash: "bg-sun",
    shadow: "shadow-[5px_5px_0_#e23b2c]",
    bio: "Self-appointed lap captain. She will hold your hand for one song, then challenge you to a race and pretend that was the plan.",
  },
  {
    id: "miso",
    name: "Miso",
    role: "Small pink cat",
    image: "miso",
    wash: "bg-mango/25",
    shadow: "shadow-[5px_5px_0_#ffc83a]",
    bio: "Skates backwards on purpose. The bow tie is not a costume. It is policy, and it does not come off for cake.",
  },
  {
    id: "button",
    name: "Button",
    role: "Yellow mouse, red cheeks",
    image: "button",
    wash: "bg-rink/15",
    shadow: "shadow-[5px_5px_0_#ff7a1a]",
    bio: "Treats the wall as a dance partner. The cheeks get redder when the floor looks slippery. That is a feature.",
  },
] as const;
