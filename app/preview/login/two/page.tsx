"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// ─── Easing ───────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: expo,
            staggerChildren: 0.08,
            delayChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, ease: expo }
    }
}

export default function LoginPage() {
    return (
        <section className="flex min-h-screen bg-background items-center justify-center px-4 py-16 md:py-32 overflow-hidden selection:bg-primary selection:text-white">
            <motion.div 
                className="w-full max-w-md"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Visual Accent - A slim vertical bar inspired by "Layered" UI */}
                <div className="flex flex-col rounded-[32px] border border-border/50 bg-secondary/10 backdrop-blur-md overflow-hidden p-1 shadow-xl">
                    <div className="bg-background rounded-[30px] border border-border/40 shadow-sm flex flex-col">
                        
                        {/* Top Accent Bar */}
                        <div className="h-1.5 w-32 bg-primary rounded-full mx-auto mt-4 opacity-20" />

                        <div className="p-8 md:p-12 flex flex-col gap-10">
                            
                            {/* Header Section */}
                            <motion.div variants={itemVariants} className="flex flex-col items-start gap-6">
                                <div className="size-14 flex items-center justify-center rounded-2xl bg-secondary/80 border border-border/60 shadow-inner group overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Logo className="size-8 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <h1 className="text-3xl font-normal leading-tight text-foreground tracking-tight">
                                        Sign in to Access
                                    </h1>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Enter your credentials to manage your workspace and team.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Login Form */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="space-y-2.5">
                                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider ml-1 text-foreground/60 transition-colors">
                                        Email or Username
                                    </Label>
                                    <Input 
                                        id="email" 
                                        placeholder="your@email.com" 
                                        type="email" 
                                        className="h-12 bg-secondary/5 border-border/40 focus:bg-background focus:border-primary/50 transition-all rounded-xl px-4 shadow-none"
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between ml-1">
                                        <Label htmlFor="password" title="password" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                                            Password
                                        </Label>
                                        <Link href="#" className="text-[11px] font-bold text-primary/80 hover:text-primary transition-all">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input 
                                        id="password" 
                                        placeholder="••••••••" 
                                        type="password" 
                                        className="h-12 bg-secondary/5 border-border/40 focus:bg-background focus:border-primary/50 transition-all rounded-xl px-4 shadow-none"
                                    />
                                </div>

                                <Button className="w-full h-13 rounded-2xl text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_8px_16px_-4px_rgba(var(--primary),0.2)] active:scale-[0.98] transition-all duration-300 mt-2 h-14 group">
                                    Continue to Workspace
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-2 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </motion.div>

                            {/* Divider with unique style */}
                            <motion.div variants={itemVariants} className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50"></div>
                                <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/30">Auth with</span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50"></div>
                            </motion.div>

                            {/* Social login buttons - Grid or Row */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 pb-2">
                                <Button variant="outline" className="h-12 rounded-xl bg-transparent border-border/60 hover:bg-muted/50 transition-all duration-300 gap-3 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 262" className="group-hover:scale-110 transition-transform">
                                        <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                        <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                        <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                                        <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                    </svg>
                                    <span className="text-xs font-bold">Google</span>
                                </Button>
                                <Button variant="outline" className="h-12 rounded-xl bg-transparent border-border/60 hover:bg-muted/50 transition-all duration-300 gap-3 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="group-hover:scale-110 transition-transform">
                                        <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>
                                        <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>
                                        <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path>
                                        <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>
                                    </svg>
                                    <span className="text-xs font-bold">Microsoft</span>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Bottom Link Section with distinct container */}
                        <div className="bg-secondary/10 border-t border-border/30 p-6 text-center">
                            <p className="text-xs text-muted-foreground font-medium">
                                New here?{" "}
                                <Link href="#" className="text-primary hover:text-primary/70 font-bold decoration-primary/40 underline-offset-4 transition-all">
                                    Create a free account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}