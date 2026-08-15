import type * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface LayeredCardProps extends React.ComponentProps<"div"> {
  /** Adds a subtle gradient border accent on hover */
  accentBorder?: boolean
}

function LayeredCard({
  className,
  accentBorder = false,
  children,
  ...props
}: LayeredCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border-border/50",
        "transition-all duration-300 ease-out",
        "hover:shadow-lg hover:-translate-y-0.5",
        accentBorder && [
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:rounded-2xl before:p-px",
          "before:bg-gradient-to-b before:from-foreground/10 before:to-transparent",
          "before:pointer-events-none before:-z-0",
        ],
        className
      )}
      {...props}
    >
      {children}
    </Card>
  )
}

function LayeredCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <CardHeader className={cn("space-y-1.5", className)} {...props} />
}

function LayeredCardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <CardTitle
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function LayeredCardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <CardDescription
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function LayeredCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <CardContent className={cn(className)} {...props} />
}

function LayeredCardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <CardFooter className={cn(className)} {...props} />
}

export {
  LayeredCard,
  LayeredCardHeader,
  LayeredCardTitle,
  LayeredCardDescription,
  LayeredCardContent,
  LayeredCardFooter,
}
