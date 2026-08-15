"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const layeredSeparatorVariants = cva("shrink-0 transition-opacity", {
  variants: {
    variant: {
      default: "bg-border/60",
      gradient: "bg-gradient-to-r from-transparent via-border to-transparent",
      subtle: "bg-border/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface LayeredSeparatorProps
  extends React.ComponentProps<typeof Separator>,
    VariantProps<typeof layeredSeparatorVariants> {}

function LayeredSeparator({
  className,
  variant,
  orientation = "horizontal",
  ...props
}: LayeredSeparatorProps) {
  return (
    <Separator
      orientation={orientation}
      className={cn(layeredSeparatorVariants({ variant }), className)}
      {...props}
    />
  )
}

export { LayeredSeparator, layeredSeparatorVariants }
