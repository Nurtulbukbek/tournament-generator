import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Opros from './Opros.jsx'





const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/opros',
        element: <Opros />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )