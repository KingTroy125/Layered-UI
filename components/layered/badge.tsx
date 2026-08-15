import type * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const layeredBadgeVariants = cva(
  [
    "rounded-full font-medium",
    "transition-all duration-300 ease-out",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-transparent bg-foreground text-background",
          "px-3 py-1 text-xs",
        ].join(" "),
        outline: [
          "border-border/50 bg-transparent text-foreground",
          "px-3 py-1 text-xs",
        ].join(" "),
        hero: [
          "border-border/50 bg-secondary/50 text-foreground",
          "backdrop-blur-sm",
          "px-4 py-1.5 text-sm",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LayeredBadgeProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof layeredBadgeVariants> {
  /** Render as a child component (Radix Slot) */
  asChild?: boolean
  /** Show decorative gradient lines on either side of the badge */
  showLines?: boolean
  /** Custom className for the decorative lines */
  lineClassName?: string
  /** Badge content */
  children?: React.ReactNode
}

function LayeredBadge({
  className,
  variant,
  asChild = false,
  showLines = false,
  lineClassName,
  children,
  ...props
}: LayeredBadgeProps) {
  const badge = (
    <Badge
      asChild={asChild}
      variant="default"
      className={cn(layeredBadgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Badge>
  )

  if (showLines) {
    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={cn(
            "h-px w-12 bg-gradient-to-l from-foreground/30 to-transparent sm:w-20",
            lineClassName
          )}
        />
        {badge}
        <div
          className={cn(
            "h-px w-12 bg-gradient-to-r from-foreground/30 to-transparent sm:w-20",
            lineClassName
          )}
        />
      </div>
    )
  }

  return badge
}

export { LayeredBadge, layeredBadgeVariants }
