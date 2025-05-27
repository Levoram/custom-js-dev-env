// Global test setup for Vitest
import { beforeEach } from 'vitest'

// Setup DOM environment
beforeEach(() => {
  // Reset DOM state between tests
  document.body.innerHTML = ''
})

// Global test utilities can be added here
