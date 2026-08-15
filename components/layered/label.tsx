"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface LayeredLabelProps
  extends React.ComponentProps<typeof Label> {
  uppercase?: boolean
  required?: boolean
}

function LayeredLabel({
  className,
  uppercase = false,
  required = false,
  children,
  ...props
}: LayeredLabelProps) {
  return (
    <Label
      className={cn(
        "text-sm font-medium tracking-tight text-foreground/90 transition-colors",
        uppercase && "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-rose-500">*</span>}
    </Label>
  )
}

export { LayeredLabel }
