import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Join() {
  return (
    <section id="join" className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Join us</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Come as you are, ask anything, leave knowing more about Bitcoin than when you arrived.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a href={site.telegram} target="_blank" rel="noreferrer">Telegram</a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href={site.nostr} target="_blank" rel="noreferrer">Nostr</a>
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{site.city}</p>
    </section>
  );
}
