import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import * as React from 'react'
import {
  LayeredAvatar,
  LayeredAvatarImage,
  LayeredAvatarFallback,
  LayeredAvatarGroup,
} from '@/components/layered/avatar'

const meta = {
  title: 'Layered/Avatar',
  component: LayeredAvatar,
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
} satisfies Meta<typeof LayeredAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () =>
    React.createElement(
      LayeredAvatar,
      null,
      React.createElement(LayeredAvatarImage, { src: 'https://github.com/shadcn.png', alt: 'Avatar' }),
      React.createElement(LayeredAvatarFallback, null, 'CN')
    ),
}

export const WithStatus: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
      React.createElement(
        LayeredAvatar,
        { status: 'online' },
        React.createElement(LayeredAvatarFallback, null, 'ON')
      ),
      React.createElement(
        LayeredAvatar,
        { status: 'busy' },
        React.createElement(LayeredAvatarFallback, null, 'BY')
      ),
      React.createElement(
        LayeredAvatar,
        { status: 'offline' },
        React.createElement(LayeredAvatarFallback, null, 'OFF')
      )
    ),
}

export const Sizes: Story = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
      React.createElement(
        LayeredAvatar,
        { size: 'sm' },
        React.createElement(LayeredAvatarFallback, null, 'SM')
      ),
      React.createElement(
        LayeredAvatar,
        { size: 'default' },
        React.createElement(LayeredAvatarFallback, null, 'DF')
      ),
      React.createElement(
        LayeredAvatar,
        { size: 'lg' },
        React.createElement(LayeredAvatarFallback, null, 'LG')
      ),
      React.createElement(
        LayeredAvatar,
        { size: 'xl' },
        React.createElement(LayeredAvatarFallback, null, 'XL')
      )
    ),
}

export const AvatarGroup: Story = {
  render: () =>
    React.createElement(
      LayeredAvatarGroup,
      null,
      React.createElement(
        LayeredAvatar,
        null,
        React.createElement(LayeredAvatarFallback, null, 'JD')
      ),
      React.createElement(
        LayeredAvatar,
        null,
        React.createElement(LayeredAvatarFallback, null, 'AS')
      ),
      React.createElement(
        LayeredAvatar,
        null,
        React.createElement(LayeredAvatarFallback, null, 'MK')
      ),
      React.createElement(
        LayeredAvatar,
        null,
        React.createElement(LayeredAvatarFallback, null, '+3')
      )
    ),
}
