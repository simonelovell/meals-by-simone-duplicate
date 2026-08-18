import {
  Check,
  Heart,
  Instagram,
  PiggyBank,
  Play,
  Sparkles,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import heroImg from "@/assets/hero.jpg";
import howItWorksImg from "@/assets/how-it-works.jpg";
import founderImg from "@/assets/founder.jpg";
import videoThumb from "@/assets/video-thumb.jpg";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe4 from "@/assets/recipe-4.jpg";
import recipe5 from "@/assets/recipe-5.jpg";
import recipe6 from "@/assets/recipe-6.jpg";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5";
const accentBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5";

function Eyebrow({ children }: { children: string }) {
  return <p className="font-script text-3xl text-accent sm:text-4xl">{children}</p>;
}

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-14 pb-24 sm:px-8 sm:pt-24 lg:pb-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
            <Sparkles className="h-3.5 w-3.5" /> New menus every Sunday
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Never ask{" "}
            <span className="font-script text-5xl text-accent sm:text-6xl lg:text-7xl">
              "what's for dinner?"
            </span>{" "}
            again
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Weekly family meal plans, simple recipes and a done-for-you grocery list — built by a
            certified nutritionist so you can feed your people well without the 5pm panic.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#pricing" className={primaryBtn}>
              Start Free Trial
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-3 text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Video
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
            <img
              src={heroImg}
              alt="Simone serving a healthy family dinner in a sunlit kitchen"
              width={1200}
              height={1408}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-3xl bg-card px-5 py-4 shadow-soft sm:left-8">
            <p className="font-script text-2xl text-accent">2,400+ families</p>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              eating better every week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const quotes = [
  { text: "Dinner stress is officially gone in our house.", name: "Ashley R." },
  { text: "My grocery bill dropped by a third the first month.", name: "Nadia P." },
  { text: "The kids actually ask for the salmon bowls now.", name: "Kerry M." },
  { text: "I finally cook once and eat well all week.", name: "Danielle T." },
  { text: "Simple ingredients, huge flavour, zero guesswork.", name: "Priya S." },
  { text: "Down 14 lbs and I never felt like I was dieting.", name: "Monica L." },
  { text: "Sunday planning takes me ten minutes now.", name: "Bree H." },
  { text: "It's like having a nutritionist in my pocket.", name: "Christine O." },
  { text: "My husband thinks I took cooking classes.", name: "Yvette D." },
];

export function Testimonials() {
  const strip = [...quotes, ...quotes];
  return (
    <section className="marquee-pause overflow-hidden border-y border-border bg-secondary/60 py-8">
      <div className="marquee-track flex w-max gap-4">
        {strip.map((q, i) => (
          <figure
            key={`${q.name}-${i}`}
            className="w-[19rem] shrink-0 rounded-3xl bg-card px-6 py-5 shadow-soft"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/85">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">
              {q.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section id="video" className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-36">
      <Eyebrow>Come say hi</Eyebrow>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        A two-minute look{" "}
        <span className="font-script text-4xl text-accent sm:text-5xl">inside the membership</span>
      </h2>
      <div className="group relative mt-10 overflow-hidden rounded-[2.5rem] shadow-soft">
        <img
          src={videoThumb}
          alt="A family sharing a healthy dinner around a wooden table"
          loading="lazy"
          width={1600}
          height={912}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          aria-label="Play intro video"
          onClick={() => toast("The intro video will play here once uploaded.")}
          className="absolute inset-0 grid place-items-center bg-foreground/15 transition-colors group-hover:bg-foreground/25"
        >
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-soft">
            <Play className="h-7 w-7 fill-current text-primary" />
          </span>
        </button>
      </div>
      <a href="#pricing" className={`${primaryBtn} mt-10`}>
        Start Free Trial
      </a>
    </section>
  );
}

const steps = [
  { title: "Sign Up", copy: "Join the membership and tell us who you're feeding." },
  {
    title: "Grab Your Menu",
    copy: "Every Sunday a fresh menu and grocery list lands in your inbox.",
  },
  { title: "Get Cooking", copy: "Short, tested recipes — most on the table in 30 minutes." },
  { title: "Enjoy", copy: "Sit down together, no scrambling, no takeout guilt." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sage-soft/50 py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
          <img
            src={howItWorksImg}
            alt="Weekly menu printout beside prepped meal containers"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Simple as can be</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How it <span className="font-script text-4xl text-accent sm:text-5xl">works</span>
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-primary bg-transparent font-script text-2xl text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
          <img
            src={founderImg}
            alt="Simone, certified nutritionist and strength and conditioning coach"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Hi, I'm Simone</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Twenty years of helping people{" "}
            <span className="font-script text-4xl text-accent sm:text-5xl">eat well</span> — without
            the overwhelm
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a certified nutritionist and strength &amp; conditioning coach, and for over 20
              years I've worked with busy professionals, competitive athletes and — my favourite —
              families juggling far too much.
            </p>
            <p>
              What I learned is that nobody fails at healthy eating because they lack willpower.
              They fail because dinner arrives every single night and there's no plan. So I built
              the plan: real food, real portions, real life.
            </p>
            <p>
              Meals By Simone is everything I'd give a client one-on-one, in a weekly menu your
              whole family will actually eat.
            </p>
          </div>
          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {[
              "Certified Nutritionist",
              "Strength & Conditioning Coach",
              "20+ years coaching experience",
              "Athletes, professionals & families",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-script text-4xl text-accent">Simone</p>
        </div>
      </div>
    </section>
  );
}

const instaTiles = [recipe3, recipe1, recipe6, recipe4, recipe5, recipe2];

export function SocialProof() {
  return (
    <section className="bg-secondary/60 py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Eyebrow>Follow along</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">@mealsbysimone</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instaTiles.map((src, i) => (
            <a
              key={i}
              href="#top"
              className="group relative overflow-hidden rounded-3xl shadow-soft"
              aria-label="View Instagram post"
            >
              <img
                src={src}
                alt="Recent Instagram post from Meals By Simone"
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-foreground/25 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-background" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const recipes = [
  { src: recipe1, name: "Lemon Herb Chicken Bowl", tag: "30 minutes · High protein" },
  { src: recipe2, name: "Honey Garlic Salmon", tag: "25 minutes · Omega-3 rich" },
  { src: recipe3, name: "Cozy Turkey Chili", tag: "One pot · Freezer friendly" },
  { src: recipe4, name: "Mediterranean Shrimp Bowl", tag: "20 minutes · Light & fresh" },
  { src: recipe5, name: "Rainbow Veggie Stir Fry", tag: "Meatless · Kid approved" },
  { src: recipe6, name: "Banana Oat Protein Pancakes", tag: "Breakfast · Batch cook" },
];

export function Recipes() {
  return (
    <section id="recipes" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="text-center">
        <Eyebrow>A little sneak peek</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          What's on{" "}
          <span className="font-script text-4xl text-accent sm:text-5xl">this week's menu</span>
        </h2>
      </div>
      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <article key={r.name} className="group">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{r.name}</h3>
              <p className="mt-1 font-script text-xl text-accent">{r.tag}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const benefits: { Icon: LucideIcon; title: string; copy: string }[] = [
  {
    Icon: Timer,
    title: "Save Time",
    copy: "Menus, recipes and shopping lists done for you every Sunday.",
  },
  {
    Icon: PiggyBank,
    title: "Save Money",
    copy: "Shop with a plan, use what you buy and skip the midweek takeout.",
  },
  {
    Icon: Heart,
    title: "Stay Healthy",
    copy: "Balanced, protein-forward meals designed by a certified nutritionist.",
  },
];

export function Benefits() {
  return (
    <section className="bg-terracotta-soft/60 py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-3">
        {benefits.map(({ Icon, title, copy }) => (
          <div key={title} className="rounded-[2rem] bg-card px-8 py-10 text-center shadow-soft">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-soft">
              <Icon className="h-7 w-7 text-primary" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Monthly",
    price: "$19",
    period: "/ month",
    note: "Cancel anytime",
    features: ["New weekly menu", "Recipes & grocery lists", "Member recipe library"],
    best: false,
  },
  {
    name: "Annual",
    price: "$149",
    period: "/ year",
    note: "Save $79 — under $12.50 a month",
    features: [
      "Everything in monthly",
      "Seasonal menu collections",
      "Batch-cook & prep guides",
      "Priority support from Simone",
    ],
    best: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="text-center">
        <Eyebrow>Join the table</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Pick your plan,{" "}
          <span className="font-script text-4xl text-accent sm:text-5xl">start free</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Every membership starts with a 7-day free trial. No commitment, no pressure.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-[2rem] px-8 py-10 shadow-soft ${
              plan.best ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            {plan.best ? (
              <span className="absolute -top-3 right-8 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                Best Value
              </span>
            ) : null}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-4 flex items-end gap-1">
              <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
              <span className={plan.best ? "opacity-80" : "text-muted-foreground"}>
                {plan.period}
              </span>
            </p>
            <p className={`mt-2 text-sm ${plan.best ? "opacity-90" : "text-muted-foreground"}`}>
              {plan.note}
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.best ? "" : "text-primary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#newsletter" className={`mt-9 w-full ${plan.best ? accentBtn : primaryBtn}`}>
              Sign Up Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
    toast.success("You're on the list! Check your inbox for this week's menu.");
  }

  return (
    <section id="newsletter" className="mx-auto max-w-5xl px-5 pb-24 sm:px-8 lg:pb-36">
      <div className="rounded-[2.5rem] bg-sage-soft/70 px-6 py-16 text-center sm:px-12">
        <Eyebrow>Not ready yet?</Eyebrow>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Get a free family menu{" "}
          <span className="font-script text-4xl text-accent sm:text-5xl">every month</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          One email, five dinners, a grocery list. Unsubscribe whenever you like.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="min-w-0 flex-1 rounded-full border border-border bg-card px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" className={primaryBtn}>
            Send it to me
          </button>
        </form>
      </div>
    </section>
  );
}
