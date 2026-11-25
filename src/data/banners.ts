// Temporary announcement banners shown across the top of every page.
//
// To add one, push an entry onto `banners` below. To remove one, delete it (or
// just let it expire: it disappears on its own, even on pages built earlier,
// because the browser checks the date).
//
//   id       unique, used for the element id
//   title    bold lead-in
//   text     optional second line
//   linkText optional red call to action at the end
//   href     where the whole banner links (optional; without it, it's plain text)
//   from     optional ISO time to start showing (omit to show right away)
//   until    ISO time it stops showing. Use Detroit's offset:
//            -05:00 in winter (EST), -04:00 in summer (EDT).
//            "2026-12-07T00:00:00-05:00" means "through the end of Dec 6".
export type Banner = {
  id: string;
  title: string;
  text?: string;
  linkText?: string;
  href?: string;
  from?: string;
  until: string;
};

export const banners: Banner[] = [
  {
    id: "santa-2026",
    title: "🎅 Photos & Cookies with Santa · Sun, Dec 6",
    text: "Royal Oak. Come say hi!",
    linkText: "Details & RSVP →",
    href: "https://go.scharl.dev/santa?utm_source=website",
    until: "2026-12-07T00:00:00-05:00",
  },
];
