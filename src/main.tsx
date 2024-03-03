import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import GlobalStyle from './styles/global-style.tsx'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  < React.StrictMode >
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode >
)
