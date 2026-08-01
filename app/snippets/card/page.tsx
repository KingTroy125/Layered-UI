import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Card Snippets',
  description: 'Custom shadcn card components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function CardPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Card Component */}
      <div className="group">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card content goes here.</p>
          </CardContent>
        </Card>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Card component - Copy and paste into components/ui/card.tsx"
            codeToCopy={cardComponentCode}
            displayedCode={cardComponentCode}
          />
        </div>
      </div>

      {/* Simple Card */}
      <div className="group">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
        <div className={actionClasses}>
          <SnippetPreview
            description="Simple Card - Usage snippet"
            codeToCopy={simpleCardUsageCode}
            displayedCode={simpleCardUsageCode}
          />
        </div>
      </div>

      {/* Card with Footer */}
      <div className="group">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Upgrade Plan</CardTitle>
            <CardDescription>You are currently on the free plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Get unlimited access to all features.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Upgrade</Button>
          </CardFooter>
        </Card>
        <div className={actionClasses}>
          <SnippetPreview
            description="Card with Footer - Usage snippet"
            codeToCopy={cardWithFooterUsageCode}
            displayedCode={cardWithFooterUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                            Card Usage Snippets                              */
/* -------------------------------------------------------------------------- */

const simpleCardUsageCode = `import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
</Card>`

const cardWithFooterUsageCode = `import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Upgrade Plan</CardTitle>
    <CardDescription>You are currently on the free plan.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Get unlimited access to all features.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Upgrade</Button>
  </CardFooter>
</Card>`

/* -------------------------------------------------------------------------- */
/*                            Card Component Code                              */
/* -------------------------------------------------------------------------- */

const cardComponentCode = `import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card" className={cn('bg-card text-card-foreground rounded-xl border shadow-sm', className)} {...props} />
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card-header" className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card-title" className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card-description" className={cn('text-muted-foreground text-sm', className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card-content" className={cn('p-6 pt-0', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return <div data-slot="card-footer" className={cn('flex items-center p-6 pt-0', className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
