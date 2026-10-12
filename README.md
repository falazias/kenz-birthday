# Kenz is 7

A birthday invitation for Kenz's roller-skating party at Ringer's Roller Rink, Seaport Village, San Diego.

Saturday, November 21, 2026, 1:00–3:00 pm. The rink's published address is [821 West Harbor Drive, San Diego, CA 92101](https://www.google.com/maps/search/?api=1&query=Ringer%27s%20Roller%20Rink%2C%20821%20West%20Harbor%20Drive%2C%20San%20Diego%2C%20CA%2092101).

## Run it locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43123](http://127.0.0.1:43123).

## RSVP

The form posts to `/api/rsvp`. The route handler appends each reply to `data/rsvps.json` on this machine. That file is gitignored, so replies stay local and are not committed. The first submission creates the file.

A public deploy that should email the host would later need a form endpoint such as Formspree.
