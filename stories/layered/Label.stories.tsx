import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import { LayeredLabel } from '@/components/layered/label'
import { LayeredInput } from '@/components/layered/input'

const meta = {
  title: 'Layered/Label',
  component: LayeredLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '320px', padding: '24px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email Address',
  },
}

export const Required: Story = {
  args: {
    children: 'Password',
    required: true,
  },
}

export const Uppercase: Story = {
  args: {
    children: 'Section Header',
    uppercase: true,
  },
}

export const WithInput: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
      React.createElement(LayeredLabel, { required: true }, 'Username'),
      React.createElement(LayeredInput, { placeholder: '@username' })
    ),
}
