"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export interface LayeredCheckboxProps
  extends React.ComponentProps<typeof Checkbox> {
  label?: string
  description?: string
}

function LayeredCheckbox({
  className,
  label,
  description,
  id,
  ...props
}: LayeredCheckboxProps) {
  const generatedId = React.useId()
  const checkboxId = id || generatedId

  const checkboxNode = (
    <Checkbox
      id={checkboxId}
      className={cn(
        "size-5 rounded-lg border-border/70 data-[state=checked]:bg-foreground data-[state=checked]:text-background data-[state=checked]:border-foreground transition-all duration-200 active:scale-90",
        className
      )}
      {...props}
    />
  )

  if (!label && !description) {
    return checkboxNode
  }

  return (
    <div className="flex items-start gap-3">
      {checkboxNode}
      <div className="grid gap-1 leading-none">
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium leading-none select-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-muted-foreground select-none">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export { LayeredCheckbox }
