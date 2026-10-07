export const agent = {
  name: "Scott Scharl",
  title: "REALTOR®",
  brokerage: "Keller Williams Metro",
  license: "471094",
  phone: "+12482643599",
  phoneDisplay: "(248) 264-3599",
  sms: "sms:+12482643599",
  email: "hello@scottscharl.com",
  facebook: "https://facebook.com/scottscharlrealtor",
  office: {
    street: "423 South Washington Ave",
    city: "Royal Oak",
    region: "MI",
    zip: "48067",
  },
  photo: "/profile.png",
  tagline: "Home is waiting.",
};

// Services (src/pages/_services.astro) and Market Report are hidden from the menu for now.
export const nav = [
  { href: "/", label: "Home" },
  { href: "/my-story", label: "My Story" },
];

// Both forms post straight to lead-grabber (leads.scharl.dev), which saves the lead
// and alerts Scott. Set PUBLIC_LEADS_URL=http://localhost:3000 to test against a local copy.
export const leadsEndpoint = `${import.meta.env.PUBLIC_LEADS_URL ?? "https://leads.scharl.dev"}/api/leads/website`;

// The one main (red) call to action, used everywhere.
export const contactCta = {
  href: "/contact",
  label: "Contact Scott",
};

// The seller offer: a secondary link, not a red button.
export const priceCta = {
  href: "/what-would-a-buyer-pay",
  label: "Selling? See what buyers would pay",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  /** Where the "Who I help" box links. */
  href: string;
  linkLabel: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "sellers",
    title: "Sellers",
    icon: "yard-sign",
    href: "/what-would-a-buyer-pay",
    linkLabel: "See what buyers would pay",
    short: "A realistic price and strong negotiation.",
    points: [
      "A free, honest look at what buyers would pay, with no obligation to list",
      "Prep advice focused on what buyers in your area value",
      "Professional marketing through Keller Williams and the MLS",
    ],
  },
  {
    slug: "buyers",
    title: "Buyers",
    icon: "home",
    href: "/contact?topic=Buying",
    linkLabel: "A place that's yours to keep",
    short: "Honest guidance and strong negotiation.",
    points: [
      "A plan built around your budget, timeline and must-haves",
      "My honest take on pricing for every home you tour",
      "Offer strategy, negotiation and support through closing",
    ],
  },
  {
    slug: "renters",
    title: "Renters",
    icon: "key",
    href: "/contact?topic=Renting",
    linkLabel: "Love where you live",
    short: "Move into an area you love!",
    points: [
      "Rentals matched to your budget, location and move-in date",
      "Each property's application requirements, explained",
    ],
  },
  {
    slug: "investors",
    title: "Investors",
    icon: "trend",
    href: "/contact?topic=Investing",
    linkLabel: "Get off-market properties",
    short: "Off-market deals that fit your buy box.",
    points: [
      "Rent comparables and local rental demand",
      "Single-family and small multi-family opportunities",
    ],
  },
];

export type Review = { quote: string; name: string; location: string };

// TODO: add your own client reviews (e.g. from Google or Zillow).
// The reviews section stays hidden until this list has entries.
export const reviews: Review[] = [];
