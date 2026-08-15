import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredSelect,
  LayeredSelectTrigger,
  LayeredSelectValue,
  LayeredSelectContent,
  LayeredSelectItem,
  LayeredSelectGroup,
  LayeredSelectLabel,
} from '@/components/layered/select'

const meta = {
  title: 'Layered/Select',
  component: LayeredSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { width: '280px', padding: '24px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredSelect,
      null,
      React.createElement(
        LayeredSelectTrigger,
        null,
        React.createElement(LayeredSelectValue, { placeholder: 'Select a theme' })
      ),
      React.createElement(
        LayeredSelectContent,
        null,
        React.createElement(
          LayeredSelectGroup,
          null,
          React.createElement(LayeredSelectLabel, null, 'Themes'),
          React.createElement(LayeredSelectItem, { value: 'light' }, 'Light Theme'),
          React.createElement(LayeredSelectItem, { value: 'dark' }, 'Dark Theme'),
          React.createElement(LayeredSelectItem, { value: 'system' }, 'System Default')
        )
      )
    ),
}
