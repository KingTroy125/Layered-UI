"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

function LayeredAccordion({
  className,
  ...props
}: React.ComponentProps<typeof Accordion>) {
  return (
    <Accordion
      className={cn("w-full space-y-3", className)}
      {...props}
    />
  )
}

function LayeredAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      className={cn(
        "rounded-2xl border border-border/50 bg-background/50 px-4 transition-all duration-300 data-[state=open]:border-border data-[state=open]:shadow-md dark:bg-card/40",
        "border-b-0",
        className
      )}
      {...props}
    />
  )
}

function LayeredAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      className={cn(
        "py-4 text-base font-medium tracking-tight hover:no-underline [&[data-state=open]]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </AccordionTrigger>
  )
}

function LayeredAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionContent>) {
  return (
    <AccordionContent
      className={cn("text-muted-foreground pb-4 text-sm leading-relaxed", className)}
      {...props}
    >
      {children}
    </AccordionContent>
  )
}

export {
  LayeredAccordion,
  LayeredAccordionItem,
  LayeredAccordionTrigger,
  LayeredAccordionContent,
}
