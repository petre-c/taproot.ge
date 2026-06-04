export type Treat = {
  id: string;
  name: string;
  blurb: string;        // short warm description
  image?: string;       // optional asset path
};

// Hospitality, not a store: no prices, no checkout.
export const treats: Treat[] = [
  { id: "espresso", name: "Espresso", blurb: "Small, strong, and on the house while we talk blocks." },
  { id: "filter", name: "Filter coffee", blurb: "Slow-brewed for the long conversations." },
  { id: "cookies", name: "Fresh cookies", blurb: "Baked for the meetup. They go fast." },
];
