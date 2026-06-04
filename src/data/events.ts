export type Event = {
  id: string;
  title: string;        // topic of the meetup
  date: string;         // ISO date, e.g. "2026-06-20"
  venue: string;
  description: string;
  link?: string;        // RSVP / Telegram thread
};

// Edit this list to manage meetups. Upcoming vs. past is derived from `date`.
export const events: Event[] = [
  {
    id: "2026-06-20",
    title: "What is Taproot, really?",
    date: "2026-06-20",
    venue: "Fabrika, Tbilisi",
    description:
      "An evening on Bitcoin's Taproot upgrade — Schnorr signatures, privacy, and why it matters. Beginners welcome.",
    link: "https://t.me/taproot_ge",
  },
  {
    id: "2026-05-16",
    title: "Running your own node",
    date: "2026-05-16",
    venue: "Fabrika, Tbilisi",
    description:
      "Hands-on: spinning up a Bitcoin full node and connecting a Lightning wallet. Bring a laptop.",
  },
];
