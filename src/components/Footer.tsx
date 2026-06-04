import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
      <p>
        <span className="text-primary">₿</span> {site.name} — Bitcoin only. {site.city}.
      </p>
      <p className="mt-1">No altcoins. No noise. Just Bitcoin and good coffee.</p>
    </footer>
  );
}
