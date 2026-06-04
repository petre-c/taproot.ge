import type { Event } from "@/data/events";

// Parse an ISO date string (YYYY-MM-DD) into a UTC Date at midnight.
const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

// Split events into upcoming (date >= reference day) and past (date < reference day).
// Upcoming is sorted soonest-first; past is sorted most-recent-first.
export function partitionEvents(events: readonly Event[], now: Date) {
  const day = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const upcoming = events
    .filter((e) => toDate(e.date) >= day)
    .sort((a, b) => toDate(a.date).getTime() - toDate(b.date).getTime());
  const past = events
    .filter((e) => toDate(e.date) < day)
    .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime());
  return { upcoming, past };
}

// "2026-06-20" -> "Sat, Jun 20, 2026"
export function formatEventDate(iso: string) {
  return toDate(iso).toLocaleDateString("en-US", {
    weekday: "short", year: "numeric", month: "short", day: "numeric", timeZone: "UTC",
  });
}
