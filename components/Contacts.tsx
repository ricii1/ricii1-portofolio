import Reveal from "@/components/Reveal";

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/junathan-richie",
    href: "https://www.linkedin.com/in/junathan-richie",
  },
  {
    label: "Email",
    value: "jonathanrichie05@gmail.com",
    href: "mailto:jonathanrichie05@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/ricii1",
    href: "https://github.com/ricii1",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="mx-auto max-w-5xl px-6 pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Contacts</h2>
      <div className="border-t border-panel">
        {contacts.map((contact, i) => (
          <Reveal key={contact.label} delay={i * 0.08}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-panel py-5 transition-all duration-300 hover:translate-x-1 hover:text-signal"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted">
                {contact.label}
              </span>
              <span className="text-sm">{contact.value}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
