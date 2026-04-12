"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

/**
 * Easing - Strong expo ease-out.
 */
const expo = [0.16, 1, 0.3, 1] as const

/**
 * Entrance variants for staggered children.
 */
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: expo,
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: expo }
    }
}

export default function LoginPage() {
    return (
        <section className="flex min-h-screen bg-background items-center justify-center px-4 py-16 md:py-32 overflow-hidden">
            <motion.div
                className="w-full max-w-md relative"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Decorative background glow */}
                <div className="absolute -top-32 -left-32 size-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
                <div className="absolute -bottom-32 -right-32 size-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

                <div className="relative flex flex-col rounded-[32px] border border-border/50 bg-secondary/20 backdrop-blur-xl overflow-hidden p-1 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.1)]">
                    <div className="bg-background rounded-[30px] p-8 md:p-12 border border-border/40 shadow-sm flex flex-col gap-10">

                        {/* Header Section */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 flex items-center justify-center rounded-2xl bg-secondary/80 border border-border/60 shadow-inner group transition-colors duration-500 hover:bg-secondary">
                                    <Logo className="size-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-normal leading-tight text-foreground tracking-tight">
                                    Welcome back
                                </h1>
                                <p className="text-sm text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                                    Sign in to your account to continue building amazing interfaces
                                </p>
                            </div>
                        </motion.div>

                        {/* Form & Actions */}
                        <div className="flex flex-col gap-8">
                            {/* Social login buttons */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="h-12 rounded-xl bg-background/50 border-border/60 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 262">
                                        <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                        <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                        <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                                        <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                    </svg>
                                    <span className="text-xs font-semibold">Google</span>
                                </Button>
                                <Button variant="outline" className="h-12 rounded-xl bg-background/50 border-border/60 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256">
                                        <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>
                                        <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>
                                        <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path>
                                        <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>
                                    </svg>
                                    <span className="text-xs font-semibold">Microsoft</span>
                                </Button>
                            </motion.div>

                            {/* Divider */}
                            <motion.div variants={itemVariants} className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border/40"></div>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold">
                                    <span className="bg-background px-4 text-muted-foreground/50 italic">or account</span>
                                </div>
                            </motion.div>

                            {/* Login Form */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="space-y-2.5 group">
                                    <Label htmlFor="email" className="text-xs font-semibold ml-1 text-foreground/70 transition-colors group-focus-within:text-primary">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoComplete="email"
                                        className="h-12 bg-secondary/10 border-border/50 focus:bg-background transition-all rounded-xl px-4"
                                    />
                                </div>
                                <div className="space-y-2.5 group">
                                    <div className="flex items-center justify-between ml-1">
                                        <Label htmlFor="password" title="password" className="text-xs font-semibold text-foreground/70 transition-colors group-focus-within:text-primary">
                                            Password
                                        </Label>
                                        <Link href="#" className="text-[11px] font-bold text-primary hover:text-primary/70 transition-all">
                                            Forgot?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        placeholder="••••••••"
                                        type="password"
                                        autoComplete="current-password"
                                        className="h-12 bg-secondary/10 border-border/50 focus:bg-background transition-all rounded-xl px-4"
                                    />
                                </div>

                                <Button className="w-full h-12 rounded-xl text-sm font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 mt-4 h-13 group">
                                    Sign in to Layered UI
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-1 transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </motion.div>

                            {/* Footer Link */}
                            <motion.div variants={itemVariants} className="mt-2 text-center">
                                <p className="text-[13px] text-muted-foreground font-medium">
                                    Need an account?{" "}
                                    <Link href="#" className="text-primary hover:underline font-bold decoration-primary/40 underline-offset-8">
                                        Create one for free
                                    </Link>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}