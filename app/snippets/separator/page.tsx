import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Separator } from '@/components/ui/separator'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Separator Snippets',
  description: 'Custom shadcn separator components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function SeparatorPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Separator Component */}
      <div className="group">
        <div className="w-full max-w-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Separator component - Copy and paste into components/ui/separator.tsx"
            codeToCopy={separatorComponentCode}
            displayedCode={separatorComponentCode}
          />
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="group">
        <div className="w-full max-w-sm space-y-4">
          <p className="text-sm">Above</p>
          <Separator />
          <p className="text-sm">Below</p>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Horizontal Separator - Usage snippet"
            codeToCopy={horizontalSeparatorUsageCode}
            displayedCode={horizontalSeparatorUsageCode}
          />
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="group">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Vertical Separator - Usage snippet"
            codeToCopy={verticalSeparatorUsageCode}
            displayedCode={verticalSeparatorUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                        Separator Usage Snippets                             */
/* -------------------------------------------------------------------------- */

const horizontalSeparatorUsageCode = `import { Separator } from '@/components/ui/separator'

<div className="space-y-4">
  <p className="text-sm">Above</p>
  <Separator />
  <p className="text-sm">Below</p>
</div>`

const verticalSeparatorUsageCode = `import { Separator } from '@/components/ui/separator'

<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`

/* -------------------------------------------------------------------------- */
/*                        Separator Component Code                             */
/* -------------------------------------------------------------------------- */

const separatorComponentCode = `"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
