import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredCarousel,
  LayeredCarouselContent,
  LayeredCarouselItem,
  LayeredCarouselPrevious,
  LayeredCarouselNext,
} from '@/components/layered/carousel'
import { LayeredCard, LayeredCardHeader, LayeredCardTitle, LayeredCardDescription } from '@/components/layered/card'

const meta = {
  title: 'Layered/Carousel',
  component: LayeredCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { padding: '48px', maxWidth: '600px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredCarousel,
      null,
      React.createElement(
        LayeredCarouselContent,
        null,
        [1, 2, 3, 4, 5].map((index) =>
          React.createElement(
            LayeredCarouselItem,
            { key: index },
            React.createElement(
              LayeredCard,
              { accentBorder: true },
              React.createElement(
                LayeredCardHeader,
                null,
                React.createElement(LayeredCardTitle, null, `Slide ${index}`),
                React.createElement(LayeredCardDescription, null, 'Interactive carousel slide item.')
              )
            )
          )
        )
      ),
      React.createElement(LayeredCarouselPrevious, null),
      React.createElement(LayeredCarouselNext, null)
    ),
}
