import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import { LayeredCheckbox } from '@/components/layered/checkbox'

const meta = {
  title: 'Layered/Checkbox',
  component: LayeredCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { padding: '32px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Enable notifications',
    description: 'Receive real-time email updates when changes occur.',
  },
}

export const Standalone: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Unavailable option',
    description: 'This feature is currently locked.',
  },
}
