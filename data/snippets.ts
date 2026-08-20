import fs from 'fs'
import path from 'path'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface SnippetVariant {
    /** Matches a key in components/snippets/registry.tsx for this category */
    key: string
    title: string
    usageCode: string
}

export interface SnippetCategoryMeta {
    slug: string
    label: string
    description: string
    /** Path (relative to repo root) to the full component source, e.g. components/ui/button.tsx */
    componentSourcePath: string
    /** Which variant's render is shown behind the "full component" card */
    fullSourceVariantKey: string
    variants: SnippetVariant[]
}

/* -------------------------------------------------------------------------- */
/*                                   Loader                                   */
/* -------------------------------------------------------------------------- */

async function loadCode(filePath: string): Promise<string> {
    const fullPath = path.join(/*turbopackIgnore: true*/ process.cwd(), filePath)
    return fs.promises.readFile(fullPath, 'utf-8')
}

export async function getComponentSource(meta: SnippetCategoryMeta): Promise<string> {
    return loadCode(meta.componentSourcePath)
}

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

const buttonMeta: SnippetCategoryMeta = {
    slug: 'button',
    label: 'Button',
    description: 'Custom shadcn buttons for your marketing website.',
    componentSourcePath: 'components/ui/button.tsx',
    fullSourceVariantKey: 'default',
    variants: [
        {
            key: 'outline',
            title: 'Outline Button',
            usageCode: `import { Button } from '@/components/ui/button'

<Button variant="outline">Outline</Button>`,
        },
        {
            key: 'secondary',
            title: 'Secondary Button',
            usageCode: `import { Button } from '@/components/ui/button'

<Button variant="secondary">Secondary</Button>`,
        },
        {
            key: 'destructive',
            title: 'Destructive Button',
            usageCode: `import { Button } from '@/components/ui/button'

<Button variant="destructive">Destructive</Button>`,
        },
        {
            key: 'ghost',
            title: 'Ghost Button',
            usageCode: `import { Button } from '@/components/ui/button'

<Button variant="ghost">Ghost</Button>`,
        },
        {
            key: 'link',
            title: 'Link Button',
            usageCode: `import { Button } from '@/components/ui/button'

<Button variant="link">Link</Button>`,
        },
    ],
}

/* -------------------------------------------------------------------------- */
/*                                    Badge                                   */
/* -------------------------------------------------------------------------- */

const badgeMeta: SnippetCategoryMeta = {
    slug: 'badge',
    label: 'Badge',
    description: 'Custom shadcn badges for your marketing website.',
    componentSourcePath: 'components/ui/badge.tsx',
    fullSourceVariantKey: 'hero',
    variants: [
        {
            key: 'default',
            title: 'Default Badge',
            usageCode: `import { Badge } from '@/components/ui/badge'

<Badge variant="default">
  <span className="text-sm font-normal">Default</span>
</Badge>`,
        },
    ],
}

/* -------------------------------------------------------------------------- */
/*                                    Input                                   */
/* -------------------------------------------------------------------------- */

const inputMeta: SnippetCategoryMeta = {
    slug: 'input',
    label: 'Input',
    description: 'Custom shadcn inputs for your marketing website.',
    componentSourcePath: 'components/ui/input.tsx',
    fullSourceVariantKey: 'default',
    variants: [
        {
            key: 'default',
            title: 'Default Input',
            usageCode: `import { Input } from '@/components/ui/input'

<Input type="email" placeholder="Email" />`,
        },
        {
            key: 'disabled',
            title: 'Disabled Input',
            usageCode: `import { Input } from '@/components/ui/input'

<Input placeholder="Disabled" disabled />`,
        },
        {
            key: 'file',
            title: 'File Input',
            usageCode: `import { Input } from '@/components/ui/input'

<Input type="file" />`,
        },
    ],
}

/* -------------------------------------------------------------------------- */
/*                                    Avatar                                  */
/* -------------------------------------------------------------------------- */

const avatarMeta: SnippetCategoryMeta = {
    slug: 'avatar',
    label: 'Avatar',
    description: 'Custom shadcn avatars for your marketing website.',
    componentSourcePath: 'components/ui/avatar.tsx',
    fullSourceVariantKey: 'image',
    variants: [
        {
            key: 'image',
            title: 'Avatar with Image',
            usageCode: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="/avatar.png" alt="User avatar" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        },
        {
            key: 'fallback',
            title: 'Avatar Fallback',
            usageCode: `import { Avatar, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
        },
    ],
}

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

const checkboxMeta: SnippetCategoryMeta = {
    slug: 'checkbox',
    label: 'Checkbox',
    description: 'Custom shadcn checkboxes for your marketing website.',
    componentSourcePath: 'components/ui/checkbox.tsx',
    fullSourceVariantKey: 'default',
    variants: [
        {
            key: 'default',
            title: 'Default Checkbox',
            usageCode: `import { Checkbox } from '@/components/ui/checkbox'

<Checkbox id="terms" />`,
        },
        {
            key: 'withLabel',
            title: 'Checkbox with Label',
            usageCode: `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex items-center gap-2">
  <Checkbox id="terms-2" defaultChecked />
  <Label htmlFor="terms-2">Accept terms</Label>
</div>`,
        },
        {
            key: 'disabled',
            title: 'Disabled Checkbox',
            usageCode: `import { Checkbox } from '@/components/ui/checkbox'

<Checkbox id="disabled" disabled />`,
        },
    ],
}

/* -------------------------------------------------------------------------- */
/*                                  Catalog                                   */
/* -------------------------------------------------------------------------- */

export const snippetCategoriesMeta: SnippetCategoryMeta[] = [buttonMeta, badgeMeta, inputMeta, avatarMeta, checkboxMeta]

export const snippetCategories = snippetCategoriesMeta.map((c) => c.slug)

export function getSnippetCategory(slug: string) {
    return snippetCategoriesMeta.find((c) => c.slug === slug)
}
