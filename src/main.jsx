import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound'
import Books from './components/Books'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children:[
      {
        path: '/',
        element: <Books />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
