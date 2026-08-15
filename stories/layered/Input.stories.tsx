import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import { LayeredInput } from '@/components/layered/input'
import { Search, Mail, Lock } from 'lucide-react'

const meta = {
  title: 'Layered/Input',
  component: LayeredInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '380px', padding: '24px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
  },
}

export const PillWithIcon: Story = {
  args: {
    placeholder: 'Search components...',
    leftIcon: React.createElement(Search, { className: 'size-4' }),
    inputShape: 'pill',
  },
}

export const RoundedWithIcon: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    leftIcon: React.createElement(Lock, { className: 'size-4' }),
    inputShape: 'rounded',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    leftIcon: React.createElement(Mail, { className: 'size-4' }),
  },
}
