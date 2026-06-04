import { describe, it, expect } from "vitest";
import { partitionEvents, formatEventDate } from "@/lib/events";
import type { Event } from "@/data/events";

const make = (id: string, date: string): Event => ({
  id, title: id, date, venue: "v", description: "d",
});

describe("partitionEvents", () => {
  const today = new Date("2026-06-10T00:00:00Z");

  it("splits upcoming (>= today) from past (< today)", () => {
    const evs = [make("a", "2026-06-20"), make("b", "2026-05-01"), make("c", "2026-06-10")];
    const { upcoming, past } = partitionEvents(evs, today);
    expect(upcoming.map((e) => e.id)).toEqual(["c", "a"]); // soonest first, today counts as upcoming
    expect(past.map((e) => e.id)).toEqual(["b"]);
  });

  it("sorts past most-recent-first", () => {
    const evs = [make("old", "2026-01-01"), make("recent", "2026-05-01")];
    const { past } = partitionEvents(evs, today);
    expect(past.map((e) => e.id)).toEqual(["recent", "old"]);
  });

  it("handles no upcoming events", () => {
    const evs = [make("p", "2026-01-01")];
    const { upcoming } = partitionEvents(evs, today);
    expect(upcoming).toEqual([]);
  });
});

describe("formatEventDate", () => {
  it("formats an ISO date as a readable string", () => {
    expect(formatEventDate("2026-06-20")).toBe("Sat, Jun 20, 2026");
  });
});
