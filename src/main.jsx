import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import router from './Router/Routes'

import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './app/store'
import SwipeProvider from './Provider/SwipeProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>

    <SwipeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.StrictMode>
            <RouterProvider router={router} />
            <Toaster />
          </React.StrictMode>
        </Provider>
      </QueryClientProvider>
    </SwipeProvider>

  </AuthProvider>
)
