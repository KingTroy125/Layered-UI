import type * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/* -------------------------------------------------------------------------- */
/*                             Snippet Renderers                             */
/* -------------------------------------------------------------------------- */
/*
 * Maps `${category}.${variant.key}` (see data/snippets.ts) to the actual
 * live preview rendered inside each catalog card. Kept separate from the
 * metadata so data/snippets.ts stays plain, serializable, server-safe data.
 */

export const snippetRenderers: Record<string, Record<string, React.ReactNode>> = {
    button: {
        default: <Button variant="default">Default</Button>,
        outline: <Button variant="outline">Outline</Button>,
        secondary: <Button variant="secondary">Secondary</Button>,
        destructive: <Button variant="destructive">Destructive</Button>,
        ghost: <Button variant="ghost">Ghost</Button>,
        link: <Button variant="link">Link</Button>,
    },

    badge: {
        hero: (
            <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
                <Badge variant="hero">
                    <span className="text-sm font-normal">Join us</span>
                </Badge>
                <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
            </div>
        ),
        default: (
            <Badge variant="default">
                <span className="text-sm font-normal">Default</span>
            </Badge>
        ),
        secondary: (
            <Badge variant="secondary">
                <span className="text-sm font-normal">Secondary</span>
            </Badge>
        ),
        destructive: (
            <Badge variant="destructive">
                <span className="text-sm font-normal">Destructive</span>
            </Badge>
        ),
        outline: (
            <Badge variant="outline">
                <span className="text-sm font-normal">Outline</span>
            </Badge>
        ),
    },

    input: {
        default: <Input type="email" placeholder="Email" className="max-w-56" />,
        disabled: <Input placeholder="Disabled" disabled className="max-w-56" />,
        file: <Input type="file" className="max-w-56" />,
    },

    avatar: {
        image: (
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        ),
        fallback: (
            <Avatar>
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        ),
    },

    checkbox: {
        default: <Checkbox id="terms" />,
        withLabel: (
            <div className="flex items-center gap-2">
                <Checkbox
                    id="terms-2"
                    defaultChecked
                />
                <Label htmlFor="terms-2">Accept terms</Label>
            </div>
        ),
        disabled: (
            <Checkbox
                id="disabled"
                disabled
            />
        ),
    },
}
