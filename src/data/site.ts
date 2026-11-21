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

// The branding video in the hero (horizontal, 16:9). Paste the YouTube video ID
// (the part after "v=" or "youtu.be/") once it's uploaded; unlisted is fine.
// While it's empty, the hero shows the neighborhood park photo instead.
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
