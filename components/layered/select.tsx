"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

function LayeredSelect({
  ...props
}: React.ComponentProps<typeof Select>) {
  return <Select {...props} />
}

function LayeredSelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectTrigger>) {
  return (
    <SelectTrigger
      className={cn(
        "h-11 w-full rounded-full border-border/60 bg-background/60 px-5 text-sm transition-all duration-300 shadow-xs hover:border-foreground/40 focus:ring-2 focus:ring-foreground/20 focus:border-foreground",
        className
      )}
      {...props}
    >
      {children}
    </SelectTrigger>
  )
}

function LayeredSelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectContent>) {
  return (
    <SelectContent
      className={cn(
        "rounded-2xl border-border/50 bg-background/95 backdrop-blur-md shadow-xl p-1.5 min-w-[10rem] animate-in fade-in-80 slide-in-from-top-1",
        className
      )}
      {...props}
    >
      {children}
    </SelectContent>
  )
}

function LayeredSelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectItem>) {
  return (
    <SelectItem
      className={cn(
        "rounded-xl py-2 px-3 text-sm font-medium cursor-pointer transition-colors focus:bg-secondary focus:text-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </SelectItem>
  )
}

export {
  LayeredSelect,
  LayeredSelectTrigger,
  LayeredSelectContent,
  LayeredSelectItem,
  SelectValue as LayeredSelectValue,
  SelectGroup as LayeredSelectGroup,
  SelectLabel as LayeredSelectLabel,
  SelectSeparator as LayeredSelectSeparator,
}
