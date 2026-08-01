import { Metadata } from 'next'

import SnippetPreview from '@/components/SnippetPreview'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Carousel Snippets',
  description: 'Custom shadcn carousel components for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function CarouselPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* Full Carousel Component */}
      <div className="group">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Carousel component - Copy and paste into components/ui/carousel.tsx"
            codeToCopy={carouselComponentCode}
            displayedCode={carouselComponentCode}
          />
        </div>
      </div>

      {/* Basic Carousel */}
      <div className="group">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className={actionClasses}>
          <SnippetPreview
            description="Basic Carousel - Usage snippet"
            codeToCopy={basicCarouselUsageCode}
            displayedCode={basicCarouselUsageCode}
          />
        </div>
      </div>

      {/* Carousel with Basis */}
      <div className="group">
        <Carousel className="w-full max-w-xs">
          <CarouselContent className="-ml-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className={actionClasses}>
          <SnippetPreview
            description="Carousel with Multiple Items - Usage snippet"
            codeToCopy={carouselBasisUsageCode}
            displayedCode={carouselBasisUsageCode}
          />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                          Carousel Usage Snippets                            */
/* -------------------------------------------------------------------------- */

const basicCarouselUsageCode = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`

const carouselBasisUsageCode = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

<Carousel className="w-full max-w-xs">
  <CarouselContent className="-ml-2">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pl-2 basis-1/2">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-4">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`

/* -------------------------------------------------------------------------- */
/*                          Carousel Component Code                            */
/* -------------------------------------------------------------------------- */

const carouselComponentCode = `"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

// Full component code - see shadcn/ui carousel docs for the complete source
export { type CarouselApi, useCarousel }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
