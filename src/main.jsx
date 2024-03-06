import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Authentication from './Authentication.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>

      </>
    ),
  },
  {
    path: "/auth",
    element: (
      <Authentication/>
    )
  },
  {
    path: "calendar",
    element: (
      <>

      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
