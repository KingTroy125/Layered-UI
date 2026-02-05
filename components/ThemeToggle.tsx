'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" className="size-8 rounded-full">
            {mounted && (theme === 'dark' ? <Sun /> : <Moon />)}
        </Button>
    )
}
