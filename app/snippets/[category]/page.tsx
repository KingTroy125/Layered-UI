import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import SnippetPreview from '@/components/SnippetPreview'
import { snippetRenderers } from '@/components/snippets/registry'
import { getComponentSource, getSnippetCategory, snippetCategories } from '@/data/snippets'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface PageProps {
    params: Promise<{ category: string }>
}

/* -------------------------------------------------------------------------- */
/*                              Static Generation                            */
/* -------------------------------------------------------------------------- */

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateStaticParams() {
    return snippetCategories.map((category) => ({
        category,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params
    const meta = getSnippetCategory(category)

    return {
        title: `Shadcn ${meta?.label ?? category} Snippets`,
        description: meta?.description,
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default async function SnippetCategoryPage({ params }: PageProps) {
    const { category } = await params
    const meta = getSnippetCategory(category)

    if (!meta) {
        notFound()
    }

    const componentCode = await getComponentSource(meta)
    const renderers = snippetRenderers[category] ?? {}

    return (
        <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
            {/* Full component (with lines/wrapper if the default render includes them) */}
            <div className="group">
                {renderers[meta.fullSourceVariantKey]}
                <div className={actionClasses}>
                    <SnippetPreview
                        description={`Complete ${meta.label} component - Copy and paste into components/ui/${category}.tsx`}
                        codeToCopy={componentCode}
                        displayedCode={componentCode}
                    />
                </div>
            </div>

            {/* ──────────────────────── Usage Snippets ──────────────────────── */}

            {meta.variants.map((variant) => (
                <div
                    className="group"
                    key={variant.key}>
                    {renderers[variant.key]}
                    <div className={actionClasses}>
                        <SnippetPreview
                            description={`${variant.title} - Usage snippet`}
                            codeToCopy={variant.usageCode}
                            displayedCode={variant.usageCode}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
    'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
