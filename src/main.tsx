// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppProvider from './contexts/App.Context'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       *  Mặc định, React Query sẽ tự động refetch dữ liệu khi người dùng chuyển tab rồi quay lại
       * nên phải tắt nó đi
       */
      refetchOnWindowFocus: false
    }
  }
})
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <App />
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
)
