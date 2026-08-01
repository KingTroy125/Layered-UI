import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Checkbox Snippets',
  description: 'Custom shadcn checkbox components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function CheckboxPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Checkbox Component */}
      <div className="group">
        <div className="flex items-center space-x-2">
          <Checkbox id="component-terms" />
          <Label htmlFor="component-terms">Accept terms</Label>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Checkbox component - Copy and paste into components/ui/checkbox.tsx"
            codeToCopy={checkboxComponentCode}
            displayedCode={checkboxComponentCode}
          />
        </div>
      </div>

      {/* Default Checkbox */}
      <div className="group">
        <Checkbox id="default" />
        <div className={actionClasses}>
          <SnippetPreview
            description="Default Checkbox - Usage snippet"
            codeToCopy={defaultCheckboxUsageCode}
            displayedCode={defaultCheckboxUsageCode}
          />
        </div>
      </div>

      {/* Checkbox with Label */}
      <div className="group">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Checkbox with Label - Usage snippet"
            codeToCopy={checkboxWithLabelUsageCode}
            displayedCode={checkboxWithLabelUsageCode}
          />
        </div>
      </div>

      {/* Disabled Checkbox */}
      <div className="group">
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Disabled Checkbox - Usage snippet"
            codeToCopy={disabledCheckboxUsageCode}
            displayedCode={disabledCheckboxUsageCode}
          />
        </div>
      </div>

      {/* Checkbox Group */}
      <div className="group">
        <div className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="option-1" />
            <Label htmlFor="option-1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option-2" />
            <Label htmlFor="option-2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option-3" />
            <Label htmlFor="option-3">Option 3</Label>
          </div>
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Checkbox Group - Usage snippet"
            codeToCopy={checkboxGroupUsageCode}
            displayedCode={checkboxGroupUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                         Checkbox Usage Snippets                             */
/* -------------------------------------------------------------------------- */

const defaultCheckboxUsageCode = `import { Checkbox } from '@/components/ui/checkbox'

<Checkbox id="default" />`

const checkboxWithLabelUsageCode = `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`

const disabledCheckboxUsageCode = `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
</div>`

const checkboxGroupUsageCode = `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex flex-col gap-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option-3" />
    <Label htmlFor="option-3">Option 3</Label>
  </div>
</div>`

/* -------------------------------------------------------------------------- */
/*                         Checkbox Component Code                             */
/* -------------------------------------------------------------------------- */

const checkboxComponentCode = `'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
