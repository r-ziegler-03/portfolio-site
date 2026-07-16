import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-accent/20 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-mono text-sm tracking-widest text-accent"
        >
          R.ZIEGLER
        </Link>
        <ul className="flex gap-6 font-mono text-xs tracking-wide text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
