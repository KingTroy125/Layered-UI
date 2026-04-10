import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import ServiceWorkerInit from '@/components/ServiceWorkerInit'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Layered UI for Shadcn UI',
    description: 'A collection of components and utilities for building layered interfaces with Shadcn UI.',
    openGraph: {
        images: ['https://raw.githubusercontent.com/Layered-UI/Layered-UI/main/public/LayeredUI.png'],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['https://raw.githubusercontent.com/Layered-UI/Layered-UI/main/public/LayeredUI.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`} suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <ServiceWorkerInit />
                <Analytics />
                <SpeedInsights />
            </body>
            <GoogleAnalytics gaId="G-6KY6TLKXKY" />
        </html>
    )
}
