// Utilities
import { createPinia } from 'pinia'

// Create and export the Pinia store
const pinia = createPinia()

export default pinia

// Re-export store modules
export * from './app'
export * from './theme'
export * from './projects'
export * from './home'
export * from './pricing'
export * from './about'
