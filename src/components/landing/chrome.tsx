import { Facebook, Instagram, Menu, Youtube, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Recipes", href: "#recipes" },
  { label: "About Simone", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:flex lg:justify-between">
        <a href="#top" className="flex min-w-0 flex-col leading-none">
          <span className="font-script text-2xl text-primary sm:text-3xl">Meals</span>
          <span className="truncate text-[0.7rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
            By Simone
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#pricing"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Join Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-script text-3xl text-primary">Meals</p>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              By Simone
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Real food, real families, real life. Weekly plans that take the guesswork out of
              dinner.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#newsletter" className="transition-colors hover:text-primary">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Say hello
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground/80 shadow-soft transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Meals By Simone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
