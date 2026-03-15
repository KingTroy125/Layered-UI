'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Data //
const testimonials = [
  {
    type: 'dark',
    stars: 5,
    quote:
      'These templates transformed the way our team ships products. Within three months of consistent use, we achieved a remarkable 35% increase in delivery speed, driven by cleaner code and better design patterns.',
    author: 'Alex Jordan',
    role: 'Content Strategist',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJordan',
  },
  {
    type: 'light',
    quote:
      'Our team finally stopped starting from scratch on every project and switched to a cleaner, more efficient workflow.',
    author: 'Daniel Cooper',
    role: 'Project Coordinator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielCooper',
  },
  {
    type: 'light',
    quote: 'Within just 60 seconds, our landing page was live and ready for launch.',
    author: 'Alex Jofer',
    role: 'Systems Administrator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJofer',
  },
  {
    type: 'light',
    quote:
      'In just one day, our whole team was shipping polished pages through a single set of templates.',
    author: 'Liam Parker',
    role: 'Productivity Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiamParker',
  },
  {
    type: 'light',
    quote: 'Our client delivery time improved by 40%, allowing us to take on more projects with confidence.',
    author: 'Ethan Ross',
    role: 'Operations Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthanRoss',
  },
  {
    type: 'light',
    quote:
      'We moved away from messy boilerplate and embraced a smoother workflow that keeps our whole team aligned.',
    author: 'Alison Thomas',
    role: 'Team Operations Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlisonThomas',
  },
  {
    type: 'brand',
    stars: 5,
    quote:
      'These are modern templates designed to be simple, beautiful, and enjoyable to build with. They streamline daily work, bring consistency to every project, and help teams ship faster while making the entire experience smoother for everyone.',
    author: 'Maya Rahman',
    role: 'Business Process Analyst',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayaRahman',
  },
  {
    type: 'light',
    quote:
      "Onboarding new developers used to take days. Now with the clear structure, they're productive within hours.",
    author: 'Sophie Lane',
    role: 'HR Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophieLane',
  },
  {
    type: 'light',
    quote:
      'The component quality alone saved us hours every week. We finally have a design system that actually scales.',
    author: 'James Whitfield',
    role: 'Sales Director',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesWhitfield',
  },
  {
    type: 'dark',
    stars: 5,
    quote:
      'Switching to these templates was the best decision we made last year. Our codebase is cleaner, our team is aligned, and we ship faster than ever before.',
    author: 'Rachel Kim',
    role: 'VP of Engineering',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelKim',
  },
  {
    type: 'light',
    quote:
      'The templates eliminated repetitive setup entirely. Our team now focuses on what they do best — building great products.',
    author: 'Marcus Webb',
    role: 'Customer Success Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusWebb',
  },
  {
    type: 'light',
    quote:
      'We tried three other template libraries before this one. Nothing came close to how seamlessly it fits into our existing workflow.',
    author: 'Priya Nair',
    role: 'Product Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaNair',
  },
  // ── Add more testimonials here ────────────────────────────────────────────
  // {
  //   type: 'light', // 'light' | 'dark' | 'brand'
  //   stars: 5,      // optional — omit to show quote icon instead
  //   quote: 'Your testimonial text here.',
  //   author: 'Jane Doe',
  //   role: 'CEO, Acme Inc.',
  //   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe',
  // },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

// TestimonialCard //

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  const isDark = testimonial.type === 'dark';
  const isBrand = testimonial.type === 'brand';

  return (
    <div
      className={cn(
        'relative flex flex-col p-6 rounded-xl border shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1',
        isDark && 'bg-foreground/95 text-background border-foreground/20',
        isBrand && 'bg-primary/95 text-primary-foreground border-primary/20',
        !isDark && !isBrand && 'bg-card text-card-foreground border-border',
      )}
    >
      {/* Stars or Quote icon */}
      {testimonial.stars ? (
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" className="text-current opacity-80" />
          ))}
        </div>
      ) : (
        <div className="w-9 h-9 mb-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Quote className="w-4 h-4 text-primary fill-primary" strokeWidth={0} />
        </div>
      )}

      {/* Quote */}
      <p
        className={cn(
          'text-sm font-normal leading-relaxed mb-6 flex-1',
          isDark && 'text-background/90',
          isBrand && 'text-primary-foreground/90',
          !isDark && !isBrand && 'text-foreground',
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
        />
        <div className="min-w-0">
          <p
            className={cn(
              'font-semibold text-sm truncate',
              isDark && 'text-background',
              isBrand && 'text-primary-foreground',
            )}
          >
            {testimonial.author}
          </p>
          <p
            className={cn(
              'text-xs truncate',
              isDark && 'text-background/60',
              isBrand && 'text-primary-foreground/70',
              !isDark && !isBrand && 'text-muted-foreground',
            )}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

// ── TestimonialsSection ───────────────────────────────────────────────────────

export const TestimonialsSection = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const visible = testimonials.slice(0, count);
  const hasMore = count < testimonials.length;

  // Split into 3 masonry columns
  const col1 = visible.filter((_, i) => i % 3 === 0);
  const col2 = visible.filter((_, i) => i % 3 === 1);
  const col3 = visible.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading — centered, matching project style */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
          <Badge variant="hero" className="group">
            <span className="text-sm font-normal">Testimonials</span>
          </Badge>
          <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
        </div>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Trusted by Developers Worldwide</h2>
        <p className="mt-3 text-base max-w-xl">
          Join thousands of developers and teams who build faster and ship better with our templates.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">

          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((t) => (
              <TestimonialCard key={t.author} testimonial={t} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((t) => (
              <TestimonialCard key={t.author} testimonial={t} />
            ))}
          </div>

          {/* Column 3 — hidden on mobile/tablet, shows on lg */}
          <div className="hidden lg:flex flex-col gap-4">
            {col3.map((t) => (
              <TestimonialCard key={t.author} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Fade overlay + Load more */}
        {hasMore && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            <div className="relative flex justify-center mt-6 z-10">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-medium"
                onClick={() => setCount((c) => Math.min(c + LOAD_MORE_COUNT, testimonials.length))}
              >
                Load more
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;