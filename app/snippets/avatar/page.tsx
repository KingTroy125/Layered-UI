import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Avatar Snippets',
  description: 'Custom shadcn avatar components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function AvatarPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Avatar Component */}
      <div className="group">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Avatar component - Copy and paste into components/ui/avatar.tsx"
            codeToCopy={avatarComponentCode}
            displayedCode={avatarComponentCode}
          />
        </div>
      </div>

      {/* Avatar with Image */}
      <div className="group">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={actionClasses}>
          <SnippetPreview
            description="Avatar with Image - Usage snippet"
            codeToCopy={avatarWithImageUsageCode}
            displayedCode={avatarWithImageUsageCode}
          />
        </div>
      </div>

      {/* Avatar Fallback */}
      <div className="group">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className={actionClasses}>
          <SnippetPreview
            description="Avatar Fallback - Usage snippet"
            codeToCopy={avatarFallbackUsageCode}
            displayedCode={avatarFallbackUsageCode}
          />
        </div>
      </div>

      {/* Avatar Sizes */}
      <div className="group">
        <div className="flex items-center gap-4">
          <Avatar className="size-6">
            <AvatarFallback className="text-xs">S</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Avatar Sizes - Usage snippet"
            codeToCopy={avatarSizesUsageCode}
            displayedCode={avatarSizesUsageCode}
          />
        </div>
      </div>

      {/* Avatar Group */}
      <div className="group">
        <div className="flex -space-x-3">
          <Avatar className="border-2 border-background">
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback className="text-xs">+3</AvatarFallback>
          </Avatar>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Avatar Group - Usage snippet"
            codeToCopy={avatarGroupUsageCode}
            displayedCode={avatarGroupUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                           Avatar Usage Snippets                             */
/* -------------------------------------------------------------------------- */

const avatarWithImageUsageCode = `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`

const avatarFallbackUsageCode = `import { Avatar, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`

const avatarSizesUsageCode = `import { Avatar, AvatarFallback } from '@/components/ui/avatar'

{/* Small */}
<Avatar className="size-6">
  <AvatarFallback className="text-xs">S</AvatarFallback>
</Avatar>

{/* Default */}
<Avatar>
  <AvatarFallback>M</AvatarFallback>
</Avatar>

{/* Large */}
<Avatar className="size-12">
  <AvatarFallback>L</AvatarFallback>
</Avatar>

{/* Extra Large */}
<Avatar className="size-16">
  <AvatarFallback>XL</AvatarFallback>
</Avatar>`

const avatarGroupUsageCode = `import { Avatar, AvatarFallback } from '@/components/ui/avatar'

<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="text-xs">+3</AvatarFallback>
  </Avatar>
</div>`

/* -------------------------------------------------------------------------- */
/*                           Avatar Component Code                             */
/* -------------------------------------------------------------------------- */

const avatarComponentCode = `"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
