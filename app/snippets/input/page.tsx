import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Input Snippets',
  description: 'Custom shadcn input components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function InputPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Input Component */}
      <div className="group">
        <div className="w-full max-w-sm">
          <Input type="email" placeholder="Email" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Input component - Copy and paste into components/ui/input.tsx"
            codeToCopy={inputComponentCode}
            displayedCode={inputComponentCode}
          />
        </div>
      </div>

      {/* Default Input */}
      <div className="group">
        <div className="w-full max-w-sm">
          <Input placeholder="Default input" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Default Input - Usage snippet"
            codeToCopy={defaultInputUsageCode}
            displayedCode={defaultInputUsageCode}
          />
        </div>
      </div>

      {/* Input with Label */}
      <div className="group">
        <div className="w-full max-w-sm grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Input with Label - Usage snippet"
            codeToCopy={inputWithLabelUsageCode}
            displayedCode={inputWithLabelUsageCode}
          />
        </div>
      </div>

      {/* Disabled Input */}
      <div className="group">
        <div className="w-full max-w-sm">
          <Input disabled placeholder="Disabled" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Disabled Input - Usage snippet"
            codeToCopy={disabledInputUsageCode}
            displayedCode={disabledInputUsageCode}
          />
        </div>
      </div>

      {/* File Input */}
      <div className="group">
        <div className="w-full max-w-sm grid gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="File Input - Usage snippet"
            codeToCopy={fileInputUsageCode}
            displayedCode={fileInputUsageCode}
          />
        </div>
      </div>

      {/* Input with Button */}
      <div className="group">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Input with Button - Usage snippet"
            codeToCopy={inputWithButtonUsageCode}
            displayedCode={inputWithButtonUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                           Input Usage Snippets                              */
/* -------------------------------------------------------------------------- */

const defaultInputUsageCode = `import { Input } from '@/components/ui/input'

<Input placeholder="Default input" />`

const inputWithLabelUsageCode = `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="grid gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`

const disabledInputUsageCode = `import { Input } from '@/components/ui/input'

<Input disabled placeholder="Disabled" />`

const fileInputUsageCode = `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="grid gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`

const inputWithButtonUsageCode = `import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`

/* -------------------------------------------------------------------------- */
/*                           Input Component Code                              */
/* -------------------------------------------------------------------------- */

const inputComponentCode = `import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
