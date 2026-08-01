import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Radio Group Snippets',
  description: 'Custom shadcn radio group components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function RadioGroupPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Radio Group Component */}
      <div className="group">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="component-r1" />
            <Label htmlFor="component-r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="component-r2" />
            <Label htmlFor="component-r2">Comfortable</Label>
          </div>
        </RadioGroup>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Radio Group component - Copy and paste into components/ui/radio-group.tsx"
            codeToCopy={radioGroupComponentCode}
            displayedCode={radioGroupComponentCode}
          />
        </div>
      </div>

      {/* Basic Radio Group */}
      <div className="group">
        <RadioGroup defaultValue="default">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
        <div className={actionClasses}>
          <SnippetPreview
            description="Basic Radio Group - Usage snippet"
            codeToCopy={basicRadioGroupUsageCode}
            displayedCode={basicRadioGroupUsageCode}
          />
        </div>
      </div>

      {/* Horizontal Radio Group */}
      <div className="group">
        <RadioGroup defaultValue="sm" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sm" id="size-sm" />
            <Label htmlFor="size-sm">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="md" id="size-md" />
            <Label htmlFor="size-md">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lg" id="size-lg" />
            <Label htmlFor="size-lg">Large</Label>
          </div>
        </RadioGroup>
        <div className={actionClasses}>
          <SnippetPreview
            description="Horizontal Radio Group - Usage snippet"
            codeToCopy={horizontalRadioGroupUsageCode}
            displayedCode={horizontalRadioGroupUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                       Radio Group Usage Snippets                            */
/* -------------------------------------------------------------------------- */

const basicRadioGroupUsageCode = `import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

<RadioGroup defaultValue="default">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`

const horizontalRadioGroupUsageCode = `import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

<RadioGroup defaultValue="sm" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="sm" id="size-sm" />
    <Label htmlFor="size-sm">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="md" id="size-md" />
    <Label htmlFor="size-md">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="lg" id="size-lg" />
    <Label htmlFor="size-lg">Large</Label>
  </div>
</RadioGroup>`

/* -------------------------------------------------------------------------- */
/*                       Radio Group Component Code                            */
/* -------------------------------------------------------------------------- */

const radioGroupComponentCode = `"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
