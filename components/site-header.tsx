'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

export const SiteHeader = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }

    return (
        <header className="border-b dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="mx-auto flex max-w-7xl justify-between px-6 py-4 lg:px-4">
                <div className="flex gap-6">
                    <Link
                        href="/"
                        className="flex w-fit items-center gap-2">
                        <Logo />
                        <span className="sr-only font-bold">ns UI</span>
                    </Link>

                    <div className="flex gap-1 items-center">
                        <Button asChild size="sm" variant="ghost" className={cn('text-foreground/75 rounded-full', isActive('/hero-section') && 'text-foreground')}>
                            <Link href="/hero-section" className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <div className="relative flex items-center">
                            <Button
                                asChild
                                size="sm"
                                variant="ghost"
                                className={cn('text-foreground/75 rounded-full', isActive('/snippets/button') && 'text-foreground')}>
                                <Link
                                    href="/snippets/button"
                                    className="!text-sm">
                                    Snippets
                                </Link>
                            </Button>
                            <span className="rounded-full border border-blue-300 bg-blue-200 px-1.5 py-px text-xs text-blue-900 dark:border-red-700 dark:bg-red-500/20 dark:text-red-50">New</span>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex items-center">
                    <Button
                        asChild
                        variant="link"
                        className="text-foreground decoration-primary gap-1">
                        <Link
                            href="https://github.com/KingTroy125/layered-blocks"
                            target="_blank"
                            className="text-sm">
                            GitHub
                            <ArrowUpRight className="!size-3.5 opacity-50" />
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
