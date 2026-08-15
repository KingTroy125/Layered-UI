import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredDialog,
  LayeredDialogTrigger,
  LayeredDialogContent,
  LayeredDialogHeader,
  LayeredDialogTitle,
  LayeredDialogDescription,
  LayeredDialogFooter,
  LayeredDialogClose,
} from '@/components/layered/dialog'
import { LayeredButton } from '@/components/layered/button'
import { LayeredInput } from '@/components/layered/input'
import { LayeredLabel } from '@/components/layered/label'

const meta = {
  title: 'Layered/Dialog',
  component: LayeredDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { style: { padding: '48px' } },
        React.createElement(Story)
      ),
  ],
} satisfies Meta<typeof LayeredDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredDialog,
      null,
      React.createElement(
        LayeredDialogTrigger,
        { asChild: true },
        React.createElement(LayeredButton, null, 'Edit Profile')
      ),
      React.createElement(
        LayeredDialogContent,
        null,
        React.createElement(
          LayeredDialogHeader,
          null,
          React.createElement(LayeredDialogTitle, null, 'Edit Profile'),
          React.createElement(
            LayeredDialogDescription,
            null,
            'Make changes to your profile here. Click save when you are done.'
          )
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px', margin: '16px 0' } },
          React.createElement(
            'div',
            { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
            React.createElement(LayeredLabel, null, 'Name'),
            React.createElement(LayeredInput, { defaultValue: 'Jane Doe' })
          ),
          React.createElement(
            'div',
            { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
            React.createElement(LayeredLabel, null, 'Email'),
            React.createElement(LayeredInput, { defaultValue: 'jane@example.com' })
          )
        ),
        React.createElement(
          LayeredDialogFooter,
          null,
          React.createElement(
            LayeredDialogClose,
            { asChild: true },
            React.createElement(LayeredButton, { variant: 'outline' }, 'Cancel')
          ),
          React.createElement(LayeredButton, null, 'Save Changes')
        )
      )
    ),
}
