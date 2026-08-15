import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'

import {
  LayeredCard,
  LayeredCardHeader,
  LayeredCardTitle,
  LayeredCardDescription,
  LayeredCardContent,
  LayeredCardFooter,
} from '@/components/layered/card'
import { LayeredButton } from '@/components/layered/button'
import { LayeredBadge } from '@/components/layered/badge'

const meta = {
  title: 'Layered/Card',
  component: LayeredCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '32px',
          },
        },
        React.createElement(Story)
      ),
  ],
  argTypes: {
    accentBorder: {
      control: 'boolean',
      description: 'Show gradient border accent on hover',
    },
  },
  args: {
    accentBorder: false,
  },
} satisfies Meta<typeof LayeredCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) =>
    React.createElement(
      LayeredCard,
      { ...args, style: { width: '380px' } },
      React.createElement(
        LayeredCardHeader,
        null,
        React.createElement(LayeredCardTitle, null, 'Beautiful Components'),
        React.createElement(
          LayeredCardDescription,
          null,
          'Pre-built, accessible components with the Layered UI design language.'
        )
      ),
      React.createElement(
        LayeredCardContent,
        null,
        React.createElement(
          'p',
          { style: { fontSize: '0.9rem', lineHeight: 1.7, color: '#6b7280', margin: 0 } },
          'Every component is designed to work together seamlessly. Consistent border radius, spacing, colors, and animations across your entire application.'
        )
      ),
      React.createElement(
        LayeredCardFooter,
        null,
        React.createElement(LayeredButton, { size: 'sm' }, 'Learn more')
      )
    ),
}

export const WithAccentBorder: Story = {
  args: { accentBorder: true },
  render: (args) =>
    React.createElement(
      LayeredCard,
      { ...args, style: { width: '380px' } },
      React.createElement(
        LayeredCardHeader,
        null,
        React.createElement(LayeredCardTitle, null, 'Accent Border'),
        React.createElement(
          LayeredCardDescription,
          null,
          'Cards can have a subtle gradient border accent.'
        )
      ),
      React.createElement(
        LayeredCardContent,
        null,
        React.createElement(
          'p',
          { style: { fontSize: '0.9rem', lineHeight: 1.7, color: '#6b7280', margin: 0 } },
          'The gradient fades from the top edge, creating a subtle premium feel that distinguishes important content areas.'
        )
      )
    ),
}

// --- Card Grid ---

export const CardGrid: Story = {
  render: () =>
    React.createElement(
      'div',
      {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '900px',
        },
      },
      ...[
        { title: 'Design System', desc: 'Consistent tokens, spacing, and colors.', badge: 'Core' },
        { title: 'Accessibility', desc: 'WCAG-compliant keyboard and screen reader support.', badge: 'A11y' },
        { title: 'Animations', desc: 'Smooth, performant transitions throughout.', badge: 'Motion' },
      ].map((item, i) =>
        React.createElement(
          LayeredCard,
          { key: i, accentBorder: true },
          React.createElement(
            LayeredCardHeader,
            null,
            React.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' } },
              React.createElement(LayeredBadge, { variant: 'outline' }, item.badge)
            ),
            React.createElement(LayeredCardTitle, null, item.title),
            React.createElement(LayeredCardDescription, null, item.desc)
          ),
          React.createElement(
            LayeredCardFooter,
            null,
            React.createElement(LayeredButton, { variant: 'ghost', size: 'sm' }, 'Read more →')
          )
        )
      )
    ),
}
