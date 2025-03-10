export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/about" },
      { title: "Vision and Mission", url: "/mission" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "SurveyNest", url: "/pricing" },
      { title: "SurveyNest Pro", url: "/pricing" },
      { title: "SurveyNest Enterprise", url: "/pricing" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "" },
      { title: "Instagram", url: "" },
      { title: "Twitter", url: "" },
      { title: "Facebook", url: "" },
    ],
  },
];
export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
    {
      title: "Event Registration",
      href: "/templates/event-registration",
      description:
        "A form that allows users to register for an event, providing their contact information and any other required details.",
    },
    {
      title: "Feedback Form",
      href: "/templates/feedback-form",
      description:
        "A form that allows users to provide feedback on a product or service.",
    },
    {
      title: "Job Application",
      href: "/templates/job-application",
      description:
        "A form that allows users to apply for a job, providing their contact information, resume, and any other required details.",
    },
    {
      title: "Newsletter Signup",
      href: "/templates/newsletter-signup",
      description:
        "A form that allows users to sign up for a newsletter, providing their contact information.",
    },
    {
      title: "Contact Form",
      href: "/templates/contact-form",
      description:
        "A form that allows users to contact a business or organization, providing their contact information and message.",
    },
    {
      title: "Blank Form",
      href: "/templates/blank-form",
      description:
        "Unleash your creativity.",
    },
  ];

export const pricingPlans = [
  {
    id: "1",
    title: "Basic Plan",
    price: 0,
    billingPeriod: "/month",
    features: [
      { text: "2 active surveys", included: true },
      { text: "10 questions per survey", included: true },
      { text: "100 responses per month", included: true },
      { text: "Basic analytics", included: true },
      { text: "Export results (CSV)", included: false },
      { text: "Template customization", included: false },
      { text: "Third-party app integrations", included: false },
      { text: "Email support", included: false },
    ],
    buttonText: "Get started for free",
    href: "/signin",
  },
  {
    id: "2",
    title: "Pro Plan",
    price: 9.99,
    billingPeriod: "/month",
    features: [
      { text: "10 active surveys", included: true },
      { text: "50 questions per survey", included: true },
      { text: "1,000 responses per month", included: true },
      { text: "Export results (CSV)", included: true },
      { text: "Template customization", included: true },
      { text: "Third-party app integrations", included: true },
      { text: "Email support", included: true },
      { text: "Advanced analytics", included: false },
    ],
    buttonText: "Pay now",
    href: "/checkout/pro",
  },
  {
    id: "3",
    title: "Enterprise Plan",
    price: 49.99,
    billingPeriod: "/month",
    features: [
      { text: "Unlimited surveys", included: true },
      { text: "Unlimited questions", included: true },
      { text: "Unlimited responses", included: true },
      { text: "Export results (CSV, XLSX)", included: true },
      { text: "Advanced template customization", included: true },
      { text: "Third-party app integrations", included: true },
      { text: "Dedicated support", included: true },
      { text: "API for advanced automation", included: true },
    ],
    buttonText: "Pay now",
    href: "/checkout/enterprise",
  },
];

export const reviews = [
  {
    quote:
      "SurveyNest has been a game-changer for our business. We're now able to collect feedback from our customers in a way that's easy and efficient.",
    name: "Charles Dickens",
    title: "CEO, Company Name",
  },
  {
    quote:
      "I've tried other survey tools in the past, but SurveyNest is by far the best. The templates are easy to use, and the analytics are top-notch.",
    name: "Jane Austen",
    title: "Marketing Manager, ABC",
  },
  {
    quote:
      "SurveyNest has helped us streamline our feedback process and improve our customer satisfaction. Highly recommend!",
    name: "Edgar Allan Poe",
    title: "Customer Service Manager, XYZ",
  },
  {
    quote:
      "The customer support team at SurveyNest is fantastic. They're always quick to respond and go above and beyond to help us with any issues.",
    name: "Herman Melville",
    title: "Operations Manager, 123",
  },
];
