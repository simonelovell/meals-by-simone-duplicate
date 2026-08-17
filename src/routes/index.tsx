import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Footer, Header } from "@/components/landing/chrome";
import {
  Benefits,
  Founder,
  Hero,
  HowItWorks,
  Newsletter,
  Pricing,
  Recipes,
  SocialProof,
  Testimonials,
  VideoSection,
} from "@/components/landing/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meals By Simone — Family Meal Plans Made Simple" },
      {
        name: "description",
        content:
          "Weekly family meal plans, recipes and grocery lists from a certified nutritionist and strength coach. Start your free trial today.",
      },
      { property: "og:title", content: "Meals By Simone — Family Meal Plans Made Simple" },
      {
        property: "og:description",
        content:
          "Weekly family meal plans, recipes and grocery lists from a certified nutritionist and strength coach.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <VideoSection />
        <HowItWorks />
        <Founder />
        <SocialProof />
        <Recipes />
        <Benefits />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
