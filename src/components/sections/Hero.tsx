import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { events } from "@/data/events";
import { partitionEvents, formatEventDate } from "@/lib/events";

export function Hero() {
  const { upcoming } = partitionEvents(events, new Date());
  const next = upcoming[0];

  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-20 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-secondary">
        Bitcoin meetups · {site.city}
      </p>
      <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
        Come talk about <span className="text-primary">Bitcoin</span>.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted-foreground">
        {site.tagline} Pure Bitcoin — no altcoins, no noise. Grab a coffee, a cookie, and pull up a chair.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a href={site.telegram} target="_blank" rel="noreferrer">Join on Telegram</a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a href="#meetups">See meetups</a>
        </Button>
      </div>
      {next && (
        <p className="mt-6 text-sm text-muted-foreground">
          Next up: <span className="text-foreground">{next.title}</span> ·{" "}
          {formatEventDate(next.date)} · {next.venue}
        </p>
      )}
    </section>
  );
}
