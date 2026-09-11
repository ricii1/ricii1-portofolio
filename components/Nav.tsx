const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-panel bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm tracking-tight text-muted">
          JR<span className="text-signal">.</span>
        </span>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-foreground transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
