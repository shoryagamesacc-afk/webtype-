export const plans = [
  {
    id: "base",
    name: "BASE PLAN",
    price: "₹20,000",
    tagline: "Get Your Business Online.",
    features: [
      "Professional business website",
      "Website setup",
      "Free domain for 1 year",
      "Professional online presence"
    ],
    cta: "GET STARTED →",
    href: "/signup?plan=base",
    highlight: false,
  },
  {
    id: "standard",
    name: "STANDARD PLAN",
    price: "₹30,000",
    tagline: "Build + Protect + Promote.",
    features: [
      "Professional website",
      "1-year domain",
      "Website setup",
      "Domain Guard — 1 year",
      "E-Marketing — 1 month free"
    ],
    cta: "CHOOSE STANDARD →",
    href: "/signup?plan=standard",
    highlight: false,
  },
  {
    id: "master",
    name: "MASTER PLAN ⭐",
    price: "₹40,000",
    tagline: "Complete digital setup.",
    features: [
      "Everything in Standard",
      "AI Receptionist — 1 month",
      "Business dashboard",
      "Payment gateway integration",
      "Reservation / booking features",
      "Workshop / session",
      "Advanced business functionality",
      "Future expansion options"
    ],
    cta: "CHOOSE MASTER →",
    href: "/signup?plan=master",
    highlight: true,
  },
  {
    id: "custom",
    name: "CUSTOM PLAN",
    price: "Starting from ₹20,000",
    tagline: "Tailored around your business needs.",
    features: [
      "Everything in Master",
      "Custom UI/UX Design",
      "Advanced Automations",
      "Dedicated Project Manager"
    ],
    cta: "GET A CUSTOM QUOTE →",
    href: "/signup?plan=custom",
    highlight: false,
  },
  {
    id: "not-sure",
    name: "Not sure — Help me choose",
    price: "",
    tagline: "Let's figure it out together.",
    features: [],
    cta: "HELP ME CHOOSE →",
    href: "/signup?plan=not-sure",
    highlight: false,
  }
];

export const getPlanById = (id: string) => {
  return plans.find(plan => plan.id === id) || plans[0];
};

export const CONTACT_EMAIL = "webtype28@gmail.com";
export const CONTACT_PHONE = "+91 95883 34026";
export const WHATSAPP_LINK = "https://wa.me/919588334026";
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdi49nTu2ioh92VXOm7gQY_WMa-7qCRvypdKWM-b9dLyvZRsw/viewform";
