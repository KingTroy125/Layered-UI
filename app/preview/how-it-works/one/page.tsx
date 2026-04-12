"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Logo } from "@/components/logo"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// ─── Easing ───────────────────────────────────────────────────────────────────
// Strong expo ease-out — starts fast, feels immediately responsive.
const expo = [0.16, 1, 0.3, 1] as const

// ─── Variants ─────────────────────────────────────────────────────────────────

// Badge row lines: scaleX reveal from origin point.
const lineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.7, ease: expo, delay: 0.1 },
    },
}

// Badge pill: translateY + opacity only.
const badgeVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: expo },
    },
}

// Heading: translateY + opacity.
const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: expo, delay: 0.15 },
    },
}

// Description: cascades just after heading.
const descVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: expo, delay: 0.25 },
    },
}

// Step cards group: stagger cascade.
const stepsGroupVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
}

// Card entrance: scale(0.95) + opacity.
const stepCardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: expo },
    },
}

// Right panel: slides up slightly after cards begin.
const panelVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: expo, delay: 0.15 },
    },
}

// Reduced-motion: opacity only, no movement.
const fadeOnly = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
}

const fadeOnlyGroup = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
}

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
    {
        title: "Choose your role",
        description: "Select whether you're joining as an employee or team manager",
    },
    {
        title: "Set up your profile",
        description: "Add your details and preferences so your team knows who you are",
    },
    {
        title: "Sync your workspace",
        description: "Connect your tools and get straight into working with your team",
    },
]

// ─── HowItWorksSection ────────────────────────────────────────────────────────

export default function HowItWorksSection() {
    const shouldReduceMotion = useReducedMotion()

    const line = shouldReduceMotion ? fadeOnly : lineVariant
    const badge = shouldReduceMotion ? fadeOnly : badgeVariant
    const heading = shouldReduceMotion ? fadeOnly : headingVariant
    const desc = shouldReduceMotion ? fadeOnly : descVariant
    const stepsGrp = shouldReduceMotion ? fadeOnlyGroup : stepsGroupVariant
    const stepCard = shouldReduceMotion ? fadeOnly : stepCardVariant
    const rightPanel = shouldReduceMotion ? fadeOnly : panelVariant

    return (
        <section className="w-full bg-background py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 sm:gap-14 md:gap-16">

                {/* ── Header ─────────────────────────────────────────────────────── */}
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full text-center">

                    {/* Badge row */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <motion.div
                            className="flex items-center origin-right"
                            variants={line}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <div className="w-12 sm:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        </motion.div>

                        <motion.div
                            variants={badge}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <Badge variant="hero">
                                <span className="text-sm font-normal">How it works</span>
                            </Badge>
                        </motion.div>

                        <motion.div
                            className="flex items-center origin-left"
                            variants={line}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <div className="w-12 sm:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4 text-balance"
                        variants={heading}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        Start fast, join your team easier
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="max-w-xl text-sm sm:text-base font-normal leading-relaxed text-muted-foreground px-4"
                        variants={desc}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        Set up your profile in minutes and sync with your workspace.
                        <br className="hidden sm:block" />
                        No friction, no confusion — just flow.
                    </motion.p>
                </div>

                {/* ── Two-column layout ──────────────────────────────────────────── */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

                    {/* Left — step cards inside a themed container */}
                    <motion.div
                        className="w-full p-2 bg-secondary/50 rounded-[28px] border border-border/50 flex flex-col gap-2"
                        variants={stepsGrp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.title}
                                variants={stepCard}
                                style={{ willChange: "transform, opacity" }}
                                className="w-full bg-background rounded-[22px] px-8 py-8 border border-border/40 flex flex-col gap-4 shadow-sm"
                            >
                                <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary/80 border border-border/60">
                                    <Logo className="size-8 text-primary" />
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-lg font-medium text-foreground leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm font-normal text-muted-foreground leading-relaxed max-w-[320px]">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right — Phone Mockup Panel */}
                    <motion.div
                        variants={rightPanel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        style={{ willChange: "transform, opacity" }}
                        className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] bg-secondary/30 border border-border/50 rounded-[28px] lg:self-stretch overflow-hidden group"
                    >
                        <Image
                            src="/assets/phone.png"
                            alt="Mockup Preview"
                            fill
                            className="object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
                            priority
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </motion.div>

                </div>

            </div>
        </section>
    )
}
