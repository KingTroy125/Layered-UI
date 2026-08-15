import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'

import { LayeredBadge } from '@/components/layered/badge'

const meta = {
  title: 'Layered/Badge',
  component: LayeredBadge,
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
            minHeight: '220px',
            padding: '24px',
          },
        },
        React.createElement(Story)
      ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'hero'],
      description: 'Visual style variant',
    },
    showLines: {
      control: 'boolean',
      description: 'Show decorative gradient lines',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
} satisfies Meta<typeof LayeredBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default', children: 'Layered UI' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Beta' },
}

export const Hero: Story = {
  args: { variant: 'hero', children: 'Layered UI' },
}

export const HeroWithLines: Story = {
  args: {
    variant: 'hero',
    showLines: true,
    children: 'Layered UI',
  },
}

// --- All Variants Gallery ---

export const AllVariants: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' } },
      React.createElement(LayeredBadge, { variant: 'default' }, 'Default'),
      React.createElement(LayeredBadge, { variant: 'outline' }, 'Outline'),
      React.createElement(LayeredBadge, { variant: 'hero' }, 'Hero')
    ),
}

// --- Hero Showcase ---

export const HeroShowcase: Story = {
  render: () =>
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        },
      },
      React.createElement(
        LayeredBadge,
        { variant: 'hero', showLines: true },
        '✨ New Release'
      ),
      React.createElement(
        'p',
        { style: { margin: 0, color: '#6b7280', fontSize: '0.9rem' } },
        'Hero badges with decorative lines — perfect for section headers.'
      )
    ),
}
