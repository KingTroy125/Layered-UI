"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

function LayeredCarousel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Carousel>) {
  return (
    <Carousel
      className={cn("w-full max-w-xl relative", className)}
      {...props}
    >
      {children}
    </Carousel>
  )
}

function LayeredCarouselContent({
  className,
  ...props
}: React.ComponentProps<typeof CarouselContent>) {
  return <CarouselContent className={cn("-ml-4", className)} {...props} />
}

function LayeredCarouselItem({
  className,
  ...props
}: React.ComponentProps<typeof CarouselItem>) {
  return (
    <CarouselItem
      className={cn("pl-4 md:basis-1/2 lg:basis-1/3", className)}
      {...props}
    />
  )
}

function LayeredCarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof CarouselPrevious>) {
  return (
    <CarouselPrevious
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:scale-105 transition-all duration-200 shadow-md",
        className
      )}
      {...props}
    />
  )
}

function LayeredCarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof CarouselNext>) {
  return (
    <CarouselNext
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:scale-105 transition-all duration-200 shadow-md",
        className
      )}
      {...props}
    />
  )
}

export {
  LayeredCarousel,
  LayeredCarouselContent,
  LayeredCarouselItem,
  LayeredCarouselPrevious,
  LayeredCarouselNext,
  type CarouselApi,
}
