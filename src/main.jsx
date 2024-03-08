import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from './SignIn.jsx'
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
    path: "/signin",
    element: (
      <SignIn/>
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
