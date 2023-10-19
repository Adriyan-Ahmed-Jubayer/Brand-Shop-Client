import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Register from "./Components/Auth Pages/Register Page/Register";
import Login from "./Components/Auth Pages/Login Page/Login";
import AuthProvider from "./Providers/Auth/AuthProvider";
import Error from "./Components/Error Page/Error/Error";
import Home from "./Components/Home Page/Home/Home";
import ReactDOM from 'react-dom/client'
import Root from "./Root/Root";
import React from 'react'
import './index.css'
import Add from "./Components/AP Page/ADD/Add";
import Protection from "./Components/Protection Page/Protection/Protection";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/add-product',
        element: <Protection><Add></Add></Protection>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
