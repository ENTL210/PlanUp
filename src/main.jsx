import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
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
      <Signin/>
    )
  },
  {
    path: "/signup",
    element: (
      <Signup/>
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
