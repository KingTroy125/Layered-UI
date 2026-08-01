import { redirect } from 'next/navigation'

import { snippetCategories } from '@/data/snippets'

export default function SnippetsIndexPage() {
    redirect(`/snippets/${snippetCategories[0]}`)
}
