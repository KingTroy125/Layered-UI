"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// ── Components ────────────────────────────────────────────────────────────────

function CodeBlock({ code, lang }: { code: string; lang: string }) {
    return (
        <div className="relative border border-border bg-muted/30 overflow-x-auto">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {lang}
                </span>
            </div>
            <pre className="px-4 py-4">
                <code className="font-mono text-xs leading-relaxed text-foreground">{code}</code>
            </pre>
        </div>
    );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
    {
        id: "01",
        title: "Add registry",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Add the Layered UI registry namespace to your{" "}
                    <code className="font-mono text-xs text-foreground bg-muted px-1 py-0.5 border border-border">
                        components.json
                    </code>
                    .
                </p>
                <CodeBlock
                    lang="json"
                    code={`{
  "registries": {
    "@layeredUI": "https://layered-blocks.vercel.app/r/{name}.json"
  }
}`}
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Learn more about registry config from{" "}
                    <Link
                        href="https://ui.shadcn.com/docs/registry/namespace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                        Shadcn UI docs
                    </Link>
                    .
                </p>
            </>
        ),
    },
    {
        id: "02",
        title: "Usage",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Install blocks via the shadcn CLI using the{" "}
                    <code className="font-mono text-xs text-foreground bg-muted px-1 py-0.5 border border-border">
                        @layeredUI/&#123;name&#125;
                    </code>{" "}
                    syntax.
                </p>
                <CodeBlock
                    lang="bash"
                    code="pnpm dlx shadcn add @layeredUI/hero-section-1"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Don't guess the block name — copy the CLI command from each block on its category page.
                </p>
            </>
        ),
    },
    {
        id: "03",
        title: "Configure MCP",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Run the following command to configure the MCP server:
                </p>
                <CodeBlock lang="bash" code="pnpm dlx shadcn mcp init" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Select your MCP client when prompted. Remember to enable the MCP server in your client when done.
                </p>
                <div className="border-l-2 border-border pl-4 mt-2 flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-widest text-foreground uppercase">
                        Prompts to try
                    </p>
                    <ul className="flex flex-col gap-2">
                        {[
                            "Find me a hero from layeredUI registry",
                            "Build me a landing page using a hero and features section from layeredUI registry",
                            "Build me a pricing page using a pricing, logo cloud, comparator and faqs blocks from layeredUI mist registry",
                        ].map((prompt) => (
                            <li key={prompt} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-border" aria-hidden />
                                {prompt}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        ),
    },
];

// RegistryPage //

const RegistryPage = () => {
    return (
        <>
            <SiteHeader />

            <section
                id="registry"
                className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
            >
                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-balance text-3xl font-bold sm:text-4xl">Layered UI Registry</h2>
                    <p className="mt-3 text-base max-w-xl text-muted-foreground">
                        Install production‑ready shadcn/UI marketing blocks directly into your project
                        using the shadcn CLI. Add the registry once and pull blocks by name.
                    </p>
                </div>

                {/* Steps */}
                <div className="mx-auto max-w-3xl">
                    <div className="w-full rounded-2xl border border-border bg-card overflow-hidden">
                        {steps.map((step, i) => (
                            <div
                                key={step.id}
                                className={cn(
                                    "flex gap-6 px-6 py-8 transition-colors hover:bg-muted/30",
                                    i !== steps.length - 1 && "border-b border-border",
                                )}
                            >
                                <div className="shrink-0 pt-0.5">
                                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 tabular-nums">
                                        {step.id}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4 flex-1 min-w-0">
                                    <p className="font-mono text-[10px] tracking-widest text-foreground uppercase">
                                        {step.title}
                                    </p>
                                    {step.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </>
    );
};

export default RegistryPage;