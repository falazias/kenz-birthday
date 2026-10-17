import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenz is 7 · Roller rink party",
  description:
    "Kenz is turning 7. Skate with her at Ringer's Roller Rink in Seaport Village, San Diego, on Saturday, November 21, 2026, from 1:00 to 3:00 pm.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@500;600;700;800&display=swap"
          precedence="default"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
