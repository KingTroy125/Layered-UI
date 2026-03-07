"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// ── Data ──────────────────────────────────────────────────────────────────────

const questions = [
  {
    id: "item-1",
    title: "What kind of templates do you offer?",
    content:
      "We offer a growing collection of beautifully crafted Next.js landing page templates built with Tailwind CSS and shadcn/ui. Each template is production-ready, fully responsive, and designed with modern patterns and best practices.",
  },
  {
    id: "item-2",
    title: "Who are these templates built for?",
    content:
      "Our templates are built for founders, indie hackers, product teams, and agencies that want to ship polished landing pages fast without starting from scratch every time.",
  },
  {
    id: "item-3",
    title: "Can I customize the templates?",
    content:
      "Absolutely. Every template is built with clean, readable code and uses Tailwind utility classes throughout, making it straightforward to adjust colors, typography, layout, and content to match your brand.",
  },
  {
    id: "item-4",
    title: "Do the templates include dark mode support?",
    content:
      "Yes. All templates include full dark mode support out of the box using Tailwind's dark variant and CSS custom properties, so they look great in both light and dark themes without any extra work.",
  },
  {
    id: "item-5",
    title: "What technologies are used?",
    content:
      "Templates are built with Next.js (App Router), Tailwind CSS, and shadcn/ui components. Some templates also include Framer Motion for animations. Everything is TypeScript-first and follows modern React patterns.",
  },
  {
    id: "item-6",
    title: "How do I get started with a template?",
    content:
      "Click the Live Preview button on any template to see it in action, then use the GitHub link to clone or fork the repository. From there it's just a standard Next.js setup — install dependencies and you're ready to go.",
  },
  {
    id: "item-7",
    title: "Will more templates be added over time?",
    content:
      "Yes. We're continuously adding new templates and components to the collection. New releases include landing pages, dashboards, portfolios, and more — all following the same quality standards.",
  },
  // ── Add more questions here ───────────────────────────────────────────────
  // {
  //   id: "item-8",
  //   title: "Your question here?",
  //   content: "Your answer here.",
  // },
];

// ── FaqsSection ───────────────────────────────────────────────────────────────

const FaqsSection = () => {
  return (
    <section
      id="faq"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading — centered, matching project style */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
          <Badge variant="hero" className="group">
            <span className="text-sm font-normal">FAQ</span>
          </Badge>
          <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
        </div>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-base max-w-xl">
          Common questions about our templates. Can't find what you're looking for?{" "}
          <a className="text-primary hover:underline" href="#">Reach out</a>.
        </p>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-3xl">
        <Accordion
          className="w-full rounded-2xl border border-border bg-card overflow-hidden"
          collapsible
          defaultValue="item-1"
          type="single"
        >
          {questions.map((item) => (
            <AccordionItem
              className="border-b border-border last:border-b-0 px-6 transition-colors hover:bg-muted/30"
              key={item.id}
              value={item.id}
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSection;