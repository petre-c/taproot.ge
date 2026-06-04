import { RootMark } from "@/components/RootMark";

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
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <RootMark className="size-5 text-primary" />
          taproot<span className="text-muted-foreground">.ge</span>
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
