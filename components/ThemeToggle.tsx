'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon } from '@/components/animation-logos/moon-icon'
import { SunIcon } from '@/components/animation-logos/sun-icon'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="ghost"
            className="size-8 rounded-full"
        >
            {mounted && (
                theme === 'dark'
                    ? <SunIcon size={20} />
                    : <MoonIcon size={20} />
            )}
        </Button>
    )
}