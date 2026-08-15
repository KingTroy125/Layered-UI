import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface LayeredInputProps
  extends React.ComponentProps<typeof Input> {
  /** Icon element rendered inside the left side of the input */
  leftIcon?: React.ReactNode
  /** Icon element rendered inside the right side of the input */
  rightIcon?: React.ReactNode
  /** Shape style of the input border radius */
  inputShape?: "rounded" | "pill"
}

function LayeredInput({
  className,
  leftIcon,
  rightIcon,
  inputShape = "pill",
  ...props
}: LayeredInputProps) {
  return (
    <div className="relative flex items-center w-full">
      {leftIcon && (
        <span className="absolute left-3.5 text-muted-foreground pointer-events-none size-4 shrink-0 flex items-center justify-center">
          {leftIcon}
        </span>
      )}
      <Input
        className={cn(
          "h-11 bg-background/60 border-border/60 transition-all duration-300 text-sm shadow-xs",
          "placeholder:text-muted-foreground/70",
          "focus-visible:border-foreground focus-visible:ring-foreground/20 focus-visible:ring-2",
          inputShape === "pill" ? "rounded-full px-5" : "rounded-xl px-4",
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          className
        )}
        {...props}
      />
      {rightIcon && (
        <span className="absolute right-3.5 text-muted-foreground size-4 shrink-0 flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </div>
  )
}

export { LayeredInput }
