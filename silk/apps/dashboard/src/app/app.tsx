// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import styles from './app.module.css'

import { Dashboard } from './view/dashboard'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
}

export default App
