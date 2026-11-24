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
    street: "423 S. Washington Ave",
    city: "Royal Oak",
    region: "MI",
    zip: "48067",
  },
  photo: "/headshot.jpg",
  tagline: "Home is waiting.",
};

// The branding video (horizontal, 16:9). Paste the YouTube video ID (the part
// after "v=" or "youtu.be/") once it's uploaded; unlisted is fine. Then the hero
// shows a "Watch my story" button that plays it full screen. While it's empty,
// the hero shows the "Or text" link instead.
export const heroVideo = {
  youtubeId: "",
  title: "Meet Scott Scharl",
};

// The form posts straight to lead-grabber (leads.scharl.dev), which saves the lead
// and alerts Scott. Set PUBLIC_LEADS_URL=http://localhost:3000 to test against a local copy.
export const leadsEndpoint = `${import.meta.env.PUBLIC_LEADS_URL ?? "https://leads.scharl.dev"}/api/leads/website`;

// The one main (red) call to action: jumps to the form on the home page.
export const contactCta = {
  href: "/#contact",
  label: "Contact Scott",
};

export type Review = { quote: string; name: string; source?: string };

// Client quotes. The "What clients say" section shows these (or placeholders on the dev
// server while this is empty). Shown with name and source only (no dates or locations).
export const reviews: Review[] = [
  {
    quote:
      "Scott responded very quickly to all my property showing requests. He listened to what I was looking for in a house and worked with me to help me find properties that were within my budget and had the things that were most important to me. Scott is personable, knowledgeable, and has made this whole process much easier. I know he has my best interests in mind.",
    name: "Lauren C.",
  },
  {
    quote:
      "Scott listened to our concerns well. Scott followed up on all questions we had not only timely but in detail. He was extremely punctual, professional and offered any help he could to assist us. He showed us the property with interest to our needs with a great level of patience.",
    name: "Amit L.",
  },
  {
    quote:
      "Scott's awesome and personable. He really works hard to find something that works for you. He's understanding of your circumstances and never fails to follow up. Definitely would recommend him.",
    name: "Dshawn C.",
  },
];
