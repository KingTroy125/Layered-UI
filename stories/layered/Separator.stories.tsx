import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import { LayeredSeparator } from '@/components/layered/separator'

const meta = {
  title: 'Layered/Separator',
  component: LayeredSeparator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '400px', padding: '32px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement('div', { style: { fontSize: '0.9rem', fontWeight: 500 } }, 'Layered UI Design System'),
      React.createElement(LayeredSeparator, { variant: 'default' }),
      React.createElement('div', { style: { fontSize: '0.85rem', color: '#6b7280' } }, 'An elegant collection of reusable components.')
    ),
}

export const GradientVariant: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement('div', { style: { fontSize: '0.9rem', fontWeight: 500 } }, 'Section Header'),
      React.createElement(LayeredSeparator, { variant: 'gradient' }),
      React.createElement('div', { style: { fontSize: '0.85rem', color: '#6b7280' } }, 'Faded gradient divider edge.')
    ),
}

export const Vertical: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', height: '24px', alignItems: 'center', gap: '16px', fontSize: '0.85rem' } },
      React.createElement('span', null, 'Docs'),
      React.createElement(LayeredSeparator, { orientation: 'vertical', variant: 'default' }),
      React.createElement('span', null, 'Components'),
      React.createElement(LayeredSeparator, { orientation: 'vertical', variant: 'default' }),
      React.createElement('span', null, 'Blog')
    ),
}
