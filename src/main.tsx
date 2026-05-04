import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>
)
