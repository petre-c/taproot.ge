import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { treats } from "@/data/menu";

export function Coffee() {
  return (
    <section id="coffee" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Coffee &amp; cookies</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Showing up is the only thing we ask. The coffee&apos;s hot, the cookies are fresh, and
        they&apos;re on the house — our way of keeping the conversation going.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {treats.map((t) => (
          <Card key={t.id}>
            <CardHeader>
              <CardTitle className="text-xl">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.blurb}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
