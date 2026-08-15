import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'

import { LayeredButton } from '@/components/layered/button'
import { LayeredBadge } from '@/components/layered/badge'

const meta = {
  title: 'Layered/Button',
  component: LayeredButton,
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
            minHeight: '280px',
            padding: '32px',
          },
        },
        React.createElement(Story)
      ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof LayeredButton>

export default meta
type Story = StoryObj<typeof meta>

// --- Individual variants ---

export const Default: Story = {
  args: { variant: 'default', children: 'Get started' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Learn more' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'View docs' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Cancel' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete account' },
}

// --- Sizes ---

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
}

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
}

export const ExtraLarge: Story = {
  args: { size: 'xl', children: 'Extra Large' },
}

// --- All Variants Gallery ---

export const AllVariants: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' } },
      React.createElement(LayeredButton, { variant: 'default' }, 'Default'),
      React.createElement(LayeredButton, { variant: 'secondary' }, 'Secondary'),
      React.createElement(LayeredButton, { variant: 'outline' }, 'Outline'),
      React.createElement(LayeredButton, { variant: 'ghost' }, 'Ghost'),
      React.createElement(LayeredButton, { variant: 'destructive' }, 'Destructive')
    ),
}

// --- All Sizes Gallery ---

export const AllSizes: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' } },
      React.createElement(LayeredButton, { size: 'sm' }, 'Small'),
      React.createElement(LayeredButton, { size: 'default' }, 'Default'),
      React.createElement(LayeredButton, { size: 'lg' }, 'Large'),
      React.createElement(LayeredButton, { size: 'xl' }, 'Extra Large')
    ),
}

// --- Hero Section Composition ---

export const HeroSection: Story = {
  render: () =>
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '24px',
          maxWidth: '680px',
        },
      },
      React.createElement(LayeredBadge, { variant: 'hero', showLines: true }, 'Layered UI'),
      React.createElement(
        'h2',
        {
          style: {
            margin: 0,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: '-0.025em',
          },
        },
        'Build your next project faster with Layered'
      ),
      React.createElement(
        'p',
        {
          style: {
            margin: 0,
            maxWidth: '560px',
            color: '#6b7280',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          },
        },
        'Beautiful, accessible, and customizable components designed to work together seamlessly.'
      ),
      React.createElement(
        'div',
        { style: { display: 'flex', gap: '12px' } },
        React.createElement(LayeredButton, { size: 'lg' }, 'Get started'),
        React.createElement(LayeredButton, { variant: 'outline', size: 'lg' }, 'View docs')
      )
    ),
}
