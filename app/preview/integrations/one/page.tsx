"use client";

import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function IntegrationsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="flex items-center">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
              </div>

              <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs sm:text-sm font-normal text-foreground">
                Integrations
              </span>

              <div className="flex items-center">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
              Integrate with your favorite tools
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl">
              Connect seamlessly with popular platforms and services to enhance your workflow.
            </p>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="relative mx-auto w-fit mb-12">
          <div
            role="presentation"
            className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent absolute inset-0 z-10 rounded-3xl"
          />

          {/* Row 1 */}
          <div className="mx-auto mb-4 flex w-fit justify-center gap-4">
            <IntegrationCard>
              <Gemini />
            </IntegrationCard>
            <IntegrationCard>
              <Replit />
            </IntegrationCard>
          </div>

          {/* Row 2 */}
          <div className="mx-auto my-4 flex w-fit justify-center gap-4">
            <IntegrationCard>
              <MagicUI />
            </IntegrationCard>
            <IntegrationCard
              borderClassName="border-primary/40 shadow-primary/10"
              className="bg-card/50 backdrop-blur-sm"
            >
              <Logo />
            </IntegrationCard>
            <IntegrationCard>
              <VSCodium />
            </IntegrationCard>
          </div>

          {/* Row 3 */}
          <div className="mx-auto flex w-fit justify-center gap-4">
            <IntegrationCard>
              <MediaWiki />
            </IntegrationCard>
            <IntegrationCard>
              <GooglePaLM />
            </IntegrationCard>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild>
            <Link href="#">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        'bg-card relative flex size-20 rounded-3xl border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300',
        className
      )}
    >
      <div
        role="presentation"
        className={cn('absolute inset-0 rounded-3xl border border-primary/20', borderClassName)}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};