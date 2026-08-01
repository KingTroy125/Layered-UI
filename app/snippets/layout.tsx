import type { Block } from '@/data/blocks'
import { snippetCategories } from '@/data/snippets'
import CategoryNavigation from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function SnippetsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SiteHeader />
            <CategoryNavigation
                currentKitFullName="default"
                currentKitShortName="default"
                basePath="/snippets"
                allCategories={snippetCategories}
                blocks={snippetCategories.map((category) => ({
                    slug: category,
                    title: category,
                    category,
                    preview: `/snippets/${category}`,
                })) as Block[]}
            />
            <main className="mb-12 lg:mb-16">{children}</main>

            <SiteFooter />
        </>
    )
}
