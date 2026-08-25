'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

// You can easily swap these out for real components/blocks you want to feature
const previewComponents = [
  {
    title: "Hero Section",
    href: "/preview/hero-section/one",
    imageUrl: "/assets/2.jpeg",
    imagePosition: "object-right",
  },
  {
    title: "AI Input Form",
    href: "/preview/ai-interfaces/one",
    imageUrl: "/assets/3.jpeg",
    imagePosition: "object-right",
  },
  {
    title: "Bento Grid",
    href: "/preview/bento/one",
    imageUrl: "/assets/1.jpeg",
  },
  {
    title: "Features Section",
    href: "/preview/features/one",
    imageUrl: "/assets/4.jpeg",
  },
  {
    title: "Integrations",
    href: "/preview/integrations/one",
    imageUrl: "/assets/6.jpeg",
  },
  {
    title: "Logo-Cloud",
    href: "/preview/logo-cloud/five",
    imageUrl: "/assets/5.jpeg",
  },
];

function getLayout(count: number): string[] {
  switch (count) {
    case 1: return ['md:col-span-3'];
    case 2: return ['md:col-span-3', 'md:col-span-3'];
    case 3: return ['md:col-span-3', 'md:col-span-1', 'md:col-span-2'];
    case 4: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2'];
    case 5: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1'];
    case 6: return [
      'md:col-span-2 md:row-span-2',
      'md:col-start-3 md:col-span-1',
      'md:col-start-3 md:col-span-1',
      'md:col-span-1',
      'md:col-span-1',
      'md:col-span-1',
    ];
    case 7: return ['md:col-span-2', 'md:col-span-1', ...Array(5).fill('md:col-span-1')];
    case 8: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1'];
    case 9: return ['md:col-span-2', 'md:col-span-1','md:col-span-1', 'md:col-span-2','md:col-span-1', 'md:col-span-1', 'md:col-span-1','md:col-span-2', 'md:col-span-1'];
    default:
      return Array(count).fill('md:col-span-1');
  }
}

// Variants

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const ComponentPreviewCard = ({
  title,
  href,
  imageUrl,
  className,
  imagePosition = "object-top",
}: {
  title: string;
  href: string;
  imageUrl: string;
  className?: string;
  imagePosition?: string;
}) => {
  return (
    <motion.div variants={cardVariants} className={className}>
      <Link
        href={href}
        className="group flex flex-col rounded-[32px] border border-black/[0.04] bg-[#F5F5F7] p-2 transition-colors duration-200 ease-out hover:bg-zinc-100 dark:border-transparent dark:border-apple dark:bg-[#121212] dark:hover:bg-muted"
        style={{ cornerShape: "squircle" } as CSSProperties}
      >
        <div
          className="relative aspect-video w-full overflow-hidden rounded-3xl border border-black/[0.06] bg-black dark:border-neutral-500/15 dark:bg-black"
          style={{ cornerShape: "squircle" } as CSSProperties}
        >
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className={`object-cover ${imagePosition} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-center justify-between gap-3 px-3 pb-1 pt-2">
          <div className="min-w-0">
            <h3 className="font-runde truncate text-base font-semibold tracking-tight">
              {title}
            </h3>
          </div>
          <span className="flex shrink-0 items-center justify-center text-[#ffffff]">
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

// ComponentsBentoSection

export const ComponentsBentoSection = () => {
  const layout = getLayout(previewComponents.length);

  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' });

  return (
    <section
      id="components-bento"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12">
        <motion.p
          className="mt-3 text-base max-w-xl text-muted-foreground"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          Explore interactive, production-ready components. Toggle between live preview and the source code.
        </motion.p>
      </div>

      {/* Preview Cards */}
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        animate={gridInView ? 'visible' : 'hidden'}
      >
        {previewComponents.map((component, index) => (
          <ComponentPreviewCard
            key={index}
            {...component}
            className={layout[index]}
          />
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        ref={ctaRef}
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        <Button variant="ghost" size="sm" className="text-sm" asChild>
          <Link href="/hero-section">
            Explore all components
            <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
          </Link>
        </Button>
      </motion.div>
    </section >
  );
};
