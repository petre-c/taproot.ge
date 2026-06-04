import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#meetups", label: "Meetups" },
  { href: "#coffee", label: "Coffee" },
  { href: "#join", label: "Join" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          <span className="text-primary">₿</span> {site.name}
        </a>
        <ul className="flex gap-5 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
