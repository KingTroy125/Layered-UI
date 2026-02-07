import { Metadata } from 'next'
import { VariantProps } from 'class-variance-authority'

import SnippetPreview from '@/components/SnippetPreview'
import { Badge, badgeVariants } from '@/components/ui/badge'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type BadgeVariant = VariantProps<typeof badgeVariants>['variant']

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Badge Snippets',
  description: 'Custom shadcn badges for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function BadgesPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
        {/* Badge Preview */}
        <div className="mb-4 flex items-center justify-start gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />

          <Badge variant="hero">
            <span className="text-sm font-normal">Join us</span>
          </Badge>

          <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
        </div>

        {/* Code Snippet */}
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Badge component - Copy and paste into components/ui/badge.tsx"
            codeToCopy={badgeComponentCode}
            displayedCode={badgeComponentCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                            Badge Component Code                             */
/* -------------------------------------------------------------------------- */

const badgeComponentCode = `import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        hero: "border-border/50 bg-secondary/50 text-foreground backdrop-blur-sm px-4 py-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'