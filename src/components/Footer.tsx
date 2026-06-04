import { site } from "@/data/site";
import { RootMark } from "@/components/RootMark";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
      <p className="flex items-center justify-center gap-2">
        <RootMark className="size-4 text-secondary" />
        {site.name} — Bitcoin only. {site.city}.
      </p>
      <p className="mt-1">No altcoins. No noise. Just Bitcoin and good coffee.</p>
    </footer>
  );
}
