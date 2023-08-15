// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Header } from './components/header'
import { Dashboard } from './view/dashboard'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  )
}

export default App
