import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const normalizeConfig = (config) => {
    const normalized = config?.default ?? config

    if (Array.isArray(normalized)) {
        return normalized
    }

    if (normalized && typeof normalized === 'object') {
        const legacyKeys = [
            'extends',
            'plugins',
            'parser',
            'parserOptions',
            'env',
            'overrides',
            'settings',
            'globals',
        ]

        if (legacyKeys.some((key) => key in normalized)) {
            return compat.config(normalized)
        }
    }

    return normalized ? [normalized] : []
}

const nextCoreWebVitalsConfig = require('eslint-config-next/core-web-vitals')
const nextTypescriptConfig = require('eslint-config-next/typescript')

const eslintConfig = [
    ...normalizeConfig(nextCoreWebVitalsConfig),
    ...normalizeConfig(nextTypescriptConfig),
    {
        rules: {
            'react/no-unescaped-entities': 'off',
            '@next/next/no-page-custom-font': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@next/next/no-img-element': 'warn',
            '@next/next/no-html-link-for-pages': 'warn',
        },
    },
]

export default eslintConfig
