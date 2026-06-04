import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events, type Event } from "@/data/events";
import { partitionEvents, formatEventDate } from "@/lib/events";
import { site } from "@/data/site";

function EventCard({ ev, past }: { ev: Event; past?: boolean }) {
  return (
    <Card className={past ? "opacity-70" : undefined}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-xl">{ev.title}</CardTitle>
          {!past && <Badge>Upcoming</Badge>}
        </div>
        <p className="text-sm text-secondary">{formatEventDate(ev.date)} · {ev.venue}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{ev.description}</p>
        {ev.link && !past && (
          <Button asChild variant="secondary" size="sm">
            <a href={ev.link} target="_blank" rel="noreferrer">RSVP / details</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function Meetups() {
  const { upcoming, past } = partitionEvents(events, new Date());

  return (
    <section id="meetups" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Meetups</h2>

      <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Upcoming
      </h3>
      {upcoming.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {upcoming.map((ev) => <EventCard key={ev.id} ev={ev} />)}
        </div>
      ) : (
        <p className="mt-4 text-muted-foreground">
          The next one is being planned.{" "}
          <a href={site.telegram} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            Join Telegram
          </a>{" "}
          to hear first.
        </p>
      )}

      {past.length > 0 && (
        <>
          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Past
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {past.map((ev) => <EventCard key={ev.id} ev={ev} past />)}
          </div>
        </>
      )}
    </section>
  );
}
