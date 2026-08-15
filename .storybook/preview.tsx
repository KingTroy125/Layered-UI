import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'

import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0b' },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    (Story, context) => {
      const bg = context.globals?.backgrounds?.value ?? context.parameters?.backgrounds?.default
      const isDark = bg === '#0a0a0b' || bg === 'dark'

      return React.createElement(
        'div',
        { className: isDark ? 'dark' : '', style: { minHeight: '100%' } },
        React.createElement(Story)
      )
    },
  ],
}

export default preview