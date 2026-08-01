import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Label Snippets',
  description: 'Custom shadcn label components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function LabelPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Label Component */}
      <div className="group">
        <Label>Label</Label>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Label component - Copy and paste into components/ui/label.tsx"
            codeToCopy={labelComponentCode}
            displayedCode={labelComponentCode}
          />
        </div>
      </div>

      {/* Default Label */}
      <div className="group">
        <Label>Default Label</Label>
        <div className={actionClasses}>
          <SnippetPreview
            description="Default Label - Usage snippet"
            codeToCopy={defaultLabelUsageCode}
            displayedCode={defaultLabelUsageCode}
          />
        </div>
      </div>

      {/* Label with Input */}
      <div className="group">
        <div className="w-full max-w-sm grid gap-1.5">
          <Label htmlFor="email-label">Email</Label>
          <Input type="email" id="email-label" placeholder="Email" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Label with Input - Usage snippet"
            codeToCopy={labelWithInputUsageCode}
            displayedCode={labelWithInputUsageCode}
          />
        </div>
      </div>

      {/* Label with Checkbox */}
      <div className="group">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-label" />
          <Label htmlFor="terms-label">Accept terms and conditions</Label>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Label with Checkbox - Usage snippet"
            codeToCopy={labelWithCheckboxUsageCode}
            displayedCode={labelWithCheckboxUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                           Label Usage Snippets                              */
/* -------------------------------------------------------------------------- */

const defaultLabelUsageCode = `import { Label } from '@/components/ui/label'

<Label>Default Label</Label>`

const labelWithInputUsageCode = `import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

<div className="grid gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`

const labelWithCheckboxUsageCode = `import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`

/* -------------------------------------------------------------------------- */
/*                           Label Component Code                              */
/* -------------------------------------------------------------------------- */

const labelComponentCode = `"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
