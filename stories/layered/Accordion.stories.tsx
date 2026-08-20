import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredAccordion,
  LayeredAccordionItem,
  LayeredAccordionTrigger,
  LayeredAccordionContent,
} from '@/components/layered/accordion'

const meta = {
  title: 'Layered/Accordion',
  component: LayeredAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '450px', padding: '24px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredAccordion>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredAccordion,
      { type: 'single', collapsible: true, defaultValue: 'item-1' },
      React.createElement(
        LayeredAccordionItem,
        { value: 'item-1' },
        React.createElement(LayeredAccordionTrigger, null, 'What is Layered UI?'),
        React.createElement(
          LayeredAccordionContent,
          null,
          'Layered UI is a modern design system and component library built on top of Radix primitives and Tailwind CSS.'
        )
      ),
      React.createElement(
        LayeredAccordionItem,
        { value: 'item-2' },
        React.createElement(LayeredAccordionTrigger, null, 'Is it customizable?'),
        React.createElement(
          LayeredAccordionContent,
          null,
          'Yes! Every component is styled using Tailwind classes and can be customized with your own design tokens.'
        )
      ),
      React.createElement(
        LayeredAccordionItem,
        { value: 'item-3' },
        React.createElement(LayeredAccordionTrigger, null, 'Does it support dark mode?'),
        React.createElement(
          LayeredAccordionContent,
          null,
          'Full dark mode support is baked in with smooth transitions and curated color palettes.'
        )
      )
    ),
}
