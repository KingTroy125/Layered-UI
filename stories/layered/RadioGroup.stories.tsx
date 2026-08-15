import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredRadioGroup,
  LayeredRadioGroupItem,
} from '@/components/layered/radio-group'

const meta = {
  title: 'Layered/RadioGroup',
  component: LayeredRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '400px', padding: '24px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredRadioGroup,
      { defaultValue: 'comfortable' },
      React.createElement(LayeredRadioGroupItem, {
        value: 'compact',
        label: 'Compact Density',
        description: 'Tighter row height for dense data views.',
      }),
      React.createElement(LayeredRadioGroupItem, {
        value: 'comfortable',
        label: 'Comfortable Density',
        description: 'Standard padding and balanced readability.',
      }),
      React.createElement(LayeredRadioGroupItem, {
        value: 'spacious',
        label: 'Spacious Density',
        description: 'Generous whitespace for touch devices.',
      })
    ),
}

export const CardVariant: Story = {
  render: () =>
    React.createElement(
      LayeredRadioGroup,
      { defaultValue: 'pro' },
      React.createElement(LayeredRadioGroupItem, {
        value: 'free',
        card: true,
        label: 'Free Plan',
        description: 'Ideal for hobbyists and side projects. $0/mo',
      }),
      React.createElement(LayeredRadioGroupItem, {
        value: 'pro',
        card: true,
        label: 'Pro Plan',
        description: 'Advanced analytics, custom domains, and support. $19/mo',
      }),
      React.createElement(LayeredRadioGroupItem, {
        value: 'enterprise',
        card: true,
        label: 'Enterprise Plan',
        description: 'Dedicated infrastructure and SLA guarantees.',
      })
    ),
}
