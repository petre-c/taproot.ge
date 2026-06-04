export type Treat = {
  id: string;
  name: string;
  blurb: string;        // short warm description
  image?: string;       // optional asset path
};

// Available to buy at the meetup (pay at the counter). No online checkout / no prices listed here.
export const treats: Treat[] = [
  { id: "espresso", name: "Espresso", blurb: "Small, strong, and made to keep up with the conversation." },
  { id: "filter", name: "Filter coffee", blurb: "Slow-brewed for the long conversations." },
  { id: "cookies", name: "Fresh cookies", blurb: "Baked for the meetup. They go fast." },
];
