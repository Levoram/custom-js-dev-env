import js from '@eslint/js'
import typescriptEslint from 'typescript-eslint'

export default [
  // Global ignores (ESLint 9+ style)
  {
    ignores: ['dist/', 'node_modules/', 'coverage/', '*.min.js', '*.bundle.js'],
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.{js,ts}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
  },
]
