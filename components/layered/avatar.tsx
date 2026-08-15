"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const layeredAvatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full transition-all duration-300 ring-2 ring-background shadow-xs",
  {
    variants: {
      size: {
        sm: "size-8 text-xs",
        default: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg font-semibold",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface LayeredAvatarProps
  extends React.ComponentProps<typeof Avatar>,
    VariantProps<typeof layeredAvatarVariants> {
  status?: "online" | "offline" | "busy"
}

function LayeredAvatar({
  className,
  size,
  status,
  children,
  ...props
}: LayeredAvatarProps) {
  return (
    <div className="relative inline-flex">
      <Avatar
        className={cn(layeredAvatarVariants({ size }), className)}
        {...props}
      >
        {children}
      </Avatar>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 size-3 rounded-full ring-2 ring-background",
            status === "online" && "bg-emerald-500",
            status === "offline" && "bg-muted-foreground",
            status === "busy" && "bg-rose-500",
            size === "sm" && "size-2.5",
            size === "xl" && "size-4 ring-3"
          )}
        />
      )}
    </div>
  )
}

function LayeredAvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarImage>) {
  return <AvatarImage className={cn("aspect-square size-full object-cover", className)} {...props} />
}

function LayeredAvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarFallback>) {
  return (
    <AvatarFallback
      className={cn(
        "bg-secondary text-secondary-foreground font-medium flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

function LayeredAvatarGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center -space-x-3 hover:space-x-1 transition-all duration-300", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  LayeredAvatar,
  LayeredAvatarImage,
  LayeredAvatarFallback,
  LayeredAvatarGroup,
  layeredAvatarVariants,
}
