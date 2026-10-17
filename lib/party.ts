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
    body: "Skate check-in. Laces are a group project.",
  },
  {
    time: "1:20",
    title: "Warm-up laps",
    body: "Holding the rail is a respected sport. Falling counts as choreography.",
  },
  {
    time: "1:45",
    title: "Cake and candles",
    body: "One song loud enough to reach the bay, then frosting.",
  },
  {
    time: "2:15",
    title: "Free skate",
    body: "The floor is open. Falling still counts as choreography.",
  },
  {
    time: "2:45",
    title: "Last song",
    body: "One more lap, then hugs by the cubbies.",
  },
] as const;
