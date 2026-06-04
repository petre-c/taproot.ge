// Brand glyph for taproot.ge — a sprout with a taproot: two leaves up top and a
// main root tapering downward with lateral roots. Evokes both a taproot (the
// plant's primary downward root) and Bitcoin's Taproot upgrade. No ₿.
// Inherits color via `currentColor`, so set it with a text-* class.
export function RootMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      {/* two sprout leaves */}
      <path d="M12 7c0-1.8-1.3-3.4-3.2-4-.3 2 .7 3.5 3.2 4Z" />
      <path d="M12 7c0-1.8 1.3-3.4 3.2-4 .3 2-.7 3.5-3.2 4Z" />
      {/* main taproot */}
      <path d="M12 7v13" />
      {/* lateral roots */}
      <path d="M12 11c-1.7.6-2.7 1.9-3.1 3.7" />
      <path d="M12 14.5c1.7.6 2.7 1.9 3.1 3.7" />
    </svg>
  );
}
