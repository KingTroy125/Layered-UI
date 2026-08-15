"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

function LayeredRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

export interface LayeredRadioItemProps
  extends React.ComponentProps<typeof RadioGroupItem> {
  label?: string
  description?: string
  card?: boolean
}

function LayeredRadioGroupItem({
  className,
  label,
  description,
  card = false,
  id,
  ...props
}: LayeredRadioItemProps) {
  const generatedId = React.useId()
  const radioId = id || generatedId

  const radioNode = (
    <RadioGroupItem
      id={radioId}
      className={cn(
        "size-5 border-border/70 text-foreground focus-visible:ring-foreground/20 transition-all duration-200 active:scale-90",
        className
      )}
      {...props}
    />
  )

  if (!label && !description) {
    return radioNode
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 transition-all duration-200",
        card && [
          "rounded-2xl border border-border/50 bg-background/50 p-4 cursor-pointer hover:border-border hover:bg-accent/40",
          "has-[[data-state=checked]]:border-foreground/80 has-[[data-state=checked]]:bg-secondary/40 has-[[data-state=checked]]:shadow-sm",
        ]
      )}
    >
      <div className="pt-0.5">{radioNode}</div>
      <div className="grid gap-1 leading-none">
        {label && (
          <label
            htmlFor={radioId}
            className="text-sm font-medium leading-none select-none cursor-pointer"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-muted-foreground select-none leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export { LayeredRadioGroup, LayeredRadioGroupItem }
