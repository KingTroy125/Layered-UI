"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
}

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8"
            variants={containerVariants}
          >
            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div variants={badgeVariants}>
              <Badge variant="hero" className="group">
                <span className="text-xs sm:text-sm font-normal">Join us</span>
              </Badge>
            </motion.div>

            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground max-w-4xl mb-4 sm:mb-5 md:mb-6 px-4"
            variants={headingVariants}
          >
            Marketing That
            <br />
            Adapts In <span className="text-primary">Real Time</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-2xl text-muted-foreground text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-6 sm:mb-7 md:mb-8 px-4"
            variants={descriptionVariants}
          >
            Modula creates, tests, and personalizes campaigns automatically, 
            learning from every click and conversion
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-3" variants={buttonVariants}>
            <Button
              size="lg"
              variant="default"
              className="bg-foreground text-background hover:bg-foreground/90 font-medium rounded-3xl sm:rounded-4xl text-sm sm:text-base px-6 sm:px-8"
            >
              Start free trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/10 bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/20 font-medium rounded-3xl sm:rounded-4xl text-sm sm:text-base px-6 sm:px-8"
            >
              Get started
            </Button>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full max-w-5xl px-2" variants={imageVariants}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/30">
              <img 
                src="https://opencal-nextjs.vercel.app/12.png" 
                alt="Dashboard preview" 
                className="w-full h-auto object-cover mix-blend-normal dark:mix-blend-luminosity dark:opacity-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}